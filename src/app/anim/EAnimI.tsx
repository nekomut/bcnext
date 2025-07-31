// EAnimI - Java版 common/util/anim/EAnimI.java の抽象クラス実装
// アニメーション実行エンジンの中核インターフェース

import { EPart } from './EPart';
import type { MaModel } from './MaModel';

/**
 * 2D座標点クラス（Java版P.javaの簡略版）
 */
class P {
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
}

/**
 * アニメーションインターフェース（Java版AnimI相当）
 */
export interface AnimI {
  // 基本アニメーション情報
  name?: string;
  id?: number;
}

/**
 * バトルオブジェクト基底クラス（Java版BattleObj相当）
 */
abstract class BattleObj {
  protected selected: boolean = false;

  public isSelected(): boolean {
    return this.selected;
  }

  public setSelected(selected: boolean): void {
    this.selected = selected;
  }
}

/**
 * アニメーション実行エンジンの抽象基底クラス
 * Java版のcommon/util/anim/EAnimI.javaの完全移植
 */
export abstract class EAnimI extends BattleObj {
  public sele: number = -1;        // 選択されたパーツのインデックス
  public ent: EPart[] | null = null;  // エンティティパーツの配列
  protected order: EPart[] | null = null;  // パーツの描画順序配列
  protected readonly a: AnimI;     // アニメーション実装参照
  protected readonly mamodel: MaModel;  // モデルデータ参照

  constructor(animInterface: AnimI, mamodel: MaModel) {
    super();
    this.a = animInterface;
    this.mamodel = mamodel;
  }

  // 抽象メソッド（サブクラスで実装必須）
  public abstract draw(g: CanvasRenderingContext2D, ori: P, siz: number): void;
  public abstract ind(): number;
  public abstract len(): number;
  public abstract setTime(value: number): void;
  public abstract update(rotate: boolean): void;

  /**
   * パーツ配列初期化（Java版organize相当）
   * MaModel.arrange()を呼び出してEPart配列を生成
   */
  public organize(): void {
    this.ent = this.mamodel.arrangeJava() as EPart[];
    this.order = this.ent ? [...this.ent] : null;
    this.sort();
  }

  /**
   * Z値ベースクイックソート（Java版sort完全再現）
   * フレーム毎に呼び出されて描画順序を決定
   */
  public sort(): void {
    if (this.order && this.order.length > 0) {
      this.quickSort(this.order, 0, this.order.length - 1);
    }
  }

  /**
   * クイックソート実装（Java版完全再現）
   * EPart.compareTo()を使用してZ値・レイヤーでソート
   */
  private quickSort(arr: EPart[], low: number, high: number): void {
    if (low < high) {
      const pivot = arr[Math.floor((low + high) / 2)];
      let i = low - 1;
      let j = high + 1;
      
      while (i < j) {
        // 左側から pivot より大きい要素を検索
        while (arr[++i].compareTo(pivot) < 0) { 
          /* empty */ 
        }
        
        // 右側から pivot より小さい要素を検索
        while (arr[--j].compareTo(pivot) > 0) { 
          /* empty */ 
        }
        
        if (i >= j) break;
        
        // 要素交換
        const tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
      }
      
      // 再帰的にソート
      this.quickSort(arr, low, j);
      this.quickSort(arr, j + 1, high);
    }
  }

  /**
   * 描画順序配列取得
   */
  public getOrder(): EPart[] {
    return this.order || [];
  }

  /**
   * エンティティ配列取得
   */
  public getEntities(): EPart[] {
    return this.ent || [];
  }

  /**
   * 指定IDのパーツを取得
   */
  public getPart(id: number): EPart | null {
    if (!this.ent || id < 0 || id >= this.ent.length) {
      return null;
    }
    return this.ent[id];
  }

  /**
   * 選択パーツの設定
   */
  public setSelectedPart(id: number): void {
    this.sele = id;
  }

  /**
   * 選択パーツの取得
   */
  public getSelectedPart(): EPart | null {
    return this.getPart(this.sele);
  }

  /**
   * 全パーツの表示状態設定
   */
  public setAllVisible(visible: boolean): void {
    if (!this.ent) return;
    
    for (const part of this.ent) {
      part.visible = visible;
    }
  }

  /**
   * 指定パーツの表示状態設定
   */
  public setPartVisible(id: number, visible: boolean): void {
    const part = this.getPart(id);
    if (part) {
      part.visible = visible;
    }
  }

  /**
   * アニメーション情報取得
   */
  public anim(): AnimI {
    return this.a;
  }

  /**
   * モデル情報取得
   */
  public model(): MaModel {
    return this.mamodel;
  }

  /**
   * パーツ数取得
   */
  public getPartCount(): number {
    return this.ent ? this.ent.length : 0;
  }

  /**
   * 統計情報取得（デバッグ用）
   */
  public getStats(): {
    partCount: number;
    visibleParts: number;
    selectedPart: number;
    orderArraySize: number;
  } {
    const visibleParts = this.ent ? 
      this.ent.filter(part => part.visible).length : 0;
    
    return {
      partCount: this.getPartCount(),
      visibleParts,
      selectedPart: this.sele,
      orderArraySize: this.order ? this.order.length : 0
    };
  }

  /**
   * 全パーツのsetValue実行（アニメーション初期化用）
   */
  protected initializeAllParts(): void {
    if (!this.ent) return;
    
    for (const part of this.ent) {
      part.setValue();
    }
  }

  /**
   * 全パーツのリソースクリーンアップ
   */
  public dispose(): void {
    if (this.ent) {
      for (const part of this.ent) {
        part.dispose();
      }
    }
    this.ent = null;
    this.order = null;
  }

  /**
   * 文字列表現
   */
  public toString(): string {
    return `EAnimI(parts=${this.getPartCount()}, selected=${this.sele})`;
  }
}