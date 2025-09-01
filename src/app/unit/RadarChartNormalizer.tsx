import { CalculatedStats, getUnitData, calculateUnitStats } from './types';

export interface UnitRadarData {
  hp: number;
  attackPower: number;
  dps: number;
  range: number;
  cost: number;
  recharge: number;
  foreswing: number;
  attackFrequency: number;
  speed: number;
  kb: number;
}

export interface NormalizedUnitRadarData extends UnitRadarData {
  unitId: number;
  formId: number;
  level: number;
}

export interface NormalizationStats {
  median: number;
  mad: number;
}

export interface RadarChartNormalizationData {
  normalizationStats: {
    hp: NormalizationStats;
    attackPower: NormalizationStats;
    dps: NormalizationStats;
    range: NormalizationStats;
    cost: NormalizationStats;
    recharge: NormalizationStats;
    foreswing: NormalizationStats;
    attackFrequency: NormalizationStats;
    speed: NormalizationStats;
    kb: NormalizationStats;
  };
  allUnitsData: NormalizedUnitRadarData[];
}

class LRUCache<K, V> {
  private cache = new Map<K, V>();
  private readonly maxSize: number;

  constructor(maxSize: number = 100) {
    this.maxSize = maxSize;
  }

  get(key: K): V | undefined {
    const value = this.cache.get(key);
    if (value !== undefined) {
      this.cache.delete(key);
      this.cache.set(key, value);
    }
    return value;
  }

  set(key: K, value: V): void {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.maxSize) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
    this.cache.set(key, value);
  }

  clear(): void {
    this.cache.clear();
  }

  getKeys(): K[] {
    return Array.from(this.cache.keys());
  }

  delete(key: K): boolean {
    return this.cache.delete(key);
  }
}

export class RadarChartNormalizer {
  private cache = new LRUCache<string, RadarChartNormalizationData>(2);
  private static instance: RadarChartNormalizer;

  private constructor() {}

  public static getInstance(): RadarChartNormalizer {
    if (!RadarChartNormalizer.instance) {
      RadarChartNormalizer.instance = new RadarChartNormalizer();
    }
    return RadarChartNormalizer.instance;
  }

  private calculateMedian(values: number[]): number {
    const sorted = [...values].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    
    if (sorted.length % 2 === 0) {
      return (sorted[mid - 1] + sorted[mid]) / 2;
    } else {
      return sorted[mid];
    }
  }

  private calculateMAD(values: number[], median: number): number {
    const deviations = values.map(value => Math.abs(value - median));
    const madValue = this.calculateMedian(deviations);
    return madValue === 0 ? 1 : madValue;
  }

  private robustZScore(value: number, median: number, mad: number): number {
    return (value - median) / mad;
  }

  private extractRadarData(stats: CalculatedStats): UnitRadarData {
    return {
      hp: stats.hp,
      attackPower: stats.ap,
      dps: stats.dps,
      range: stats.range,
      cost: stats.cost,
      recharge: stats.recharge,
      foreswing: stats.foreswing,
      attackFrequency: stats.freq,
      speed: stats.speed,
      kb: stats.kb
    };
  }

  private async getAllUnitsData(useMaxLevel: boolean = false, targetUnitIds?: number[]): Promise<NormalizedUnitRadarData[]> {
    const allUnitsData: NormalizedUnitRadarData[] = [];
    const unitIds = targetUnitIds || Array.from({ length: 823 }, (_, i) => i);

    const processUnitsInBatches = async (batchSize: number = 50) => {
      for (let i = 0; i < unitIds.length; i += batchSize) {
        const batch = unitIds.slice(i, i + batchSize);
        const batchPromises = batch.map(async (unitId) => {
          try {
            const unitData = await getUnitData(unitId);
            if (!unitData) return [];

            const unitResults: NormalizedUnitRadarData[] = [];
            
            for (let formId = 0; formId < unitData.coreData.forms.length; formId++) {
              const form = unitData.coreData.forms[formId];
              if (!form) continue;

              let level: number;
              if (useMaxLevel) {
                const maxLevels = unitData.coreData.rarity.maxLevels;
                level = maxLevels[0] + maxLevels[1];
              } else {
                level = 50;
              }

              try {
                const stats = calculateUnitStats(unitData, formId, level, 0);
                const radarData = this.extractRadarData(stats);
                
                unitResults.push({
                  ...radarData,
                  unitId,
                  formId,
                  level
                });
              } catch (error) {
                console.warn(`Error calculating stats for unit ${unitId}, form ${formId}:`, error);
              }
            }
            
            return unitResults;
          } catch (error) {
            console.warn(`Error loading unit ${unitId}:`, error);
            return [];
          }
        });

        const batchResults = await Promise.all(batchPromises);
        allUnitsData.push(...batchResults.flat());
      }
    };

    await processUnitsInBatches();
    console.log(`Loaded ${allUnitsData.length} unit forms for radar chart normalization`);
    return allUnitsData;
  }

  private calculateNormalizationStats(allUnitsData: NormalizedUnitRadarData[]): RadarChartNormalizationData['normalizationStats'] {
    const properties: (keyof UnitRadarData)[] = [
      'hp', 'attackPower', 'dps', 'range', 'cost', 'recharge', 'foreswing', 'attackFrequency', 'speed', 'kb'
    ];

    const normalizationStats = {} as RadarChartNormalizationData['normalizationStats'];

    for (const property of properties) {
      const values = allUnitsData.map(unit => unit[property]).filter(value => value > 0);
      
      if (values.length === 0) {
        normalizationStats[property] = { median: 0, mad: 1 };
        continue;
      }

      const median = this.calculateMedian(values);
      const mad = this.calculateMAD(values, median);

      normalizationStats[property] = { median, mad };
    }

    return normalizationStats;
  }

  public async getNormalizedData(useMaxLevel: boolean = false, targetUnitIds?: number[]): Promise<RadarChartNormalizationData> {
    const cacheKey = targetUnitIds 
      ? `${useMaxLevel ? 'maxLevel' : 'level50'}_filtered_${targetUnitIds.length}_${targetUnitIds.slice(0, 5).join('-')}`
      : useMaxLevel ? 'maxLevel' : 'level50';
    
    const cached = this.cache.get(cacheKey);
    if (cached) {
      return cached;
    }

    console.log(`Generating radar chart normalization data (${cacheKey})...`);
    
    const allUnitsData = await this.getAllUnitsData(useMaxLevel, targetUnitIds);
    const normalizationStats = this.calculateNormalizationStats(allUnitsData);

    const result: RadarChartNormalizationData = {
      normalizationStats,
      allUnitsData
    };

    this.cache.set(cacheKey, result);
    return result;
  }

  public normalizeUnitData(
    unitData: UnitRadarData,
    normalizationStats: RadarChartNormalizationData['normalizationStats']
  ): UnitRadarData {
    return {
      hp: this.robustZScore(unitData.hp, normalizationStats.hp.median, normalizationStats.hp.mad),
      attackPower: this.robustZScore(unitData.attackPower, normalizationStats.attackPower.median, normalizationStats.attackPower.mad),
      dps: this.robustZScore(unitData.dps, normalizationStats.dps.median, normalizationStats.dps.mad),
      range: this.robustZScore(unitData.range, normalizationStats.range.median, normalizationStats.range.mad),
      cost: this.robustZScore(unitData.cost, normalizationStats.cost.median, normalizationStats.cost.mad),
      recharge: this.robustZScore(unitData.recharge, normalizationStats.recharge.median, normalizationStats.recharge.mad),
      foreswing: this.robustZScore(unitData.foreswing, normalizationStats.foreswing.median, normalizationStats.foreswing.mad),
      attackFrequency: this.robustZScore(unitData.attackFrequency, normalizationStats.attackFrequency.median, normalizationStats.attackFrequency.mad),
      speed: this.robustZScore(unitData.speed, normalizationStats.speed.median, normalizationStats.speed.mad),
      kb: this.robustZScore(unitData.kb, normalizationStats.kb.median, normalizationStats.kb.mad)
    };
  }

  public clearCache(): void {
    this.cache.clear();
  }

  clearFilteredCache(): void {
    // フィルタされたデータのキャッシュをクリア
    const keys = this.cache.getKeys();
    keys.forEach(key => {
      if (key.includes('filtered')) {
        this.cache.delete(key);
      }
    });
  }
}