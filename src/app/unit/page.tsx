'use client'

import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import { sozai } from '@/data/materials';
import { UnitDisplay } from './UnitDisplay';
import { UnitData, getUnitData } from './types';

export default function Page() {
  const [unitId, setUnitId] = useState<string>('');
  const [currentUnit, setCurrentUnit] = useState<UnitData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleUnitSearch = async () => {
    const id = parseInt(unitId);
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

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleUnitSearch();
    }
  };

  return (
    <div>
      <Link href="/" className="font-bold hover:text-green-600 px-1">bcnext</Link>|
      <Link href="/normal" className="hover:text-green-600 px-1">Normal</Link>|
      <Link href="/rare" className="hover:text-green-600 px-1">Rare</Link>|
      <Link href="/event" className="hover:text-green-600 px-1">Event</Link>|
      <Link href="/seek" className="hover:text-green-600 px-1">Seek</Link>|
      <Link href="/unit" className="text-green-500 hover:text-green-600 px-1">Unit</Link>|
      <hr />
      <Image src= {`data:image/png;base64,${sozai.new}`} alt="img_new" width={20} height={0} />

      {/* ユニット検索UI */}
      <div className="p-2">
        <div className="mb-2 flex gap-2 items-end flex-wrap">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Unit ID</label>
            <input
              type="text"
              placeholder="000, 025, etc."
              value={unitId}
              onChange={(e) => setUnitId(e.target.value)}
              onKeyPress={handleKeyPress}
              className="border rounded px-2 py-1 text-sm w-32"
            />
          </div>
          <button
            onClick={handleUnitSearch}
            disabled={loading}
            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm disabled:opacity-50"
          >
            {loading ? 'Loading...' : 'Search'}
          </button>
        </div>

        {/* エラーメッセージ */}
        {error && (
          <div className="text-red-500 mb-2 text-sm">{error}</div>
        )}

        {/* ユニット表示 */}
        {currentUnit && (
          <UnitDisplay
            unitData={currentUnit}
          />
        )}
      </div>
    </div>
  );
}
