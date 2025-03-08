import '@testing-library/jest-dom';
import { generateWorkerInitializationMessage } from '../src/app/seek/workerMsg';
import { GatyaSet } from '@/data/gatyasets';

// Mock the gatyasets type
jest.mock('../src/data/gatyasets', () => ({}));

describe('workerMsg', () => {
  describe('generateWorkerInitializationMessage', () => {
    const mockGatyaSet: GatyaSet = {
      name: 'Test Gatya Set',
      shortName: 'test',
      gatyasetId: 1,
      rateCumSum: [3000, 8000, 10000],
      pools: [
        {
          rate: 3000,
          units: ['unitA', 'unitB', 'unitC'],
          reroll: true,
        },
        {
          rate: 5000,
          units: ['unitD', 'unitE'],
          reroll: false,
        },
        {
          rate: 2000,
          units: ['unitF'],
          reroll: true,
        },
      ],
    };

    test('should correctly convert units to numeric indices', () => {
      const rolls = ['unitA', 'unitD', 'unitF'];
      
      const result = generateWorkerInitializationMessage({
        gatyaset: mockGatyaSet,
        rolls,
      });
      
      // Check if units are properly converted to indices
      // Units are indexed in the flattened array: ['unitA', 'unitB', 'unitC', 'unitD', 'unitE', 'unitF']
      expect(result.rolls).toEqual([0, 3, 5]);
      
      // Check if pools are properly converted
      expect(result.gatyasetUnits).toEqual([
        [0, 1, 2], // Super Rare pool
        [3, 4],    // Ultra Rare pool
        [5],       // Legendary pool
      ]);
      
      // Check if rerollable pools are correctly identified
      expect(result.gatyasetRerollablePools).toEqual([0, 2]);
      
      // Check if rate cum sum is passed through
      expect(result.gatyasetRateCumSum).toEqual([3000, 8000, 10000]);
    });

    test('should throw error when pools and rates do not match', () => {
      const invalidGatyaSet = {
        ...mockGatyaSet,
        rateCumSum: [5000, 10000], // Only 2 rates for 3 pools
      };
      
      expect(() => {
        generateWorkerInitializationMessage({
          gatyaset: invalidGatyaSet as GatyaSet,
          rolls: ['unitA'],
        });
      }).toThrow('Number of pools and number of cumulative rates do not match');
    });

    test('should throw error when rolls contain units not in the gatyaset', () => {
      const invalidRolls = ['unitA', 'unitZ']; // unitZ doesn't exist in the gatyaset
      
      expect(() => {
        generateWorkerInitializationMessage({
          gatyaset: mockGatyaSet,
          rolls: invalidRolls,
        });
      }).toThrow('Rolls contains units not in the gatyaset');
    });

    test('should handle empty rolls array', () => {
      const result = generateWorkerInitializationMessage({
        gatyaset: mockGatyaSet,
        rolls: [],
      });
      
      expect(result.rolls).toEqual([]);
      expect(result.gatyasetUnits).toHaveLength(3);
      expect(result.gatyasetRerollablePools).toEqual([0, 2]);
    });
    
    test('should handle gatya sets with no rerollable pools', () => {
      const noRerollGatyaSet = {
        ...mockGatyaSet,
        pools: mockGatyaSet.pools.map(pool => ({
          ...pool,
          reroll: false,
        })),
      };
      
      const result = generateWorkerInitializationMessage({
        gatyaset: noRerollGatyaSet as GatyaSet,
        rolls: ['unitA'],
      });
      
      expect(result.gatyasetRerollablePools).toEqual([]);
    });
  });
});
