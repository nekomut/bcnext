'use client'

import React from 'react';
// import Image from 'next/image'; // 現在未使用のためコメントアウト

// シンプルなプログレス情報
interface UnitGalleryProgressInfo {
  current: number;           // 現在の処理数
  total: number;            // 総処理数
  percentage: number;       // パーセンテージ (0-100)
  status: string;           // 現在の処理状況メッセージ
}

interface UnitGalleryProgressBarProps {
  progress: UnitGalleryProgressInfo;
}

const UnitGalleryProgressBar: React.FC<UnitGalleryProgressBarProps> = ({ progress }) => {
  return (
    <div className="mt-2 p-2 border border-gray-600 rounded bg-gray-50">
      <h3 className="text-[12px] font-semibold text-gray-600 mb-2">
        ユニット一覧
      </h3>
      
      {/* 進捗数値表示 */}
      <div className="text-sm text-gray-600 mb-2">
        {progress.current}/{progress.total} ユニット ({progress.percentage}%)
      </div>

      {/* シンプルなプログレスバー */}
      <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
        <div 
          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
          style={{ width: `${Math.max(0, Math.min(100, progress.percentage))}%` }}
        />
      </div>

      {/* ステータスメッセージ */}
      <div className="text-xs text-gray-600">
        {progress.status}
      </div>
    </div>
  );
};

// エラー時のプログレスバー
export const ErrorProgressBar: React.FC<{ error: string; onRetry: () => void }> = ({ error, onRetry }) => {
  return (
    <div className="mt-2 p-4 border border-red-300 rounded bg-red-50">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-red-600">❌</span>
        <span className="text-sm font-medium text-red-800">読み込みエラー</span>
      </div>
      
      <div className="text-xs text-red-700 mb-3">
        {error}
      </div>
      
      <button
        onClick={onRetry}
        className="px-3 py-1 text-xs text-white bg-red-600 rounded hover:bg-red-700 transition-colors"
      >
        再試行
      </button>
    </div>
  );
};


export default UnitGalleryProgressBar;
export type { UnitGalleryProgressInfo };