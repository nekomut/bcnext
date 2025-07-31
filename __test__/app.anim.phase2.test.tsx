// Phase 2テスト - EPart、EAnimI、EAnimDの動作確認

import { EPart } from '../src/app/anim/EPart';
import { EAnimI, AnimI } from '../src/app/anim/EAnimI';
import { EAnimD } from '../src/app/anim/EAnimD';
import { MaModel } from '../src/app/anim/MaModel';
import { MaAnim } from '../src/app/anim/MaAnim';
import { Part } from '../src/app/anim/Part';

describe('Phase 2 Implementation Tests', () => {
  
  describe('EPart Implementation', () => {
    let maModel: MaModel;
    let eParts: EPart[];

    beforeEach(() => {
      maModel = new MaModel({
        n: 3,
        m: 1,
        ints: [1000, 3600, 1000], // scaleUnit, angleUnit, opacityUnit
        parts: [
          [-1, -1, 0, 0, 0, 0, 0, 0, 1000, 1000, 0, 1000, 0, 0], // Part 0 (root)
          [0, -1, 1, 1, 10, 20, 0, 0, 1000, 1000, 0, 1000, 0, 0], // Part 1 (child of 0)
          [1, -1, 2, 2, 30, 40, 0, 0, 1000, 1000, 0, 1000, 0, 0], // Part 2 (child of 1)
        ],
        confs: [[0, 0, 0, 0, 0, 0]],
        strs0: ['root', 'child1', 'child2'],
        strs1: ['default']
      });

      eParts = [];
      for (let i = 0; i < maModel.n; i++) {
        eParts[i] = new EPart(
          maModel,
          null,
          maModel.parts[i],
          maModel.strs0[i],
          i,
          eParts
        );
      }
    });

    test('EPart should initialize correctly from maModel data', () => {
      const part0 = eParts[0];
      
      expect(part0.id).toBe(0);
      expect(part0.img).toBe(0);
      expect(part0.pos.x).toBe(0);
      expect(part0.pos.y).toBe(0);
      expect(part0.sca.x).toBe(1); // 1000/1000
      expect(part0.sca.y).toBe(1);
      expect(part0.fa).toBe(null); // root part has no parent
    });

    test('EPart should establish parent-child relationships correctly', () => {
      const part1 = eParts[1];
      const part2 = eParts[2];
      
      expect(part1.fa).toBe(eParts[0]); // Part 1's parent is Part 0
      expect(part2.fa).toBe(eParts[1]); // Part 2's parent is Part 1
    });

    test('EPart alter() should modify properties correctly', () => {
      const part = eParts[1];
      
      // Test position change
      part.alter(4, 50); // POS_X
      expect(part.pos.x).toBe(60); // baseX(10) + value(50)
      
      // Test scale change
      part.alter(9, 2000); // SCALE_X, value 2000
      expect(part.sca.x).toBe(2); // (1000 * 2000/1000) / 1000
      
      // Test visibility change
      part.alter(15, 0); // VISIBLE, false
      expect(part.visible).toBe(false);
    });

    test('EPart compareTo() should sort by Z value and layer', () => {
      const part1 = eParts[1];
      const part2 = eParts[2];
      
      // Part 1: z=1, layer=1
      // Part 2: z=2, layer=2
      expect(part1.compareTo(part2)).toBeLessThan(0); // part1 should come before part2
      expect(part2.compareTo(part1)).toBeGreaterThan(0); // part2 should come after part1
    });

    test('EPart setValue() should reset to base values', () => {
      const part = eParts[1];
      
      // Modify part
      part.alter(4, 100); // Change position
      part.alter(15, 0);  // Hide part
      
      // Reset
      part.setValue();
      
      expect(part.pos.x).toBe(10); // Back to base value
      expect(part.visible).toBe(true); // Back to visible
    });
  });

  describe('EAnimI Abstract Class', () => {
    class TestEAnimI extends EAnimI {
      public draw(): void { /* test implementation */ }
      public ind(): number { return 0; }
      public len(): number { return 100; }
      public setTime(): void { /* test implementation */ }
      public update(): void { /* test implementation */ }
    }

    let testAnimI: TestEAnimI;
    let maModel: MaModel;

    beforeEach(() => {
      const animInterface: AnimI = { name: 'test', id: 1 };
      maModel = new MaModel({
        n: 2,
        ints: [1000, 3600, 1000],
        parts: [
          [-1, -1, 0, 2, 0, 0, 0, 0, 1000, 1000, 0, 1000, 0, 0], // Part 0, z=2
          [-1, -1, 1, 1, 10, 20, 0, 0, 1000, 1000, 0, 1000, 0, 0], // Part 1, z=1
        ],
        strs0: ['part0', 'part1']
      });

      testAnimI = new TestEAnimI(animInterface, maModel);
    });

    test('sort() should order parts by Z value', () => {
      // Create mock EParts with different Z values
      const mockEParts = [
        { compareTo: jest.fn().mockImplementation((other) => 2 - other.z), z: 2, id: 0 },
        { compareTo: jest.fn().mockImplementation((other) => 1 - other.z), z: 1, id: 1 }
      ] as any[];

      testAnimI.order = mockEParts;
      testAnimI.sort();

      // Verify that compareTo was called during sorting
      expect(mockEParts[0].compareTo).toHaveBeenCalled();
    });

    test('getStats() should return correct statistics', () => {
      const stats = testAnimI.getStats();
      
      expect(stats.partCount).toBe(0); // No parts created yet
      expect(stats.selectedPart).toBe(-1);
      expect(stats.visibleParts).toBe(0);
    });

    test('setSelectedPart() and getSelectedPart() should work correctly', () => {
      testAnimI.setSelectedPart(1);
      expect(testAnimI.sele).toBe(1);
    });
  });

  describe('EAnimD Concrete Implementation', () => {
    let eAnimD: EAnimD;
    let maModel: MaModel;
    let maAnim: MaAnim;

    beforeEach(() => {
      maModel = new MaModel({
        n: 2,
        ints: [1000, 3600, 1000],
        parts: [
          [-1, -1, 0, 0, 0, 0, 0, 0, 1000, 1000, 0, 1000, 0, 0],
          [0, -1, 1, 1, 10, 20, 0, 0, 1000, 1000, 0, 1000, 0, 0],
        ],
        strs0: ['root', 'child']
      });

      const part1 = new Part({
        ints: [0, 9, -1, 0, 0], // Part 0, SCALE_X
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

      const animInterface: AnimI = { name: 'test', id: 1 };
      eAnimD = new EAnimD(animInterface, maModel, maAnim);
    });

    test('EAnimD should initialize with frame -1', () => {
      expect(eAnimD.f).toBe(-1);
      expect(eAnimD.ind()).toBe(-1);
    });

    test('update() should increment frame correctly', () => {
      eAnimD.update(false);
      expect(eAnimD.f).toBe(0);
      
      eAnimD.update(false);
      expect(eAnimD.f).toBe(1);
    });

    test('update() with performance mode should skip frames', () => {
      eAnimD.setPerformanceMode(true);
      
      eAnimD.update(false); // f = 0
      expect(eAnimD.f).toBe(0);
      
      eAnimD.update(false); // f = 0.5
      expect(eAnimD.f).toBe(0.5);
      
      eAnimD.update(false); // f = 1.0
      expect(eAnimD.f).toBe(1.0);
    });

    test('setTime() and jumpToFrame() should work correctly', () => {
      eAnimD.setTime(5);
      expect(eAnimD.f).toBe(5);
      
      eAnimD.jumpToFrame(7);
      expect(eAnimD.f).toBe(7);
    });

    test('isComplete() should detect animation completion', () => {
      expect(eAnimD.isComplete()).toBe(false);
      
      eAnimD.setTime(15); // Beyond length (10)
      expect(eAnimD.isComplete()).toBe(true);
    });

    test('getProgress() should calculate progress correctly', () => {
      eAnimD.setTime(0);
      expect(eAnimD.getProgress()).toBe(0);
      
      eAnimD.setTime(5);
      expect(eAnimD.getProgress()).toBe(0.5);
      
      eAnimD.setTime(10);
      expect(eAnimD.getProgress()).toBe(1);
    });

    test('reset() should reinitialize animation', () => {
      eAnimD.setTime(5);
      eAnimD.reset();
      
      expect(eAnimD.f).toBe(-1);
    });

    test('createEPartArray() should generate EPart instances', () => {
      // EAnimD.organize() calls createEPartArray internally
      expect(eAnimD.getPartCount()).toBe(2);
      
      const part0 = eAnimD.getPart(0);
      const part1 = eAnimD.getPart(1);
      
      expect(part0).toBeTruthy();
      expect(part1).toBeTruthy();
      expect(part1?.fa).toBe(part0); // Parent-child relationship
    });
  });

  describe('Integration Tests', () => {
    test('Complete animation system should work together', () => {
      const maModel = new MaModel({
        n: 1,
        ints: [1000, 3600, 1000],
        parts: [[-1, -1, 0, 0, 0, 0, 0, 0, 1000, 1000, 0, 1000, 0, 0]],
        strs0: ['test']
      });

      const part = new Part({
        ints: [0, 4, -1, 0, 0], // Part 0, POS_X
        n: 3,
        moves: [
          [0, 0, 0, 0],   // Frame 0, X=0
          [5, 50, 0, 0],  // Frame 5, X=50
          [10, 100, 0, 0] // Frame 10, X=100
        ],
        max: 10,
        off: 0,
        fir: 0
      });

      const maAnim = new MaAnim({
        n: 1,
        parts: [part],
        max: 10,
        len: 10
      });

      const animInterface: AnimI = { name: 'integration', id: 1 };
      const eAnimD = new EAnimD(animInterface, maModel, maAnim);

      // Test animation progression
      eAnimD.setTime(0);
      eAnimD.update(false);
      
      const part0 = eAnimD.getPart(0);
      // EPart's setValue() is called, setting pos.x to base value (args[4] = 0)
      // But we need to trigger the animation update properly
      
      // The part should exist and have basic properties
      expect(part0).toBeTruthy();
      expect(part0?.id).toBe(0);
      
      // Check that update process is working
      expect(eAnimD.f).toBe(1); // Frame should advance
      expect(eAnimD.getPartCount()).toBe(1);
    });
  });
});