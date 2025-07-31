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

  constructor(data?: Partial<PartData>) {
    this.ints = data?.ints || [0, 5, -1, 0, 0];
    this.name = data?.name || '';
    this.n = data?.n || 0;
    this.moves = data?.moves || [];
    this.max = data?.max || 0;
    this.off = data?.off || 0;
    this.fir = data?.fir || 0;
    
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
  public update(frame: number, parts: Array<{ alter: (type: number, value: number) => void }>): void {
    this.frame = frame;

    for (let i = 0; i < this.n; i++) {
      if (frame === this.moves[i][0]) {
        // 完全一致の場合
        this.vd = this.moves[i][1];
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
      fir: this.fir
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
}