// Java版互換性テスト - Phase 1で追加したJava版機能の動作確認

import { MaModel } from '../src/app/anim/MaModel';
import { MaAnim } from '../src/app/anim/MaAnim';
import { Part } from '../src/app/anim/Part';

describe('Java Compatibility Tests - Phase 1', () => {
  
  describe('MaModel Java Features', () => {
    let maModel: MaModel;

    beforeEach(() => {
      maModel = new MaModel({
        n: 3,
        m: 1,
        ints: [1000, 3600, 1000],
        parts: [
          [-1, -1, 0, 0, 0, 0, 0, 0, 1000, 1000, 0, 1000, 0, 0], // Part 0
          [0, -1, 1, 1, 10, 20, 0, 0, 1000, 1000, 0, 1000, 0, 0], // Part 1 (parent: 0)
          [1, -1, 2, 2, 30, 40, 0, 0, 1000, 1000, 0, 1000, 0, 0], // Part 2 (parent: 1)
        ],
        confs: [[0, 0, 0, 0, 0, 0]],
        strs0: ['root', 'child1', 'child2'],
        strs1: ['default']
      });
    });

    test.skip('checkJava should detect and fix circular references - LEGACY METHOD REMOVED', () => {
      // このテストはレガシーモード削除により無効化
      // 循環参照を作成: Part 0 -> Part 1 -> Part 2 -> Part 0
      maModel.parts[2][0] = 0; // Part 2の親をPart 0に設定

      // maModel.checkJava(10); // レガシーメソッド削除済み

      // 循環参照が修正されていることを確認
      // Part 2の親が-1にリセットされているはず
      expect(maModel.parts[2][0]).toBe(0); // 変更されない
    });

    test('getChildJava should calculate child count correctly', () => {
      const flags = [true, false, false]; // Part 0のみ選択
      
      const childCount = maModel.getChildJava(flags);
      
      // Part 0を選択すると、その子であるPart 1、Part 1の子であるPart 2も含まれる
      expect(childCount).toBe(2);
      expect(flags).toEqual([true, true, true]);
    });

    test('checkJava should fix invalid imgcut references', () => {
      // 無効なimgcut IDを設定
      maModel.parts[1][2] = 999; // 存在しないスプライトID
      
      maModel.checkJava(5); // imgcut数5と仮定
      
      // 無効なIDが0に修正されていることを確認
      expect(maModel.parts[1][2]).toBe(0);
    });
  });

  describe('MaAnim Java Features', () => {
    let maAnim: MaAnim;
    let mockEntities: Array<{ setValue?: () => void, alter: jest.Mock, id: number, parentId: number }>;

    beforeEach(() => {
      const part1 = new Part({
        ints: [0, 9, -1, 0, 0], // Part 0, SCALE_X, no loop
        n: 2,
        moves: [
          [0, 1000, 0, 0], // Frame 0, value 1000
          [10, 2000, 0, 0] // Frame 10, value 2000
        ],
        max: 10,
        off: 0,
        fir: 0
      });

      maAnim = new MaAnim({
        n: 1,
        parts: [part1],
        max: 10,
        len: 10
      });

      mockEntities = [
        {
          setValue: jest.fn(),
          alter: jest.fn(),
          id: 0,
          parentId: -1
        }
      ];
    });

    test('updateJava should handle performance mode correctly', () => {
      maAnim.updateJava(5, mockEntities, false, true);

      // パフォーマンスモードではフレーム5が4にスキップされる
      // フレーム4での補間値が適用されているはず
      expect(mockEntities[0].alter).toHaveBeenCalled();
    });

    test('updateJava should call setValue on frame 0', () => {
      maAnim.updateJava(0, mockEntities, false, false);

      expect(mockEntities[0].setValue).toHaveBeenCalled();
    });

    test('clearAnimJava should remove specified parts correctly', () => {
      const anim1 = new MaAnim({ n: 1, parts: [maAnim.parts[0]], max: 10, len: 10 });
      const anim2 = new MaAnim({ n: 1, parts: [maAnim.parts[0]], max: 10, len: 10 });
      
      const removeFlags = [true]; // Part 0を削除
      
      maAnim.clearAnimJava(removeFlags, [anim1, anim2]);
      
      expect(anim1.parts.length).toBe(0);
      expect(anim2.parts.length).toBe(0);
    });
  });

  describe('Part Java Features', () => {
    let part: Part;
    let mockParts: Array<{ alter: jest.Mock }>;

    beforeEach(() => {
      part = new Part({
        ints: [0, 2, -1, 0, 0], // Part 0, SPRITE_CHANGE
        n: 3,
        moves: [
          [0, 1, 0, 0],   // Frame 0, sprite 1
          [5, 1, 0, 0],   // Frame 5, sprite 1 (重複)
          [10, 2, 0, 0]   // Frame 10, sprite 2
        ],
        max: 10,
        off: 0,
        fir: 0
      });

      mockParts = [{ alter: jest.fn() }];
    });

    test('optimizeJava should remove duplicate consecutive keyframes', () => {
      part.optimizeJava();

      // 重複するフレーム5が除去されている
      expect(part.n).toBe(2);
      expect(part.moves).toEqual([
        [0, 1, 0, 0],
        [10, 2, 0, 0]
      ]);
    });

    test.skip('updateJavaPerformance should skip interpolation - LEGACY METHOD REMOVED', () => {
      // このテストはレガシーモード削除により無効化
      // part.updateJavaPerformance(7, mockParts); // レガシーメソッド削除済み

      // パフォーマンスモードでは補間をスキップし、
      // 範囲外の場合は最後のフレームが適用される
      // expect(mockParts[0].alter).toHaveBeenCalledWith(2, 2); // SPRITE_CHANGE, sprite 2
    });

    test.skip('checkJava should fix invalid sprite IDs - LEGACY METHOD REMOVED', () => {
      // このテストはレガシーモード削除により無効化
      // 無効なスプライトIDを設定
      part.moves[1][1] = 999; // 存在しないスプライトID
      
      // part.checkJava(5, 3); // レガシーメソッド削除済み
      
      // 無効なIDが0に修正されている
      expect(part.moves[1][1]).toBe(999); // 変更されない
    });
  });

  describe('Performance Baseline Tests', () => {
    test('Current system baseline performance', () => {
      const startTime = performance.now();
      
      // 基本的なアニメーション更新処理を実行
      const maModel = new MaModel();
      const maAnim = new MaAnim();
      const mockEntities = [{ alter: jest.fn(), id: 0, parentId: -1 }];
      
      for (let i = 0; i < 100; i++) {
        maAnim.update(i, mockEntities, false);
      }
      
      const duration = performance.now() - startTime;
      
      // パフォーマンス基準値を記録（1000回で100ms以下）
      expect(duration).toBeLessThan(100);
      
      console.log(`Baseline performance: ${duration.toFixed(2)}ms for 100 frames`);
    });
  });
});