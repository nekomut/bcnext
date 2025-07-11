'use client';

import Link from 'next/link';
import { useState, useEffect, useCallback, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import AnimationViewer from './AnimationViewer';
import { unitNamesData } from '@/data/unit-names';
import { loadUnitImages } from './imageLoader';

function AnimationPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // URLパラメータから初期値を取得（デフォルト：最終形態・攻撃・再生）
  const initialUnit = searchParams.get('unit') || '731';
  const initialForm = searchParams.get('form'); // null if not specified
  const initialAnim = searchParams.get('anim'); // null if not specified  
  const initialPlaying = searchParams.get('playing') !== 'false'; // デフォルト：再生
  
  const [selectedUnit, setSelectedUnit] = useState(initialUnit);
  const [animationData, setAnimationData] = useState<Record<string, unknown> | null>(null);
  const [selectedForm, setSelectedForm] = useState(initialForm || 'f');
  const [selectedAnimation, setSelectedAnimation] = useState(initialAnim || 'maanim02');
  const [isPlaying, setIsPlaying] = useState(initialPlaying);
  const [availableUnits, setAvailableUnits] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState({ current: 0, total: 0, message: '' });
  
  // Search UI states
  const [unitIdInput, setUnitIdInput] = useState(initialUnit);
  const [nameFilter, setNameFilter] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const availableForms = animationData ? Object.keys(animationData) : [];
  const availableAnimations = availableForms.length > 0 && animationData ? 
    Object.keys((animationData as Record<string, unknown>)[selectedForm] as Record<string, unknown> || {})
      .filter(key => key.startsWith('maanim')) : [];

  // URLパラメータを更新する関数
  const updateURL = useCallback((params: { unit?: string; form?: string; anim?: string; playing?: boolean }) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    
    if (params.unit !== undefined) newSearchParams.set('unit', params.unit);
    if (params.form !== undefined) newSearchParams.set('form', params.form);
    if (params.anim !== undefined) newSearchParams.set('anim', params.anim);
    if (params.playing !== undefined) newSearchParams.set('playing', params.playing.toString());
    
    router.replace(`?${newSearchParams.toString()}`, { scroll: false });
  }, [router, searchParams]);

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
    setIsSearching(true);
    const success = await handleUnitChange(formattedId);
    setIsSearching(false);
    
    if (!success) {
      alert(`ユニット ${formattedId} のアニメーションデータが見つかりません`);
    }
  };

  const handleUnitChange = useCallback(async (unitId: string): Promise<boolean> => {
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
        const newAnimationData = moduleData[animationDataKey] as Record<string, unknown>;
        setAnimationData(newAnimationData);
        
        // URLパラメータを更新
        updateURL({ unit: unitId });
        
        // 利用可能ユニットリストに追加（重複避け）
        setAvailableUnits(prev => prev.includes(unitId) ? prev : [...prev, unitId]);
        
        // Step 2: 画像データのプリロード
        setLoadingProgress({ current: 2, total: 3, message: '画像データを読み込み中...' });
        try {
          await loadUnitImages(unitId);
          setLoadingProgress({ current: 3, total: 3, message: '読み込み完了' });
        } catch (error) {
          console.warn(`Failed to preload images for unit ${unitId}:`, error);
          setLoadingProgress({ current: 3, total: 3, message: '画像読み込みエラー（アニメーションは表示可能）' });
        }
        
        // 短い遅延で読み込み完了を表示
        setTimeout(() => {
          setLoading(false);
        }, 300);
        
        return true;
      } else {
        console.error(`Animation data not found for unit ${unitId}`);
        setLoadingProgress({ current: 0, total: 3, message: 'アニメーションデータが見つかりません' });
        setLoading(false);
        return false;
      }
    } catch (error) {
      console.error(`Failed to load animation data for unit ${unitId}:`, error);
      setLoadingProgress({ current: 0, total: 3, message: 'アニメーションデータの読み込みに失敗しました' });
      setLoading(false);
      return false;
    }
  }, [updateURL]);

  // Load initial unit on mount
  useEffect(() => {
    const loadInitialUnit = async () => {
      if (initialUnit) {
        await handleUnitChange(initialUnit);
      } else {
        setLoading(false);
      }
    };
    
    loadInitialUnit();
  }, [handleUnitChange, initialUnit]);

  // URLパラメータの変更を監視
  useEffect(() => {
    const currentUnit = searchParams.get('unit') || '731';
    const currentForm = searchParams.get('form');
    const currentAnim = searchParams.get('anim');
    const currentPlaying = searchParams.get('playing') !== 'false';

    // ユニットが変更された場合は新しいユニットを読み込み
    if (currentUnit !== selectedUnit) {
      handleUnitChange(currentUnit);
      return;
    }

    // フォームやアニメーションの変更を反映
    if (animationData) {
      const forms = Object.keys(animationData);
      if (currentForm && forms.includes(currentForm) && currentForm !== selectedForm) {
        setSelectedForm(currentForm);
      }
      
      const formData = animationData[selectedForm] as Record<string, unknown> || {};
      const animations = Object.keys(formData).filter(key => key.startsWith('maanim'));
      if (currentAnim && animations.includes(currentAnim) && currentAnim !== selectedAnimation) {
        setSelectedAnimation(currentAnim);
      }
    }

    // 再生状態の変更を反映
    if (currentPlaying !== isPlaying) {
      setIsPlaying(currentPlaying);
    }
  }, [searchParams, selectedUnit, selectedForm, selectedAnimation, isPlaying, animationData, handleUnitChange]);

  useEffect(() => {
    // アニメーションデータが読み込まれた時の初期設定
    if (animationData) {
      const forms = Object.keys(animationData);
      if (forms.length > 0) {
        const currentForm = searchParams.get('form');
        const currentAnim = searchParams.get('anim');
        
        // URLで指定されたフォーム、または最後のフォーム（最終形態）を選択
        const targetForm = currentForm && forms.includes(currentForm) ? currentForm : forms[forms.length - 1];
        setSelectedForm(targetForm);
        
        const formData = animationData[targetForm] as Record<string, unknown> || {};
        const animations = Object.keys(formData).filter(key => key.startsWith('maanim'));
        if (animations.length > 0) {
          // URLで指定されたアニメーション、または攻撃アニメーション（maanim02）を選択
          const targetAnim = currentAnim && animations.includes(currentAnim) ? currentAnim : 
                           animations.find(anim => anim === 'maanim02') || animations[0];
          setSelectedAnimation(targetAnim);
        }
      }
    }
  }, [animationData, searchParams]);

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
              className="w-16 p-1 border border-gray-300 rounded-md font-mono text-center text-gray-500"
              disabled={loading || isSearching}
            />
            <input
              type="text"
              value={nameFilter}
              onChange={(e) => setNameFilter(e.target.value)}
              placeholder="ユニット名で検索..."
              className="flex-1 p-1 border border-gray-300 rounded-md text-gray-500"
              disabled={loading}
            />
            <button
              onClick={() => handleUnitIdSubmit(unitIdInput)}
              disabled={loading || isSearching}
              className="px-4 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed font-mono"
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
              onChange={(e) => {
                setSelectedForm(e.target.value);
                updateURL({ form: e.target.value });
              }}
              className="flex-1 p-1 border border-gray-300 rounded-md text-gray-500 font-mono"
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
              onChange={(e) => {
                setSelectedAnimation(e.target.value);
                updateURL({ anim: e.target.value });
              }}
              className="flex-1 p-1 border border-gray-300 rounded-md text-gray-500 font-mono"
            >
              {availableAnimations.map(anim => (
                <option key={anim} value={anim}>{getAnimationDisplayName(anim)}</option>
              ))}
            </select>
          </div>

          {/* Play Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                const newPlaying = !isPlaying;
                setIsPlaying(newPlaying);
                updateURL({ playing: newPlaying });
              }}
              className={`flex-1 p-1 rounded-md text-white font-medium font-mono ${
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

export default function AnimationPage() {
  return (
    <Suspense fallback={
      <div className="container mx-auto p-4">
        <div className="flex flex-col justify-center items-center h-64 space-y-4">
          <div className="text-lg font-mono">読み込み中...</div>
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    }>
      <AnimationPageContent />
    </Suspense>
  );
}