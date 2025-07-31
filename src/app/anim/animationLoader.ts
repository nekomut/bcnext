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
  
  for (const item of mamodelData) {
    if (Array.isArray(item) && item.length >= 13) {
      // tbcmlフォーマット: [parent, sprite, x, y, z, pivotX, pivotY, scaleX, scaleY, rotation, opacity, glow, name]
      // common/util/animフォーマットに変換: [parent, sprite, x, y, 0, 0, 0, 0, scaleX, scaleY, rotation, opacity, glow, extra]
      
      const part = [
        item[0],   // parent
        item[1],   // sprite  
        item[2],   // x
        item[3],   // y
        0,         // 未使用
        item[5],   // pivotX
        item[6],   // pivotY
        0,         // 未使用
        item[7],   // scaleX
        item[8],   // scaleY
        item[9],   // rotation
        item[10],  // opacity
        item[11],  // glow
        0          // extra
      ];
      
      parts.push(part);
      strs0.push(item[12] || ''); // name
    }
  }
  
  return new MaModel({
    n: parts.length,
    m: 2, // デフォルトコンフィグ数
    ints: [1000, 3600, 1000], // [scale, angle, extra]
    parts,
    confs: [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]], // デフォルトコンフィグ
    strs0,
    strs1: ['default', 'default']
  });
}

/**
 * tbcmlのmaanimデータをMaAnimクラスに変換
 */
function convertMaAnim(maanimData: unknown[]): MaAnim {
  const parts: Part[] = [];
  
  for (const partData of maanimData) {
    if (Array.isArray(partData) && partData.length >= 2) {
      // tbcmlフォーマット: [partId, modifType, loop, offset, extra, name], [moves...]
      const [partInfo, ...movesData] = partData;
      
      if (Array.isArray(partInfo) && partInfo.length >= 2) {
        const partId = partInfo[0];
        const modifType = partInfo[1];
        const loop = partInfo.length > 2 ? partInfo[2] : -1;
        const offset = partInfo.length > 3 ? partInfo[3] : 0;
        const name = partInfo.length > 5 ? partInfo[5] : '';
        
        // キーフレームデータを変換
        const moves: number[][] = [];
        
        for (const moveGroup of movesData) {
          if (Array.isArray(moveGroup)) {
            for (const move of moveGroup) {
              if (Array.isArray(move) && move.length >= 2) {
                // tbcmlフォーマット: [frame, value, easing, easingParam]
                moves.push([
                  move[0], // frame
                  move[1], // value
                  move.length > 2 ? move[2] : 0, // easing
                  move.length > 3 ? move[3] : 0  // easingParam
                ]);
              }
            }
          }
        }
        
        // Partオブジェクトを作成
        const part = new Part({
          ints: [partId, modifType, loop, offset, 0],
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
  }
  
  return new MaAnim({
    n: parts.length,
    parts,
    max: 1,
    len: 1
  });
}

/**
 * 画像データを読み込んでCanvasに変換
 */
export async function loadUnitImage(unitId: string): Promise<HTMLCanvasElement | null> {
  try {
    // Base64画像データを読み込み
    const response = await fetch(`/data/anim/${unitId}`);
    if (!response.ok) {
      console.warn(`画像データが見つかりません: ${unitId}`);
      return null;
    }
    
    const base64Data = await response.text();
    
    // 画像を作成
    const img = new Image();
    await new Promise((resolve, reject) => {
      img.onload = resolve;
      img.onerror = reject;
      img.src = `data:image/png;base64,${base64Data}`;
    });
    
    // Canvasに描画
    const canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.drawImage(img, 0, 0);
    }
    
    console.log(`Unit ${unitId} 画像読み込み完了: ${img.width}x${img.height}`);
    return canvas;
    
  } catch (error) {
    console.error(`画像データの読み込みエラー (${unitId}):`, error);
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