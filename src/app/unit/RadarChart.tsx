'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  ChartConfiguration,
  ChartData
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { UnitRadarData, RadarChartNormalizer, RadarChartNormalizationData, NormalizationType } from './RadarChartNormalizer';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

interface RadarChartProps {
  unitData: UnitRadarData;
  useMaxLevel?: boolean;
  className?: string;
  targetUnitIds?: number[];
  normalizationType?: NormalizationType;
}

export default function RadarChart({ unitData, useMaxLevel = false, className = '', targetUnitIds, normalizationType = 'zscore' }: RadarChartProps) {
  const [normalizationData, setNormalizationData] = useState<RadarChartNormalizationData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const chartRef = useRef<ChartJS<'radar'> | null>(null);

  // targetUnitIds配列の変更を確実に検出するためのキーを生成
  const targetUnitIdsKey = targetUnitIds ? targetUnitIds.sort((a, b) => a - b).join(',') : 'all';

  useEffect(() => {
    let isCancelled = false;

    const loadNormalizationData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const normalizer = RadarChartNormalizer.getInstance();
        
        // targetUnitIdsが変更された場合は、関連するキャッシュをクリア
        if (targetUnitIds) {
          normalizer.clearFilteredCache();
        }
        
        const data = await normalizer.getNormalizedData(useMaxLevel, targetUnitIds);
        
        if (!isCancelled) {
          setNormalizationData(data);
        }
      } catch (err) {
        if (!isCancelled) {
          console.error('Error loading normalization data:', err);
          setError('正規化データの読み込みに失敗しました');
        }
      } finally {
        if (!isCancelled) {
          setLoading(false);
        }
      }
    };

    loadNormalizationData();

    return () => {
      isCancelled = true;
    };
  }, [useMaxLevel, targetUnitIdsKey, targetUnitIds]);

  const getChartData = (): ChartData<'radar'> => {
    if (!normalizationData) {
      return { labels: [], datasets: [] };
    }

    const normalizer = RadarChartNormalizer.getInstance();
    const normalizedData = normalizer.normalizeUnitData(unitData, normalizationData.normalizationStats, normalizationType, normalizationData.allUnitsData);

    const labels = [
      '攻撃発生',
      '攻撃頻度', 
      'DPS',
      '射程',
      '速度',
      '再生産',
      'コスト',
      'KB',
      '体力',
      '攻撃力'
    ];

    const dataValues = [
      Math.max(-3, Math.min(3, normalizedData.foreswing)),      // 正規化時に既に反転済み
      Math.max(-3, Math.min(3, normalizedData.attackFrequency)), // 正規化時に既に反転済み
      Math.max(-3, Math.min(3, normalizedData.dps)),
      Math.max(-3, Math.min(3, normalizedData.range)),
      Math.max(-3, Math.min(3, normalizedData.speed)),
      Math.max(-3, Math.min(3, normalizedData.recharge)),       // 正規化時に既に反転済み
      Math.max(-3, Math.min(3, normalizedData.cost)),           // 正規化時に既に反転済み
      Math.max(-3, Math.min(3, normalizedData.kb)),
      Math.max(-3, Math.min(3, normalizedData.hp)),
      Math.max(-3, Math.min(3, normalizedData.attackPower))
    ];

    return {
      labels,
      datasets: [
        {
          label: 'ユニット能力値',
          data: dataValues,
          backgroundColor: 'rgba(59, 130, 246, 0.2)',
          borderColor: 'rgba(59, 130, 246, 0.8)',
          borderWidth: 2,
          pointBackgroundColor: 'rgba(59, 130, 246, 1)',
          pointBorderColor: '#ffffff',
          pointBorderWidth: 1,
          pointRadius: 3,
          pointHoverRadius: 6,
          fill: true
        }
      ]
    };
  };

  const getChartOptions = (): ChartConfiguration<'radar'>['options'] => {
    return {
      responsive: true,
      maintainAspectRatio: true,
      aspectRatio: 10/8.5, // 縦:横 = 9:10
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          enabled: true,
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          titleColor: '#000000',
          bodyColor: '#ffffff',
          borderColor: 'rgba(59, 130, 246, 0.8)',
          borderWidth: 1,
          cornerRadius: 6,
          displayColors: false,
          callbacks: {
            title: (tooltipItems) => {
              return tooltipItems[0]?.label || '';
            },
            label: (context) => {
              const value = context.parsed.r;
              const rawValue = getRawValue(context.dataIndex);
              let unit = '';
              
              switch (context.dataIndex) {
                case 0: unit = ''; break;
                case 1: unit = 'f'; break;
                case 2: unit = ' DPS'; break;
                case 3: unit = 'f'; break;
                case 4: unit = '¥'; break;
                case 5: unit = 's'; break;
                case 6: unit = ''; break;
                case 7: unit = ''; break;
                case 8: unit = ' HP'; break;
                case 9: unit = ''; break;
              }
              
              const normalizeTypeLabel = getNormalizationTypeLabel(normalizationType);
              return `正規化値: ${value.toFixed(2)} (実値: ${rawValue}${unit}) [${normalizeTypeLabel}]`;
            }
          }
        }
      },
      scales: {
        r: {
          min: -3,
          max: 3,
          beginAtZero: false,
          ticks: {
            stepSize: 1,
            color: '#6b7280',
            font: {
              size: 10
            },
            callback: function(value) {
              return value === 0 ? '0' : value.toString();
            }
          },
          grid: {
            color: '#e5e7eb',
            lineWidth: 1
          },
          angleLines: {
            color: '#e5e7eb',
            lineWidth: 1
          },
          pointLabels: {
            color: '#374151',
            font: {
              size: 9,
              weight: 'bold'
            },
            padding: 0
          }
        }
      },
      interaction: {
        intersect: false,
        mode: 'point'
      },
      elements: {
        line: {
          tension: 0.1
        }
      }
    };
  };

  const getRawValue = (dataIndex: number): string => {
    switch (dataIndex) {
      case 0: return unitData.foreswing.toString();
      case 1: return unitData.attackFrequency.toString();
      case 2: return unitData.dps.toString();
      case 3: return unitData.range.toString();
      case 4: return unitData.speed.toString();
      case 5: return unitData.recharge.toFixed(2);
      case 6: return unitData.cost.toString();
      case 7: return unitData.kb.toString();
      case 8: return unitData.hp.toString();
      case 9: return unitData.attackPower.toString();
      default: return '0';
    }
  };

  const getNormalizationTypeLabel = (type: NormalizationType): string => {
    switch (type) {
      case 'robust-zscore': return 'Robust Z-score';
      case 'zscore': return 'Z-score';
      case 'min-max': return 'Min-Max';
      case 'percentile': return 'Percentile';
      case 'log': return 'Log';
      case 'rank': return 'Rank';
      default: return type;
    }
  };

  if (loading) {
    return (
      <div className={`flex items-center justify-center p-8 ${className}`}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-2"></div>
          <p className="text-sm text-gray-600">Initializing...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`flex items-center justify-center p-8 ${className}`}>
        <div className="text-center text-red-600">
          <p className="text-sm">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-2 text-xs text-blue-600 hover:text-blue-800 underline"
          >
            再読み込み
          </button>
        </div>
      </div>
    );
  }

  if (!normalizationData) {
    return (
      <div className={`flex items-center justify-center p-8 ${className}`}>
        <p className="text-sm text-gray-600">データがありません</p>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <div className="w-full overflow-hidden" style={{ aspectRatio: '10/8' }}>
        <div style={{ marginTop: '2%', height: '100%' }}>
          <Radar 
            key={`radar-${targetUnitIdsKey}-${useMaxLevel}`}
            ref={chartRef}
            data={getChartData()} 
            options={getChartOptions()}
          />
        </div>
      </div>
    </div>
  );
}