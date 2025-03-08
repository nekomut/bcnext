import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { useSearchParams } from 'next/navigation';
import RollTable, { T, zip } from '@/app/event/RollTable';
import { DEFAULTS } from '@/app/event/constants';
import { Roll } from '@/app/event/seed';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useSearchParams: jest.fn(),
}));

// Mock the seed module
jest.mock('@/app/event/seed', () => {
  return {
    GenerateAllRolls: jest.fn(() => [
      {
        gatyasetName: 'イベントガチャ36',
        gatyasetShortName: 'e36',
        gatyasetId: 36,
        gatyasetGuaranteed: 0,
        trackA: [
          {
            rarity: 0,
            raritySeed: 12345,
            unitIfDistinct: { unitName: 'イベントユニットA', unitSeed: 54321, unitIndex: 1 },
            unitIfDupe: { unitName: 'イベントユニットA2' },
            dupeInfo: { showDupe: true, targetCellId: '1B', targetWillRerollAgain: false }
          },
          {
            rarity: 1,
            raritySeed: 23456,
            unitIfDistinct: { unitName: 'イベントユニットB', unitSeed: 65432, unitIndex: 2 },
            unitIfDupe: null,
            dupeInfo: null
          }
        ],
        trackB: [
          {
            rarity: 0,
            raritySeed: 12345,
            unitIfDistinct: { unitName: 'イベントユニットA2', unitSeed: 54322, unitIndex: 4 },
            unitIfDupe: { unitName: 'イベントユニットA' },
            dupeInfo: { showDupe: true, targetCellId: '1A', targetWillRerollAgain: true }
          },
          {
            rarity: 1,
            raritySeed: 23456,
            unitIfDistinct: { unitName: 'イベントユニットB2', unitSeed: 65433, unitIndex: 5 },
            unitIfDupe: null,
            dupeInfo: null
          }
        ]
      },
      {
        gatyasetName: 'イベントガチャ37',
        gatyasetShortName: 'e37',
        gatyasetId: 37,
        gatyasetGuaranteed: 1,
        trackA: [
          {
            rarity: 0,
            raritySeed: 12345,
            unitIfDistinct: { unitName: 'イベントユニットC', unitSeed: 54323, unitIndex: 7 },
            unitIfDupe: null,
            dupeInfo: null,
            unitIfGuaranteed: { unitName: '超激レアC', unitIndex: 100 }
          },
          {
            rarity: 1,
            raritySeed: 23456,
            unitIfDistinct: { unitName: 'イベントユニットD', unitSeed: 65434, unitIndex: 8 },
            unitIfDupe: null,
            dupeInfo: null,
            unitIfGuaranteed: { unitName: '超激レアD', unitIndex: 101 }
          }
        ],
        trackB: [
          {
            rarity: 0,
            raritySeed: 12345,
            unitIfDistinct: { unitName: 'イベントユニットC2', unitSeed: 54324, unitIndex: 10 },
            unitIfDupe: null,
            dupeInfo: null,
            unitIfGuaranteed: { unitName: '超激レアC2', unitIndex: 102 }
          },
          {
            rarity: 1,
            raritySeed: 23456,
            unitIfDistinct: { unitName: 'イベントユニットD2', unitSeed: 65435, unitIndex: 11 },
            unitIfDupe: null,
            dupeInfo: null,
            unitIfGuaranteed: { unitName: '超激レアD2', unitIndex: 103 }
          }
        ]
      }
    ])
  };
});

// Mock gatyasets data
jest.mock('@/data/gatyasets', () => ({
  EventGatyaSetList: [
    { 
      shortName: 'e36', 
      name: 'イベントガチャ36', 
      gatyasetId: 36,
      guaranteed: 0,
      rateCumSum: [5000, 9000, 10000],
      pools: [
        { 
          rate: 50,
          units: ['イベントユニットA', 'イベントユニットA2'],
          reroll: true
        },
        { 
          rate: 40,
          units: ['イベントユニットB', 'イベントユニットB2'],
          reroll: false
        },
        { 
          rate: 10,
          units: ['イベント超激レアUnit'],
          reroll: false
        }
      ]
    },
    { 
      shortName: 'e37', 
      name: 'イベントガチャ37', 
      gatyasetId: 37,
      guaranteed: 1,
      rateCumSum: [5000, 9000, 10000],
      pools: [
        { 
          rate: 50,
          units: ['イベントユニットC', 'イベントユニットC2'],
          reroll: true
        },
        { 
          rate: 40,
          units: ['イベントユニットD', 'イベントユニットD2'],
          reroll: false
        },
        { 
          rate: 10,
          units: ['イベント超激レアUnit2'],
          reroll: false
        },
        { 
          rate: 0,
          units: ['超激レアC', '超激レアD', '超激レアC2', '超激レアD2'],
          reroll: false
        }
      ]
    }
  ],
}));

describe('Event RollTable Component', () => {
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
    params.set('rolls', '2');
    params.set('gatyasets', 'e36,e37');
    mockUseSearchParams.mockReturnValue(params);
    
    render(<RollTable />);
    
    // Check if the table headers are rendered
    expect(screen.getByText('イベントガチャ36(36)')).toBeInTheDocument();
    expect(screen.getByText('イベントガチャ37(37)')).toBeInTheDocument();
    
    // Check if row identifiers are rendered
    // Use getAllByText instead of getByText since these IDs appear in multiple places
    expect(screen.getAllByText('1A').length).toBeGreaterThan(0);
    expect(screen.getAllByText('1B').length).toBeGreaterThan(0);
    expect(screen.getAllByText('2A').length).toBeGreaterThan(0);
    expect(screen.getAllByText('2B').length).toBeGreaterThan(0);
  });

  test('renders unit names correctly', () => {
    // Set up search params
    const params = new URLSearchParams();
    params.set('seed', '12345');
    params.set('rolls', '2');
    params.set('gatyasets', 'e36,e37');
    mockUseSearchParams.mockReturnValue(params);
    
    render(<RollTable />);
    
    // Check if unit names are rendered
    // Use getAllByText since these unit names might appear in multiple places
    expect(screen.getAllByText('イベントユニットA').length).toBeGreaterThan(0);
    expect(screen.getAllByText('イベントユニットB').length).toBeGreaterThan(0);
    expect(screen.getAllByText('イベントユニットA2').length).toBeGreaterThan(0);
    expect(screen.getAllByText('イベントユニットB2').length).toBeGreaterThan(0);
    expect(screen.getAllByText('イベントユニットC').length).toBeGreaterThan(0);
    expect(screen.getAllByText('イベントユニットD').length).toBeGreaterThan(0);
    expect(screen.getAllByText('イベントユニットC2').length).toBeGreaterThan(0);
    expect(screen.getAllByText('イベントユニットD2').length).toBeGreaterThan(0);
  });

  test('renders guaranteed units for gatya sets with guaranteed property', () => {
    // Set up search params
    const params = new URLSearchParams();
    params.set('seed', '12345');
    params.set('rolls', '2');
    params.set('gatyasets', 'e36,e37');
    mockUseSearchParams.mockReturnValue(params);
    
    render(<RollTable />);
    
    // Check if guaranteed units are rendered for e37 (which has guaranteed=1)
    expect(screen.getAllByText('超激レアC').length).toBeGreaterThan(0);
    expect(screen.getAllByText('超激レアD').length).toBeGreaterThan(0);
    expect(screen.getAllByText('超激レアC2').length).toBeGreaterThan(0);
    expect(screen.getAllByText('超激レアD2').length).toBeGreaterThan(0);
  });

  test('uses default values when URL parameters are not provided', () => {
    render(<RollTable />);
    
    // Since we're using mock data, we can just verify that the GenerateAllRolls function
    // was called with the default parameters
    expect(require('@/app/event/seed').GenerateAllRolls).toHaveBeenCalledWith(
      parseInt(DEFAULTS.seed, 10),
      parseInt(DEFAULTS.rolls, 10) + 2, // +2 is the NUM_ROLLS_BUFFER
      expect.any(Array),
      DEFAULTS.lastCat
    );
  });

  test('renders track switch information when dupeInfo is present', () => {
    // Set up search params
    const params = new URLSearchParams();
    params.set('seed', '12345');
    params.set('rolls', '2');
    params.set('gatyasets', 'e36,e37');
    mockUseSearchParams.mockReturnValue(params);
    
    render(<RollTable />);
    
    // Check for track switch information in dupe info
    // Get all spans with text "1B" inside them 
    const targetCellSpans = screen.getAllByText('1B');
    expect(targetCellSpans.length).toBeGreaterThan(0);
    
    // Check for reroll indicator
    expect(screen.getAllByText('R').length).toBeGreaterThan(0);
  });

  test('renders seed links with correct href', () => {
    // Set up search params
    const params = new URLSearchParams();
    params.set('seed', '12345');
    params.set('rolls', '2');
    params.set('gatyasets', 'e36,e37');
    mockUseSearchParams.mockReturnValue(params);
    
    render(<RollTable />);
    
    // Check for seed links
    const seedLinks = screen.getAllByRole('link');
    expect(seedLinks.length).toBeGreaterThan(0);
    
    // Check the first seed link's href
    expect(seedLinks[0]).toHaveAttribute('href', '?seed=54321&lastCat=イベントユニットA&rolls=2&gatyasets=e36,e37');
  });
});

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