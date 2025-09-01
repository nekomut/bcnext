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

export type NormalizationType = 'robust-zscore' | 'zscore' | 'min-max' | 'percentile' | 'log' | 'rank';

export interface NormalizationStats {
  // ロバストZ-score用
  median: number;
  mad: number;
  // Z-score用
  mean: number;
  stdDev: number;
  // Min-Max用
  min: number;
  max: number;
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

  private calculateMean(values: number[]): number {
    return values.reduce((sum, value) => sum + value, 0) / values.length;
  }

  private calculateStandardDeviation(values: number[], mean: number): number {
    const variance = values.reduce((sum, value) => sum + Math.pow(value - mean, 2), 0) / values.length;
    const stdDev = Math.sqrt(variance);
    return stdDev === 0 ? 1 : stdDev;
  }

  private zScore(value: number, mean: number, stdDev: number): number {
    return (value - mean) / stdDev;
  }

  private minMaxNormalization(value: number, min: number, max: number): number {
    if (max === min) return 0;
    return ((value - min) / (max - min)) * 6 - 3; // -3 to 3 range
  }

  private percentileNormalization(value: number, values: number[]): number {
    const sorted = [...values].sort((a, b) => a - b);
    let rank = 0;
    for (let i = 0; i < sorted.length; i++) {
      if (sorted[i] >= value) {
        rank = i;
        break;
      }
    }
    if (value >= sorted[sorted.length - 1]) {
      rank = sorted.length - 1;
    }
    const percentile = rank / (sorted.length - 1);
    return (percentile * 6) - 3; // 0-1 → -3 to 3
  }

  private logNormalization(value: number, values: number[]): number {
    if (value <= 0) return -3;
    const logValues = values.filter(v => v > 0).map(v => Math.log(v));
    if (logValues.length === 0) return 0;
    
    const logValue = Math.log(value);
    const mean = logValues.reduce((sum, v) => sum + v, 0) / logValues.length;
    const variance = logValues.reduce((sum, v) => sum + Math.pow(v - mean, 2), 0) / logValues.length;
    const stdDev = Math.sqrt(variance);
    
    if (stdDev === 0) return 0;
    return (logValue - mean) / stdDev;
  }

  private rankNormalization(value: number, values: number[]): number {
    const sorted = [...values].sort((a, b) => a - b);
    let rank = 0;
    for (let i = 0; i < sorted.length; i++) {
      if (sorted[i] >= value) {
        rank = i;
        break;
      }
    }
    if (value >= sorted[sorted.length - 1]) {
      rank = sorted.length - 1;
    }
    return ((rank / (sorted.length - 1)) * 6) - 3; // 0-1 → -3 to 3
  }

  private normalizeValue(
    value: number,
    stats: NormalizationStats,
    normalizationType: NormalizationType,
    allValues?: number[]
  ): number {
    switch (normalizationType) {
      case 'robust-zscore':
        return this.robustZScore(value, stats.median, stats.mad);
      case 'zscore':
        return this.zScore(value, stats.mean, stats.stdDev);
      case 'min-max':
        return this.minMaxNormalization(value, stats.min, stats.max);
      case 'percentile':
        return allValues ? this.percentileNormalization(value, allValues) : this.minMaxNormalization(value, stats.min, stats.max);
      case 'log':
        return allValues ? this.logNormalization(value, allValues) : this.zScore(value, stats.mean, stats.stdDev);
      case 'rank':
        return allValues ? this.rankNormalization(value, allValues) : this.minMaxNormalization(value, stats.min, stats.max);
      default:
        return this.zScore(value, stats.mean, stats.stdDev);
    }
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
        normalizationStats[property] = {
          median: 0, mad: 1,
          mean: 0, stdDev: 1,
          min: 0, max: 1
        };
        continue;
      }

      // ロバストZ-score用
      const median = this.calculateMedian(values);
      const mad = this.calculateMAD(values, median);
      
      // Z-score用
      const mean = this.calculateMean(values);
      const stdDev = this.calculateStandardDeviation(values, mean);
      
      // Min-Max用
      const min = Math.min(...values);
      const max = Math.max(...values);

      normalizationStats[property] = {
        median, mad,
        mean, stdDev,
        min, max
      };
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
    normalizationStats: RadarChartNormalizationData['normalizationStats'],
    normalizationType: NormalizationType = 'zscore',
    allUnitsData?: NormalizedUnitRadarData[]
  ): UnitRadarData {
    const getValuesForProperty = (property: keyof UnitRadarData) => {
      return allUnitsData ? allUnitsData.map(unit => unit[property]).filter(value => value > 0) : [];
    };

    return {
      hp: this.normalizeValue(unitData.hp, normalizationStats.hp, normalizationType, getValuesForProperty('hp')),
      attackPower: this.normalizeValue(unitData.attackPower, normalizationStats.attackPower, normalizationType, getValuesForProperty('attackPower')),
      dps: this.normalizeValue(unitData.dps, normalizationStats.dps, normalizationType, getValuesForProperty('dps')),
      range: this.normalizeValue(unitData.range, normalizationStats.range, normalizationType, getValuesForProperty('range')),
      cost: -this.normalizeValue(unitData.cost, normalizationStats.cost, normalizationType, getValuesForProperty('cost')), // 安いほど良い→負の値で反転
      recharge: -this.normalizeValue(unitData.recharge, normalizationStats.recharge, normalizationType, getValuesForProperty('recharge')), // 短いほど良い→負の値で反転
      foreswing: -this.normalizeValue(unitData.foreswing, normalizationStats.foreswing, normalizationType, getValuesForProperty('foreswing')), // 短いほど良い→負の値で反転
      attackFrequency: -this.normalizeValue(unitData.attackFrequency, normalizationStats.attackFrequency, normalizationType, getValuesForProperty('attackFrequency')), // 短いほど良い→負の値で反転
      speed: this.normalizeValue(unitData.speed, normalizationStats.speed, normalizationType, getValuesForProperty('speed')),
      kb: this.normalizeValue(unitData.kb, normalizationStats.kb, normalizationType, getValuesForProperty('kb'))
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