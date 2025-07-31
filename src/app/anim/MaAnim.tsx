// MaAnim - アニメーションシーケンス管理
// common/util/anim/MaAnim.java の TypeScript 実装

import { Part } from './Part';

/**
 * MaAnimデータ構造
 */
export interface MaAnimData {
  n: number;
  parts: Part[];
  max: number;
  len: number;
}

/**
 * MaAnim クラス
 * アニメーションシーケンス全体を管理するクラス
 */
export class MaAnim {
  public n: number;
  public parts: Part[];
  public max: number;
  public len: number;

  constructor(data?: Partial<MaAnimData>) {
    this.n = data?.n || 0;
    this.parts = data?.parts || [];
    this.max = data?.max || 1;
    this.len = data?.len || 1;
    
    this.validate();
  }

  /**
   * デフォルトアニメーションを作成（Java版のデフォルトコンストラクタ）
   */
  public static createDefault(): MaAnim {
    return new MaAnim();
  }

  /**
   * データ検証と最大フレーム数計算
   * Java版のvalidate()メソッド
   */
  public validate(): void {
    // スプライト変更でマイナス値を0に補正
    for (let i = 0; i < this.parts.length; i++) {
      if (this.parts[i].ints[1] === 2) { // SPRITE_CHANGE
        for (let j = 0; j < this.parts[i].moves.length; j++) {
          if (this.parts[i].moves[j][1] < 0) {
            this.parts[i].moves[j][1] = 0;
          }
        }
      }
    }

    // 最大フレーム数を計算
    this.max = 1;
    for (let i = 0; i < this.n; i++) {
      const partMax = this.parts[i].getMax();
      if (partMax > this.max) {
        this.max = partMax;
      }
    }
    
    this.len = 1;
    for (let i = 0; i < this.n; i++) {
      this.len = Math.max(this.len, this.parts[i].getMax());
    }
  }

  /**
   * 左右反転
   * Java版のrevert()メソッド
   */
  public revert(): void {
    for (const part of this.parts) {
      if (part.ints[1] === 11) { // POS_X
        for (const move of part.moves) {
          move[1] *= -1;
        }
      }
    }
  }

  /**
   * アニメーション更新処理
   * Java版のupdate(float f, EAnimD<?> eAnim, boolean rotate)メソッド
   */
  public update(frame: number, entities: Array<{ setValue?: () => void, alter: (type: number, value: number) => void, id: number, parentId: number }>, rotate: boolean = false): void {
    let adjustedFrame = frame;
    
    if (rotate) {
      adjustedFrame = frame % (this.max + 1);
    }

    // フレーム0で初期値を設定
    if (adjustedFrame === 0) {
      for (const entity of entities) {
        if (entity && entity.setValue) {
          entity.setValue();
        }
      }
    }

    // 各パーツの更新処理
    for (let i = 0; i < this.n; i++) {
      const part = this.parts[i];
      const loop = part.ints[2];
      const smax = part.max;
      const fir = part.fir;
      const lmax = smax - fir;

      const prot = rotate || loop === -1;
      let partFrame: number;

      if (prot) {
        const mf = loop === -1 ? smax : this.max + 1;
        partFrame = mf === 0 ? 0 : (adjustedFrame + part.off) % mf;
      } else {
        partFrame = adjustedFrame + part.off;
      }

      // ループ処理
      if (loop > 0 && lmax !== 0) {
        if (partFrame > fir + loop * lmax) {
          part.ensureLast(entities);
          continue;
        }
        
        if (partFrame <= fir) {
          // そのまま
        } else if (partFrame < fir + loop * lmax) {
          partFrame = fir + (partFrame - fir) % lmax;
        } else {
          partFrame = smax;
        }
      }

      part.update(partFrame, entities);
    }

    // エンティティのソート（描画順序）
    this.sortEntities(entities);
  }

  /**
   * エンティティをソート（描画順序を決定）
   * Java版のsort()メソッドに対応
   */
  private sortEntities(entities: Array<{ parentId: number, id: number }>): void {
    // 描画順序のソート（親から子の順番）
    entities.sort((a, b) => {
      // 親子関係を考慮したソート
      if (a.parentId === -1 && b.parentId !== -1) return -1;
      if (a.parentId !== -1 && b.parentId === -1) return 1;
      return a.id - b.id;
    });
  }

  /**
   * パーツデータをチェック
   * Java版のcheck(AnimD<?, ?> anim)メソッド相当
   */
  public check(mamodelPartCount: number, imgcutCount: number): void {
    for (const part of this.parts) {
      // パーツIDの範囲チェック
      if (part.ints[0] >= mamodelPartCount) {
        part.ints[0] = 0;
      }
      if (part.ints[0] < 0) {
        part.ints[0] = 0;
      }
      
      // スプライト変更の場合、スプライトIDをチェック
      if (part.ints[1] === 2) {
        for (const move of part.moves) {
          if (move[1] >= imgcutCount || move[1] < 0) {
            move[1] = 0;
          }
        }
      }
    }
  }

  /**
   * パーツの並び替え
   * Java版でのPart.compareTo()を使用したソート
   */
  public sortParts(): void {
    this.parts.sort((a, b) => a.compareTo(b));
  }

  /**
   * クローンを作成
   */
  public clone(): MaAnim {
    return new MaAnim({
      n: this.n,
      parts: this.parts.map(part => part.clone()),
      max: this.max,
      len: this.len
    });
  }

  /**
   * ファイル出力用のwrite処理（デバッグ用）
   */
  public write(): string {
    const lines: string[] = [];
    
    lines.push('[maanim]');
    lines.push('1');
    lines.push(this.parts.length.toString());
    
    for (const part of this.parts) {
      lines.push(part.write());
    }
    
    return lines.join('\n');
  }

  /**
   * アニメーションが空かどうかを判定
   */
  public isEmpty(): boolean {
    return this.n === 0 || this.parts.length === 0;
  }

  /**
   * 指定されたパーツIDのパーツを取得
   */
  public getPartById(partId: number): Part | undefined {
    return this.parts.find(part => part.ints[0] === partId);
  }

  /**
   * 指定されたモディファイアタイプのパーツを取得
   */
  public getPartsByModifType(modifType: number): Part[] {
    return this.parts.filter(part => part.ints[1] === modifType);
  }

  /**
   * 新しいパーツを追加
   */
  public addPart(part: Part): void {
    this.parts.push(part);
    this.n = this.parts.length;
    this.validate();
  }

  /**
   * パーツを削除
   */
  public removePart(index: number): boolean {
    if (index >= 0 && index < this.parts.length) {
      this.parts.splice(index, 1);
      this.n = this.parts.length;
      this.validate();
      return true;
    }
    return false;
  }

  /**
   * 指定されたフレームでアクティブなパーツを取得
   */
  public getActivePartsAtFrame(frame: number): Part[] {
    return this.parts.filter(part => {
      if (part.n === 0) return false;
      const firstFrame = part.moves[0][0];
      const lastFrame = part.moves[part.n - 1][0];
      return frame >= firstFrame && frame <= lastFrame;
    });
  }
}