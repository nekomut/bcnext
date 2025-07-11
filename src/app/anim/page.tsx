'use client';

import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';
import AnimationViewer from './AnimationViewer';
import { unitNamesData } from '@/data/unit-names';
import { loadUnitImages } from './imageLoader';

export default function AnimationPage() {
  const [selectedUnit, setSelectedUnit] = useState('731');
  const [animationData, setAnimationData] = useState<Record<string, unknown> | null>(null);
  const [selectedForm, setSelectedForm] = useState('f');
  const [selectedAnimation, setSelectedAnimation] = useState('maanim00');
  const [isPlaying, setIsPlaying] = useState(true);
  const [availableUnits, setAvailableUnits] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState({ current: 0, total: 0, message: '' });
  
  // Search UI states
  const [unitIdInput, setUnitIdInput] = useState('731');
  const [nameFilter, setNameFilter] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const availableForms = animationData ? Object.keys(animationData) : [];
  const availableAnimations = availableForms.length > 0 && animationData ? 
    Object.keys((animationData as Record<string, unknown>)[selectedForm] as Record<string, unknown> || {})
      .filter(key => key.startsWith('maanim')) : [];

  // Get unit display name from unit names data
  const getUnitDisplayName = (unitId: string) => {
    const unitData = unitNamesData.find(unit => unit.unitId === unitId);
    return unitData ? unitData.displayName : `Unit ${unitId}`;
  };

  // Get form display name from unit names data
  const getFormDisplayName = (formKey: string, unitId: string) => {
    const unitData = unitNamesData.find(unit => unit.unitId === unitId);
    if (unitData && unitData.forms) {
      const formIndex = ['f', 'c', 's', 'u'].indexOf(formKey);
      if (formIndex !== -1 && unitData.forms[formIndex]) {
        return unitData.forms[formIndex];
      }
    }
    
    // Fallback to default form names
    const defaultFormNames: { [key: string]: string } = {
      'f': '第1形態',
      'c': '第2形態',
      's': '第3形態',
      'u': '第4形態'
    };
    return defaultFormNames[formKey] || formKey.toUpperCase();
  };

  // Get animation display name
  const getAnimationDisplayName = (animationKey: string) => {
    const animationNames: { [key: string]: string } = {
      'maanim00': '前進',
      'maanim01': '待機',
      'maanim02': '攻撃',
      'maanim03': 'KB'
    };
    return animationNames[animationKey] || animationKey;
  };

  // Filter available units based on search criteria
  const getFilteredUnits = () => {
    return availableUnits.filter(unitId => {
      const unitData = unitNamesData.find(unit => unit.unitId === unitId);
      if (!unitData) return false;
      
      // Filter by name if nameFilter is provided
      if (nameFilter && !unitData.displayName.toLowerCase().includes(nameFilter.toLowerCase())) {
        return false;
      }
      
      return true;
    });
  };

  // Handle unit ID input change
  const handleUnitIdSubmit = async (inputUnitId: string) => {
    const formattedId = inputUnitId.padStart(3, '0');
    if (availableUnits.includes(formattedId)) {
      setIsSearching(true);
      await handleUnitChange(formattedId);
      setIsSearching(false);
    } else {
      alert(`ユニット ${formattedId} のアニメーションデータが見つかりません`);
    }
  };

  const handleUnitChange = useCallback(async (unitId: string) => {
    setSelectedUnit(unitId);
    setUnitIdInput(unitId);
    setLoading(true);
    setLoadingProgress({ current: 0, total: 3, message: 'アニメーションデータを読み込み中...' });
    
    try {
      // Step 1: アニメーションデータの読み込み
      setLoadingProgress({ current: 1, total: 3, message: 'アニメーションデータを読み込み中...' });
      const moduleData = await import(`@/data/anim/${unitId}`);
      const animationDataKey = `animationData_${unitId}`;
      
      if (moduleData[animationDataKey]) {
        setAnimationData(moduleData[animationDataKey] as Record<string, unknown>);
        
        // Step 2: 画像データのプリロード
        setLoadingProgress({ current: 2, total: 3, message: '画像データを読み込み中...' });
        try {
          await loadUnitImages(unitId);
          setLoadingProgress({ current: 3, total: 3, message: '読み込み完了' });
        } catch (error) {
          console.warn(`Failed to preload images for unit ${unitId}:`, error);
          setLoadingProgress({ current: 3, total: 3, message: '画像読み込みエラー（アニメーションは表示可能）' });
        }
      } else {
        console.error(`Animation data not found for unit ${unitId}`);
        setLoadingProgress({ current: 0, total: 3, message: 'アニメーションデータが見つかりません' });
      }
    } catch (error) {
      console.error(`Failed to load animation data for unit ${unitId}:`, error);
      setLoadingProgress({ current: 0, total: 3, message: 'アニメーションデータの読み込みに失敗しました' });
    }
    
    // 短い遅延で読み込み完了を表示
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  // Discover available animation files
  useEffect(() => {
    const discoverAnimationFiles = async () => {
      const units: string[] = [];
      const totalUnits = unitNamesData.length;
      
      setLoadingProgress({ current: 0, total: totalUnits, message: 'アニメーションファイルを検索中...' });
      
      // Use unit names data to check for available animation files
      for (let i = 0; i < unitNamesData.length; i++) {
        const unitData = unitNamesData[i];
        const unitId = unitData.unitId;
        
        // Update progress
        setLoadingProgress({ 
          current: i + 1, 
          total: totalUnits, 
          message: `アニメーションファイルを準備中...` 
        });
        
        try {
          const moduleData = await import(`@/data/anim/${unitId}`);
          const animationDataKey = `animationData_${unitId}`;
          if (moduleData[animationDataKey]) {
            units.push(unitId);
          }
        } catch {
          // File doesn't exist, skip
          console.log(`Animation file for unit ${unitId} not found`);
        }
      }
      
      setAvailableUnits(units);
      setLoadingProgress({ current: totalUnits, total: totalUnits, message: `${units.length}個のアニメーションファイルを発見` });
      
      // Load the first available unit or default to 731
      const initialUnit = units.includes('731') ? '731' : units[0];
      if (initialUnit) {
        await handleUnitChange(initialUnit);
      } else {
        setLoading(false);
      }
    };
    
    discoverAnimationFiles();
  }, [handleUnitChange]);

  useEffect(() => {
    // Reset form and animation when unit changes
    if (animationData) {
      const forms = Object.keys(animationData);
      if (forms.length > 0) {
        // Select the last form (highest evolution)
        const lastForm = forms[forms.length - 1];
        setSelectedForm(lastForm);
        const animations = Object.keys((animationData as Record<string, unknown>)[lastForm] as Record<string, unknown> || {})
          .filter(key => key.startsWith('maanim'));
        if (animations.length > 0) {
          // Try to find attack animation (maanim02), otherwise use first available
          const attackAnimation = animations.find(anim => anim === 'maanim02');
          setSelectedAnimation(attackAnimation || animations[0]);
        }
      }
    }
  }, [animationData]);

  if (loading) {
    const progressPercentage = loadingProgress.total > 0 ? Math.round((loadingProgress.current / loadingProgress.total) * 100) : 0;
    
    return (
      <div className="container mx-auto p-4">
        <div className="flex flex-col justify-center items-center h-64 space-y-4">
          <div className="text-lg font-mono">{loadingProgress.message}</div>
          
          {/* Progress Bar */}
          <div className="w-full max-w-md">
            <div className="flex justify-between text-sm font-mono text-gray-600 mb-2">
              <span>{loadingProgress.current} / {loadingProgress.total}</span>
              <span>{progressPercentage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-blue-600 h-2.5 rounded-full transition-all duration-300 ease-out" 
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
          
          {/* Animated Loading Dots */}
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    );
  }

  if (availableUnits.length === 0) {
    return (
      <div className="container mx-auto p-4">
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded">
          <p>利用可能なアニメーションファイルが見つかりません。</p>
          <p>src/data/anim/ ディレクトリにTSXファイルが存在することを確認してください。</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Link href="/" className="font-bold hover:text-green-600 px-1">bcnext</Link>|
      <Link href="/stage" className="hover:text-green-600 px-1">Stage</Link>|
      <Link href="/unit" className="hover:text-green-600 px-1">Unit</Link>|
      <Link href="/anim" className="text-green-500 hover:text-green-600 px-1">Anim</Link>|
      <Link href="/seek" className="hover:text-green-600 px-1">Seek</Link>|
      <Link href="/rare" className="hover:text-green-600 px-1">Rare</Link>|
      <Link href="/normal" className="hover:text-green-600 px-1">Normal</Link>|
      <Link href="/event" className="hover:text-green-600 px-1">Event</Link>|
      <hr />

    <div className="container mx-auto p-2">
      
      {/* Controls */}
      <div className="bg-white shadow rounded-lg p-3 mb-3">
        {/* Unit Search Section */}
        <div className="mb-2">
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-500 font-mono">Unit</label>
            <input
              type="text"
              value={unitIdInput}
              onChange={(e) => setUnitIdInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleUnitIdSubmit(unitIdInput);
                }
              }}
              placeholder="ID"
              className="w-16 p-2 border border-gray-300 rounded-md font-mono text-center text-gray-500"
              disabled={loading || isSearching}
            />
            <input
              type="text"
              value={nameFilter}
              onChange={(e) => setNameFilter(e.target.value)}
              placeholder="ユニット名で検索..."
              className="flex-1 p-2 border border-gray-300 rounded-md text-gray-500"
              disabled={loading}
            />
            <button
              onClick={() => handleUnitIdSubmit(unitIdInput)}
              disabled={loading || isSearching}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed font-mono"
            >
              {isSearching ? '検索中...' : '検索'}
            </button>
          </div>
          
          {/* Filtered Units List */}
          {nameFilter && getFilteredUnits().length > 0 && (
            <div className="mt-4">
              <div className="text-sm font-medium text-gray-500 mb-2">検索結果:</div>
              <div className="max-h-32 overflow-y-auto border border-gray-200 rounded">
                {getFilteredUnits().slice(0, 10).map(unitId => (
                  <button
                    key={unitId}
                    onClick={() => {
                      setNameFilter('');
                      handleUnitChange(unitId);
                    }}
                    className="w-full text-left px-3 py-2 hover:bg-gray-100 text-sm font-mono border-b border-gray-100 last:border-b-0 text-gray-500"
                    disabled={loading}
                  >
                    {unitId} - {getUnitDisplayName(unitId)}
                  </button>
                ))}
                {getFilteredUnits().length > 10 && (
                  <div className="px-3 py-2 text-sm text-gray-500 italic">
                    ...他 {getFilteredUnits().length - 10} 件
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        
        <div className="space-y-2">

          {/* Form Selector */}
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-500 whitespace-nowrap font-mono"> Form </label>
            <select 
              value={selectedForm} 
              onChange={(e) => setSelectedForm(e.target.value)}
              className="flex-1 p-2 border border-gray-300 rounded-md text-gray-500 font-mono"
            >
              {availableForms.map(form => (
                <option key={form} value={form}>
                  {getFormDisplayName(form, selectedUnit)}
                </option>
              ))}
            </select>
          </div>

          {/* Animation Selector */}
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-500 whitespace-nowrap font-mono"> Anim </label>
            <select 
              value={selectedAnimation} 
              onChange={(e) => setSelectedAnimation(e.target.value)}
              className="flex-1 p-2 border border-gray-300 rounded-md text-gray-500 font-mono"
            >
              {availableAnimations.map(anim => (
                <option key={anim} value={anim}>{getAnimationDisplayName(anim)}</option>
              ))}
            </select>
          </div>

          {/* Play Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={`flex-1 p-2 rounded-md text-white font-medium font-mono ${
                isPlaying ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
              }`}
            >
              {isPlaying ? '停止' : '再生'}
            </button>
          </div>
        </div>
      </div>

      {/* Animation Viewer */}
      <div className="bg-white shadow rounded-lg p-3">
        {animationData ? (
          <AnimationViewer
            animationData={animationData}
            selectedForm={selectedForm}
            selectedAnimation={selectedAnimation}
            isPlaying={isPlaying}
            onStop={() => setIsPlaying(false)}
            unitId={selectedUnit}
          />
        ) : (
          <div className="flex justify-center items-center h-64">
            <div className="text-lg text-gray-500">アニメーションデータが読み込まれていません</div>
          </div>
        )}
      </div>
    </div>
    </div>
  );
}