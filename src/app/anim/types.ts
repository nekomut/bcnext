// common/util/anim をベースにしたTypeScript型定義
// 各クラスは個別のTSXファイルに分離

import type { ImgCut } from './ImgCut';
import type { MaModel } from './MaModel';
import type { MaAnim } from './MaAnim';

// 各クラスをインポート
export { ImgCut, type ImgCutData } from './ImgCut';
export { Part, type PartData } from './Part';
export { MaModel, type MaModelData } from './MaModel';
export { MaAnim, type MaAnimData } from './MaAnim';

/**
 * アニメーション制御用のパーツエンティティ
 * EPart.java の簡略化版
 */
export interface EPartData {
  id: number;
  parentId: number;
  spriteId: number;
  x: number;
  y: number;
  scaleX: number;
  scaleY: number;
  rotation: number;
  opacity: number;
  visible: boolean;
  glow: boolean;
}

export class EPart {
  public id: number;
  public parentId: number;
  public spriteId: number;
  public x: number;
  public y: number;
  public scaleX: number;
  public scaleY: number;
  public rotation: number;
  public opacity: number;
  public visible: boolean;
  public glow: boolean;

  constructor(modelPart: number[], partName: string, index: number) {
    this.id = index;
    this.parentId = modelPart[0];
    this.spriteId = modelPart[2];
    this.x = modelPart[3];
    this.y = modelPart[4];
    this.scaleX = modelPart[8] / 1000;
    this.scaleY = modelPart[9] / 1000;
    this.rotation = modelPart[10];
    this.opacity = modelPart[11] / 1000;
    this.visible = true;
    this.glow = modelPart[12] === 1; // glow=1の場合、黒い部分を透明化
  }

  // アニメーション値を適用
  public alter(modifType: number, value: number): void {
    switch (modifType) {
      case 0: // VISIBLE
        this.visible = value !== 0;
        break;
      case 1: // POS_X
        this.x = value;
        break;
      case 2: // SPRITE_CHANGE  
        this.spriteId = value;
        break;
      case 3: // POS_Y
        this.y = value;
        break;
      case 4: // SCALE_X_ADD
        this.scaleX += value / 1000;
        break;
      case 5: // POS_X_ADD
        this.x += value;
        break;
      case 6: // POS_Y_ADD
        this.y += value;
        break;
      case 7: // ROTATION_ADD
        this.rotation += value;
        break;
      case 8: // SCALE_Y_ADD
        this.scaleY += value / 1000;
        break;
      case 9: // SCALE_X
        this.scaleX = value / 1000;
        break;
      case 10: // SCALE_Y
        this.scaleY = value / 1000;
        break;
      case 11: // POS_X
        this.x = value;
        break;
      case 12: // POS_Y
        this.y = value;
        break;
      case 13: // ROTATION
        this.rotation = value;
        break;
      case 14: // OPACITY
        this.opacity = value / 1000;
        break;
    }
  }

  public clone(): EPart {
    const newPart = Object.create(EPart.prototype);
    Object.assign(newPart, this);
    return newPart;
  }
}

/**
 * 統合アニメーションデータ構造
 */
export interface AnimationData {
  imgcut: ImgCut;
  mamodel: MaModel;
  maanim: { [key: string]: MaAnim };
}

/**
 * アニメーション状態管理
 */
export interface AnimationState {
  currentFrame: number;
  isPlaying: boolean;
  selectedAnimation: string;
  parts: EPart[];
  sprites: HTMLCanvasElement[];
}