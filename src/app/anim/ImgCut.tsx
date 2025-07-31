// ImgCut - スプライト切り取り定義
// common/util/anim/ImgCut.java の TypeScript 実装

/**
 * ImgCutデータ構造
 */
export interface ImgCutData {
  name: string;
  n: number;
  cuts: number[][]; // [x, y, width, height][]
  strs: string[];
}

/**
 * ImgCut クラス
 * スプライトシートから個別のスプライト画像を切り出すためのクラス
 */
export class ImgCut {
  public name: string;
  public n: number;
  public cuts: number[][];
  public strs: string[];

  constructor(data?: Partial<ImgCutData>) {
    this.name = data?.name || '';
    this.n = data?.n || 1;
    this.cuts = data?.cuts || [[0, 0, 1, 1]];
    this.strs = data?.strs || ['default'];
  }

  /**
   * スプライト画像を切り取る
   * Java版のcut(FakeImage bimg)メソッドに対応
   */
  public cut(canvas: HTMLCanvasElement): HTMLCanvasElement[] {
    const parts: HTMLCanvasElement[] = [];
    const sourceCtx = canvas.getContext('2d');
    if (!sourceCtx) return parts;

    const w = canvas.width;
    const h = canvas.height;

    for (let i = 0; i < this.n; i++) {
      let [x, y, width, height] = this.cuts[i];
      
      // Java版の境界チェックロジックを再現
      if (x < 0) x = 0;
      if (y < 0) y = 0;
      if (x > w - 1) x = w - 1;
      if (y > h - 1) y = h - 1;
      if (width <= 0) width = 1;
      if (height <= 0) height = 1;
      if (width + x > w) width = w - x;
      if (height + y > h) height = h - y;
      
      // 新しいキャンバスを作成
      const partCanvas = document.createElement('canvas');
      partCanvas.width = width;
      partCanvas.height = height;
      const partCtx = partCanvas.getContext('2d');
      
      if (partCtx) {
        // 元画像から切り取って新しいキャンバスに描画
        partCtx.drawImage(canvas, x, y, width, height, 0, 0, width, height);
      }
      
      parts.push(partCanvas);
    }
    
    return parts;
  }

  /**
   * クローンを作成
   */
  public clone(): ImgCut {
    return new ImgCut({
      name: this.name,
      n: this.n,
      cuts: this.cuts.map(cut => [...cut]),
      strs: [...this.strs]
    });
  }

  /**
   * ファイル出力用のwrite処理（デバッグ用）
   */
  public write(): string {
    const lines: string[] = [];
    lines.push('[imgcut]');
    lines.push('0');
    lines.push(this.name);
    lines.push(this.n.toString());
    
    for (let i = 0; i < this.n; i++) {
      const cutStr = this.cuts[i].join(',') + ',' + this.strs[i];
      lines.push(cutStr);
    }
    
    return lines.join('\n');
  }
}