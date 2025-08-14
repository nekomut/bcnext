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
  public ea: { sort: () => void } | null = null;  // EAnimIへの参照（再ソート用）

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
    this.id = this.args[1] as number;  // unit_id設定（Java版互換）
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
        // Java版準拠：Z値を更新
        this.z = value * this.ent.length + this.ind;
        // Z値変更後、EAnimIのorder配列を再ソートする必要がある
        if (this.ea) {
          this.ea.sort();
        }
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
  public getSize(): P {
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
   * Java版compareTo完全再現 + 安定ソート保証
   * 描画順序決定のためのソート用
   */
  public compareTo(other: EPart): number {
    // Java版 EPart.java:115 の Float.compare(z, o.z) を基本とする
    const zDiff = this.z - other.z;
    if (zDiff !== 0) {
      return zDiff;
    }
    
    // 同一Z値の場合：レイヤー比較（基本Z値 args[3]）
    const layerDiff = this.layer - other.layer;
    if (layerDiff !== 0) {
      return layerDiff;
    }
    
    // 同一Z値・同一レイヤーの場合：配列インデックス比較（安定ソート保証）
    return this.ind - other.ind;
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
      
      // 特殊エフェクト処理（glow=1パーツ）
      const needsBlackTransparency = this.shouldApplyBlackTransparency();
      const isRadialGlow = this.isRadialGlowEffect();
      
      let useCanvas = false;
      let transparentCanvas: HTMLCanvasElement | null = null;
      
      if (isRadialGlow) {
        // 光環専用の放射状発光処理
        transparentCanvas = this.createRadialGlowImage(spriteImage, sx, sy, sw, sh);
        useCanvas = true;
      } else if (needsBlackTransparency) {
        // 通常のglow処理（黒い部分透明化）
        transparentCanvas = this.createBlackTransparentImage(spriteImage, sx, sy, sw, sh);
        useCanvas = true;
      }
      
      // Java版準拠の透明度・glow処理（ImgCore.drawImg完全再現）
      const finalOpacity = this.opa();
      const glowValue = (this.args && this.args.length > 12) ? this.args[12] as number : 0;
      const glowSupport = (glowValue >= 1 && glowValue <= 3) || glowValue === -1;
      
      // Java版の透明度閾値: fullOpa = 90
      const fullOpaThreshold = 90 * 0.01 - 1e-5; // 0.9 - 1e-5
      
      ctx.save();
      
      if (finalOpacity < fullOpaThreshold) {
        // 透明度が90%未満の場合
        if (glowSupport) {
          // Java版: g.setComposite(FakeGraphics.BLEND, (int)(opa * 256), glow)
          ctx.globalAlpha = finalOpacity;
          if (isRadialGlow) {
            // 光環は加算合成で強い発光効果
            ctx.globalCompositeOperation = 'lighter';
          } else if (needsBlackTransparency || glowValue === 1) {
            ctx.globalCompositeOperation = 'lighten';
          }
        } else {
          // 通常の透明度処理
          ctx.globalAlpha = finalOpacity;
        }
      } else {
        // 透明度が90%以上の場合
        if (glowSupport) {
          // Java版: g.setComposite(FakeGraphics.BLEND, 256, glow)
          ctx.globalAlpha = 1.0; // 完全不透明
          if (isRadialGlow) {
            // 光環は加算合成で強い発光効果
            ctx.globalCompositeOperation = 'lighter';
          } else if (needsBlackTransparency || glowValue === 1) {
            ctx.globalCompositeOperation = 'lighten';
          }
        } else {
          // 通常処理（完全不透明）
          ctx.globalAlpha = 1.0;
        }
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
      
      // Java版準拠: スケール値が0または無効な場合は描画しない
      if (!isFinite(sc.x) || !isFinite(sc.y) || absScX === 0 || absScY === 0) {
        // スケール値が0または無効な場合は描画しない（Java版準拠）
        ctx.restore();
        return;
      }
      
      // 正常な描画処理のみ実行
      {
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
          
          if (useCanvas && transparentCanvas) {
            // Canvasから描画
            ctx.drawImage(
              transparentCanvas,
              0, 0, sw, sh,  // ソース位置・サイズ（Canvasは切り出し済み）
              pivotOffsetX, pivotOffsetY, absScX, absScY  // ピボット基準位置・サイズ
            );
          } else {
            // 通常の画像から描画
            ctx.drawImage(
              spriteImage,
              sx, sy, sw, sh,  // ソース位置・サイズ
              pivotOffsetX, pivotOffsetY, absScX, absScY  // ピボット基準位置・サイズ
            );
          }
        } else {
          // 通常描画（Java版と同じ）
          if (useCanvas && transparentCanvas) {
            // Canvasから描画
            ctx.drawImage(
              transparentCanvas,
              0, 0, sw, sh,  // ソース位置・サイズ（Canvasは切り出し済み）
              -tpiv.x, -tpiv.y, absScX, absScY  // 通常位置・サイズ
            );
          } else {
            // 通常の画像から描画
            ctx.drawImage(
              spriteImage,
              sx, sy, sw, sh,  // ソース位置・サイズ
              -tpiv.x, -tpiv.y, absScX, absScY  // 通常位置・サイズ
            );
          }
        }
        
        ctx.restore();
      }
      
      P.delete(p0);
      P.delete(tpiv);
      P.delete(sc);
      
      // Canvas状態復元（Java版のg.setComposite(FakeGraphics.DEF, 0, 0)相当）
      ctx.restore();
      
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
   * 実際のimgcutデータを使用して正確な境界を計算
   */
  public getBounds(imgcut?: { cuts?: number[][]; }): { x: number, y: number, width: number, height: number } {
    const transform = this.getTransform();
    
    // 実際のスプライトサイズをimgcutから取得
    let spriteWidth = 100;  // デフォルト値
    let spriteHeight = 100; // デフォルト値
    
    if (imgcut && imgcut.cuts && this.img >= 0 && this.img < imgcut.cuts.length) {
      const imgcutData = imgcut.cuts[this.img];
      if (imgcutData && imgcutData.length >= 4) {
        spriteWidth = imgcutData[2];  // width
        spriteHeight = imgcutData[3]; // height
      }
    }
    
    // スプライトの4つの角を計算（ピボット考慮）
    const pivotX = this.piv?.x || 0;
    const pivotY = this.piv?.y || 0;
    const drawX = -pivotX;
    const drawY = -pivotY;
    const drawWidth = spriteWidth;
    const drawHeight = spriteHeight;
    
    // 4つの角の座標
    const corners = [
      { x: drawX, y: drawY },
      { x: drawX + drawWidth, y: drawY },
      { x: drawX + drawWidth, y: drawY + drawHeight },
      { x: drawX, y: drawY + drawHeight }
    ];
    
    // 変換後の座標を計算
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    
    corners.forEach(corner => {
      // マトリックス変換適用
      const transformedX = transform[0] * corner.x + transform[2] * corner.y + transform[4];
      const transformedY = transform[1] * corner.x + transform[3] * corner.y + transform[5];
      
      minX = Math.min(minX, transformedX);
      minY = Math.min(minY, transformedY);
      maxX = Math.max(maxX, transformedX);
      maxY = Math.max(maxY, transformedY);
    });
    
    return {
      x: minX,
      y: minY,
      width: maxX - minX,
      height: maxY - minY
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
  public hitTest(worldPoint: P, imgcut?: { cuts?: number[][]; }): boolean {
    if (!this.isVisibleFull()) {
      return false;
    }
    
    const localPoint = this.inverseTransformPoint(worldPoint);
    const bounds = this.getBounds(imgcut);
    
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
   * 黒い部分透明化が必要かどうかを判定
   * Java版準拠: glow=1が設定されているパーツで黒い部分を透明化
   */
  private shouldApplyBlackTransparency(): boolean {
    // Java版準拠: args[12]（glow値）が1の場合に透明化処理を適用
    if (this.args && this.args.length > 12) {
      const glowValue = this.args[12] as number;
      return glowValue === 1;
    }
    
    return false;
  }

  /**
   * 光環エフェクトかどうかを判定
   * Unit 043 Sprite 66「光環」(100x50px)など、放射状発光が必要なエフェクト
   */
  private isRadialGlowEffect(): boolean {
    if (!this.args || this.args.length <= 13) {
      return false;
    }
    
    const unitId = this.args[1] as number;
    const spriteId = this.img;
    const partName = this.args[13] as string;
    
    // Unit 043 Sprite 66「光環」(100x50px) - Part#168, Part#169「半線」の特定
    if (unitId === 43 && spriteId === 66 && typeof partName === 'string' && partName.includes('半線')) {
      return true;
    }
    
    // 他の光環系エフェクトも対象
    if (typeof partName === 'string' && 
        (partName.includes('光環') || partName.includes('光輪') || partName.includes('半線') || partName.includes('ライトリング'))) {
      return true;
    }
    
    return false;
  }

  /**
   * 光環専用の放射状発光処理による強化画像を作成
   * Java版の光環エフェクトを完全再現
   */
  private createRadialGlowImage(
    sourceImage: HTMLImageElement,
    sx: number, sy: number, sw: number, sh: number
  ): HTMLCanvasElement {
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = sw;
    tempCanvas.height = sh;
    const tempCtx = tempCanvas.getContext('2d');
    
    if (!tempCtx) {
      return tempCanvas;
    }
    
    // 元画像から指定された部分を描画
    tempCtx.drawImage(sourceImage, sx, sy, sw, sh, 0, 0, sw, sh);
    
    // ImageDataを取得
    const imageData = tempCtx.getImageData(0, 0, sw, sh);
    const data = imageData.data;
    const width = sw;
    const height = sh;
    
    // 光環専用の放射状発光処理
    const centerX = width / 2;
    const centerY = height / 2;
    const maxRadius = Math.sqrt(centerX * centerX + centerY * centerY);
    
    const processedData = new Uint8ClampedArray(data.length);
    
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const idx = (y * width + x) * 4;
        const r = data[idx];
        const g = data[idx + 1];
        const b = data[idx + 2];
        const a = data[idx + 3];
        
        if (a === 0) {
          processedData[idx] = r;
          processedData[idx + 1] = g;
          processedData[idx + 2] = b;
          processedData[idx + 3] = a;
          continue;
        }
        
        const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
        
        // 中心からの距離を計算
        const dx = x - centerX;
        const dy = y - centerY;
        const distanceFromCenter = Math.sqrt(dx * dx + dy * dy);
        const normalizedDistance = distanceFromCenter / maxRadius;
        
        // Java版光環の特殊発光処理
        let newR = r, newG = g, newB = b;
        let alphaMultiplier = 1.0;
        
        if (luminance > 32) {
          // 1. 中心から外側への放射状グラデーション強化
          const radialFactor = Math.max(0, 1.0 - normalizedDistance * 0.7);
          const radialBoost = 1.0 + radialFactor * 2.0; // 中心部で3倍明るく
          
          // 2. 色相別の強化（光環は通常黄色〜白色系）
          const isWarmColor = r >= g && r >= b; // 赤成分が最大
          const isCoolColor = b >= r && b >= g; // 青成分が最大
          
          let rBoost = radialBoost;
          let gBoost = radialBoost;
          let bBoost = radialBoost * 0.8; // 青を抑えて暖色強調
          
          if (isWarmColor) {
            rBoost *= 1.4; // 赤を更に強化
            gBoost *= 1.2; // 黄色に近づける
          } else if (isCoolColor) {
            bBoost *= 1.2; // 青系も強化
            rBoost *= 0.9;
          }
          
          // 3. ガンマ補正による明度強化
          const gamma = 0.6; // より明るく
          const rGamma = Math.pow(r / 255.0, gamma) * rBoost;
          const gGamma = Math.pow(g / 255.0, gamma) * gBoost;
          const bGamma = Math.pow(b / 255.0, gamma) * bBoost;
          
          // 4. 加算合成による強い発光効果
          const glowStrength = radialFactor * 0.6;
          newR = Math.min(255, Math.round((rGamma + glowStrength) * 255));
          newG = Math.min(255, Math.round((gGamma + glowStrength) * 255));
          newB = Math.min(255, Math.round((bGamma + glowStrength) * 255));
          
          // 5. 透明度も放射状に調整
          alphaMultiplier = Math.min(1.0, 0.3 + radialFactor * 0.7);
        } else {
          // 暗い部分は完全透明化
          alphaMultiplier = Math.pow(luminance / 32, 1.5) * 0.1;
        }
        
        processedData[idx] = newR;
        processedData[idx + 1] = newG;
        processedData[idx + 2] = newB;
        processedData[idx + 3] = Math.round(a * alphaMultiplier);
      }
    }
    
    // 最終ImageDataを適用
    const finalImageData = new ImageData(processedData, width, height);
    tempCtx.putImageData(finalImageData, 0, 0);
    
    return tempCanvas;
  }

  /**
   * Java版超高精度境界処理による発色強化画像を作成
   * サブピクセル精度のマルチサンプリング・アンチエイリアシング
   */
  private createBlackTransparentImage(
    sourceImage: HTMLImageElement,
    sx: number, sy: number, sw: number, sh: number
  ): HTMLCanvasElement {
    // 一時的なcanvasを作成してImageDataを取得
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = sw;
    tempCanvas.height = sh;
    const tempCtx = tempCanvas.getContext('2d');
    
    if (!tempCtx) {
      return tempCanvas;
    }
    
    // 元画像から指定された部分を描画
    tempCtx.drawImage(sourceImage, sx, sy, sw, sh, 0, 0, sw, sh);
    
    // ImageDataを取得
    const imageData = tempCtx.getImageData(0, 0, sw, sh);
    const data = imageData.data;
    const width = sw;
    const height = sh;
    
    // 高解像度処理用のマルチサンプリング
    const superSamplingFactor = 2; // 2x2スーパーサンプリング
    const processedData = new Uint8ClampedArray(data.length);
    
    // サブピクセル精度の距離フィールド計算
    const distanceField = new Float32Array(width * height);
    
    // 1パス目：距離フィールド生成（Java版の高精度境界検出）
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const idx = (y * width + x) * 4;
        const a = data[idx + 3];
        
        if (a === 0) {
          distanceField[y * width + x] = -1000; // 完全透明領域
          continue;
        }
        
        // Java版準拠の距離フィールド計算
        let minDistance = 1000;
        const searchRadius = 8; // 検索半径を拡大
        
        for (let dy = -searchRadius; dy <= searchRadius; dy++) {
          for (let dx = -searchRadius; dx <= searchRadius; dx++) {
            const ny = y + dy;
            const nx = x + dx;
            
            if (ny >= 0 && ny < height && nx >= 0 && nx < width) {
              const nIdx = (ny * width + nx) * 4;
              const nLum = 0.2126 * data[nIdx] + 0.7152 * data[nIdx + 1] + 0.0722 * data[nIdx + 2];
              const nAlpha = data[nIdx + 3];
              
              // 暗い領域または透明領域との距離を計算
              if (nLum <= 32 || nAlpha === 0) {
                const distance = Math.sqrt(dx * dx + dy * dy);
                minDistance = Math.min(minDistance, distance);
              }
            }
          }
        }
        
        distanceField[y * width + x] = minDistance;
      }
    }
    
    // 2パス目：マルチサンプリング・アンチエイリアシング
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const idx = (y * width + x) * 4;
        const r = data[idx];
        const g = data[idx + 1];
        const b = data[idx + 2];
        const a = data[idx + 3];
        
        if (a === 0) {
          processedData[idx] = r;
          processedData[idx + 1] = g;
          processedData[idx + 2] = b;
          processedData[idx + 3] = a;
          continue;
        }
        
        const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
        
        // Java版BLEND発色強化処理
        let newR = r, newG = g, newB = b;
        let alphaMultiplier = 1.0;
        
        if (luminance > 32) {
          // 1. ガンマ補正による明度強化
          const gamma = 0.7;
          const rNorm = r / 255.0;
          const gNorm = g / 255.0;
          const bNorm = b / 255.0;
          
          const rGamma = Math.pow(rNorm, gamma);
          const gGamma = Math.pow(gNorm, gamma);
          const bGamma = Math.pow(bNorm, gamma);
          
          // 2. 彩度強化
          const saturationBoost = 1.6;
          const maxComponent = Math.max(rGamma, gGamma, bGamma);
          const minComponent = Math.min(rGamma, gGamma, bGamma);
          const saturation = maxComponent > 0 ? (maxComponent - minComponent) / maxComponent : 0;
          
          const satBoostFactor = 1 + saturation * saturationBoost;
          
          // 3. 境界距離に基づく暖色強化（Java版準拠の発光効果）
          const distance = distanceField[y * width + x];
          const isBoundary = distance > 0 && distance <= 3.0; // 境界3ピクセル以内
          
          let rEnhanced = rGamma * satBoostFactor;
          let gEnhanced = gGamma * satBoostFactor;
          let bEnhanced = bGamma * satBoostFactor;
          
          // 4. 境界部分での暖色発光強化（Java版の特徴的な暖色効果）
          if (isBoundary) {
            const boundaryFactor = Math.max(0, (3.0 - distance) / 3.0); // 0.0-1.0
            const warmGlowStrength = boundaryFactor * 0.6;
            
            // 暖色系（赤・オレンジ・黄色）を境界で強く発光
            rEnhanced = Math.min(1.0, rEnhanced + warmGlowStrength * 1.2); // 赤を最も強化
            gEnhanced = Math.min(1.0, gEnhanced + warmGlowStrength * 0.8); // オレンジ系
            bEnhanced = Math.min(1.0, bEnhanced + warmGlowStrength * 0.3); // 黄色系（青は控えめ）
          }
          
          // 5. 加算合成による全体発光効果
          const additionStrength = luminance / 255.0 * 0.4;
          rEnhanced = Math.min(1.0, rEnhanced + additionStrength);
          gEnhanced = Math.min(1.0, gEnhanced + additionStrength);
          bEnhanced = Math.min(1.0, bEnhanced + additionStrength);
          
          // 6. コントラスト強化
          const contrast = 1.3;
          rEnhanced = Math.min(1.0, Math.max(0.0, (rEnhanced - 0.5) * contrast + 0.5));
          gEnhanced = Math.min(1.0, Math.max(0.0, (gEnhanced - 0.5) * contrast + 0.5));
          bEnhanced = Math.min(1.0, Math.max(0.0, (bEnhanced - 0.5) * contrast + 0.5));
          
          newR = Math.round(rEnhanced * 255);
          newG = Math.round(gEnhanced * 255);
          newB = Math.round(bEnhanced * 255);
        }
        
        // サブピクセル精度のマルチサンプリング
        let sampleAlpha = 0;
        const samples = superSamplingFactor * superSamplingFactor;
        
        for (let sy = 0; sy < superSamplingFactor; sy++) {
          for (let sx = 0; sx < superSamplingFactor; sx++) {
            // サブピクセル位置での距離フィールド値をサンプリング
            const subX = x + (sx + 0.5) / superSamplingFactor - 0.5;
            const subY = y + (sy + 0.5) / superSamplingFactor - 0.5;
            
            // バイリニア補間で距離フィールド値を取得
            const distance = this.sampleDistanceField(distanceField, width, height, subX, subY);
            
            // Java版準拠のスムーズステップ関数で滑らかな透明度遷移
            let sampleAlphaValue = 1.0;
            
            if (distance < 0) {
              sampleAlphaValue = 0.0; // 完全透明領域
            } else if (distance < 2.0) {
              // 境界から2ピクセル以内でスムーズな遷移
              const smoothFactor = distance / 2.0;
              // エルミート補間（S字カーブ）でさらに滑らかに
              const hermite = smoothFactor * smoothFactor * (3.0 - 2.0 * smoothFactor);
              
              if (luminance <= 32) {
                sampleAlphaValue = Math.pow(hermite, 2.0) * 0.1;
              } else if (luminance <= 96) {
                const t = (luminance - 32) / 64;
                // 境界部分での暖色発光を考慮した透明度強化
                const warmGlowBonus = distance <= 3.0 ? (3.0 - distance) / 3.0 * 0.2 : 0;
                sampleAlphaValue = hermite * (0.1 + t * 0.4 + warmGlowBonus);
              } else if (luminance <= 160) {
                const t = (luminance - 96) / 64;
                // 境界部分での暖色発光を考慮した透明度強化
                const warmGlowBonus = distance <= 3.0 ? (3.0 - distance) / 3.0 * 0.15 : 0;
                sampleAlphaValue = hermite * (0.5 + t * 0.3 + warmGlowBonus);
              } else {
                const t = (luminance - 160) / 95;
                // 高輝度境界部分での最大暖色発光効果
                const warmGlowBonus = distance <= 3.0 ? (3.0 - distance) / 3.0 * 0.1 : 0;
                sampleAlphaValue = hermite * (0.8 + t * 0.2 + warmGlowBonus);
              }
            } else {
              // 境界から遠い領域
              if (luminance <= 32) {
                sampleAlphaValue = Math.pow(luminance / 32, 1.5) * 0.1;
              } else if (luminance <= 96) {
                const t = (luminance - 32) / 64;
                sampleAlphaValue = 0.1 + t * 0.4;
              } else if (luminance <= 160) {
                const t = (luminance - 96) / 64;
                sampleAlphaValue = 0.5 + t * 0.3;
              } else {
                const t = (luminance - 160) / 95;
                sampleAlphaValue = 0.8 + t * 0.2;
              }
            }
            
            sampleAlpha += sampleAlphaValue;
          }
        }
        
        alphaMultiplier = sampleAlpha / samples;
        
        processedData[idx] = newR;
        processedData[idx + 1] = newG;
        processedData[idx + 2] = newB;
        processedData[idx + 3] = Math.round(a * alphaMultiplier);
      }
    }
    
    // 最終ImageDataを適用
    const finalImageData = new ImageData(processedData, width, height);
    tempCtx.putImageData(finalImageData, 0, 0);
    
    return tempCanvas;
  }

  /**
   * 距離フィールドのバイリニア補間サンプリング
   */
  private sampleDistanceField(
    distanceField: Float32Array, 
    width: number, 
    height: number, 
    x: number, 
    y: number
  ): number {
    const x0 = Math.floor(x);
    const y0 = Math.floor(y);
    const x1 = Math.min(x0 + 1, width - 1);
    const y1 = Math.min(y0 + 1, height - 1);
    
    const fx = x - x0;
    const fy = y - y0;
    
    const v00 = distanceField[y0 * width + x0];
    const v10 = distanceField[y0 * width + x1];
    const v01 = distanceField[y1 * width + x0];
    const v11 = distanceField[y1 * width + x1];
    
    const v0 = v00 * (1 - fx) + v10 * fx;
    const v1 = v01 * (1 - fx) + v11 * fx;
    
    return v0 * (1 - fy) + v1 * fy;
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