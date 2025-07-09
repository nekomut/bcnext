'use client';

import { useState, useEffect, useCallback } from 'react';
import AnimationViewer from './AnimationViewer';
import { unitNamesData } from '@/data/unit-names';

export default function AnimationPage() {
  const [selectedUnit, setSelectedUnit] = useState('044');
  const [animationData, setAnimationData] = useState<Record<string, unknown> | null>(null);
  const [selectedForm, setSelectedForm] = useState('f');
  const [selectedAnimation, setSelectedAnimation] = useState('maanim00');
  const [isPlaying, setIsPlaying] = useState(false);
  const [availableUnits, setAvailableUnits] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

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
      'f': 'ノーマル',
      'c': '進化',
      's': '真',
      'u': 'ウルトラ'
    };
    return defaultFormNames[formKey] || formKey.toUpperCase();
  };

  const handleUnitChange = useCallback(async (unitId: string) => {
    setSelectedUnit(unitId);
    setLoading(true);
    
    try {
      const moduleData = await import(`@/data/anim/${unitId}`);
      const animationDataKey = `animationData_${unitId}`;
      
      if (moduleData[animationDataKey]) {
        setAnimationData(moduleData[animationDataKey] as Record<string, unknown>);
      } else {
        console.error(`Animation data not found for unit ${unitId}`);
      }
    } catch (error) {
      console.error(`Failed to load animation data for unit ${unitId}:`, error);
    }
    
    setLoading(false);
  }, []);

  // Discover available animation files
  useEffect(() => {
    const discoverAnimationFiles = async () => {
      const units: string[] = [];
      
      // Use unit names data to check for available animation files
      for (const unitData of unitNamesData) {
        const unitId = unitData.unitId;
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
      
      // Load the first available unit or default to 044
      const initialUnit = units.includes('044') ? '044' : units[0];
      if (initialUnit) {
        await handleUnitChange(initialUnit);
      }
      
      setLoading(false);
    };
    
    discoverAnimationFiles();
  }, [handleUnitChange]);

  useEffect(() => {
    // Reset form and animation when unit changes
    if (animationData) {
      const forms = Object.keys(animationData);
      if (forms.length > 0) {
        setSelectedForm(forms[0]);
        const animations = Object.keys((animationData as Record<string, unknown>)[forms[0]] as Record<string, unknown> || {})
          .filter(key => key.startsWith('maanim'));
        if (animations.length > 0) {
          setSelectedAnimation(animations[0]);
        }
      }
    }
  }, [animationData]);

  if (loading) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Battle Cats Animation Viewer</h1>
        <div className="flex justify-center items-center h-64">
          <div className="text-lg">アニメーションファイルを読み込み中...</div>
        </div>
      </div>
    );
  }

  if (availableUnits.length === 0) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Battle Cats Animation Viewer</h1>
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded">
          <p>利用可能なアニメーションファイルが見つかりません。</p>
          <p>src/data/anim/ ディレクトリにTSXファイルが存在することを確認してください。</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Battle Cats Animation Viewer</h1>
      
      {/* Controls */}
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          {/* Unit Selector */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              ユニット
            </label>
            <select 
              value={selectedUnit} 
              onChange={(e) => handleUnitChange(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md text-gray-600"
              disabled={loading}
            >
              {availableUnits.map(unit => (
                <option key={unit} value={unit}>{getUnitDisplayName(unit)}</option>
              ))}
            </select>
          </div>

          {/* Form Selector */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              フォーム
            </label>
            <select 
              value={selectedForm} 
              onChange={(e) => setSelectedForm(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md text-gray-600"
            >
              {availableForms.map(form => (
                <option key={form} value={form}>
                  {getFormDisplayName(form, selectedUnit)}
                </option>
              ))}
            </select>
          </div>

          {/* Animation Selector */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              アニメーション
            </label>
            <select 
              value={selectedAnimation} 
              onChange={(e) => setSelectedAnimation(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md text-gray-600"
            >
              {availableAnimations.map(anim => (
                <option key={anim} value={anim}>{anim}</option>
              ))}
            </select>
          </div>

          {/* Play Controls */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              再生制御
            </label>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={`w-full p-2 rounded-md text-white font-medium ${
                isPlaying ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
              }`}
            >
              {isPlaying ? '停止' : '再生'}
            </button>
          </div>
        </div>
      </div>

      {/* Animation Viewer */}
      <div className="bg-white shadow rounded-lg p-6">
        {animationData ? (
          <AnimationViewer
            animationData={animationData}
            selectedForm={selectedForm}
            selectedAnimation={selectedAnimation}
            isPlaying={isPlaying}
            onStop={() => setIsPlaying(false)}
          />
        ) : (
          <div className="flex justify-center items-center h-64">
            <div className="text-lg text-gray-500">アニメーションデータが読み込まれていません</div>
          </div>
        )}
      </div>
    </div>
  );
}