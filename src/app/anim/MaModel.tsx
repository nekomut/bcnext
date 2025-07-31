// MaModel - パーツ構造とモデル定義
// common/util/anim/MaModel.java の TypeScript 実装

// import { Part } from './Part'; // 循環import回避のため型のみ参照

/**
 * MaModelデータ構造
 */
export interface MaModelData {
  n: number; // パーツ数
  m: number; // コンフィグ数
  ints: number[]; // [scale, angle, ...]
  parts: number[][]; // パーツ定義 [parent, sprite, x, y, ...]
  confs: number[][]; // コンフィグ定義
  strs0: string[]; // パーツ名
  strs1: string[]; // コンフィグ名
}

/**
 * MaModel クラス
 * アニメーションモデルの構造とパーツ定義を管理するクラス
 */
export class MaModel {
  public n: number;
  public m: number;
  public ints: number[];
  public parts: number[][];
  public confs: number[][];
  public strs0: string[];
  public strs1: string[];
  public status: Map<number[], number> = new Map();

  constructor(data?: Partial<MaModelData>) {
    this.n = data?.n || 1;
    this.m = data?.m || 1;
    this.ints = data?.ints || [1000, 3600, 1000];
    this.parts = data?.parts || [[-1, -1, 0, 0, 0, 0, 0, 0, 1000, 1000, 0, 1000, 0, 0]];
    this.confs = data?.confs || [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]];
    this.strs0 = data?.strs0 || ['default'];
    this.strs1 = data?.strs1 || ['default'];
  }

  /**
   * デフォルトモデルを作成（Java版のデフォルトコンストラクタ）
   */
  public static createDefault(): MaModel {
    return new MaModel();
  }

  /**
   * アニメーションとの整合性をチェック
   * Java版のcheck(AnimD<?, ?> anim)メソッド
   */
  public check(imgcutCount: number): void {
    // imgcut IDの検証
    for (const part of this.parts) {
      if (part[2] >= imgcutCount) {
        part[2] = 0;
      }
      if (part[0] > this.n) {
        part[0] = 0;
      }
    }

    // 親子関係のループ検出
    const temp = new Array(this.parts.length).fill(0);
    for (let i = 0; i < this.parts.length; i++) {
      this.checkLoop(temp, i);
    }
    
    // ループを検出したパーツの親を-1にリセット
    for (let i = 0; i < this.parts.length; i++) {
      if (temp[i] === 2) {
        this.parts[i][0] = -1;
      }
    }
  }

  /**
   * ループ検出の再帰処理
   * Java版のcheck(int[] temp, int p)メソッド
   */
  private checkLoop(temp: number[], p: number): number {
    if (temp[p] > 0) {
      return temp[p];
    }
    
    if (this.parts[p][0] === -1) {
      return temp[p] = 1;
    }
    
    temp[p] = 2; // 検証中マーク
    
    if (this.parts[p][0] >= this.parts.length) {
      this.parts[p][0] = 0;
    }
    
    return temp[p] = this.checkLoop(temp, this.parts[p][0]);
  }

  /**
   * 指定されたパーツを削除してアニメーションをクリア
   * Java版のclearAnim(boolean[] bs, MaAnim[] as)メソッド
   */
  public clearAnim(removeFlags: boolean[], animations: Array<{ parts: Array<{ ints: number[] }>, n: number }>): void {
    for (const anim of animations) {
      const newParts: Array<{ ints: number[] }> = [];
      for (const part of anim.parts) {
        if (!removeFlags[part.ints[0]]) {
          newParts.push(part);
        }
      }
      anim.parts = newParts;
      anim.n = anim.parts.length;
    }
  }

  /**
   * 子パーツの数を取得
   * Java版のgetChild(boolean[] bs)メソッド
   */
  public getChild(flags: boolean[]): number {
    let total = 0;
    let count = 1;
    
    while (count > 0) {
      count = 0;
      for (let i = 0; i < this.n; i++) {
        if (!flags[i] && this.parts[i][0] >= 0 && flags[this.parts[i][0]]) {
          count++;
          total++;
          flags[i] = true;
        }
      }
    }
    
    return total;
  }

  /**
   * パーツの順序を変更
   * Java版のreorder(int[] move)メソッド
   */
  public reorder(moveIndices: number[]): void {
    const oldParts = this.parts;
    const oldNames = this.strs0;
    
    this.parts = new Array(moveIndices.length);
    this.strs0 = new Array(moveIndices.length);
    
    for (let i = 0; i < this.n; i++) {
      const moveIndex = moveIndices[i];
      if (moveIndex < 0 || moveIndex >= oldParts.length) {
        // 新しいデフォルトパーツを作成
        this.parts[i] = [0, -1, 0, 0, 0, 0, 0, 0, 1000, 1000, 0, 1000, 0, 0];
        this.strs0[i] = 'new part';
      } else {
        this.parts[i] = oldParts[moveIndex];
        this.strs0[i] = oldNames[moveIndex];
      }
    }
  }

  /**
   * 左右反転
   * Java版のrevert()メソッド
   */
  public revert(): void {
    // 最初のパーツのスケール反転
    this.parts[0][8] *= -1;
    
    // 全パーツの回転反転
    for (const part of this.parts) {
      part[10] *= -1;
    }
  }

  /**
   * パーツエンティティの配列を作成
   * Java版のarrange(EAnimI e)メソッドに対応
   */
  public arrange(): Array<{ id: number, alter: (type: number, value: number) => void, parentId: number }> {
    const entities: Array<{ id: number, alter: (type: number, value: number) => void, parentId: number }> = new Array(this.n);
    
    for (let i = 0; i < this.n; i++) {
      entities[i] = this.createEPart(this.parts[i], this.strs0[i], i);
    }
    
    return entities;
  }

  /**
   * EPart相当のオブジェクトを作成
   */
  private createEPart(modelPart: number[], partName: string, index: number): { id: number, alter: (type: number, value: number) => void, parentId: number } {
    const result = {
      id: index,
      parentId: modelPart[0],
      spriteId: modelPart[2],
      x: modelPart[3],
      y: modelPart[4],
      scaleX: modelPart[8] / 1000,
      scaleY: modelPart[9] / 1000,
      rotation: modelPart[10],
      opacity: modelPart[11] / 1000,
      visible: true,
      glow: modelPart[12] === 1,
      name: partName,
      
      // アニメーション値を適用するメソッド
      alter: function(modifType: number, value: number) {
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
    };
    
    return result as { id: number, alter: (type: number, value: number) => void, parentId: number };
  }

  /**
   * クローンを作成
   */
  public clone(): MaModel {
    return new MaModel({
      n: this.n,
      m: this.m,
      ints: [...this.ints],
      parts: this.parts.map(part => [...part]),
      confs: this.confs.map(conf => [...conf]),
      strs0: [...this.strs0],
      strs1: [...this.strs1]
    });
  }

  /**
   * Java版arrange()メソッド - EPart配列生成
   * common/util/anim/MaModel.java の arrange(EAnimI e) に対応
   */
  public arrangeJava(): unknown[] {
    // 循環参照回避のため、EPart生成は呼び出し側で実行
    // EAnimD.createEPartArray()で実際の生成を行う
    return [];
  }

  /**
   * Java版check()メソッド - 循環参照検出・修正
   * common/util/anim/MaModel.java の check(AnimD<?, ?> anim) に対応
   */
  public checkJava(imgcutCount: number): void {
    // imgcut ID検証
    for (const part of this.parts) {
      if (part[2] >= imgcutCount) part[2] = 0;
      if (part[0] > this.n) part[0] = 0;
    }

    // 循環参照検出・修正
    const temp = new Array(this.parts.length).fill(0);
    for (let i = 0; i < this.parts.length; i++) {
      this.checkLoopJava(temp, i);
    }

    // 循環参照パーツの親を-1にリセット
    for (let i = 0; i < this.parts.length; i++) {
      if (temp[i] === 2) {
        this.parts[i][0] = -1;
      }
    }
  }

  /**
   * Java版check()の再帰処理
   * common/util/anim/MaModel.java の check(int[] temp, int p) に対応
   */
  private checkLoopJava(temp: number[], p: number): number {
    if (temp[p] > 0) return temp[p];
    if (this.parts[p][0] === -1) return temp[p] = 1;

    temp[p] = 2; // 検証中マーク
    if (this.parts[p][0] >= this.parts.length) {
      this.parts[p][0] = 0;
    }

    const result = this.checkLoopJava(temp, this.parts[p][0]);
    temp[p] = result;
    return result;
  }

  /**
   * Java版getChild()メソッド - 子パーツ数計算
   * common/util/anim/MaModel.java の getChild(boolean[] bs) に対応
   */
  public getChildJava(flags: boolean[]): number {
    let total = 0;
    let count = 1;

    while (count > 0) {
      count = 0;
      for (let i = 0; i < this.n; i++) {
        if (!flags[i] && this.parts[i][0] >= 0 && flags[this.parts[i][0]]) {
          count++;
          total++;
          flags[i] = true;
        }
      }
    }

    return total;
  }

  /**
   * ファイル出力用のwrite処理（デバッグ用）
   */
  public write(): string {
    const lines: string[] = [];
    
    lines.push('[mamodel]');
    lines.push('3');
    lines.push(this.n.toString());
    
    // パーツ定義
    for (let i = 0; i < this.n; i++) {
      const partLine = this.parts[i].slice(0, 13).join(',') + ',' + this.strs0[i];
      lines.push(partLine);
    }
    
    // 設定値
    lines.push(this.ints.join(','));
    lines.push(this.m.toString());
    
    // コンフィグ定義
    for (let i = 0; i < this.m; i++) {
      const confLine = this.confs[i].join(',') + ',' + this.strs1[i];
      lines.push(confLine);
    }
    
    return lines.join('\n');
  }
}