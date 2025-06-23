'use client'

import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { sozai } from '@/data/materials';
import { UnitDisplay } from './UnitDisplay';
import { UnitData, getUnitData } from './types';

function UnitPageContent() {
  const [unitId, setUnitId] = useState<string>('');
  const [level, setLevel] = useState<number>(30);
  const [plusLevel, setPlusLevel] = useState<number>(0);
  const [formId, setFormId] = useState<number>(0);
  const [currentUnit, setCurrentUnit] = useState<UnitData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleUnitSearchWithId = async (id: number) => {
    if (isNaN(id) || id < 0) {
      setError('Invalid unit ID');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const unitData = await getUnitData(id);
      if (unitData) {
        setCurrentUnit(unitData);
      } else {
        setError(`Unit ${id.toString().padStart(3, '0')} not found`);
        setCurrentUnit(null);
      }
    } catch {
      setError(`Unit ${id.toString().padStart(3, '0')} not found`);
      setCurrentUnit(null);
    } finally {
      setLoading(false);
    }
  };

  // URLパラメータを読み込む
  useEffect(() => {
    const unitParam = searchParams.get('unit');
    const levelParam = searchParams.get('level');
    const plusParam = searchParams.get('plus');
    const formParam = searchParams.get('form');

    if (unitParam) {
      setUnitId(unitParam);
    }
    if (levelParam) {
      const lvl = parseInt(levelParam);
      if (!isNaN(lvl) && lvl > 0) {
        setLevel(lvl);
      }
    }
    if (plusParam) {
      const plus = parseInt(plusParam);
      if (!isNaN(plus) && plus >= 0) {
        setPlusLevel(plus);
      }
    }
    if (formParam) {
      const form = parseInt(formParam);
      if (!isNaN(form) && form >= 0 && form <= 3) {
        setFormId(form);
      }
    }

    // URLパラメータがある場合は自動で検索
    if (unitParam) {
      handleUnitSearchWithId(parseInt(unitParam));
    }
  }, [searchParams]);

  const handleUnitSearch = async () => {
    const id = parseInt(unitId);
    if (isNaN(id) || id < 0) {
      setError('Invalid unit ID');
      return;
    }

    // URLを更新（Unit IDのみ）
    router.push(`/unit?unit=${id}`);

    await handleUnitSearchWithId(id);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleUnitSearch();
    }
  };

  return (
    <div>
      <div className="flex flex-wrap items-center text-sm sm:text-base">
        <Link href="/" className="font-bold hover:text-green-600 px-1">bcnext</Link><span>|</span>
        <Link href="/normal" className="hover:text-green-600 px-1">Normal</Link><span>|</span>
        <Link href="/rare" className="hover:text-green-600 px-1">Rare</Link><span>|</span>
        <Link href="/event" className="hover:text-green-600 px-1">Event</Link><span>|</span>
        <Link href="/seek" className="hover:text-green-600 px-1">Seek</Link><span>|</span>
        <Link href="/unit" className="text-green-500 hover:text-green-600 px-1">Unit</Link><span>|</span>
      </div>
      <hr />
      

      {/* ユニット検索UI */}
      <div className="p-2">
        <div className="mb-1 flex gap-1 items-end flex-wrap">
          <div className="flex items-center gap-1">
            <label className="text-xs text-white-600">UnitID</label>
            <input
              type="text"
              value={unitId}
              onChange={(e) => setUnitId(e.target.value)}
              onBlur={(e) => {
                const value = e.target.value.trim();
                if (value && !isNaN(Number(value))) {
                  setUnitId(Number(value).toString());
                }
              }}
              onKeyPress={handleKeyPress}
              className="border rounded px-1 py-0.5 text-xs w-20 sm:w-24 text-gray-900"
            />
          </div>
          <button
            onClick={handleUnitSearch}
            disabled={loading}
            className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-0.5 rounded text-xs disabled:opacity-50"
          >
            {loading ? 'Loading...' : 'Search'}
          </button>
          <Image src= {`data:image/png;base64,${sozai.new}`} alt="img_new" width={20} height={0} />
        </div>

        {/* エラーメッセージ */}
        {error && (
          <div className="text-red-500 mb-1 text-xs">{error}</div>
        )}

        {/* ユニット表示 */}
        {currentUnit && (
          <UnitDisplay
            unitData={currentUnit}
            initialLevel={level}
            initialPlusLevel={plusLevel}
            initialFormId={formId}
            onParamsChange={(params) => {
              setLevel(params.level);
              setPlusLevel(params.plusLevel);
              setFormId(params.formId);
              
              // URLを更新
              const currentParams = new URLSearchParams(searchParams);
              currentParams.set('level', params.level.toString());
              currentParams.set('plus', params.plusLevel.toString());
              currentParams.set('form', params.formId.toString());
              router.push(`/unit?${currentParams.toString()}`);
            }}
          />
        )}
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UnitPageContent />
    </Suspense>
  );
}
