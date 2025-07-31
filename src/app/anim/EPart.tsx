// EPart - Java版 common/util/anim/EPart.java の完全TypeScript実装
// 実行時パーツインスタンス、親子関係による座標変換、Z値ソート対応

import type { MaModel } from './MaModel';
import { P } from './EAnimD';



/**
 * 実行時アニメーションパーツ
 * Java版のcommon/util/anim/EPart.javaの完全移植
 */
export class EPart {
  // 基本プロパティ
  public id: number;
  public img: number;  // spriteId (Java版のimg)
  public layer: number;
  public visible: boolean = true;
  public glow: boolean = false;

  // 座標・変換（Java版と同じフィールド名）
  public pos: P;
  public sca: P;
  public piv: P;
  public angle: number = 0;
  public opa: number = 1;  // opacity (Java版のopa)

  // 親子関係（Java版のfa, entに対応）
  public fa: EPart | null = null;  // 親パーツ参照
  public ent: EPart[];             // 全パーツ配列参照
  public model: MaModel;           // モデル参照

  // 反転フラグ（Java版hf, vf）
  public hf: number = 1;  // 水平反転
  public vf: number = 1;  // 垂直反転

  // ベース値（Java版args配列から）
  public args: number[];

  constructor(
    model: MaModel,
    animInterface: unknown, // EAnimI参照（循環参照回避）
    modelPart: number[], 
    partName: string, 
    index: number, 
    entities: EPart[]
  ) {
    this.id = index;
    this.ent = entities;
    this.model = model;
    this.args = [...modelPart];
    
    // 初期値設定
    this.setValue();
    
    // 親パーツ参照設定（Java版のコンストラクタロジック）
    const parentId = modelPart[0];
    this.fa = (parentId <= -1 || !entities) ? null : entities[parentId];
  }

  /**
   * 初期値設定（Java版setValue()完全再現）
   * args配列からベース値を設定
   */
  public setValue(): void {
    // args配列の構成（Java版と同一）:
    // [0] parent_id, [1] unit_id, [2] img_id, [3] z_depth,
    // [4] x, [5] y, [6] pivot_x, [7] pivot_y,
    // [8] scale_x, [9] scale_y, [10] angle, [11] opacity,
    // [12] glow, [13] name_index

    this.pos = P.newP(this.args[4], this.args[5], this.args[3]);
    this.sca = P.newP(this.args[8] / 1000, this.args[9] / 1000, 1);
    this.piv = P.newP(this.args[6], this.args[7], 0);
    this.angle = this.args[10];
    this.opa = this.args[11] / 1000;
    this.img = this.args[2];
    this.layer = this.args[3]; // Z値をレイヤーとして使用
    this.glow = this.args[12] === 1;
    this.visible = true;
    
    // 反転フラグリセット
    this.hf = 1;
    this.vf = 1;
  }

  /**
   * アニメーション値適用（Java版alter完全再現）
   * Part.update()から呼び出されてパーツの状態を変更
   */
  public alter(modifType: number, value: number): void {
    switch (modifType) {
      case 0: // PARENT - 親パーツ変更
        const newParentId = Math.floor(value);
        this.fa = (newParentId >= 0 && newParentId < this.ent.length) ? 
          this.ent[newParentId] : null;
        break;

      case 1: // ID - パーツID変更
        this.id = Math.floor(value);
        break;

      case 2: // IMG - スプライト変更
        this.img = Math.floor(value);
        break;

      case 4: // POS_X - X座標変更
        this.pos.x = this.args[4] + value;
        break;

      case 5: // POS_Y - Y座標変更
        this.pos.y = this.args[5] + value;
        break;

      case 8: // SCALE_XY - XYスケール同時変更
        const scaleUnit = this.model.ints[0] || 1000;
        const changeScaled = value / scaleUnit;
        this.sca.x = (this.args[8] * changeScaled) / scaleUnit;
        this.sca.y = (this.args[9] * changeScaled) / scaleUnit;
        break;

      case 9: // SCALE_X - Xスケール変更
        const scaleUnitX = this.model.ints[0] || 1000;
        const changeScaledX = value / scaleUnitX;
        this.sca.x = (this.args[8] * changeScaledX) / scaleUnitX;
        break;

      case 10: // SCALE_Y - Yスケール変更
        const scaleUnitY = this.model.ints[0] || 1000;
        const changeScaledY = value / scaleUnitY;
        this.sca.y = (this.args[9] * changeScaledY) / scaleUnitY;
        break;

      case 11: // POS_X_DIRECT - X座標直接設定
        this.pos.x = value;
        break;

      case 12: // POS_Y_DIRECT - Y座標直接設定
        this.pos.y = value;
        break;

      case 13: // ANGLE - 回転変更
        this.angle = value;
        break;

      case 14: // OPACITY - 透明度変更
        this.opa = value / 1000;
        break;

      case 15: // VISIBLE - 表示状態変更
        this.visible = value !== 0;
        break;

      case 16: // HORIZONTAL_FLIP - 水平反転
        this.hf = value !== 0 ? -1 : 1;
        break;

      case 17: // VERTICAL_FLIP - 垂直反転
        this.vf = value !== 0 ? -1 : 1;
        break;

      default:
        console.warn(`EPart: Unknown modifier type: ${modifType}`);
        break;
    }
  }

  /**
   * 親のサイズを継承してサイズ計算（Java版getSize完全再現）
   * scaleUnit正規化と親子関係のスケール継承
   */
  private getSize(): P {
    const mi = 1.0 / (this.model.ints[0] || 1000); // scaleUnit正規化
    
    if (this.fa === null) {
      // ルートパーツ（親なし）
      return this.sca.times(mi * mi);
    }
    
    // 親のサイズを継承
    const parentSize = this.fa.getSize();
    const result = parentSize.times(this.sca).times(mi * mi);
    P.delete();
    return result;
  }

  /**
   * ベースサイズ計算（Java版getBaseSize相当）
   */
  private getBaseSize(includeParent: boolean): P {
    const mi = 1.0 / (this.model.ints[0] || 1000);
    
    if (!includeParent || this.fa === null) {
      return P.newP(this.args[8] * mi, this.args[9] * mi, 1);
    }
    
    const parentSize = this.fa.getBaseSize(true);
    const result = parentSize.times(this.args[8] * mi, this.args[9] * mi);
    P.delete();
    return result;
  }

  /**
   * 親子関係を考慮した座標変換（Java版transform完全再現）
   * 再帰的に親の変換を適用してから自分の変換を適用
   */
  public transform(g: CanvasRenderingContext2D, sizer: P): void {
    // 親の変換を先に適用（再帰的）
    if (this.fa !== null) {
      this.fa.transform(g, sizer);
    }

    if (this.ent[0] !== this) {
      // 通常パーツの変換処理（Java版のロジック完全再現）
      const size = this.getSize();
      const scaledPosition = size.times(sizer).times(this.pos);
      
      g.translate(scaledPosition.x, scaledPosition.y);
      g.scale(this.hf, this.vf);
      
      P.delete();
      P.delete();
    } else {
      // ベースパーツ（Part 0）の特別な変換処理
      // Java版のEPart.javaのelse節を再現
      if (this.model.confs && this.model.confs.length > 0) {
        const confData = this.model.confs[0];
        const baseSize = this.getBaseSize(false);
        const p0 = baseSize.times(confData[2], confData[3]).times(sizer).times(this.hf, this.vf);
        g.translate(-p0.x, -p0.y);
        P.delete();
        P.delete();
      }
      
      const size = this.getSize();
      const p0 = size.times(sizer).times(this.piv).times(this.hf, this.vf);
      g.translate(p0.x, p0.y);
      g.scale(this.hf, this.vf);
      
      P.delete();
      P.delete();
    }

    // 回転適用
    if (this.angle !== 0) {
      const angleUnit = this.model.ints[1] || 3600;
      g.rotate((Math.PI * 2 * this.angle) / angleUnit);
    }
  }

  /**
   * Z値・レイヤーベース比較（Java版compareTo完全再現）
   * 描画順序決定のためのソート用
   */
  public compareTo(other: EPart): number {
    // Z値での比較を優先
    if (other.pos.z !== this.pos.z) {
      return this.pos.z - other.pos.z;
    }
    
    // Z値が同じ場合はレイヤーで比較
    return this.layer - other.layer;
  }



  /**
   * スプライト描画（Java版drawメソッド）
   * Canvasにスプライトを描画する
   */
  public drawPart(
    ctx: CanvasRenderingContext2D,
    origin: P,
    sizer: P,
    spriteImage: HTMLImageElement | null,
    imgcut: { cuts?: number[][]; } | null
  ): void {
    if (!this.visible || this.img < 0 || !spriteImage || !imgcut) {
      return;
    }
    
    try {
      // imgcutからスプライト情報を取得
      if (!imgcut.cuts || this.img >= imgcut.cuts.length) {
        return;
      }
      
      const [sx, sy, sw, sh] = imgcut.cuts[this.img];
      
      // glowエフェクト処理
      if (this.glow) {
        ctx.globalCompositeOperation = 'screen';
      }
      
      // ピボット適用して描画
      const pivotX = this.piv.x;
      const pivotY = this.piv.y;
      
      ctx.drawImage(
        spriteImage,
        sx, sy, sw, sh,  // ソース位置・サイズ
        -pivotX, -pivotY, sw, sh  // 描画位置・サイズ
      );
      
      // glowエフェクトをリセット
      if (this.glow) {
        ctx.globalCompositeOperation = 'source-over';
      }
      
    } catch (error) {
      console.warn(`EPart#${this.id} 描画エラー:`, error);
    }
  }

  /**
   * 文字列表現
   */
  public toString(): string {
    return `EPart#${this.id}(img=${this.img}, pos=${this.pos.x},${this.pos.y},${this.pos.z}, layer=${this.layer})`;
  }

  /**
   * クローン作成
   */
  public clone(): EPart {
    const cloned = new EPart(
      this.model,
      null, // animInterface
      [...this.args],
      '',
      this.id,
      this.ent
    );
    
    // 現在の状態をコピー
    cloned.pos = P.newP(this.pos.x, this.pos.y, this.pos.z);
    cloned.sca = P.newP(this.sca.x, this.sca.y, this.sca.z);
    cloned.piv = P.newP(this.piv.x, this.piv.y, this.piv.z);
    cloned.angle = this.angle;
    cloned.opa = this.opa;
    cloned.visible = this.visible;
    cloned.hf = this.hf;
    cloned.vf = this.vf;
    cloned.glow = this.glow;
    
    return cloned;
  }

  /**
   * リソースクリーンアップ
   */
  public dispose(): void {
    P.delete();
    P.delete();
    P.delete();
  }
}