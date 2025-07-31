// Part - アニメーションパーツとキーフレーム処理
// common/util/anim/Part.java の TypeScript 実装

/**
 * Partデータ構造
 */
export interface PartData {
  ints: number[]; // [id, modif, loop, 0, 0]
  name: string;
  n: number;
  moves: number[][]; // [frame, value, easing, easingParam][]
  max: number;
  off: number;
  fir: number;
  // Java版拡張フィールド
  extType: number;   // エフェクト拡張タイプ
  extendX: number;   // X方向拡張値
  extendY: number;   // Y方向拡張値
}

/**
 * Part クラス
 * アニメーションの個別パーツ（キーフレーム）を管理するクラス
 */
export class Part {
  public ints: number[];
  public name: string;
  public n: number;
  public moves: number[][];
  public max: number;
  public off: number;
  public fir: number;
  public frame: number = 0;  // エディタ用
  public vd: number = 0;     // エディタ用
  // Java版拡張フィールド
  public extType: number = 0;   // エフェクト拡張タイプ
  public extendX: number = 0;   // X方向拡張値
  public extendY: number = 0;   // Y方向拡張値

  constructor(data?: Partial<PartData>) {
    this.ints = data?.ints || [0, 5, -1, 0, 0];
    this.name = data?.name || '';
    this.n = data?.n || 0;
    this.moves = data?.moves || [];
    this.max = data?.max || 0;
    this.off = data?.off || 0;
    this.fir = data?.fir || 0;
    // 拡張フィールド初期化
    this.extType = data?.extType || 0;
    this.extendX = data?.extendX || 0;
    this.extendY = data?.extendY || 0;
    
    this.validate();
  }

  /**
   * パーツIDとモディファイアで初期化（Java版コンストラクタ）
   */
  public static createWithIdAndModif(id: number, modif: number): Part {
    return new Part({
      ints: [id, modif, -1, 0, 0],
      name: '',
      n: 0,
      moves: [],
      max: 0,
      off: 0,
      fir: 0
    });
  }

  /**
   * データ検証とオフセット計算
   * Java版のvalidate()メソッド
   */
  public validate(): void {
    let doff = 0;
    if (this.n !== 0 && (this.moves[0][0] - this.off < 0 || this.ints[2] !== 1)) {
      doff -= this.moves[0][0];
    }
    
    for (let i = 0; i < this.n; i++) {
      this.moves[i][0] += doff;
    }
    
    this.off += doff;
    this.fir = this.moves.length === 0 ? 0 : this.moves[0][0];
    this.max = this.n > 0 ? this.moves[this.n - 1][0] : 0;
  }

  /**
   * 最大フレーム数を取得
   * Java版のgetMax()メソッド
   */
  public getMax(): number {
    if (this.ints[2] !== -1) {
      return this.ints[2] > 1 ? this.fir + (this.max - this.fir) * this.ints[2] - this.off : this.max - this.off;
    } else {
      return this.max - Math.min(this.off, 0);
    }
  }

  /**
   * 最後のキーフレームを強制適用
   * Java版のensureLast(EPart[] es)メソッド
   */
  public ensureLast(parts: Array<{ alter: (type: number, value: number) => void }>): void {
    if (this.n === 0) return;
    
    this.frame = this.moves[this.n - 1][0];
    this.vd = this.moves[this.n - 1][1];
    
    if (parts[this.ints[0]]) {
      parts[this.ints[0]].alter(this.ints[1], this.vd);
    }
  }

  /**
   * フレーム更新処理
   * Java版のupdate(float f, EPart[] es)メソッド
   */
  public update(frame: number, parts: Array<{ alter: (type: number, value: number) => void }>, unitId?: string): void {
    this.frame = frame;

    for (let i = 0; i < this.n; i++) {
      if (frame === this.moves[i][0]) {
        // 完全一致の場合
        this.vd = this.moves[i][1];
        
        // Unit 000 debug logging
        if (unitId === '000' && this.ints[1] === 2 && this.ints[0] === 1) {
          console.log(`SPRITE_CHANGE ExactMatch: frame=${frame}, part=${this.ints[0]}, vd=${this.vd}, move=[${this.moves[i][0]}, ${this.moves[i][1]}]`);
        }
        
        if (parts[this.ints[0]]) {
          parts[this.ints[0]].alter(this.ints[1], this.vd);
        }
        return;
      } else if (i < this.n - 1 && frame > this.moves[i][0] && frame < this.moves[i + 1][0]) {
        // キーフレーム間の補間処理
        if (this.ints[1] > 1) {
          const f0 = this.moves[i][0];
          const v0 = this.moves[i][1];
          const f1 = this.moves[i + 1][0];
          const v1 = this.moves[i + 1][1];
          let realFrame = frame;

          if (f1 - f0 === 1) {
            realFrame = Math.floor(frame);
          }

          let ti = (realFrame - f0) / (f1 - f0);
          const easingType = this.moves[i][2];
          const easingParam = this.moves[i][3];

          // イージング処理
          if (easingType === 1 || this.ints[1] === 13 || this.ints[1] === 14) {
            ti = 0;
          } else if (easingType === 0) {
            // 線形補間（そのまま）
          } else if (easingType === 2) {
            // べき乗イージング
            if (easingParam >= 0) {
              ti = 1 - Math.sqrt(1 - Math.pow(ti, easingParam));
            } else {
              ti = Math.sqrt(1 - Math.pow(1 - ti, -easingParam));
            }
          } else if (easingType === 3) {
            // カスタムイージング（ease3）
            this.vd = this.ease3(i, realFrame);
            if (parts[this.ints[0]]) {
              parts[this.ints[0]].alter(this.ints[1], this.vd);
            }
            return;
          } else if (easingType === 4) {
            // 三角関数イージング
            if (easingParam > 0) {
              ti = 1 - Math.cos(ti * Math.PI / 2);
            } else if (easingParam < 0) {
              ti = Math.sin(ti * Math.PI / 2);
            } else {
              ti = (1 - Math.cos(ti * Math.PI)) / 2;
            }
          }

          // 補間値を計算
          if (this.ints[1] === 2) { // SPRITE_CHANGE
            if (v1 - v0 < 0) {
              this.vd = Math.ceil((v1 - v0) * ti + v0);
            } else {
              this.vd = Math.floor((v1 - v0) * ti + v0);
            }
            
            // Unit 000 debug logging
            if (unitId === '000' && this.ints[1] === 2 && this.ints[0] === 1) {
              console.log(`SPRITE_CHANGE Debug: frame=${frame}, part=${this.ints[0]}, v0=${v0}, v1=${v1}, ti=${ti}, vd=${this.vd}, currentMove=[${this.moves[i][0]}, ${this.moves[i][1]}], nextMove=[${this.moves[i+1]?.[0] || 'end'}, ${this.moves[i+1]?.[1] || 'end'}]`);
            }
          } else {
            this.vd = Math.floor((v1 - v0) * ti + v0);
          }

          if (parts[this.ints[0]]) {
            parts[this.ints[0]].alter(this.ints[1], this.vd);
          }
          return;
        } else if (this.ints[1] === 0) {
          // VISIBLE
          if (parts[this.ints[0]]) {
            parts[this.ints[0]].alter(this.ints[1], this.moves[i][1]);
          }
        }
      }
    }

    // 最後のフレームを超えた場合
    if (this.n > 0 && frame > this.moves[this.n - 1][0]) {
      this.ensureLast(parts);
    }
  }

  /**
   * ラグランジュ補間（ease3）
   * Java版のease3(int i, float frame)メソッド
   */
  private ease3(i: number, frame: number): number {
    let low = i;
    let high = i;
    
    // 連続するease3の範囲を検出
    for (let j = i - 1; j >= 0; j--) {
      if (this.moves[j][2] === 3) {
        low = j;
      } else {
        break;
      }
    }
    
    for (let j = i + 1; j < this.moves.length; j++) {
      if (this.moves[j][2] === 3) {
        high = j;
      } else {
        break;
      }
    }

    let sum = 0;
    for (let j = low; j <= high; j++) {
      let val = this.moves[j][1] * 4096;
      for (let k = low; k <= high; k++) {
        if (j !== k) {
          val *= (frame - this.moves[k][0]) / (this.moves[j][0] - this.moves[k][0]);
        }
      }
      sum += val;
    }
    
    return Math.floor(sum / 4096);
  }

  /**
   * Java版拡張エフェクト処理
   * extType, extendX, extendYを使用した特殊エフェクト
   */
  public applyExtendedEffect(parts: Array<{ alter: (type: number, value: number) => void }>): void {
    if (this.extType === 0) return; // エフェクトなし
    
    const targetPart = parts[this.ints[0]];
    if (!targetPart) return;
    
    switch (this.extType) {
      case 1: // SLOW_EFFECT - スロー効果
        // フレーム進行を遅くする（実装は上位システムで）
        console.debug(`Slow effect applied to part ${this.ints[0]}`);
        break;
        
      case 2: // CURSE_EFFECT - カース効果（ランダムスプライト）
        if (this.ints[1] === 2) { // SPRITE_CHANGE
          // ランダムスプライトID生成
          const randomSpriteId = Math.floor(Math.random() * 10); // 仮実装
          targetPart.alter(this.ints[1], randomSpriteId);
        }
        break;
        
      case 3: // EXTEND_DRAW - 拡張描画（repeat/tiling）
        // extendX, extendYを使用した拡張描画フラグ設定
        if (this.extendX > 0 || this.extendY > 0) {
          // 拡張描画情報を保存（描画システムで使用）
          targetPart.alter(51, this.extendX); // EXT_X
          targetPart.alter(52, this.extendY); // EXT_Y
        }
        break;
        
      default:
        console.warn(`Unknown extType: ${this.extType}`);
        break;
    }
  }

  /**
   * Java版isOld()メソッド - 古いデータ形式の判定
   */
  public isOld(): boolean {
    // 古いデータ形式の判定ロジック
    return this.ints.length < 5 || this.extType === undefined;
  }

  /**
   * Java版migrate()メソッド - 古いデータの移行
   */
  public migrate(): void {
    if (!this.isOld()) return;
    
    // 古いデータを新形式に移行
    if (this.ints.length < 5) {
      // ints配列を5要素に拡張
      while (this.ints.length < 5) {
        this.ints.push(0);
      }
    }
    
    // 拡張フィールドの初期化
    if (this.extType === undefined) {
      this.extType = 0;
      this.extendX = 0;
      this.extendY = 0;
    }
    
    console.log(`Migrated old data format for part ${this.ints[0]}`);
  }

  /**
   * Java版getExtendValue()メソッド - 拡張値取得
   */
  public getExtendValue(axis: 'x' | 'y'): number {
    return axis === 'x' ? this.extendX : this.extendY;
  }

  /**
   * Java版setExtendValue()メソッド - 拡張値設定
   */
  public setExtendValue(axis: 'x' | 'y', value: number): void {
    if (axis === 'x') {
      this.extendX = value;
    } else {
      this.extendY = value;
    }
  }

  /**
   * Java版hasExtendEffect()メソッド - 拡張エフェクトの有無判定
   */
  public hasExtendEffect(): boolean {
    return this.extType > 0 || this.extendX > 0 || this.extendY > 0;
  }

  /**
   * クローンを作成
   */
  public clone(): Part {
    return new Part({
      ints: [...this.ints],
      name: this.name,
      n: this.n,
      moves: this.moves.map(move => [...move]),
      max: this.max,
      off: this.off,
      fir: this.fir,
      extType: this.extType,
      extendX: this.extendX,
      extendY: this.extendY
    });
  }

  /**
   * ファイル出力用のwrite処理（デバッグ用）
   */
  public write(): string {
    const lines: string[] = [];
    
    // ヘッダー行
    const headerLine = this.ints.join(',') + ',' + this.name;
    lines.push(headerLine);
    
    // キーフレーム数
    lines.push(this.moves.length.toString());
    
    // キーフレームデータ
    for (const move of this.moves) {
      const frameLine = (move[0] - this.off) + ',' + move.slice(1).join(',');
      lines.push(frameLine);
    }
    
    return lines.join('\n');
  }

  /**
   * Partの比較（ソート用）
   * Java版のcompareTo(Part o)メソッド
   */
  public compareTo(other: Part): number {
    return this.ints[0] - other.ints[0];
  }

  /**
   * Java版optimize()メソッド - 重複キーフレーム除去
   * common/util/anim/Part.java の最適化機能に対応
   */
  public optimizeJava(): void {
    if (this.n <= 1) return;

    const optimizedMoves: number[][] = [];
    let lastMove: number[] | null = null;

    for (let i = 0; i < this.n; i++) {
      const currentMove = this.moves[i];
      
      // 同一値の連続キーフレームをスキップ
      if (lastMove && 
          lastMove[1] === currentMove[1] && // 同じ値
          lastMove[2] === currentMove[2] && // 同じイージング
          lastMove[3] === currentMove[3]) { // 同じパラメータ
        continue;
      }
      
      optimizedMoves.push([...currentMove]);
      lastMove = currentMove;
    }

    this.moves = optimizedMoves;
    this.n = this.moves.length;
    this.validate();
  }

  /**
   * Java版のパフォーマンス測定更新処理
   * Java版のperformanceModeに対応した高速化版update
   */
  public updateJavaPerformance(frame: number, parts: Array<{ alter: (type: number, value: number) => void }>): void {
    // パフォーマンスモード時は補間を簡素化
    for (let i = 0; i < this.n; i++) {
      if (frame === this.moves[i][0]) {
        // 完全一致の場合は即座に適用
        this.vd = this.moves[i][1];
        if (parts[this.ints[0]]) {
          parts[this.ints[0]].alter(this.ints[1], this.vd);
        }
        return;
      }
    }

    // 最後のフレームを超えた場合、または範囲内の場合
    if (this.n > 0) {
      if (frame >= this.moves[this.n - 1][0]) {
        // 最後のキーフレーム値を適用
        this.vd = this.moves[this.n - 1][1];
        if (parts[this.ints[0]]) {
          parts[this.ints[0]].alter(this.ints[1], this.vd);
        }
      }
    }
  }

  /**
   * Java版の詳細バリデーション
   * common/util/anim/Part.java の check(AnimD<?, ?> anim) に対応
   */
  public checkJava(mamodelPartCount: number, imgcutCount: number): void {
    // パーツIDの範囲チェック
    if (this.ints[0] >= mamodelPartCount) {
      this.ints[0] = 0;
    }
    if (this.ints[0] < 0) {
      this.ints[0] = 0;
    }
    
    // スプライト変更の場合、全てのmoveのスプライトIDをチェック
    if (this.ints[1] === 2) { // SPRITE_CHANGE
      for (const move of this.moves) {
        if (move[1] >= imgcutCount || move[1] < 0) {
          move[1] = 0;
        }
      }
    }

    // フレーム順序の検証
    for (let i = 1; i < this.moves.length; i++) {
      if (this.moves[i][0] <= this.moves[i-1][0]) {
        console.warn(`Part ${this.ints[0]}: Frame order violation at index ${i}`);
      }
    }
  }
}