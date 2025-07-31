// common/util/anim をベースにしたTypeScript型定義
// 各クラスは個別のTSXファイルに分離

import type { ImgCut } from './ImgCut';
import type { MaModel } from './MaModel';
import type { MaAnim } from './MaAnim';

// Java互換アニメーションシステムのコアクラス
export { ImgCut, type ImgCutData } from './ImgCut';
export { Part, type PartData } from './Part';
export { MaModel, type MaModelData } from './MaModel';
export { MaAnim, type MaAnimData } from './MaAnim';
export { EPart } from './EPart';
export { EAnimI } from './EAnimI';
export { EAnimD } from './EAnimD';


/**
 * Java互換アニメーションデータ構造
 */
export interface AnimationData {
  imgcut: ImgCut;
  mamodel: MaModel;
  maanim: { [key: string]: MaAnim };
}