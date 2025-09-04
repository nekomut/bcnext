'use client';

import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  type Chart,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
);

interface StatsHistogramProps {
  rawData: number[];
  zScoreData: number[];
  normalizationMethod?: string;
  currentUnitRawValue?: number;
  currentUnitNormalizedValue?: number;
}

const StatsHistogram: React.FC<StatsHistogramProps> = ({ rawData, zScoreData, normalizationMethod = 'Z-Score', currentUnitRawValue, currentUnitNormalizedValue }) => {
  console.log('StatsHistogram received:', { currentUnitRawValue, currentUnitNormalizedValue, normalizationMethod });
  // 生データのヒストグラム作成
  const createHistogram = (data: number[], bins: number = 20) => {
    if (data.length === 0) return { labels: [], counts: [] };
    
    const min = Math.min(...data);
    const max = Math.max(...data);
    const binSize = (max - min) / bins;
    
    const labels: string[] = [];
    const counts: number[] = [];
    
    for (let i = 0; i < bins; i++) {
      const start = min + i * binSize;
      const end = min + (i + 1) * binSize;
      labels.push(`${Math.round(start)}-${Math.round(end)}`);
      counts.push(0);
    }
    
    data.forEach(value => {
      const binIndex = Math.min(Math.floor((value - min) / binSize), bins - 1);
      counts[binIndex]++;
    });
    
    return { labels, counts };
  };

  // Z-Scoreのヒストグラム作成（-3～3の固定範囲）
  const createZScoreHistogram = (data: number[], bins: number = 20) => {
    if (data.length === 0) return { labels: [], counts: [] };
    
    const min = -3;
    const max = 3;
    const binSize = (max - min) / bins;
    
    const labels: string[] = [];
    const counts: number[] = [];
    
    for (let i = 0; i < bins; i++) {
      const start = min + i * binSize;
      const end = min + (i + 1) * binSize;
      labels.push(`${start.toFixed(1)}-${end.toFixed(1)}`);
      counts.push(0);
    }
    
    data.forEach(value => {
      // -3未満または3超の値は範囲外として除外
      if (value < min || value > max) return;
      
      const binIndex = Math.min(Math.floor((value - min) / binSize), bins - 1);
      counts[binIndex]++;
    });
    
    return { labels, counts };
  };

  // 生データ用のchartOptions
  const createRawDataChartOptions = (maxValue: number) => ({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
      },
      x: {
        beginAtZero: true,
        ticks: {
          maxRotation: 0,
          minRotation: 0,
          callback: function(value: unknown, index: number, ticks: unknown[]) {
            const ticksArray = ticks as unknown[];
            // 最初のラベル（0相当）と最後のラベル（最大値相当）だけ表示
            if (index === 0) {
              return '0';
            }
            if (index === ticksArray.length - 1) {
              return Math.round(maxValue).toLocaleString();
            }
            return '';
          },
          maxTicksLimit: 20, // ラベル数を確保
          autoSkip: false, // 自動スキップを無効化
        },
      },
    },
  });

  const rawHistogram = createHistogram(rawData);
  const zScoreHistogram = createZScoreHistogram(zScoreData);

  // 生データの最大値を取得
  const rawMaxValue = rawData.length > 0 ? Math.max(...rawData) : 0;
  const rawDataChartOptions = createRawDataChartOptions(rawMaxValue);

  const rawChartData = {
    labels: rawHistogram.labels,
    datasets: [
      {
        label: 'ユニット数',
        data: rawHistogram.counts,
        backgroundColor: '#3B82F6',
        borderColor: '#1D4ED8',
        borderWidth: 1,
      },
    ],
  };

  const zScoreChartData = {
    labels: zScoreHistogram.labels,
    datasets: [
      {
        label: 'ユニット数',
        data: zScoreHistogram.counts,
        backgroundColor: '#10B981',
        borderColor: '#047857',
        borderWidth: 1,
      },
    ],
  };

  // 現在のユニットの位置を示すカスタムプラグイン（生データ用）
  const createVerticalLinePlugin = (value: number | undefined, binLabels: string[], color: string) => ({
    id: 'verticalLine',
    afterDraw: (chart: Chart) => {
      console.log('Vertical line plugin executing with value:', value, 'binLabels:', binLabels);
      if (value === undefined) return;
      
      const ctx = chart.ctx;
      const chartArea = chart.chartArea;
      
      // 値が属するビンを見つける
      let binIndex = -1;
      for (let i = 0; i < binLabels.length; i++) {
        const range = binLabels[i].split('-');
        const min = parseFloat(range[0]);
        const max = parseFloat(range[1]);
        if (value >= min && value <= max) {
          binIndex = i;
          break;
        }
      }
      
      if (binIndex >= 0) {
        const x = chart.scales.x.getPixelForValue(binIndex);
        
        ctx.save();
        ctx.strokeStyle = color;
        ctx.lineWidth = 3;
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(x, chartArea.top);
        ctx.lineTo(x, chartArea.bottom);
        ctx.stroke();
        ctx.restore();
      }
    }
  });

  // Z-Score用の縦線プラグイン（-3〜3範囲、範囲外も表示）
  const createZScoreVerticalLinePlugin = (value: number | undefined, color: string) => ({
    id: 'zscoreVerticalLine',
    afterDraw: (chart: Chart) => {
      if (value === undefined) return;
      
      const ctx = chart.ctx;
      const chartArea = chart.chartArea;
      
      // Z-Score値を-3〜3の範囲にマッピング（20ビン）
      const minRange = -3;
      const maxRange = 3;
      const bins = 20;
      
      // 値をビン位置にマッピング（範囲外も処理）
      let position = ((value - minRange) / (maxRange - minRange)) * bins;
      
      // 範囲外の場合は端に表示
      if (position < 0) position = 0;
      if (position > bins) position = bins;
      
      const x = chart.scales.x.getPixelForValue(position);
      
      ctx.save();
      ctx.strokeStyle = color;
      ctx.lineWidth = 3;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(x, chartArea.top);
      ctx.lineTo(x, chartArea.bottom);
      ctx.stroke();
      
      // 範囲外の場合は値をテキストで表示
      if (value < minRange || value > maxRange) {
        ctx.fillStyle = color;
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(value.toFixed(2), x, chartArea.top - 10);
      }
      
      ctx.restore();
    }
  });

  // 正規化グラフ専用のchartOptions（X軸ラベルを整数表示）
  const zScoreChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
      },
      x: {
        ticks: {
          maxRotation: 0,
          minRotation: 0,
          textAlign: 'right',
          callback: function(_value: unknown, index: number) {
            // 20ビンを7つの整数ラベルにマッピング
            const labels = [-3, -2, -1, 0, 1, 2, 3];
            // インデックス0,3,6,9,12,15,18に対応してラベルを表示
            const targetIndices = [1, 4, 7, 10, 13, 16, 19];
            const labelIndex = targetIndices.indexOf(index);
            if (labelIndex >= 0) {
              return labels[labelIndex];
            }
            return '';
          },
          maxTicksLimit: 20,
        },
      },
    },
  };

  // 統計値計算
  const rawMean = rawData.reduce((a, b) => a + b, 0) / rawData.length;
  const rawMedian = [...rawData].sort((a, b) => a - b)[Math.floor(rawData.length / 2)];
  const rawStdDev = Math.sqrt(
    rawData.reduce((sum, val) => sum + Math.pow(val - rawMean, 2), 0) / rawData.length
  );

  const zMean = zScoreData.reduce((a, b) => a + b, 0) / zScoreData.length;
  const zStdDev = Math.sqrt(
    zScoreData.reduce((sum, val) => sum + Math.pow(val - zMean, 2), 0) / zScoreData.length
  );

  return (
    <div className="space-y-2">
      {/* 生データヒストグラム */}
      <div>
        <h3 className="text-[12px] font-semibold mb-0 text-gray-800">
          生データ分布
        </h3>
        <div className="text-xxs text-gray-600 mt-0">
          平均: {rawMean.toFixed(0)}{" "}
          中央値: {rawMedian?.toFixed(0) || 'N/A'}{" "} 
          標準偏差: {rawStdDev.toFixed(0)}
          {currentUnitRawValue !== undefined && (
            <span className="text-red-500 font-semibold ml-4 text-right">
              表示中ユニット: {currentUnitRawValue.toFixed(0)}
            </span>
          )}
        </div>
        <div className="h-64 w-full">
          <Bar 
            data={rawChartData} 
            options={rawDataChartOptions} 
            plugins={[createVerticalLinePlugin(currentUnitRawValue, rawHistogram.labels, '#FF6B6B')]}
          />
        </div>
      </div>

      {/* 正規化ヒストグラム */}
      <div>
        <h3 className="text-[12px] font-semibold pt-1 mb-0 text-gray-800">
          {normalizationMethod}分布
        </h3>
        <div className="text-xxs text-gray-600 mt-0">
          平均: {zMean.toFixed(2)}{" "} 
          標準偏差: {zStdDev.toFixed(2)}
          {currentUnitNormalizedValue !== undefined && (
            <span className="text-red-500 font-semibold ml-4">
              表示中ユニット: {currentUnitNormalizedValue.toFixed(2)}
            </span>
          )}
        </div>
        <div className="h-64 w-full">
          <Bar 
            data={zScoreChartData} 
            options={zScoreChartOptions} 
            plugins={[createZScoreVerticalLinePlugin(currentUnitNormalizedValue, '#FF6B6B')]}
          />
        </div>
      </div>
    </div>
  );
};

export default StatsHistogram;