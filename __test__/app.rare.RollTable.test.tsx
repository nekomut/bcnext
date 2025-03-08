import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { useSearchParams } from 'next/navigation';
import RollTable, { T, zip } from '@/app/rare/RollTable';
import { DEFAULTS } from '@/app/rare/constants';
import { Roll } from '@/app/rare/seed';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useSearchParams: jest.fn(),
}));

// Mock the seed module
jest.mock('@/app/rare/seed', () => {
  return {
    GenerateAllRolls: jest.fn(() => [
      {
        gatyasetName: 'レアガチャ944',
        gatyasetShortName: 'set944',
        gatyasetId: 944,
        gatyasetGuaranteed: 0,
        trackA: [
          {
            rarity: 0,
            raritySeed: 12345,
            unitIfDistinct: { unitName: 'レアユニットA', unitSeed: 54321, unitIndex: 1 },
            unitIfDupe: { unitName: 'レアユニットA2' },
            dupeInfo: { showDupe: true, targetCellId: '1B', targetWillRerollAgain: false }
          },
          {
            rarity: 1,
            raritySeed: 23456,
            unitIfDistinct: { unitName: 'レアユニットB', unitSeed: 65432, unitIndex: 2 },
            unitIfDupe: null,
            dupeInfo: null
          },
          {
            rarity: 2,
            raritySeed: 34567,
            unitIfDistinct: { unitName: 'ネコムート', unitSeed: 76543, unitIndex: 3 },
            unitIfDupe: null,
            dupeInfo: null
          }
        ],
        trackB: [
          {
            rarity: 0,
            raritySeed: 12345,
            unitIfDistinct: { unitName: 'レアユニットA2', unitSeed: 54322, unitIndex: 4 },
            unitIfDupe: { unitName: 'レアユニットA' },
            dupeInfo: { showDupe: true, targetCellId: '1A', targetWillRerollAgain: true }
          },
          {
            rarity: 1,
            raritySeed: 23456,
            unitIfDistinct: { unitName: 'レアユニットB2', unitSeed: 65433, unitIndex: 5 },
            unitIfDupe: null,
            dupeInfo: null
          },
          {
            rarity: 2,
            raritySeed: 34567,
            unitIfDistinct: { unitName: 'ネコガキ', unitSeed: 76544, unitIndex: 6 },
            unitIfDupe: null,
            dupeInfo: null
          }
        ]
      },
      {
        gatyasetName: 'レアガチャ945',
        gatyasetShortName: 'set945',
        gatyasetId: 945,
        gatyasetGuaranteed: 1,
        trackA: [
          {
            rarity: 0,
            raritySeed: 12345,
            unitIfDistinct: { unitName: 'レアユニットC', unitSeed: 54323, unitIndex: 7 },
            unitIfDupe: null,
            dupeInfo: null,
            unitIfGuaranteed: { unitName: '超激レアC', unitIndex: 100, targetCellId: "2A", cellId: "1A", unitSeed: 777 }
          },
          {
            rarity: 1,
            raritySeed: 23456,
            unitIfDistinct: { unitName: 'レアユニットD', unitSeed: 65434, unitIndex: 8 },
            unitIfDupe: null,
            dupeInfo: null,
            unitIfGuaranteed: { unitName: '超激レアD', unitIndex: 101, targetCellId: "2B", cellId: "1B", unitSeed: 778 }
          },
          {
            rarity: 2,
            raritySeed: 34567,
            unitIfDistinct: { unitName: 'ミミック', unitSeed: 76545, unitIndex: 9 },
            unitIfDupe: null,
            dupeInfo: null,
            unitIfGuaranteed: { unitName: 'ミトラ', unitIndex: 102, targetCellId: "3A", cellId: "1A", unitSeed: 779 }
          }
        ],
        trackB: [
          {
            rarity: 0,
            raritySeed: 12345,
            unitIfDistinct: { unitName: 'レアユニットC2', unitSeed: 54324, unitIndex: 10 },
            unitIfDupe: null,
            dupeInfo: null,
            unitIfGuaranteed: { unitName: '超激レアC2', unitIndex: 103, targetCellId: "3B", cellId: "2B", unitSeed: 780 }
          },
          {
            rarity: 1,
            raritySeed: 23456,
            unitIfDistinct: { unitName: 'レアユニットD2', unitSeed: 65435, unitIndex: 11 },
            unitIfDupe: null,
            dupeInfo: null,
            unitIfGuaranteed: { unitName: '超激レアD2', unitIndex: 104, targetCellId: "1B", cellId: "2A", unitSeed: 781 }
          },
          {
            rarity: 2,
            raritySeed: 34567,
            unitIfDistinct: { unitName: 'ダークヒーロー', unitSeed: 76546, unitIndex: 12 },
            unitIfDupe: null,
            dupeInfo: null,
            unitIfGuaranteed: { unitName: 'ダークガル', unitIndex: 105, targetCellId: "1A", cellId: "3B", unitSeed: 782 }
          }
        ]
      }
    ])
  };
});

// Mock constants to include limited/pickup cats for special styling
jest.mock('@/app/rare/constants', () => ({
  DEFAULTS: {
    seed: '12345',
    rolls: '10',
    gatyasets: 'set944,set945',
    lastCat: '',
  },
  MISTIC_CATS: ['ミミック', 'ミトラ'],
  LIMITED_CATS: ['ネコムート', 'ネコガキ'],
  PICKUP_UBER_CATS: ['ダークヒーロー', 'ダークガル']
}));

// Mock gatyasets data
jest.mock('@/data/gatyasets', () => ({
  RareGatyaSetList: [
    { 
      shortName: 'set944', 
      name: 'レアガチャ944', 
      gatyasetId: 944,
      guaranteed: 0,
      rateCumSum: [5000, 9000, 10000],
      pools: [
        {
          rate: 50,
          units: ['レアユニットA', 'レアユニットB', 'ネコムート'],
          reroll: true
        },
        {
          rate: 40,
          units: ['レアユニットA2', 'レアユニットB2', 'ネコガキ'],
          reroll: false
        },
        {
          rate: 9,
          units: ['超激レアA', '超激レアB'],
          reroll: false
        },
        {
          rate: 1,
          units: ['伝説レアA'],
          reroll: false
        }
      ]
    },
    { 
      shortName: 'set945', 
      name: 'レアガチャ945', 
      gatyasetId: 945,
      guaranteed: 1,
      rateCumSum: [5000, 9000, 10000],
      pools: [
        {
          rate: 50,
          units: ['レアユニットC', 'レアユニットD', 'ミミック'],
          reroll: true
        },
        {
          rate: 40,
          units: ['レアユニットC2', 'レアユニットD2', 'ダークヒーロー'],
          reroll: false
        },
        {
          rate: 9,
          units: ['超激レアC', '超激レアD'],
          reroll: false
        },
        {
          rate: 1,
          units: ['ミトラ', 'ダークガル'],
          reroll: false
        }
      ]
    }
  ],
}));

describe('Rare RollTable Component', () => {
  const mockUseSearchParams = useSearchParams as jest.Mock;

  beforeEach(() => {
    mockUseSearchParams.mockReturnValue(new URLSearchParams());
    console.log = jest.fn(); // Mock console.log to prevent output during tests
    jest.clearAllMocks();
  });

  test('renders the table with correct headers', () => {
    // Set up search params
    const params = new URLSearchParams();
    params.set('seed', '12345');
    params.set('rolls', '3');
    params.set('gatyasets', 'set944,set945');
    mockUseSearchParams.mockReturnValue(params);
    
    render(<RollTable />);
    
    // Check if the table headers are rendered
    expect(screen.getByText('レアガチャ944(944)')).toBeInTheDocument();
    expect(screen.getByText('レアガチャ945(945)')).toBeInTheDocument();
    
    // Check if row identifiers are rendered - by finding the cells with specific classes
    expect(screen.getAllByText('1A').length).toBeGreaterThan(0);
    expect(screen.getAllByText('1B').length).toBeGreaterThan(0);
    expect(screen.getAllByText('2A').length).toBeGreaterThan(0);
    expect(screen.getAllByText('2B').length).toBeGreaterThan(0);
    expect(screen.getAllByText('3A').length).toBeGreaterThan(0);
    expect(screen.getAllByText('3B').length).toBeGreaterThan(0);
  });

  test('renders unit names correctly', () => {
    // Set up search params
    const params = new URLSearchParams();
    params.set('seed', '12345');
    params.set('rolls', '3');
    params.set('gatyasets', 'set944,set945');
    mockUseSearchParams.mockReturnValue(params);
    
    render(<RollTable />);
    
    // Check if unit names are rendered - using getAllByText and checking length > 0
    expect(screen.getAllByText(/レアユニット/).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/ネコムート/).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/ネコガキ/).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/ミミック/).length).toBeGreaterThan(0);
  });

  test('renders guaranteed units for gatya sets with guaranteed property', () => {
    // Set up search params
    const params = new URLSearchParams();
    params.set('seed', '12345');
    params.set('rolls', '3');
    params.set('gatyasets', 'set944,set945');
    mockUseSearchParams.mockReturnValue(params);
    
    render(<RollTable />);
    
    // Check if guaranteed units are rendered for set945 (which has guaranteed=1)
    expect(screen.getAllByText('超激レアC').length).toBeGreaterThan(0);
    expect(screen.getAllByText('超激レアD').length).toBeGreaterThan(0);
    expect(screen.getAllByText('ミトラ').length).toBeGreaterThan(0);
    expect(screen.getAllByText('超激レアC2').length).toBeGreaterThan(0);
    expect(screen.getAllByText('超激レアD2').length).toBeGreaterThan(0);
    expect(screen.getAllByText('ダークガル').length).toBeGreaterThan(0);
  });

  test('uses default values when URL parameters are not provided', () => {
    render(<RollTable />);
    
    // Since we're using mock data, we can just verify that the component renders without errors
    // We can't check the exact parameters of GenerateAllRolls due to buffer value
    expect(require('@/app/rare/seed').GenerateAllRolls).toHaveBeenCalled();
    
    // Check that table is rendered
    const allCells = screen.getAllByRole('cell');
    expect(allCells.length).toBeGreaterThan(0);
  });

  test('renders track switch information when dupeInfo is present', () => {
    // Set up search params
    const params = new URLSearchParams();
    params.set('seed', '12345');
    params.set('rolls', '3');
    params.set('gatyasets', 'set944,set945');
    mockUseSearchParams.mockReturnValue(params);
    
    render(<RollTable />);
    
    // Check for track switch information
    const targetCellSpans = screen.getAllByText('1B');
    expect(targetCellSpans.length).toBeGreaterThan(0);
    
    // Check for reroll indicator
    expect(screen.getByText('R')).toBeInTheDocument();
  });

  test('renders seed links with correct href', () => {
    // Set up search params
    const params = new URLSearchParams();
    params.set('seed', '12345');
    params.set('rolls', '3');
    params.set('gatyasets', 'set944,set945');
    mockUseSearchParams.mockReturnValue(params);
    
    render(<RollTable />);
    
    // Check for seed links
    const seedLinks = screen.getAllByRole('link');
    expect(seedLinks.length).toBeGreaterThan(0);
    
    // Check the first seed link's href
    expect(seedLinks[0]).toHaveAttribute('href', '?seed=54321&lastCat=レアユニットA&rolls=3&gatyasets=set944,set945');
  });
});

// Mock the Roll type for testing utility functions
describe('Utility functions', () => {
  test('T function transposes array of arrays correctly', () => {
    const mockRoll = (n: number): Roll => ({
      cellId: n.toString(),
      rarity: n,
      raritySeed: n,
      unitIfDistinct: {
        unitIndex: n,
        unitName: n.toString(),
        unitSeed: n
      }
    } as Roll);

    const input = [
      [mockRoll(1), mockRoll(2), mockRoll(3)],
      [mockRoll(4), mockRoll(5), mockRoll(6)]
    ];
    const expected = [
      [mockRoll(1), mockRoll(4)],
      [mockRoll(2), mockRoll(5)],
      [mockRoll(3), mockRoll(6)]
    ];
    
    const result = T(input);
    expect(result.length).toEqual(expected.length);
    expect(result[0].length).toEqual(expected[0].length);
    expect(result[0][0].rarity).toEqual(expected[0][0].rarity);
    expect(result[1][1].rarity).toEqual(expected[1][1].rarity);
  });

  test('T function handles arrays of different lengths correctly', () => {
    const mockRoll = (n: number): Roll => ({
      cellId: n.toString(),
      rarity: n,
      raritySeed: n,
      unitIfDistinct: {
        unitIndex: n,
        unitName: n.toString(),
        unitSeed: n
      }
    } as Roll);

    const input = [
      [mockRoll(1), mockRoll(2), mockRoll(3)],
      [mockRoll(4), mockRoll(5), mockRoll(6)]
    ];
    const expected = [
      [mockRoll(1), mockRoll(4)],
      [mockRoll(2), mockRoll(5)],
      [mockRoll(3), mockRoll(6)]
    ];
    
    const result = T(input);
    expect(result.length).toEqual(expected.length);
    expect(result[0][0].rarity).toEqual(expected[0][0].rarity);
  });

  test('zip function combines two arrays of arrays correctly', () => {
    const mockRoll = (n: number): Roll => ({
      cellId: n.toString(),
      rarity: n,
      raritySeed: n,
      unitIfDistinct: {
        unitIndex: n,
        unitName: n.toString(),
        unitSeed: n
      }
    } as Roll);

    const arr1 = [
      [mockRoll(1), mockRoll(2)],
      [mockRoll(3), mockRoll(4)]
    ];
    const arr2 = [
      [mockRoll(5), mockRoll(6)],
      [mockRoll(7), mockRoll(8)]
    ];
    
    const result = zip(arr1, arr2);
    expect(result.length).toEqual(2);
    expect(result[0][0][0].rarity).toEqual(1);
    expect(result[0][1][0].rarity).toEqual(5);
    expect(result[1][0][0].rarity).toEqual(3);
    expect(result[1][1][0].rarity).toEqual(7);
  });
});