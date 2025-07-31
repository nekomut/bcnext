// 既存のpublic/data/animデータを使用して、common/util/animベースのシステム向けにデータを変換

import { AnimationData, ImgCut, MaModel, MaAnim, Part } from './types';

/**
 * tbcmlベースのJSONデータをcommon/util/animベースの構造に変換
 */
export async function loadAnimationData(unitId: string): Promise<AnimationData | null> {
  try {
    // JSONデータを読み込み
    const response = await fetch(`/data/anim/${unitId}.json`);
    if (!response.ok) {
      console.warn(`アニメーションデータが見つかりません: ${unitId}`);
      return null;
    }
    
    const jsonData = await response.json();
    console.log(`Unit ${unitId} JSONデータ読み込み完了:`, Object.keys(jsonData));
    
    // 最初に見つかったフォームのデータを使用（通常は 'f'）
    const formKeys = Object.keys(jsonData);
    if (formKeys.length === 0) {
      console.warn(`フォームデータが見つかりません: ${unitId}`);
      return null;
    }
    
    const firstFormKey = formKeys[0];
    const formData = jsonData[firstFormKey];
    
    if (!formData.imgcut || !formData.mamodel) {
      console.warn(`必要なデータが不足しています: ${unitId}`);
      return null;
    }
    
    // ImgCut変換
    const imgcut = convertImgCut(formData.imgcut);
    
    // MaModel変換
    const mamodel = convertMaModel(formData.mamodel);
    
    // MaAnim変換（複数のアニメーション）
    const maanim: { [key: string]: MaAnim } = {};
    
    // tbcmlフォーマットのアニメーションキーを検索
    const animKeys = Object.keys(formData).filter(key => key.startsWith('maanim'));
    
    for (const animKey of animKeys) {
      const animData = formData[animKey];
      if (animData) {
        maanim[animKey] = convertMaAnim(animData);
      }
    }
    
    console.log(`Unit ${unitId} 変換完了 - アニメーション数: ${Object.keys(maanim).length}`);
    
    return {
      imgcut,
      mamodel, 
      maanim
    };
    
  } catch (error) {
    console.error(`アニメーションデータの読み込みエラー (${unitId}):`, error);
    return null;
  }
}

/**
 * tbcmlのimgcutデータをImgCutクラスに変換
 */
function convertImgCut(imgcutData: unknown[]): ImgCut {
  const cuts: number[][] = [];
  const strs: string[] = [];
  
  for (const item of imgcutData) {
    if (Array.isArray(item) && item.length >= 4) {
      // [x, y, w, h, name] 形式
      cuts.push([item[0], item[1], item[2], item[3]]);
      strs.push(item[4] || '');
    }
  }
  
  return new ImgCut({
    name: 'sprite',
    n: cuts.length,
    cuts,
    strs
  });
}

/**
 * tbcmlのmamodelデータをMaModelクラスに変換
 */
function convertMaModel(mamodelData: unknown[]): MaModel {
  const parts: number[][] = [];
  const strs0: string[] = [];
  const strs1: string[] = [];
  
  // データ構造の解析
  // [0] ["[modelanim:model]"]
  // [1] [パーツ数]
  // [2] [設定数]
  // [3以降] パーツデータ
  // [パーツ数+3] ints設定
  // [パーツ数+4] strs1の数
  // [パーツ数+5以降] strs1エントリ
  
  let currentIndex = 3; // パーツデータ開始位置
  
  // パーツ数を取得（インデックス2が正しいパーツ数）
  const partsCount = Array.isArray(mamodelData[2]) ? mamodelData[2][0] : 0;
  
  // パーツデータを処理
  for (let i = 0; i < partsCount && currentIndex < mamodelData.length; i++, currentIndex++) {
    const item = mamodelData[currentIndex];
    
    if (Array.isArray(item) && item.length >= 13) {
      // JSONフォーマット: [parent, unitId, cutId, zDepth, baseX, baseY, pivotX, pivotY, baseScaleX, baseScaleY, baseRotation, baseOpacity, glow, name?]
      // common/util/animフォーマットに変換: [parent, sprite, x, y, 0, 0, 0, 0, scaleX, scaleY, rotation, opacity, glow, extra]
      
      const part = [
        item[0],   // parent
        item[2],   // cutId (sprite)  
        item[4],   // baseX (x)
        item[5],   // baseY (y)
        0,         // 未使用
        item[6],   // pivotX
        item[7],   // pivotY
        0,         // 未使用
        item[8],   // baseScaleX (scaleX)
        item[9],   // baseScaleY (scaleY)
        item[10],  // baseRotation (rotation)
        item[11],  // baseOpacity (opacity)
        item[12],  // glow
        0          // extra
      ];
      
      parts.push(part);
      // nameはインデックス13にあり、存在しない場合もある
      strs0.push(item.length > 13 ? (item[13] || '') : '');
    }
  }
  
  // ints設定を飛ばす
  currentIndex++; // [パーツ数+3] ints設定をスキップ
  
  // strs1の数を取得
  const strs1Count = Array.isArray(mamodelData[currentIndex]) ? mamodelData[currentIndex][0] : 0;
  currentIndex++; // strs1数の次の位置へ
  
  // strs1エントリを処理
  for (let i = 0; i < strs1Count && currentIndex < mamodelData.length; i++, currentIndex++) {
    const item = mamodelData[currentIndex];
    
    if (Array.isArray(item) && item.length > 0) {
      // strs1エントリの最後の要素が名前文字列
      const lastElement = item[item.length - 1];
      strs1.push(typeof lastElement === 'string' ? lastElement : '');
    }
  }
  
  return new MaModel({
    n: parts.length,
    m: strs1Count, // 実際のstrs1数
    ints: [1000, 3600, 1000], // [scale, angle, extra]
    parts,
    confs: [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]], // デフォルトコンフィグ
    strs0,
    strs1
  });
}

/**
 * tbcmlのmaanimデータをMaAnimクラスに変換
 */
function convertMaAnim(maanimData: unknown[]): MaAnim {
  const parts: Part[] = [];
  
  // データ構造の解析
  // [0] ["[modelanim:animation]"] - ヘッダー
  // [1] [version] - バージョン
  // [2] [keyframe_group_count] - キーフレームグループ数
  // [3+] キーフレームグループデータ
  
  let currentIndex = 3; // キーフレームグループ開始位置
  
  // キーフレームグループ数を取得
  const groupCount = Array.isArray(maanimData[2]) ? maanimData[2][0] : 0;
  
  for (let groupIndex = 0; groupIndex < groupCount && currentIndex < maanimData.length; groupIndex++) {
    // グループヘッダーを取得
    const groupHeader = maanimData[currentIndex];
    
    if (Array.isArray(groupHeader) && groupHeader.length >= 2) {
      const partId = groupHeader[0];
      const modifType = groupHeader[1];
      const loop = groupHeader.length > 2 ? groupHeader[2] : -1;
      const offset = groupHeader.length > 3 ? groupHeader[3] : 0;
      const extra = groupHeader.length > 4 ? groupHeader[4] : 0;
      const name = groupHeader.length > 5 ? (groupHeader[5] || '') : '';
      
      currentIndex++; // 次の要素（キーフレーム数）へ
      
      // キーフレーム数を取得
      const keyframeCount = Array.isArray(maanimData[currentIndex]) ? maanimData[currentIndex][0] : 0;
      currentIndex++; // キーフレームデータ開始位置へ
      
      // キーフレームデータを変換
      const moves: number[][] = [];
      
      for (let i = 0; i < keyframeCount && currentIndex < maanimData.length; i++, currentIndex++) {
        const keyframe = maanimData[currentIndex];
        
        if (Array.isArray(keyframe) && keyframe.length >= 2) {
          // JSONフォーマット: [frame, value, easing?, easingParam?]
          moves.push([
            keyframe[0], // frame
            keyframe[1], // value
            keyframe.length > 2 ? keyframe[2] : 0, // easing
            keyframe.length > 3 ? keyframe[3] : 0  // easingParam
          ]);
        }
      }
      
      // Partオブジェクトを作成
      const part = new Part({
        ints: [partId, modifType, loop, offset, extra],
        name,
        n: moves.length,
        moves,
        max: 0,
        off: 0,
        fir: 0
      });
      
      parts.push(part);
    }
  }
  
  return new MaAnim({
    n: parts.length,
    parts,
    max: 1,
    len: 1
  });
}

/**
 * 画像データを読み込んでCanvasに変換（anim0の実装を参考に簡略化）
 */
export async function loadUnitImage(unitId: string): Promise<HTMLCanvasElement | null> {
  try {
    // anim0の方式を参考にした画像データ読み込み
    const response = await fetch(`/data/anim/${unitId}`);
    if (!response.ok) {
      console.warn(`画像データが見つかりません: ${unitId}`);
      return null;
    }
    
    const text = await response.text();
    
    if (!text || text.trim().length === 0) {
      console.warn(`空の画像データ: ${unitId}`);
      return null;
    }
    
    // 最初の有効な画像データを取得（anim0の方式）
    const lines = text.trim().split('\n').filter(line => {
      return line.length > 0 && (line.startsWith('data:image/') || line.length > 100);
    });
    
    if (lines.length === 0) {
      console.warn(`有効な画像データが見つかりません: ${unitId}`);
      return null;
    }
    
    let imageSrc = lines[0];
    
    // data:image/ プレフィックスがない場合は追加
    if (!imageSrc.startsWith('data:image/')) {
      imageSrc = `data:image/png;base64,${imageSrc}`;
    }
    
    // 画像を作成
    const img = new Image();
    await new Promise<void>((resolve, reject) => {
      img.onload = () => {
        console.log(`画像読み込み成功 (${unitId}): ${img.width}x${img.height}`);
        resolve();
      };
      img.onerror = () => {
        console.error(`画像の作成に失敗 (${unitId})`);
        reject(new Error(`Image load failed for unit ${unitId}`));
      };
      img.src = imageSrc;
    });
    
    // Canvasに描画
    const canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      throw new Error(`2Dコンテキストの取得に失敗: ${unitId}`);
    }
    
    ctx.drawImage(img, 0, 0);
    
    console.log(`Unit ${unitId} 画像読み込み完了: ${img.width}x${img.height}`);
    return canvas;
    
  } catch (error) {
    console.error(`画像データの読み込みエラー (${unitId}):`, error instanceof Error ? error.message : String(error));
    return null;
  }
}

/**
 * 複数フォーム対応の統合アニメーションデータローダー
 */
export async function loadMultiFormAnimationData(unitId: string): Promise<{ [form: string]: AnimationData } | null> {
  try {
    const response = await fetch(`/data/anim/${unitId}.json`);
    if (!response.ok) {
      return null;
    }
    
    const jsonData = await response.json();
    const result: { [form: string]: AnimationData } = {};
    
    // 各フォームのデータを変換
    for (const [formKey, formData] of Object.entries(jsonData)) {
      if (typeof formData === 'object' && formData !== null) {
        const typedFormData = formData as Record<string, unknown>;
        
        if (typedFormData.imgcut && typedFormData.mamodel) {
          const imgcut = convertImgCut(typedFormData.imgcut as unknown[]);
          const mamodel = convertMaModel(typedFormData.mamodel as unknown[]);
          
          const maanim: { [key: string]: MaAnim } = {};
          const animKeys = Object.keys(typedFormData).filter(key => key.startsWith('maanim'));
          
          for (const animKey of animKeys) {
            const animData = typedFormData[animKey];
            if (animData) {
              maanim[animKey] = convertMaAnim(animData as unknown[]);
            }
          }
          
          result[formKey] = { imgcut, mamodel, maanim };
        }
      }
    }
    
    return Object.keys(result).length > 0 ? result : null;
    
  } catch (error) {
    console.error(`マルチフォームアニメーションデータの読み込みエラー (${unitId}):`, error);
    return null;
  }
}