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

  public static newP(x: number, y: number, z?: number): P;
  public static newP(other: P): P;
  public static newP(a: number | P, y?: number, z?: number): P {
    if (typeof a === 'number') {
      return new P(a, y || 0, z || 0);
    } else {
      return new P(a.x, a.y, a.z);
    }
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

  public setTo(x: number, y: number, z?: number): P {
    this.x = x;
    this.y = y;
    this.z = z || 0;
    return this;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public static delete(_p?: P): void {
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
  public maModel: MaModel;         // MaModelインスタンス（位置調整用）
  private performanceMode: boolean = false;  // パフォーマンスモード
  
  // スプライト関連
  private spriteImage: HTMLImageElement | null = null;
  private imgcut: { cuts?: number[][]; } | null = null;

  constructor(animInterface: AnimI, mamodel: MaModel, maanim: MaAnim) {
    super(animInterface, mamodel);
    this.ma = maanim;
    this.maModel = mamodel; // 位置調整用に参照を保持
    // Java版準拠：コンストラクタでorganize()を呼び出す
    this.organize();
  }

  /**
   * フレーム更新処理（Java版update完全再現）
   * パフォーマンスモード対応のフレーム制御
   * 重要：Java版準拠でフレーム毎ソートは行わない（安定ソート維持）
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
    
    // Java版準拠：アニメーション中はソートしない
    // ソートはorganize()時のみ実行して描画順序を安定化
  }

  /**
   * Canvas描画処理（../common/util/anim準拠の位置統一システム）
   * 共通基準点を使用してZ値順にソートされたパーツを順次描画
   * Java版準拠：visibleチェックなしで全パーツを描画
   */
  public draw(ctx: CanvasRenderingContext2D, origin: P, size: number): void {
    if (!this.order) return;
    
    // ../common/util/animのEAnimD.drawと同様の処理
    // Java版準拠：for (EPart e : order) { e.drawPart(g, p); }
    // 全パーツに対して統一された基準点（origin）とサイズ（size）を適用
    for (const part of this.order) {
      // Java版準拠：visibleチェックを削除
      
      // 共通基準点システムによる描画
      this.drawPartWithUnifiedPosition(ctx, part, origin, size);
    }
  }

  /**
   * 共通基準点による統一位置描画（../common/util/anim準拠）
   */
  private drawPartWithUnifiedPosition(
    ctx: CanvasRenderingContext2D, 
    part: EPart, 
    origin: P, 
    size: number
  ): void {
    ctx.save();
    
    try {
      // ../common/util/anim/EAnimD.javaのdraw()メソッドと同じロジック
      // 統一されたサイズ（sizer）を全パーツに適用
      const sizer = P.newP(size, size, 1);
      
      // パーツ変換適用（階層的変換システム）
      part.transform(ctx, sizer);
      
      // スプライト描画（共通基準点システム使用）
      part.drawPart(ctx, origin, sizer, this.spriteImage, this.imgcut);
      
    } catch (error) {
      console.warn(`Unified position draw error for part ${part.id}:`, error);
    } finally {
      ctx.restore();
    }
  }

  /**
   * 個別パーツ描画（座標変換付き） - 下位互換のため保持
   */
  private drawPartWithTransform(
    ctx: CanvasRenderingContext2D, 
    part: EPart, 
    origin: P, 
    size: number
  ): void {
    // 新しい統一位置システムに委譲
    this.drawPartWithUnifiedPosition(ctx, part, origin, size);
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
   * 時間設定（Java版setTime()完全再現）
   * Java版: setup(); f = value; ma.update(f, this, true);
   */
  public setTime(value: number): void {
    // Java版準拠：setup()→フレーム設定→update()の順序
    this.setup();
    this.f = value;
    if (this.ent) {
      this.ma.updateJava(this.f, this.ent, true, this.performanceMode);
    }
  }

  /**
   * フレーム設定とアニメーション更新（フレーム進行なし）
   * フレームスライダー用の関数
   */
  public setTimeAndUpdate(value: number, rotate: boolean = false, unitId?: string): void {
    this.f = value;
    
    // Unit 000 Debug
    if (unitId === '000') {
      console.log(`EAnimD setTimeAndUpdate: frame=${value}, partCount=${this.ent?.length || 0}`);
      if (this.ent && this.ent[1]) {
        const part1 = this.ent[1] as { img?: number };
        console.log(`  Part 1 before update: img=${part1.img || 'unknown'}`);
      }
    }
    
    // MaAnimでパーツ更新（フレーム進行なし）
    if (this.ent) {
      this.ma.updateJava(this.f, this.ent, rotate, this.performanceMode, unitId);
    }
    
    // Unit 000 Debug - after update
    if (unitId === '000' && this.ent && this.ent[1]) {
      const part1 = this.ent[1] as { img?: number };
      console.log(`  Part 1 after update: img=${part1.img || 'unknown'}`);
    }
    
    // Java版準拠：アニメーション中はソートしない
    // ソートはorganize()時のみ実行
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
    // Java版準拠：フレーム移動時はソートしない
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
      // Java版準拠：フレーム移動時はソートしない
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
   * Java版EAnimI.organize()完全再現
   * Java版準拠：ent配列をコピーしてソート、setup()で動的Z値変更を反映
   */
  public organize(): void {
    // Java版: ent = mamodel.arrange(this);
    this.ent = this.createEPartArray();
    
    // Java版準拠：setValue()でパーツ初期化
    if (this.ent) {
      for (const part of this.ent) {
        part.setValue();
      }
    }
    
    // Java版: order = new EPart[ent.length]; for(...) order[i] = ent[i];
    this.order = this.ent ? [...this.ent] : null;
    
    // Java版準拠：初期Z値でソート実行
    this.sort();
    
    // Java版準拠：organize()完了後にsetup()実行でアニメーション状態を初期化
    this.setup();
    
    // Java版準拠：setup()後はソートしない
    // Java版ではorganize()でのソートのみで、その後は描画順序を固定
    
    // Java版準拠：この時点でorderの順序を最終確定
    // 以降のアニメーション中はこの順序を維持（安定ソート）
    if (this.order) {
      this.order = [...this.order]; // スプレッド演算子でコピーを作成（freezeは型エラーのため削除）
    }
  }

  /**
   * EPart配列の生成（Java版MaModel.arrange()ロジック）
   * setValue()はorganize()で一元実行
   */
  private createEPartArray(): EPart[] {
    const entities: EPart[] = new Array(this.mamodel.n);
    
    // 1. 全パーツのインスタンスを作成（setValue()は後で実行）
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
    
    // 2. 親子関係を設定（全インスタンス作成後）
    for (let i = 0; i < this.mamodel.n; i++) {
      const parentId = this.mamodel.parts[i][0];
      if (parentId >= 0 && parentId < entities.length) {
        entities[i].fa = entities[parentId];
      } else {
        entities[i].fa = null;
      }
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
   * Java版drawWithTransform()メソッド - 高度な変換描画
   */
  public drawWithTransform(
    ctx: CanvasRenderingContext2D, 
    origin: P, 
    size: number,
    customTransform?: number[]
  ): void {
    if (!this.order) return;
    
    ctx.save();
    
    try {
      // カスタム変換行列の適用
      if (customTransform) {
        ctx.setTransform(
          customTransform[0], customTransform[1],
          customTransform[2], customTransform[3],
          customTransform[4], customTransform[5]
        );
      }
      
      // 描画順序（Z値ベース）でパーツを描画
      for (const part of this.order) {
        // Java版準拠：visibleチェックを削除
        
        this.drawPartWithAdvancedTransform(ctx, part, origin, size);
      }
      
    } finally {
      ctx.restore();
    }
  }

  /**
   * Java版の高度なパーツ描画（座標変換・エフェクト完全対応）
   */
  private drawPartWithAdvancedTransform(
    ctx: CanvasRenderingContext2D, 
    part: EPart, 
    origin: P, 
    size: number
  ): void {
    ctx.save();
    
    try {
      // パーツの世界変換行列を取得
      const worldTransform = part.getTransform();
      
      // Canvas変換行列を設定
      ctx.setTransform(
        worldTransform[0], worldTransform[1],
        worldTransform[2], worldTransform[3],
        worldTransform[4], worldTransform[5]
      );
      
      // 透明度適用
      if (part.opa() < 1) {
        ctx.globalAlpha = part.opa();
      }
      
      // スプライト描画
      const sizer = P.newP(size, size, 1);
      part.drawPart(ctx, origin, sizer, this.spriteImage, this.imgcut);
      
    } catch (error) {
      console.warn(`Advanced draw error for part ${part.id}:`, error);
    } finally {
      ctx.restore();
    }
  }

  /**
   * Java版drawBounds()メソッド - 境界ボックス描画（デバッグ用）
   */
  public drawBounds(ctx: CanvasRenderingContext2D): void {
    if (!this.order) return;
    
    ctx.save();
    ctx.strokeStyle = '#ff0000';
    ctx.lineWidth = 1;
    
    for (const part of this.order) {
      // Java版準拠：visibleチェックを削除
      
      const bounds = part.getBounds();
      ctx.strokeRect(bounds.x, bounds.y, bounds.width, bounds.height);
    }
    
    ctx.restore();
  }

  /**
   * Java版hitTest()メソッド - 全体の当たり判定
   */
  public hitTest(worldPoint: P): EPart | null {
    if (!this.order) return null;
    
    // Z値の逆順（手前から）で当たり判定
    for (let i = this.order.length - 1; i >= 0; i--) {
      const part = this.order[i];
      if (part.hitTest(worldPoint)) {
        return part;
      }
    }
    
    return null;
  }

  /**
   * Java版getPartAt()メソッド - 座標でパーツ取得
   */
  public getPartAt(x: number, y: number): EPart | null {
    const worldPoint = P.newP(x, y, 0);
    return this.hitTest(worldPoint);
  }

  /**
   * Java版getVisibleParts()メソッド - 表示中パーツの取得
   */
  public getVisibleParts(): EPart[] {
    if (!this.order) return [];
    
    return this.order.filter(part => part.isVisibleFull());
  }

  /**
   * Java版getPartsByDepth()メソッド - 深度別パーツ取得
   */
  public getPartsByDepth(depth: number): EPart[] {
    if (!this.ent) return [];
    
    return this.ent.filter(part => part.getDepth() === depth);
  }

  /**
   * Java版setGlobalOpacity()メソッド - 全体透明度設定
   */
  public setGlobalOpacity(opacity: number): void {
    if (!this.ent) return;
    
    for (const part of this.ent) {
      if (part.fa === null) { // ルートパーツのみ
        part.setOpacityRecursive(opacity);
      }
    }
  }

  /**
   * Java版setGlobalVisible()メソッド - 全体表示設定
   */
  public setGlobalVisible(visible: boolean): void {
    if (!this.ent) return;
    
    for (const part of this.ent) {
      if (part.fa === null) { // ルートパーツのみ
        part.setVisibleRecursive(visible);
      }
    }
  }

  /**
   * Java版getBounds()メソッド - 全体境界ボックス計算
   */
  public getBounds(): { x: number, y: number, width: number, height: number } {
    if (!this.order || this.order.length === 0) {
      return { x: 0, y: 0, width: 0, height: 0 };
    }
    
    let minX = Infinity, minY = Infinity;
    let maxX = -Infinity, maxY = -Infinity;
    
    for (const part of this.order) {
      if (!part.isVisibleFull()) continue;
      
      const bounds = part.getBounds();
      minX = Math.min(minX, bounds.x);
      minY = Math.min(minY, bounds.y);
      maxX = Math.max(maxX, bounds.x + bounds.width);
      maxY = Math.max(maxY, bounds.y + bounds.height);
    }
    
    if (minX === Infinity) {
      return { x: 0, y: 0, width: 0, height: 0 };
    }
    
    return {
      x: minX,
      y: minY,
      width: maxX - minX,
      height: maxY - minY
    };
  }

  /**
   * Java版準拠：描画順序は初期化時のみ決定、その後は変更しない
   * 削除：optimizeRenderOrder() - Java版には存在しない
   */

  /**
   * Java版changeAnim()メソッド - 動的アニメーション切り替え
   */
  public changeAnim(newMaAnim: import('./MaAnim').MaAnim): void {
    this.ma = newMaAnim;
    this.f = -1; // Java版準拠：フレームを-1にリセット
    
    // EPart配列を再構築（ソートもorganize()内で実行）
    this.organize();
    
    // 初期状態を設定
    if (this.ent) {
      for (const part of this.ent) {
        part.setValue();
      }
    }
    
    console.log(`Animation changed to: max=${this.ma.max}, len=${this.ma.len}`);
  }

  /**
   * Java版done()メソッド - アニメーション完了判定
   */
  public done(): boolean {
    return this.f >= this.len();
  }

  /**
   * Java版setup()メソッド - 初期化処理の分離
   * Java版準拠：ma.update(0, this, false)を実行
   */
  public setup(): void {
    // Java版: ma.update(0, this, false);
    if (this.ent) {
      this.ma.updateJava(0, this.ent, false, this.performanceMode);
    }
  }

  /**
   * Java版paraTo()メソッド - ワープ・ノックバック合成
   */
  public paraTo(
    targetX: number, 
    targetY: number, 
    duration: number,
    easeType: number = 0
  ): void {
    if (!this.ent || this.ent.length === 0) return;
    
    // ルートパーツ（Part 0）の位置を変更
    const rootPart = this.ent[0];
    if (!rootPart) return;
    
    const startX = rootPart.pos.x;
    const startY = rootPart.pos.y;
    const deltaX = targetX - startX;
    const deltaY = targetY - startY;
    
    // アニメーション合成のための一時的な実装
    const steps = Math.max(1, duration);
    
    // 段階的に位置を変更（実際のゲームでは複雑なイージング）
    for (let i = 1; i <= steps; i++) {
      setTimeout(() => {
        const progress = i / steps;
        let easedProgress = progress;
        
        // イージング適用
        switch (easeType) {
          case 1: // ease-out
            easedProgress = 1 - Math.pow(1 - progress, 2);
            break;
          case 2: // ease-in-out
            easedProgress = progress < 0.5 
              ? 2 * progress * progress 
              : 1 - Math.pow(-2 * progress + 2, 2) / 2;
            break;
          default: // linear
            break;
        }
        
        rootPart.pos.x = startX + deltaX * easedProgress;
        rootPart.pos.y = startY + deltaY * easedProgress;
        
      }, i * 16); // 約60FPS相当
    }
    
    console.log(`paraTo: moving to (${targetX}, ${targetY}) over ${duration} steps`);
  }

  /**
   * Java版drawBGEffect()メソッド - 背景エフェクト描画
   */
  public drawBGEffect(ctx: CanvasRenderingContext2D, origin: P, size: number): void {
    if (!this.order) return;
    
    // 背景エフェクトを持つパーツのみ描画
    for (const part of this.order) {
      if (!part.hasExtendEffect()) continue;
      // Java版準拠：visibleチェックを削除
      
      ctx.save();
      
      try {
        const sizer = P.newP(size, size, 1);
        part.transform(ctx, sizer);
        part.drawBGEffect(ctx, origin, sizer, this.spriteImage, this.imgcut);
        
      } catch (error) {
        console.warn(`BG effect error for part ${part.id}:`, error);
      } finally {
        ctx.restore();
      }
    }
  }

  /**
   * Java版drawWithEffects()メソッド - エフェクト込み描画
   */
  public drawWithEffects(ctx: CanvasRenderingContext2D, origin: P, size: number): void {
    if (!this.order) return;
    
    const imgcutCount = this.imgcut?.cuts?.length || 0;
    
    // 通常描画 + エフェクト描画
    for (const part of this.order) {
      // Java版準拠：visibleチェックを削除
      
      ctx.save();
      
      try {
        const sizer = P.newP(size, size, 1);
        part.transform(ctx, sizer);
        
        // 通常描画
        part.drawPart(ctx, origin, sizer, this.spriteImage, this.imgcut);
        
        // 拡張エフェクト描画
        if (part.hasExtendEffect()) {
          switch (part.extType) {
            case 2: // CURSE_EFFECT - ランダムスプライト
              part.drawRandom(ctx, origin, sizer, this.spriteImage, this.imgcut, imgcutCount);
              break;
            case 3: // EXTEND_DRAW - 拡張描画
              part.drawExtended(ctx, origin, sizer, this.spriteImage, this.imgcut);
              break;
          }
        }
        
      } catch (error) {
        console.warn(`Effects draw error for part ${part.id}:`, error);
      } finally {
        ctx.restore();
      }
    }
  }

  /**
   * Java版isEffectActive()メソッド - エフェクト状態判定
   */
  public isEffectActive(effectType: number): boolean {
    if (!this.ent) return false;
    
    return this.ent.some(part => part.extType === effectType);
  }

  /**
   * Java版clearEffects()メソッド - エフェクトクリア
   */
  public clearEffects(): void {
    if (!this.ent) return;
    
    for (const part of this.ent) {
      part.extType = 0;
      part.extendX = 0;
      part.extendY = 0;
    }
    
    console.log('All effects cleared');
  }

  /**
   * 文字列表現
   */
  public toString(): string {
    return `EAnimD(frame=${this.f}/${this.len()}, parts=${this.getPartCount()}, perf=${this.performanceMode})`;
  }
}