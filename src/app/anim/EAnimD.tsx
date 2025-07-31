// EAnimD - Java版 common/util/anim/EAnimD.java の具象実装
// アニメーション実行の具体的な実装クラス

import { EAnimI, AnimI } from './EAnimI';
import { EPart } from './EPart';
import type { MaModel } from './MaModel';
import type { MaAnim } from './MaAnim';

// Pクラスを共有するために、EPart.tsxから削除してここに集約
export class P {
  public x: number;
  public y: number;
  public z: number;

  constructor(x: number = 0, y: number = 0, z: number = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  public static newP(x: number, y: number, z: number = 0): P {
    return new P(x, y, z);
  }

  public times(scalar: number): P;
  public times(other: P): P;
  public times(sx: number, sy: number): P;
  public times(a: number | P, b?: number): P {
    if (typeof a === 'number') {
      if (b !== undefined) {
        return new P(this.x * a, this.y * b, this.z);
      } else {
        return new P(this.x * a, this.y * a, this.z * a);
      }
    } else {
      return new P(this.x * a.x, this.y * a.y, this.z * a.z);
    }
  }

  public setTo(x: number, y: number, z: number = 0): P {
    this.x = x;
    this.y = y;
    this.z = z;
    return this;
  }

  public static delete(): void {
    // TypeScriptでは実質的に何もしない（Java版のGC対応）
  }
}


/**
 * 具象アニメーション実行クラス
 * Java版のcommon/util/anim/EAnimD.javaの完全移植
 */
export class EAnimD extends EAnimI {
  public f: number = -1;           // 現在のフレーム番号
  public ma: MaAnim;               // MaAnimインスタンス
  private performanceMode: boolean = false;  // パフォーマンスモード
  
  // スプライト関連
  private spriteImage: HTMLImageElement | null = null;
  private imgcut: { cuts?: number[][]; } | null = null;

  constructor(animInterface: AnimI, mamodel: MaModel, maanim: MaAnim) {
    super(animInterface, mamodel);
    this.ma = maanim;
    this.organize();
  }

  /**
   * フレーム更新処理（Java版update完全再現）
   * パフォーマンスモード対応のフレーム制御
   */
  public update(rotate: boolean): void {
    // パフォーマンスモード対応（Java版のperformanceModeAnimation）
    if (this.performanceMode) {
      if (this.f === -1) {
        this.f++;
      } else {
        this.f += 0.5; // フレームレート半減
      }
    } else {
      this.f++;
    }
    
    // MaAnimでパーツ更新（Java版のロジック）
    if (this.ent) {
      this.ma.updateJava(this.f, this.ent, rotate, this.performanceMode);
    }
    
    // 描画順序ソート（フレーム毎）
    this.sort();
  }

  /**
   * Canvas描画処理（Java版draw相当）
   * Z値順にソートされたパーツを順次描画
   */
  public draw(ctx: CanvasRenderingContext2D, origin: P, size: number): void {
    if (!this.order) return;
    
    // 描画順序（Z値ベース）でパーツを描画
    for (const part of this.order) {
      if (!part.visible) continue;
      
      this.drawPartWithTransform(ctx, part, origin, size);
    }
  }

  /**
   * 個別パーツ描画（座標変換付き）
   */
  private drawPartWithTransform(
    ctx: CanvasRenderingContext2D, 
    part: EPart, 
    origin: P, 
    size: number
  ): void {
    ctx.save();
    
    try {
      // パーツ変換適用（Java版のtransform()ロジック）
      const sizer = P.newP(size, size, 1);
      part.transform(ctx, sizer);
      
      // スプライト描画
      part.drawPart(ctx, origin, sizer, this.spriteImage, this.imgcut);
      
    } catch (error) {
      console.warn(`Draw error for part ${part.id}:`, error);
    } finally {
      ctx.restore();
    }
  }

  /**
   * フレームインデックス取得（Java版ind()）
   */
  public ind(): number {
    return this.f;
  }

  /**
   * アニメーション長さ取得（Java版len()）
   */
  public len(): number {
    return this.ma.len;
  }

  /**
   * 時間設定（Java版setTime()）
   */
  public setTime(value: number): void {
    this.f = value;
  }

  /**
   * パフォーマンスモード設定
   */
  public setPerformanceMode(enabled: boolean): void {
    this.performanceMode = enabled;
  }

  /**
   * パフォーマンスモード状態取得
   */
  public isPerformanceMode(): boolean {
    return this.performanceMode;
  }

  /**
   * スプライト画像設定
   */
  public setSpriteImage(image: HTMLImageElement | null): void {
    this.spriteImage = image;
  }

  /**
   * imgcut設定
   */
  public setImgCut(imgcut: { cuts?: number[][]; } | null): void {
    this.imgcut = imgcut;
  }

  /**
   * アニメーション再生制御
   */
  public play(): void {
    // 再生開始処理
  }

  public pause(): void {
    // 一時停止処理
  }

  public stop(): void {
    // 停止処理
    this.f = -1;
    this.initializeAllParts();
  }

  public reset(): void {
    // リセット処理
    this.f = -1;
    if (this.ent) {
      for (const part of this.ent) {
        part.setValue();
      }
    }
    this.sort();
  }

  /**
   * フレーム範囲チェック
   */
  public isValidFrame(frame: number): boolean {
    return frame >= 0 && frame <= this.len();
  }

  /**
   * 指定フレームにジャンプ
   */
  public jumpToFrame(frame: number): void {
    if (this.isValidFrame(frame)) {
      this.f = frame;
      if (this.ent) {
        this.ma.updateJava(this.f, this.ent, false, this.performanceMode);
      }
      this.sort();
    }
  }

  /**
   * アニメーション完了判定
   */
  public isComplete(): boolean {
    return this.f >= this.len();
  }

  /**
   * 進捗率取得（0.0 - 1.0）
   */
  public getProgress(): number {
    const maxFrame = this.len();
    if (maxFrame <= 0) return 0;
    return Math.max(0, Math.min(1, this.f / maxFrame));
  }

  /**
   * MaModel.arrange()の実装を完了
   */
  public organize(): void {
    // MaModel.arrangeJava()を呼び出してEPart配列を生成
    this.ent = this.createEPartArray();
    this.order = this.ent ? [...this.ent] : null;
    this.sort();
  }

  /**
   * EPart配列の生成（Java版MaModel.arrange()ロジック）
   */
  private createEPartArray(): EPart[] {
    const entities: EPart[] = new Array(this.mamodel.n);
    
    for (let i = 0; i < this.mamodel.n; i++) {
      entities[i] = new EPart(
        this.mamodel,
        this,
        this.mamodel.parts[i],
        this.mamodel.strs0[i] || '',
        i,
        entities
      );
    }
    
    return entities;
  }

  /**
   * 統計情報取得（デバッグ用拡張）
   */
  public getStats(): {
    partCount: number;
    visibleParts: number;
    selectedPart: number;
    orderArraySize: number;
    currentFrame: number;
    totalFrames: number;
    progress: number;
    performanceMode: boolean;
  } {
    const baseStats = super.getStats();
    
    return {
      ...baseStats,
      currentFrame: this.f,
      totalFrames: this.len(),
      progress: this.getProgress(),
      performanceMode: this.performanceMode
    };
  }

  /**
   * 詳細デバッグ情報
   */
  public getDebugInfo(): string {
    const stats = this.getStats();
    return [
      `EAnimD Debug Info:`,
      `  Current Frame: ${stats.currentFrame}/${stats.totalFrames}`,
      `  Progress: ${(stats.progress * 100).toFixed(1)}%`,
      `  Parts: ${stats.visibleParts}/${stats.partCount} visible`,
      `  Performance Mode: ${stats.performanceMode ? 'ON' : 'OFF'}`,
      `  Selected Part: ${stats.selectedPart}`,
      `  Order Array: ${stats.orderArraySize} entries`
    ].join('\n');
  }

  /**
   * リソースクリーンアップ
   */
  public dispose(): void {
    super.dispose();
    this.spriteImage = null;
    this.imgcut = null;
  }

  /**
   * 文字列表現
   */
  public toString(): string {
    return `EAnimD(frame=${this.f}/${this.len()}, parts=${this.getPartCount()}, perf=${this.performanceMode})`;
  }
}