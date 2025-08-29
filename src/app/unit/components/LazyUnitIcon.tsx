'use client'

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import IconManager from '../IconManager';

interface LazyUnitIconProps {
  unitId: string;
  formId: number;
  displayName: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean; // 優先読み込み（表示領域内）
}

const LazyUnitIcon: React.FC<LazyUnitIconProps> = ({
  unitId,
  formId,
  displayName,
  width = 32,
  height = 28,
  className = "object-contain",
  priority = false
}) => {
  const [icon, setIcon] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  // Intersection Observer で表示タイミングを検出
  useEffect(() => {
    if (priority) {
      // 優先読み込みの場合は即座に読み込み開始
      setIsInView(true);
      return;
    }

    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // 一度表示されたら監視終了
        }
      },
      {
        // 表示領域の少し手前から読み込み開始
        rootMargin: '50px 0px',
        threshold: 0.1
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [priority]);

  // アイコン読み込み処理
  useEffect(() => {
    if (!isInView || icon || isLoading) return;

    const loadIcon = async () => {
      setIsLoading(true);
      setHasError(false);

      try {
        const iconData = await IconManager.getFormIcon(unitId, formId);
        setIcon(iconData);
      } catch (error) {
        console.warn(`Failed to load icon for unit ${unitId} form ${formId}:`, error);
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    loadIcon();
  }, [isInView, unitId, formId, icon, isLoading]);

  // スケルトンローディング表示
  const renderSkeleton = () => (
    <div 
      className="animate-pulse bg-gray-200 rounded"
      style={{ width, height }}
    />
  );

  // エラー表示
  const renderError = () => (
    <div 
      className="bg-gray-100 rounded flex items-center justify-center text-gray-400"
      style={{ width, height }}
      title="アイコンの読み込みに失敗しました"
    >
      <span className="text-xs">?</span>
    </div>
  );

  return (
    <div ref={elementRef} style={{ width, height }}>
      {!isInView ? (
        renderSkeleton()
      ) : isLoading ? (
        renderSkeleton()
      ) : hasError ? (
        renderError()
      ) : icon ? (
        <Image 
          src={`data:image/png;base64,${icon}`} 
          alt={`${displayName} 第${formId + 1}形態`} 
          width={width} 
          height={height} 
          className={className}
        />
      ) : (
        <div 
          className="bg-gray-50 rounded"
          style={{ width, height }}
        />
      )}
    </div>
  );
};

export default LazyUnitIcon;