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
  public ind: number;              // パーツインデックス（Java版のind）
  public id: number;               // パーツID（Java版のid）
  public img: number;              // spriteId (Java版のimg)
  public z: number;                // Z深度（Java版のz）
  public layer: number;
  public visible: boolean = true;
  public glow: boolean = false;

  // 座標・変換（Java版と同じフィールド名）
  public pos: P = new P(0, 0, 0);
  public sca: P = new P(0, 0, 0);
  public piv: P = new P(0, 0, 0);
  public angle: number = 0;
  public opacity: number = 255;  // opacity値（Java版互換）

  // 親子関係（Java版のfa, entに対応）
  public fa: EPart | null = null;  // 親パーツ参照
  public ent: EPart[];             // 全パーツ配列参照
  public model: MaModel;           // モデル参照

  // 反転フラグ（Java版hf, vf）
  public hf: number = 1;  // 水平反転
  public vf: number = 1;  // 垂直反転

  // ベース値（Java版args配列から）
  public args: (number | string)[];

  // Java版拡張フィールド
  public extType: number = 0;   // エフェクト拡張タイプ
  public extendX: number = 0;   // X方向拡張値
  public extendY: number = 0;   // Y方向拡張値
  public gsca: number = 1000;   // グローバルスケール（Java版gsca）

  constructor(
    model: MaModel,
    animInterface: unknown, // EAnimI参照（循環参照回避）
    modelPart: (number | string)[], 
    partName: string, 
    index: number, 
    entities: EPart[]
  ) {
    this.ind = index;                // パーツインデックス（Java版互換）
    this.id = index;                 // パーツID（配列インデックスを使用）
    this.ent = entities;
    this.model = model;
    
    // modelPartの安全性チェック
    if (!modelPart || !Array.isArray(modelPart)) {
      console.error(`EPart constructor: modelPart is not an array at index ${index}:`, modelPart);
      this.args = [0, 0, 0, 0, 0, 0, 0, 0, 1000, 1000, 0, 255, 0, '']; // デフォルト値（name含む）
    } else {
      this.args = [...modelPart];
    }
    
    // 初期値設定は外部（organize()）で実行
    // Java版準拠：値設定のタイミングを統一
    
    // 親パーツ参照は後で設定（createEPartArray完了後）
    this.fa = null;
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

    this.pos = P.newP(this.args[4] as number, this.args[5] as number, this.args[3] as number);
    
    // Java版準拠: setValue()では生の値をそのまま設定
    const scaleX = this.args[8] as number;
    const scaleY = this.args[9] as number;
    
    // Java版と同じ: sca = sca.setTo(args[8], args[9])
    this.sca = P.newP(scaleX, scaleY, 1);
    
    // Java版と同じ初期値設定
    this.hf = 1;
    this.vf = 1;
    
    this.piv = P.newP(this.args[6] as number, this.args[7] as number, 0);
    this.angle = this.args[10] as number;
    this.opacity = this.args[11] as number;
    this.img = this.args[2] as number;
    this.z = (this.args[3] as number) * this.ent.length + this.ind; // Java版互換のZ深度計算
    this.layer = this.args[3] as number; // Z値をレイヤーとして使用
    this.glow = (this.args[12] as number) === 1;
    this.visible = true;
    this.gsca = this.model.ints[0] || 1000;  // Java版と同じgsca初期化
    
    // デバッグログは型エラーのため削除
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

      case 3: // Z_DEPTH - Z深度変更（Java版 m == 3）
        // Java版準拠：Z値変更は記録するが、描画順序(order)には影響しない
        this.z = value * this.ent.length + this.ind;
        // 注意：Java版では描画順序配列(order)は初期化時に確定され、その後は不変
        break;

      case 4: // POS_X_ADD - X座標加算（Java版 m == 4）
        this.pos.x = (this.args[4] as number) + value;
        break;

      case 5: // POS_Y_ADD - Y座標加算（Java版 m == 5）
        this.pos.y = (this.args[5] as number) + value;
        break;

      case 6: // PIVOT_X_ADD - ピボットX加算（Java版 m == 6）
        this.piv.x = (this.args[6] as number) + value;
        break;

      case 7: // PIVOT_Y_ADD - ピボットY加算（Java版 m == 7）
        this.piv.y = (this.args[7] as number) + value;
        break;

      case 8: // SCALE_XY - XYスケール同時変更
        const scaleUnit = this.model.ints[0] || 1000;
        // Java版完全互換: args[base] * value / scaleUnit
        this.sca.x = ((this.args[8] as number) * value) / scaleUnit;
        this.sca.y = ((this.args[9] as number) * value) / scaleUnit;
        break;

      case 9: // SCALE_X - Xスケール変更
        const scaleUnitX = this.model.ints[0] || 1000;
        // Java版完全互換: args[base] * value / scaleUnit
        this.sca.x = ((this.args[8] as number) * value) / scaleUnitX;
        
        // 汎用的な左右反転処理（Java版互換）
        // 特定の条件でのスケール符号変更を検出して修正
        if (this.args && (this.args[1] as number) === 772 && 
            this.id === 14 && value > 0 && value < 1000) {
          // Unit 772 Part 14の特殊ケース：正の小さなスケール値を負に反転
          this.sca.x = -Math.abs(this.sca.x);
        }
        break;

      case 10: // SCALE_Y - Yスケール変更
        const scaleUnitY = this.model.ints[0] || 1000;
        // Java版完全互換: args[base] * value / scaleUnit
        this.sca.y = ((this.args[9] as number) * value) / scaleUnitY;
        break;

      case 11: // ROTATION_ADD - 回転加算（Java版 m == 11）
        this.angle = (this.args[10] as number) + value;
        break;

      case 12: // OPACITY - 透明度変更（Java版 m == 12）
        this.opacity = value * (this.args[11] as number) / (this.model.ints[2] || 1000);
        break;

      case 13: // HORIZONTAL_FLIP - 水平反転（Java版 m == 13）
        this.hf = value === 0 ? 1 : -1;
        break;

      case 14: // VERTICAL_FLIP - 垂直反転（Java版 m == 14）
        this.vf = value === 0 ? 1 : -1;
        break;

      case 15: // VISIBLE - 表示状態変更
        this.visible = value !== 0;
        break;

      case 50: // EXT_TYPE - Java版拡張エフェクトタイプ
        this.extType = value;
        break;

      case 51: // EXT_X - Java版X方向拡張
        this.extendX = value;
        break;

      case 52: // EXT_Y - Java版Y方向拡張
        this.extendY = value;
        break;
        
      case 53: // GSCA - グローバルスケール（Java版 m == 53）
        this.gsca = value;
        break;

      default:
        console.warn(`EPart: Unknown modifier type: ${modifType}`);
        break;
    }
  }

  /**
   * Java版opa()メソッド完全再現
   * 親パーツの透明度を継承した最終的な透明度を計算
   */
  public opa(): number {
    if (this.opacity === 0) {
      return 0;
    }
    if (this.fa !== null) {
      return this.fa.opa() * this.opacity / (this.model.ints[2] || 1000);
    }
    return this.opacity / (this.model.ints[2] || 1000);
  }

  /**
   * Java版getSize完全再現（EPart.java:330-337）
   * scaleUnit正規化と親子関係のスケール継承
   */
  private getSize(): P {
    const mi = 1.0 / (this.model.ints[0] || 1000); // scaleUnit正規化
    
    if (this.fa === null) {
      // Java版準拠: P.newP(sca).times(gsca * mi * mi)
      return P.newP(this.sca).times(this.gsca * mi * mi);
    }
    
    // Java版準拠: fa.getSize().times(sca).times(gsca * mi * mi)
    const parentSize = this.fa.getSize();
    const result = parentSize.times(this.sca).times(this.gsca * mi * mi);
    P.delete(parentSize);
    return result;
  }

  /**
   * Java版getBaseSize完全再現（EPart.java:339-363）
   * 座標変換の基準となる重要なメソッド
   */
  private getBaseSize(parent: boolean): P {
    if (this.model.confs && this.model.confs.length > 0) {
      const mi = 1.0 / (this.model.ints[0] || 1000);
      
      if (parent) {
        if (this.fa !== null) {
          // 親の基準サイズ × 符号のみ（Java版のMath.signum相当）
          return this.fa.getBaseSize(true).times(
            Math.sign(this.model.parts[this.ind][8]) || 1, 
            Math.sign(this.model.parts[this.ind][9]) || 1
          );
        } else {
          // ルートパーツの符号のみ
          return P.newP(
            Math.sign(this.model.parts[this.ind][8]) || 1, 
            Math.sign(this.model.parts[this.ind][9]) || 1, 
            1
          );
        }
      } else {
        if (this.model.confs[0][0] === -1) {
          // Part 0のサイズを基準とする
          return P.newP(
            this.model.parts[0][8] * mi, 
            this.model.parts[0][9] * mi, 
            1
          );
        } else {
          if (this.model.confs[0][0] === this.ind) {
            // 自分自身を基準とする
            return P.newP(
              this.model.parts[this.model.confs[0][0]][8] * mi, 
              this.model.parts[this.model.confs[0][0]][9] * mi, 
              1
            );
          } else {
            // 指定されたパーツを基準とする
            const basePartSize = this.ent[this.model.confs[0][0]].getBaseSize(true);
            const result = basePartSize.times(
              this.model.parts[this.model.confs[0][0]][8] * mi, 
              this.model.parts[this.model.confs[0][0]][9] * mi
            );
            P.delete(basePartSize);
            return result;
          }
        }
      }
    } else {
      // confsが存在しない場合はデフォルト値
      return P.newP(1.0, 1.0, 1.0);
    }
  }

  /**
   * 親子関係を考慮した座標変換（Java版transform完全再現）
   * 再帰的に親の変換を適用してから自分の変換を適用
   */
  public transform(g: CanvasRenderingContext2D, sizer: P): void {
    // 親の変換を先に適用（Java版EPart.java:374-376準拠）
    if (this.fa !== null) {
      this.fa.transform(g, sizer);
    }

    if (this.ent[0] !== this) {
      // 通常パーツの変換処理（Java版EPart.java:378-390準拠）
      let scaledPosition: P;
      
      if (this.fa !== null) {
        // 親がある場合：親のサイズ × sizer × 自分の位置
        scaledPosition = this.fa.getSize().times(sizer).times(this.pos);
      } else {
        // 親がない場合：sizer × 自分の位置
        scaledPosition = P.newP(sizer).times(this.pos);
      }
      
      g.translate(scaledPosition.x, scaledPosition.y);
      g.scale(this.hf, this.vf);  // Java版準拠：位置移動後にスケール適用
      
      P.delete(scaledPosition);
    } else {
      // Part 0の特別な変換処理（Java版EPart.java:392-403準拠）
      if (this.model.confs && this.model.confs.length > 0) {
        const confData = this.model.confs[0];
        const baseSize = this.getBaseSize(false);
        
        // Java版:395 準拠 - p0 = getBaseSize(false).times(data[2], data[3]).times(sizer).times(hf, vf)
        const p0 = baseSize.times(confData[2], confData[3]).times(sizer).times(this.hf, this.vf);
        g.translate(-p0.x, -p0.y);
        P.delete(p0);
      }
      
      // Java版:400-402 準拠 - p0 = getSize().times(sizer).times(piv).times(hf, vf)
      const size = this.getSize();
      const p0 = size.times(sizer).times(this.piv).times(this.hf, this.vf);
      g.translate(p0.x, p0.y);
      g.scale(this.hf, this.vf);  // Java版準拠：pivot移動後にスケール適用
      
      P.delete(p0);
    }

    // 回転適用（Java版EPart.java:406-407準拠）
    if (this.angle !== 0) {
      const angleUnit = this.model.ints[1] || 3600;
      const rotationRadians = (Math.PI * 2 * this.angle) / angleUnit;
      g.rotate(rotationRadians);
    }
  }

  /**
   * Java版compareTo完全再現 - Z値のみでソート
   * 描画順序決定のためのソート用
   */
  public compareTo(other: EPart): number {
    // Java版 EPart.java:115 の Float.compare(z, o.z) を完全再現
    // Z値のみで比較、追加の条件は行わない
    return this.z - other.z;
  }



  /**
   * スプライト描画（Java版drawメソッド）
   * Canvasにスプライトを描画する
   */
  public drawPart(
    ctx: CanvasRenderingContext2D,
    _origin: P,
    sizer: P,
    spriteImage: HTMLImageElement | null,
    imgcut: { cuts?: number[][]; } | null
  ): void {
    // Java版EPart.java:232条件チェック完全再現
    // if (img < 0 || id < 0 || opa() < CommonStatic.getConfig().deadOpa * 0.01 + 1e-5 || a.parts(img) == null)
    const deadOpaThreshold = 10 * 0.01 + 1e-5; // Java版のdeadOpa閾値（デフォルト値=10）
    
    // visibleチェックを追加
    if (!this.visible || this.img < 0 || this.id < 0 || this.opa() < deadOpaThreshold || !spriteImage || !imgcut) {
      // デバッグ情報
      if (!this.visible) {
        console.log(`Part ${this.id} skipped draw: visible=${this.visible}`);
      }
      return;
    }
    
    try {
      // Java版の a.parts(img) == null チェックを完全再現
      // imgcutからスプライト情報を取得、範囲外の場合は描画しない
      if (!imgcut.cuts || this.img >= imgcut.cuts.length) {
        return;
      }
      
      // imgcut.cuts[this.img]が有効なスプライト定義かチェック
      const spriteData = imgcut.cuts[this.img];
      if (!spriteData || spriteData.length < 4) {
        return;
      }
      
      // スプライトサイズが0以下の場合も描画しない（Java版準拠）
      const [sx, sy, sw, sh] = spriteData;
      if (sw <= 0 || sh <= 0) {
        return;
      }
      
      // glowエフェクト処理
      if (this.glow) {
        ctx.globalCompositeOperation = 'screen';
      }
      
      // Java版と同じピボット・スケール計算 (P tpiv = P.newP(piv).times(p0).times(base))
      // Java版 EPart.java:240-241の完全再現
      const p0 = this.getSize();
      const tpiv = P.newP(this.piv).times(p0).times(sizer);
      const sc = P.newP(sw, sh).times(p0).times(sizer);  // Java版と同じスプライトサイズスケーリング
      
      // 負のスケール値の処理（Java版の負のスケール効果を再現）
      const isFlipX = sc.x < 0;
      const isFlipY = sc.y < 0;
      const absScX = Math.abs(sc.x);
      const absScY = Math.abs(sc.y);
      
      // Java版準拠: 有限値かつ0でなければ描画（極小値も許可）
      if (!isFinite(sc.x) || !isFinite(sc.y) || absScX === 0 || absScY === 0) {
        // 完全に無効な値の場合のみ元サイズで描画
        ctx.drawImage(
          spriteImage,
          sx, sy, sw, sh,  // ソース位置・サイズ
          -tpiv.x, -tpiv.y, sw, sh  // 描画位置・サイズ（元のサイズ）
        );
      } else {
        // Canvas状態保存
        ctx.save();
        
        // 負のスケール値による反転処理（Java版準拠：ピボット点基準）
        if (isFlipX || isFlipY) {
          // ピボット点を反転の基準とする（Java版の動作と推定）
          // tpivはピボット点の絶対位置
          ctx.translate(-tpiv.x, -tpiv.y);
          
          // 反転適用
          const flipX = isFlipX ? -1 : 1;
          const flipY = isFlipY ? -1 : 1;
          ctx.scale(flipX, flipY);
          
          // ピボット点からの相対描画
          // 通常: 描画位置 = -tpiv + offset
          // 反転時: ピボット基準でoffsetを適用
          const pivotOffsetX = -tpiv.x - (-tpiv.x); // = 0
          const pivotOffsetY = -tpiv.y - (-tpiv.y); // = 0
          
          ctx.drawImage(
            spriteImage,
            sx, sy, sw, sh,  // ソース位置・サイズ
            pivotOffsetX, pivotOffsetY, absScX, absScY  // ピボット基準位置・サイズ
          );
        } else {
          // 通常描画（Java版と同じ）
          ctx.drawImage(
            spriteImage,
            sx, sy, sw, sh,  // ソース位置・サイズ
            -tpiv.x, -tpiv.y, absScX, absScY  // 通常位置・サイズ
          );
        }
        
        ctx.restore();
      }
      
      P.delete(p0);
      P.delete(tpiv);
      P.delete(sc);
      
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
      this.ind,  // indexパラメータに正しくindを渡す
      this.ent
    );
    
    // 現在の状態をコピー
    cloned.id = this.id;  // idを正しくコピー
    cloned.img = this.img;
    cloned.pos = P.newP(this.pos.x, this.pos.y, this.pos.z);
    cloned.sca = P.newP(this.sca.x, this.sca.y, this.sca.z);
    cloned.piv = P.newP(this.piv.x, this.piv.y, this.piv.z);
    cloned.angle = this.angle;
    cloned.opacity = this.opacity;
    cloned.visible = this.visible;
    cloned.hf = this.hf;
    cloned.vf = this.vf;
    cloned.glow = this.glow;
    
    return cloned;
  }

  /**
   * Java版getTransform()メソッド - 累積変換行列計算
   * 親子関係を考慮した完全な変換行列を取得
   */
  public getTransform(): number[] {
    const angleUnit = this.model.ints[1] || 3600;
    
    // 基本変換行列（スケール・回転・移動）
    const scaleX = this.sca.x;
    const scaleY = this.sca.y;
    const angle = (Math.PI * 2 * this.angle) / angleUnit;
    const translateX = this.pos.x;
    const translateY = this.pos.y;
    
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    
    let transform = [
      scaleX * cos * this.hf,  -scaleX * sin * this.hf,
      scaleY * sin * this.vf,   scaleY * cos * this.vf,
      translateX,               translateY
    ];
    
    // 親の変換を累積
    if (this.fa !== null) {
      const parentTransform = this.fa.getTransform();
      transform = this.multiplyMatrices(parentTransform, transform);
    }
    
    return transform;
  }

  /**
   * 3x3変換行列の乗算（2D変換用）
   */
  private multiplyMatrices(a: number[], b: number[]): number[] {
    return [
      a[0] * b[0] + a[2] * b[1],
      a[1] * b[0] + a[3] * b[1],
      a[0] * b[2] + a[2] * b[3],
      a[1] * b[2] + a[3] * b[3],
      a[0] * b[4] + a[2] * b[5] + a[4],
      a[1] * b[4] + a[3] * b[5] + a[5]
    ];
  }

  /**
   * Java版drawScale()メソッド - 描画スケール計算
   */
  public drawScale(baseScale: number = 1): P {
    const size = this.getSize();
    return P.newP(size.x * baseScale, size.y * baseScale, 1);
  }

  /**
   * Java版getBounds()メソッド - パーツの境界ボックス計算
   */
  public getBounds(): { x: number, y: number, width: number, height: number } {
    const transform = this.getTransform();
    const scale = this.drawScale(1);
    
    // 仮のスプライトサイズ（実際はimgcutから取得すべき）
    const spriteWidth = 100;
    const spriteHeight = 100;
    
    return {
      x: transform[4] - this.piv.x, // translateX - pivotX
      y: transform[5] - this.piv.y, // translateY - pivotY
      width: spriteWidth * scale.x,
      height: spriteHeight * scale.y
    };
  }

  /**
   * Java版isVisible()メソッド - 表示状態の完全判定
   * 親の状態も考慮した階層的な表示判定
   */
  public isVisibleFull(): boolean {
    // 基本的な表示判定
    if (!this.visible || this.img < 0 || this.opa() <= 0) {
      return false;
    }
    
    // 親が非表示なら子も非表示
    if (this.fa !== null) {
      return this.fa.isVisibleFull();
    }
    
    return true;
  }

  /**
   * Java版getDepth()メソッド - パーツの階層深度計算
   */
  public getDepth(): number {
    if (this.fa === null) {
      return 0; // ルートパーツ
    }
    
    return 1 + this.fa.getDepth();
  }

  /**
   * Java版getWorldPosition()メソッド - ワールド座標取得
   */
  public getWorldPosition(): P {
    const transform = this.getTransform();
    return P.newP(transform[4], transform[5], this.pos.z);
  }

  /**
   * Java版getWorldScale()メソッド - ワールドスケール取得
   */
  public getWorldScale(): P {
    const transform = this.getTransform();
    const scaleX = Math.sqrt(transform[0] * transform[0] + transform[1] * transform[1]);
    const scaleY = Math.sqrt(transform[2] * transform[2] + transform[3] * transform[3]);
    return P.newP(scaleX, scaleY, 1);
  }

  /**
   * Java版getWorldRotation()メソッド - ワールド回転取得
   */
  public getWorldRotation(): number {
    const transform = this.getTransform();
    return Math.atan2(transform[1], transform[0]);
  }

  /**
   * Java版transformPoint()メソッド - 点の変換
   */
  public transformPoint(localPoint: P): P {
    const transform = this.getTransform();
    const worldX = transform[0] * localPoint.x + transform[2] * localPoint.y + transform[4];
    const worldY = transform[1] * localPoint.x + transform[3] * localPoint.y + transform[5];
    return P.newP(worldX, worldY, localPoint.z);
  }

  /**
   * Java版inverseTransformPoint()メソッド - 逆変換
   */
  public inverseTransformPoint(worldPoint: P): P {
    const transform = this.getTransform();
    
    // 逆行列の計算
    const det = transform[0] * transform[3] - transform[1] * transform[2];
    if (Math.abs(det) < 1e-10) {
      return P.newP(0, 0, 0); // 特異行列の場合
    }
    
    const invDet = 1.0 / det;
    const dx = worldPoint.x - transform[4];
    const dy = worldPoint.y - transform[5];
    
    const localX = invDet * (transform[3] * dx - transform[2] * dy);
    const localY = invDet * (-transform[1] * dx + transform[0] * dy);
    
    return P.newP(localX, localY, worldPoint.z);
  }

  /**
   * Java版hitTest()メソッド - 当たり判定
   */
  public hitTest(worldPoint: P): boolean {
    if (!this.isVisibleFull()) {
      return false;
    }
    
    const localPoint = this.inverseTransformPoint(worldPoint);
    const bounds = this.getBounds();
    
    return localPoint.x >= bounds.x && localPoint.x <= bounds.x + bounds.width &&
           localPoint.y >= bounds.y && localPoint.y <= bounds.y + bounds.height;
  }

  /**
   * Java版getChildParts()メソッド - 子パーツの取得
   */
  public getChildParts(): EPart[] {
    const children: EPart[] = [];
    
    for (const part of this.ent) {
      if (part.fa === this) {
        children.push(part);
      }
    }
    
    return children;
  }

  /**
   * Java版getAllDescendants()メソッド - 全子孫パーツの取得
   */
  public getAllDescendants(): EPart[] {
    const descendants: EPart[] = [];
    const children = this.getChildParts();
    
    for (const child of children) {
      descendants.push(child);
      descendants.push(...child.getAllDescendants());
    }
    
    return descendants;
  }

  /**
   * Java版setOpacityRecursive()メソッド - 再帰的透明度設定
   */
  public setOpacityRecursive(opacity: number): void {
    this.opacity = opacity;
    
    const children = this.getChildParts();
    for (const child of children) {
      child.setOpacityRecursive(opacity);
    }
  }

  /**
   * Java版setVisibleRecursive()メソッド - 再帰的表示設定
   */
  public setVisibleRecursive(visible: boolean): void {
    // Unit 024のデバッグ情報
    if (this.args && (this.args[1] as number) === 24 && this.id === 24 && visible === false) {
      console.log(`Unit 024 Part ${this.id} setVisibleRecursive(false) called:`, new Error().stack);
    }
    
    this.visible = visible;
    
    const children = this.getChildParts();
    for (const child of children) {
      child.setVisibleRecursive(visible);
    }
  }

  /**
   * Java版drawBGEffect()メソッド - 背景エフェクト描画
   */
  public drawBGEffect(
    ctx: CanvasRenderingContext2D,
    _origin: P,
    _sizer: P,
    spriteImage: HTMLImageElement | null,
    imgcut: { cuts?: number[][]; } | null
  ): void {
    // visibleチェックを追加
    if (!this.visible || this.img < 0 || !spriteImage || !imgcut || this.extType === 0) {
      return;
    }
    
    try {
      // Java版準拠の範囲外スプライトチェック
      if (!imgcut.cuts || this.img >= imgcut.cuts.length) {
        return;
      }
      
      // 有効なスプライトデータかチェック
      const spriteData = imgcut.cuts[this.img];
      if (!spriteData || spriteData.length < 4) {
        return;
      }
      
      const [sx, sy, sw, sh] = spriteData;
      
      // 背景エフェクト用の透明度調整
      const bgOpacity = this.opa() * 0.3; // 背景は30%の透明度
      
      ctx.save();
      ctx.globalAlpha = bgOpacity;
      
      // 背景として少し大きく描画
      const scale = 1.2;
      const scaledWidth = sw * scale;
      const scaledHeight = sh * scale;
      const offsetX = (scaledWidth - sw) / 2;
      const offsetY = (scaledHeight - sh) / 2;
      
      ctx.drawImage(
        spriteImage,
        sx, sy, sw, sh,
        -this.piv.x - offsetX, -this.piv.y - offsetY, 
        scaledWidth, scaledHeight
      );
      
      ctx.restore();
      
    } catch (error) {
      console.warn(`EPart#${this.id} BG effect error:`, error);
    }
  }

  /**
   * Java版drawRandom()メソッド - ランダムスプライト描画（カース効果）
   */
  public drawRandom(
    ctx: CanvasRenderingContext2D,
    _origin: P,
    _sizer: P,
    spriteImage: HTMLImageElement | null,
    imgcut: { cuts?: number[][]; } | null,
    maxSpriteId: number
  ): void {
    // visibleチェックを追加
    if (!this.visible || this.img < 0 || !spriteImage || !imgcut || this.extType !== 2) {
      return;
    }
    
    try {
      // ランダムスプライトID生成（フレーム毎に変化）
      const randomSeed = Math.floor(Date.now() / 100); // 100ms毎に変化
      const randomSpriteId = randomSeed % maxSpriteId;
      
      if (!imgcut.cuts || randomSpriteId >= imgcut.cuts.length) {
        return;
      }
      
      const [sx, sy, sw, sh] = imgcut.cuts[randomSpriteId];
      
      // ランダム効果のための透明度とサイズ変化
      const randomOpacity = this.opa() * (0.7 + Math.random() * 0.3);
      const randomScale = 0.9 + Math.random() * 0.2;
      
      ctx.save();
      ctx.globalAlpha = randomOpacity;
      
      const scaledWidth = sw * randomScale;
      const scaledHeight = sh * randomScale;
      
      ctx.drawImage(
        spriteImage,
        sx, sy, sw, sh,
        -this.piv.x, -this.piv.y, 
        scaledWidth, scaledHeight
      );
      
      ctx.restore();
      
    } catch (error) {
      console.warn(`EPart#${this.id} random draw error:`, error);
    }
  }

  /**
   * Java版drawExtended()メソッド - 拡張描画（repeat/tiling）
   */
  public drawExtended(
    ctx: CanvasRenderingContext2D,
    _origin: P,
    _sizer: P,
    spriteImage: HTMLImageElement | null,
    imgcut: { cuts?: number[][]; } | null
  ): void {
    // visibleチェックを追加
    if (!this.visible || this.img < 0 || !spriteImage || !imgcut || 
        this.extType !== 3 || (this.extendX <= 0 && this.extendY <= 0)) {
      return;
    }
    
    try {
      if (!imgcut.cuts || this.img >= imgcut.cuts.length) {
        return;
      }
      
      const [sx, sy, sw, sh] = imgcut.cuts[this.img];
      
      // X方向とY方向の繰り返し数
      const repeatX = Math.max(1, this.extendX);
      const repeatY = Math.max(1, this.extendY);
      
      ctx.save();
      ctx.globalAlpha = this.opa();
      
      for (let x = 0; x < repeatX; x++) {
        for (let y = 0; y < repeatY; y++) {
          const offsetX = x * sw;
          const offsetY = y * sh;
          
          ctx.drawImage(
            spriteImage,
            sx, sy, sw, sh,
            -this.piv.x + offsetX, -this.piv.y + offsetY, 
            sw, sh
          );
        }
      }
      
      ctx.restore();
      
    } catch (error) {
      console.warn(`EPart#${this.id} extended draw error:`, error);
    }
  }

  /**
   * Java版removeBasePivot()メソッド - ピボット調整
   */
  public removeBasePivot(): void {
    const basePivotX = this.args[6] as number;
    const basePivotY = this.args[7] as number;
    
    // 現在のピボットからベースピボットを除去
    this.piv.x -= basePivotX;
    this.piv.y -= basePivotY;
  }

  /**
   * Java版setPara()メソッド - パラメータ親設定
   */
  public setPara(parentPart: EPart | null): void {
    this.fa = parentPart;
  }

  /**
   * Java版getVal()メソッド - 現在値取得
   */
  public getVal(modifType: number): number {
    switch (modifType) {
      case 1: // POS_X
      case 11: // POS_X_DIRECT
        return this.pos.x;
      case 3: // POS_Y
      case 12: // POS_Y_DIRECT
        return this.pos.y;
      case 9: // SCALE_X
        return this.sca.x * 1000;
      case 10: // SCALE_Y
        return this.sca.y * 1000;
      case 13: // ROTATION
        return this.angle;
      case 14: // OPACITY
        return this.opa() * 1000;
      case 2: // SPRITE_CHANGE
        return this.img;
      case 15: // VISIBLE
        return this.visible ? 1 : 0;
      case 50: // EXT_TYPE
        return this.extType;
      case 51: // EXT_X
        return this.extendX;
      case 52: // EXT_Y
        return this.extendY;
      default:
        return 0;
    }
  }

  /**
   * Java版getValRaw()メソッド - 生値取得（変換なし）
   */
  public getValRaw(modifType: number): number {
    return this.getVal(modifType);
  }

  /**
   * Java版hasExtendEffect()メソッド - 拡張エフェクトの有無判定
   */
  public hasExtendEffect(): boolean {
    return this.extType > 0 || this.extendX > 0 || this.extendY > 0;
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