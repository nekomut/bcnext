'use client';

import Link from 'next/link';
import { useState, useEffect, useCallback, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import AnimationViewer from './AnimationViewer';
import { unitNamesData, UnitNameData } from '@/data/unit-names';
import { loadMultiFormAnimationData } from './animationLoader';
import { AnimationData } from './types';
import IconManager from './IconManager';
import { getUnitData } from '../unit/types';

function AnimationPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // URLパラメータから初期値を取得（デフォルト：未選択状態）
  const initialUnit = searchParams.get('unit');
  const initialForm = searchParams.get('form'); // null if not specified
  const initialAnim = searchParams.get('anim'); // null if not specified
  const initialPlaying = searchParams.get('playing') !== 'false'; // デフォルト：再生

  const [selectedUnit, setSelectedUnit] = useState(initialUnit || '');
  const [inputUnit, setInputUnit] = useState(initialUnit || ''); // 入力中の値を管理
  const [animationData, setAnimationData] = useState<{ [form: string]: AnimationData } | null>(null);
  const [selectedForm, setSelectedForm] = useState(initialForm || 'f');
  const [selectedAnimation, setSelectedAnimation] = useState(initialAnim || 'maanim00');
  const [isPlaying, setIsPlaying] = useState(initialPlaying);
  const [loading, setLoading] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState({ current: 0, total: 0, message: '' });

  // Frame control states
  const [currentFrame, setCurrentFrame] = useState(0);

  // Unit selection UI states (unitスタイル)
  const [selectedUnitName, setSelectedUnitName] = useState<string>('');
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [nameFilter, setNameFilter] = useState<string>('');

  // ナビゲーション順序設定
  const [navigationOrder, setNavigationOrder] = useState<'pokedex' | 'id'>('pokedex');

  // Form icons state
  const [formIcons, setFormIcons] = useState<string[]>([]);
  const [iconsLoading, setIconsLoading] = useState(true);

  const availableForms = animationData ? Object.keys(animationData) : [];
  const availableAnimations = availableForms.length > 0 && animationData && animationData[selectedForm] ?
    Object.keys(animationData[selectedForm].maanim || {}) : [];

  // フィルタリングされたユニット名リスト
  const filteredUnits = unitNamesData.filter(unit =>
    unit.displayName.toLowerCase().includes(nameFilter.toLowerCase()) ||
    unit.forms.some(form => form.toLowerCase().includes(nameFilter.toLowerCase()))
  );

  // ナビゲーション用のユニットリストを取得する関数
  const getNavigationUnits = async (): Promise<{unitId: number, sortKey?: number}[]> => {
    const units: {unitId: number, sortKey?: number}[] = [];

    for (const unitName of unitNamesData) {
      try {
        const unitData = await getUnitData(parseInt(unitName.unitId));
        if (unitData && unitData.isVisible !== false) {
          units.push({
            unitId: parseInt(unitName.unitId),
            sortKey: unitData.sortKey
          });
        }
      } catch {
        // ユニットデータが見つからない場合はスキップ
      }
    }

    // ナビゲーション順序でソート
    if (navigationOrder === 'pokedex') {
      units.sort((a, b) => {
        const aSortKey = a.sortKey ?? 999999;
        const bSortKey = b.sortKey ?? 999999;
        return aSortKey - bSortKey;
      });
    } else {
      units.sort((a, b) => a.unitId - b.unitId);
    }

    return units;
  };

  // 前後のユニットIDを取得する関数
  const getAdjacentUnitIds = async (currentId: number): Promise<{prevId?: number, nextId?: number}> => {
    const units = await getNavigationUnits();
    const currentIndex = units.findIndex(unit => unit.unitId === currentId);

    if (currentIndex === -1) {
      return {};
    }

    return {
      prevId: currentIndex > 0 ? units[currentIndex - 1].unitId : undefined,
      nextId: currentIndex < units.length - 1 ? units[currentIndex + 1].unitId : undefined
    };
  };

  // URLパラメータを更新する関数
  const updateURL = useCallback((params: { unit?: string; form?: string; anim?: string; playing?: boolean }) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());

    if (params.unit !== undefined) newSearchParams.set('unit', params.unit);
    if (params.form !== undefined) newSearchParams.set('form', params.form);
    if (params.anim !== undefined) newSearchParams.set('anim', params.anim);
    if (params.playing !== undefined) newSearchParams.set('playing', params.playing.toString());

    router.replace(`?${newSearchParams.toString()}`, { scroll: false });
  }, [router, searchParams]);


  // ユニット名選択時の処理（unitスタイル）
  const handleUnitNameSelect = (unit: UnitNameData) => {
    setSelectedUnitName(unit.displayName);
    setNameFilter('');
    setIsDropdownOpen(false);

    handleUnitChange(unit.unitId);
  };

  // キーボード入力ハンドラ
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleUnitSearch();
    }
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

  // ユニット検索処理（unitスタイル）
  const handleUnitSearch = async () => {
    const value = inputUnit.trim();
    if (value && !isNaN(Number(value))) {
      const formattedId = Number(value).toString().padStart(3, '0');
      const success = await handleUnitChange(formattedId);
      if (!success) {
        alert(`ユニット ${formattedId} のアニメーションデータが見つかりません`);
      }
    }
  };

  const handleUnitChange = useCallback(async (unitId: string): Promise<boolean> => {
    setSelectedUnit(unitId);
    setInputUnit(unitId); // 入力フィールドも同期
    setLoading(true);
    setLoadingProgress({ current: 0, total: 3, message: 'アニメーションデータを読み込み中...' });

    try {
      // Step 1: アニメーションデータの読み込み（common/util/animベース）
      setLoadingProgress({ current: 1, total: 3, message: 'アニメーションデータを読み込み中...' });
      const newAnimationData = await loadMultiFormAnimationData(unitId);

      if (newAnimationData) {
        setAnimationData(newAnimationData);

        // URLパラメータを更新
        updateURL({ unit: unitId });

        // ユニット名を同期
        const unitData = unitNamesData.find(unit => unit.unitId === unitId);
        if (unitData) {
          setSelectedUnitName(unitData.displayName);
        }

        // Step 2: アイコンデータの読み込み
        setLoadingProgress({ current: 2, total: 3, message: 'アイコンを読み込み中...' });
        try {
          const icons = await IconManager.loadUnitIcons(unitId);
          setFormIcons(icons);
        } catch {
          setFormIcons([]);
        } finally {
          setIconsLoading(false);
        }

        setLoadingProgress({ current: 3, total: 3, message: '読み込み完了' });

        // 短い遅延で読み込み完了を表示
        setTimeout(() => {
          setLoading(false);
        }, 300);

        return true;
      } else {
        setLoadingProgress({ current: 0, total: 3, message: 'アニメーションデータが見つかりません' });
        setLoading(false);
        return false;
      }
    } catch {
      setLoadingProgress({ current: 0, total: 3, message: 'アニメーションデータの読み込みに失敗しました' });
      setLoading(false);
      return false;
    }
  }, [updateURL]);

  // アイコン読み込み処理は削除（common/util/animベースでは不要）

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // URLパラメータ監視は削除（ボタン処理内でのみURL更新）

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

        const formData = animationData[targetForm];
        const animations = formData ? Object.keys(formData.maanim || {}) : [];
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
                className="bg-orange-400 h-2.5 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>

          {/* Animated Loading Dots */}
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    );
  }


  return (
    <div>
      <Link href="/" className="font-bold hover:text-orange-500 px-1">bcnext</Link>|
      <Link href="/stage" className="hover:text-orange-500 px-1">Stage</Link>|
      <Link href="/unit" className="hover:text-orange-500 px-1">Unit</Link>|
      <Link href="/seek" className="hover:text-orange-500 px-1">Seek</Link>|
      <Link href="/rare" className="hover:text-orange-500 px-1">Rare</Link>|
      <Link href="/normal" className="hover:text-orange-500 px-1">Normal</Link>|
      <Link href="/event" className="hover:text-orange-500 px-1">Event</Link>|
      <hr />

    <div className="container mx-auto p-1">

      {/* ユニット検索UI（unitスタイル） */}
      <div className="p-1">
        <div className="mb-1 flex gap-1 items-end">
          {/* 前のUnitボタン - 左端 */}
          {selectedUnit && !isNaN(parseInt(selectedUnit)) && (
            <button
              onClick={async () => {
                const currentId = parseInt(selectedUnit);
                const { prevId } = await getAdjacentUnitIds(currentId);

                if (prevId !== undefined) {
                  const formattedId = prevId.toString().padStart(3, '0');
                  await handleUnitChange(formattedId);
                }
              }}
              disabled={loading}
              className="bg-orange-400 hover:bg-orange-500 font-semibold text-xs text-gray-700 px-0 py-0.5 rounded disabled:opacity-50 w-10"
            >
              ◀
            </button>
          )}

          <div className="flex items-center gap-1">
            <label htmlFor="unitId" className="text-xs text-gray-200">Unit ID</label>
            <input
              type="text"
              id="unitId"
              name="unitId"
              value={inputUnit}
              onChange={(e) => setInputUnit(e.target.value)}
              onBlur={(e) => {
                const value = e.target.value.trim();
                if (value && !isNaN(Number(value))) {
                  setInputUnit(Number(value).toString());
                }
              }}
              onKeyDown={handleKeyDown}
              className="border rounded px-1 py-0.5 text-xs w-8 sm:w-24 text-gray-900 text-center"
            />
          </div>

          {/* ユニット名プルダウン */}
          <div className="relative flex-1">
            <div className="relative">
              <input
                type="text"
                value={isDropdownOpen ? nameFilter : selectedUnitName}
                onChange={(e) => {
                  setNameFilter(e.target.value);
                  setIsDropdownOpen(true);
                }}
                onFocus={() => {
                  setIsDropdownOpen(true);
                  setNameFilter('');
                }}
                onBlur={() => {
                  // 少し遅延させてドロップダウンのクリックを可能にする
                  setTimeout(() => setIsDropdownOpen(false), 200);
                }}
                placeholder="ユニット名で選択..."
                className="border rounded px-1 py-0.5 text-xs w-full text-gray-900"
              />

              {isDropdownOpen && (
                <div className="absolute z-10 w-full max-h-60 overflow-y-auto bg-white border border-gray-300 rounded-md shadow-lg mt-1">
                  {filteredUnits.slice(0, 50).map((unit) => (
                    <div
                      key={unit.unitId}
                      className="px-2 py-1 hover:bg-gray-100 cursor-pointer text-xs text-gray-900"
                      onMouseDown={(e) => {
                        e.preventDefault(); // onBlurより先に実行されるように
                        handleUnitNameSelect(unit);
                      }}
                    >
                      {unit.displayName}
                    </div>
                  ))}

                  {filteredUnits.length > 50 && (
                    <div className="px-2 py-1 text-xs text-gray-500 italic">
                      検索結果が多すぎます。キーワードを絞ってください。
                    </div>
                  )}

                  {filteredUnits.length === 0 && nameFilter && (
                    <div className="px-2 py-1 text-xs text-gray-500 italic">
                      該当するユニットが見つかりません。
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* ソート順選択プルダウン */}
          <div className="flex items-center gap-1">
            <select
              value={navigationOrder}
              onChange={(e) => setNavigationOrder(e.target.value as 'pokedex' | 'id')}
              className="border rounded px-1 py-0.5 text-xs text-gray-900"
            >
              <option value="pokedex">図鑑順</option>
              <option value="id">ID順</option>
            </select>
          </div>

          {/* 次のUnitボタン - 右端 */}
          {selectedUnit && !isNaN(parseInt(selectedUnit)) && (
            <button
              onClick={async () => {
                const currentId = parseInt(selectedUnit);
                const { nextId } = await getAdjacentUnitIds(currentId);

                if (nextId !== undefined) {
                  const formattedId = nextId.toString().padStart(3, '0');
                  await handleUnitChange(formattedId);
                }
              }}
              disabled={loading}
              className="bg-orange-400 hover:bg-orange-500 font-semibold text-xs text-gray-700 px-0 py-0.5 rounded disabled:opacity-50 w-10"
            >
              ▶
            </button>
          )}
        </div>
      </div>

      {/* コントロール */}
      <div className="bg-amber-50 shadow rounded p-2 mb-1">

        {/* Form Tabs（anim0スタイル） */}
        {availableForms.length > 1 && (
          <div className="flex mb-1 justify-between items-start">
            <div className="flex w-4/5">
              {availableForms.map((form, index) => (
                <div key={form} className="w-1/4 px-0.5">
                  <button
                    onClick={() => {
                      setSelectedForm(form);
                      updateURL({ form: form });
                    }}
                    className={`w-full h-14 flex items-center justify-center rounded transition-colors ${
                      selectedForm === form
                        ? 'bg-orange-400'
                        : 'bg-amber-50 hover:bg-amber-50'
                    }`}
                  >
                    {/* Form Icon */}
                    {!iconsLoading && formIcons[index] && (
                      <Image
                        src={`data:image/png;base64,${formIcons[index]}`}
                        alt={getFormDisplayName(form, selectedUnit)}
                        width={70}
                        height={70}
                        className="rounded object-cover"
                      />
                    )}
                  </button>
                </div>
              ))}
            </div>

            {/* Unit Calculator Link */}
            {selectedUnit && (
              <Link
                href={`/unit?unit=${selectedUnit}&form=${selectedForm}`}
                className="text-xs text-gray-500 hover:text-gray-700 hover:underline font-mono font-bold"
              >
                unit{selectedUnit}
              </Link>
            )}
          </div>
        )}

        {/* Play Controls - レイアウト調整 */}
        {availableForms.length === 1 ? (
          /* 単一フォーム: フォームタブレイアウトと同じ構造 */
          <div className="flex justify-between items-start">
            <div className="flex w-4/5 gap-0">
              {/* Animation Buttons */}
              {availableAnimations.map(anim => (
                <div key={anim} className="w-1/4 px-0.5">
                  <button
                    onClick={() => {
                      setSelectedAnimation(anim);
                      updateURL({ anim: anim });
                    }}
                    className={`w-full p-1 rounded-sm font-medium font-mono text-xs ${
                      selectedAnimation === anim
                        ? 'bg-amber-500 hover:bg-amber-500 text-gray-600 border-gray-500'
                        : 'bg-gray-200 hover:bg-gray-300 text-gray-400 border-gray-400'
                    }`}
                  >
                    {getAnimationDisplayName(anim)}
                  </button>
                </div>
              ))}

              {/* Play Controls */}
              <div className="w-1/4 px-0.5">
                <button
                  onClick={() => {
                    const newPlaying = !isPlaying;
                    setIsPlaying(newPlaying);
                    updateURL({ playing: newPlaying });
                  }}
                  className={`w-full p-1 rounded-md text-white font-medium font-mono text-xs ${
                    isPlaying ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
                  }`}
                >
                  {isPlaying ? '停止' : '再生'}
                </button>
              </div>
            </div>

            {/* Unit Calculator Link - 右寄せ・上付き */}
            {selectedUnit && (
              <Link
                href={`/unit?unit=${selectedUnit}`}
                className="text-xs text-gray-500 hover:text-gray-700 hover:underline font-mono font-bold"
              >
                unit{selectedUnit}
              </Link>
            )}
          </div>
        ) : (
          /* 複数フォーム: 従来のレイアウト */
          <div className="flex gap-0">
            {/* Animation Buttons */}
            {availableAnimations.map(anim => (
              <div key={anim} className="flex-1 px-0.5">
                <button
                  onClick={() => {
                    setSelectedAnimation(anim);
                    updateURL({ anim: anim });
                  }}
                  className={`w-full py-0.5 rounded border font-medium font-mono text-xs ${
                    selectedAnimation === anim
                      ? 'bg-orange-400 hover:bg-orange-500 text-gray-700 border-gray-700'
                      : 'bg-gray-200 hover:bg-gray-300 text-gray-400 border-gray-400'
                  }`}
                >
                  {getAnimationDisplayName(anim)}
                </button>
              </div>
            ))}

            {/* Play Controls */}
            <div className="w-1/5 px-0.5">
              <button
                onClick={() => {
                  const newPlaying = !isPlaying;
                  setIsPlaying(newPlaying);
                  updateURL({ playing: newPlaying });
                }}
                className={`w-full py-0.5 rounded border border-gray-600 text-white font-medium font-mono text-xs ${
                  isPlaying ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
                }`}
              >
                {isPlaying ? '停止' : '再生'}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Animation Viewer */}
      <div className="bg-amber-50 shadow rounded p-1">
        {animationData ? (
          <AnimationViewer
            animationData={animationData}
            selectedForm={selectedForm}
            selectedAnimation={selectedAnimation}
            isPlaying={isPlaying}
            unitId={selectedUnit}
            currentFrame={currentFrame}
            onFrameChange={setCurrentFrame}
          />
        ) : (
          <div className="flex justify-center items-center h-64">
            <div className="text-[12px] text-gray-700">
              {selectedUnit ? 'アニメーションデータが読み込まれていません' : 'ユニットを選択してください'}
            </div>
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
      <div className="container mx-auto p-2">
        <div className="flex flex-col justify-center items-center h-64 space-y-4">
          <div className="text-lg font-mono">読み込み中...</div>
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    }>
      <AnimationPageContent />
    </Suspense>
  );
}