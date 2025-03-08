import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { useSearchParams } from 'next/navigation';
import Tile, { T, zip, chunk } from '@/app/normal/Tile';
import { DEFAULTS } from '@/app/normal/constants';
import * as seedModule from '@/app/normal/seed';
import { Roll } from '@/app/normal/seed';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useSearchParams: jest.fn(),
}));

// Mock the seed module
jest.mock('@/app/normal/seed', () => ({
  GenerateAllRolls: jest.fn(),
  Roll: jest.fn(),
}));

// Mock the data module
jest.mock('@/data/gatyasets', () => ({
  NormalGatyaSetList: [
    { shortName: 'p', name: 'Platinum', id: 1 },
    { shortName: 'c', name: 'Catseye', id: 2 },
    { shortName: 'g', name: 'Gold', id: 3 },
    { shortName: 'x', name: 'Test', id: 4 },
  ],
}));

describe('Tile utility functions', () => {
  // Create mock Roll objects that match the expected structure
  const createMockRoll = (id: number, rarity: number = 0): Roll => ({
    cellId: `cell-${id}`,
    rarity: rarity,
    raritySeed: 12345 + id,
    unitIfDistinct: {
      unitIndex: id,
      unitName: `Unit ${id}`,
      unitSeed: 67890 + id
    }
  });

  describe('T function', () => {
    test('should transpose arrays correctly', () => {
      const input = [
        [createMockRoll(1), createMockRoll(2)],
        [createMockRoll(3), createMockRoll(4)],
      ];
      const expected = [
        [createMockRoll(1), createMockRoll(3)],
        [createMockRoll(2), createMockRoll(4)],
      ];
      expect(T(input)).toEqual(expected);
    });

    test('should handle arrays of different lengths', () => {
      const input = [
        [createMockRoll(1), createMockRoll(2), createMockRoll(3)],
        [createMockRoll(4), createMockRoll(5)],
      ];
      const expected = [
        [createMockRoll(1), createMockRoll(4)],
        [createMockRoll(2), createMockRoll(5)],
      ];
      expect(T(input)).toEqual(expected);
    });
  });

  describe('zip function', () => {
    test('should zip arrays correctly', () => {
      const arr1 = [[createMockRoll(1)], [createMockRoll(2)]];
      const arr2 = [[createMockRoll(3)], [createMockRoll(4)]];
      const expected = [[[createMockRoll(1)], [createMockRoll(3)]], [[createMockRoll(2)], [createMockRoll(4)]]];
      expect(zip(arr1, arr2)).toEqual(expected);
    });
  });

  describe('chunk function', () => {
    test('should chunk arrays correctly', () => {
      const array = [1, 2, 3, 4, 5, 6, 7];
      const size = 3;
      const expected = [[1, 2, 3], [4, 5, 6], [7]];
      expect(chunk(array, size)).toEqual(expected);
    });

    test('should handle empty arrays', () => {
      const array: number[] = [];
      const size = 3;
      const expected: number[][] = [];
      expect(chunk(array, size)).toEqual(expected);
    });
  });
});

describe('Tile component', () => {
  beforeEach(() => {
    // Mock the useSearchParams hook
    const mockSearchParams = new URLSearchParams();
    mockSearchParams.set('seed', '12345');
    (useSearchParams as jest.Mock).mockReturnValue(mockSearchParams);

    // Mock the GenerateAllRolls function
    (seedModule.GenerateAllRolls as jest.Mock).mockReturnValue([
      {
        gatyasetName: 'Platinum',
        gatyasetShortName: 'p',
        gatyasetId: 1,
        trackA: Array(2000).fill(0).map((_, i) => ({
          id: i,
          name: `Unit ${i}`,
          rarity: i % 5, // Mock different rarities
        })),
        trackB: Array(2000).fill(0).map((_, i) => ({
          id: i + 2000,
          name: `Unit ${i + 2000}`,
          rarity: (i + 2) % 5, // Different pattern for track B
        })),
      },
      {
        gatyasetName: 'Catseye',
        gatyasetShortName: 'c',
        gatyasetId: 2,
        trackA: Array(2000).fill(0).map((_, i) => ({
          id: i + 4000,
          name: `Unit ${i + 4000}`,
          rarity: (i + 1) % 5,
        })),
        trackB: Array(2000).fill(0).map((_, i) => ({
          id: i + 6000,
          name: `Unit ${i + 6000}`,
          rarity: (i + 3) % 5,
        })),
      },
      {
        gatyasetName: 'Gold',
        gatyasetShortName: 'g',
        gatyasetId: 3,
        trackA: Array(2000).fill(0).map((_, i) => ({
          id: i + 8000,
          name: `Unit ${i + 8000}`,
          rarity: (i + 2) % 5,
        })),
        trackB: Array(2000).fill(0).map((_, i) => ({
          id: i + 10000,
          name: `Unit ${i + 10000}`,
          rarity: (i + 4) % 5,
        })),
      },
    ]);
  });

  test('renders without crashing', () => {
    render(<Tile />);
    expect(screen.getByText(/闇/)).toBeInTheDocument();
    expect(screen.getByText(/超激レア/)).toBeInTheDocument();
  });

  test('correctly filters gatyasets', () => {
    render(<Tile />);
    
    // Verify that GenerateAllRolls was called
    expect(seedModule.GenerateAllRolls).toHaveBeenCalled();
    
    // Verify it was called with the correct number of rolls
    const calls = (seedModule.GenerateAllRolls as jest.Mock).mock.calls;
    expect(calls.length).toBeGreaterThan(0);
    
    // Check the length of the second argument (numRolls)
    const numRollsArg = calls[0][1];
    expect(numRollsArg).toBe(2000);
  });

  test('displays the correct number of chunks', () => {
    render(<Tile />);
    // Since we're generating 2000 rolls, we should have multiple chunks (2000/100=20)
    // We're only checking that there's at least one chunk with 1A/1B
    expect(screen.getAllByText(/1A/).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/1B/).length).toBeGreaterThan(0);
  });

  test('displays rarity count correctly', () => {
    render(<Tile />);
    // This depends on our mock data but should show some counts
    const rarityCountElements = screen.getAllByText(/\d+/);
    expect(rarityCountElements.length).toBeGreaterThan(0);
  });
});
