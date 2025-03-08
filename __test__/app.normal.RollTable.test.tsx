import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { useSearchParams } from 'next/navigation';
import RollTable, { T, zip } from '@/app/normal/RollTable';
import { DEFAULTS } from '@/app/normal/constants';
import { Roll } from '@/app/normal/seed';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useSearchParams: jest.fn(),
}));

// Mock the seed module
jest.mock('@/app/normal/seed', () => {
  return {
    GenerateAllRolls: jest.fn(() => [
      {
        gatyasetName: 'にゃんこガチャ',
        gatyasetShortName: 'nyankogatya',
        gatyasetId: 1,
        trackA: [
          {
            rarity: 0,
            raritySeed: 12345,
            unitIfDistinct: { unitName: 'ユニットA', unitSeed: 54321, unitIndex: 1 },
            unitIfDupe: { unitName: 'ユニットA2' },
            dupeInfo: { showDupe: true, targetCellId: '1B', targetWillRerollAgain: false }
          },
          {
            rarity: 1,
            raritySeed: 23456,
            unitIfDistinct: { unitName: 'ユニットB', unitSeed: 65432, unitIndex: 2 },
            unitIfDupe: null,
            dupeInfo: null
          },
          {
            rarity: 2,
            raritySeed: 34567,
            unitIfDistinct: { unitName: 'にゃんこ砲攻撃力', unitSeed: 76543, unitIndex: 3 },
            unitIfDupe: null,
            dupeInfo: null
          }
        ],
        trackB: [
          {
            rarity: 0,
            raritySeed: 12345,
            unitIfDistinct: { unitName: 'ユニットA2', unitSeed: 54322, unitIndex: 4 },
            unitIfDupe: { unitName: 'ユニットA' },
            dupeInfo: { showDupe: true, targetCellId: '1A', targetWillRerollAgain: true }
          },
          {
            rarity: 1,
            raritySeed: 23456,
            unitIfDistinct: { unitName: 'ユニットB2', unitSeed: 65433, unitIndex: 5 },
            unitIfDupe: null,
            dupeInfo: null
          },
          {
            rarity: 2,
            raritySeed: 34567,
            unitIfDistinct: { unitName: '闇ユニット', unitSeed: 76544, unitIndex: 6 },
            unitIfDupe: null,
            dupeInfo: null
          }
        ]
      },
      {
        gatyasetName: 'にゃんこガチャプラス',
        gatyasetShortName: 'nyankoplus',
        gatyasetId: 2,
        trackA: [
          {
            rarity: 0,
            raritySeed: 12345,
            unitIfDistinct: { unitName: 'ユニットC', unitSeed: 54323, unitIndex: 7 },
            unitIfDupe: null,
            dupeInfo: null
          },
          {
            rarity: 1,
            raritySeed: 23456,
            unitIfDistinct: { unitName: 'ユニットD', unitSeed: 65434, unitIndex: 8 },
            unitIfDupe: null,
            dupeInfo: null
          },
          {
            rarity: 2,
            raritySeed: 34567,
            unitIfDistinct: { unitName: 'ユニットE', unitSeed: 76545, unitIndex: 9 },
            unitIfDupe: null,
            dupeInfo: null
          }
        ],
        trackB: [
          {
            rarity: 0,
            raritySeed: 12345,
            unitIfDistinct: { unitName: 'ユニットC2', unitSeed: 54324, unitIndex: 10 },
            unitIfDupe: null,
            dupeInfo: null
          },
          {
            rarity: 1,
            raritySeed: 23456,
            unitIfDistinct: { unitName: 'ユニットD2', unitSeed: 65435, unitIndex: 11 },
            unitIfDupe: null,
            dupeInfo: null
          },
          {
            rarity: 2,
            raritySeed: 34567,
            unitIfDistinct: { unitName: 'ユニットE2', unitSeed: 76546, unitIndex: 12 },
            unitIfDupe: null,
            dupeInfo: null
          }
        ]
      }
    ])
  };
});

// Mock gatyasets data
jest.mock('@/data/gatyasets', () => ({
  NormalGatyaSetList: [
    { 
      shortName: 'nyankogatya', 
      name: 'にゃんこガチャ', 
      gatyasetId: 1,
    },
    { 
      shortName: 'nyankoplus', 
      name: 'にゃんこガチャプラス', 
      gatyasetId: 2,
    }
  ],
}));

describe('RollTable Component', () => {
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
    params.set('gatyasets', 'nyankogatya,nyankoplus');
    mockUseSearchParams.mockReturnValue(params);
    
    render(<RollTable />);
    
    // Check if the table headers are rendered
    expect(screen.getByText('にゃんこガチャ(1)')).toBeInTheDocument();
    expect(screen.getByText('にゃんこガチャプラス(2)')).toBeInTheDocument();
    
    // Check if row identifiers are rendered using getAllByText and checking for specific cells
    const cellIds = screen.getAllByText(/^1A$/);
    expect(cellIds.length).toBeGreaterThan(0);
    expect(cellIds[0].closest('.rolltable-cellid-A')).not.toBeNull();
    
    const cellIds2B = screen.getAllByText(/^2B$/);
    expect(cellIds2B.length).toBeGreaterThan(0);
    expect(cellIds2B[0].closest('.rolltable-cellid-B')).not.toBeNull();
    
    const cellIds3A = screen.getAllByText(/^3A$/);
    expect(cellIds3A.length).toBeGreaterThan(0);
    expect(cellIds3A[0].closest('.rolltable-cellid-A')).not.toBeNull();
  });

  test('renders unit names with correct styling', () => {
    // Set up search params
    const params = new URLSearchParams();
    params.set('seed', '12345');
    params.set('rolls', '3');
    params.set('gatyasets', 'nyankogatya,nyankoplus');
    mockUseSearchParams.mockReturnValue(params);
    
    render(<RollTable />);
    
    // Check for special styling 
    // 1. Find cells containing special units with aodama class
    const cells = Array.from(document.querySelectorAll('td'));
    
    // Find the aodama unit cell
    const aodamaUnit = cells.find(cell => 
      cell.textContent?.includes('にゃんこ砲攻撃力') && 
      cell.className.includes('aodama-A')
    );
    expect(aodamaUnit).toBeTruthy();
    
    // 2. Find cells containing warning units
    const darkUnitCell = cells.find(cell => 
      cell.textContent?.includes('闇ユニット') && 
      cell.textContent?.includes('⚠️')
    );
    expect(darkUnitCell).toBeTruthy();
  });

  test('uses default values when URL parameters are not provided', () => {
    render(<RollTable />);
    
    // Since we're using mock data, we can just verify that the GenerateAllRolls function
    // was called with the default parameters
    expect(require('@/app/normal/seed').GenerateAllRolls).toHaveBeenCalledWith(
      parseInt(DEFAULTS.seed, 10),
      parseInt(DEFAULTS.rolls, 10) + 3, // +3 is the NUM_ROLLS_BUFFER
      expect.any(Array),
      DEFAULTS.lastCat
    );
  });

  test('renders track switch information when dupeInfo is present', () => {
    // Set up search params
    const params = new URLSearchParams();
    params.set('seed', '12345');
    params.set('rolls', '3');
    params.set('gatyasets', 'nyankogatya,nyankoplus');
    mockUseSearchParams.mockReturnValue(params);
    
    render(<RollTable />);
    
    // Check for track switch information by finding elements that contain the cell IDs
    // in the switch arrows notation
    const switchElements = document.querySelectorAll('.rolltable-switch-AtoB, .rolltable-switch-BtoA');
    
    // Verify there are switch elements
    expect(switchElements.length).toBeGreaterThan(0);
    
    // Check for reroll indicator
    // Find cell with R in a track switch indicator
    const cells = Array.from(document.querySelectorAll('span'));
    const rerollIndicator = cells.find(span => 
      span.textContent === 'R' && 
      (span.className.includes('rolltable-switch-AtoB') || span.className.includes('rolltable-switch-BtoA'))
    );
    expect(rerollIndicator).toBeTruthy();
  });

  test('renders seed links with correct href', () => {
    // Set up search params
    const params = new URLSearchParams();
    params.set('seed', '12345');
    params.set('rolls', '3');
    params.set('gatyasets', 'nyankogatya,nyankoplus');
    mockUseSearchParams.mockReturnValue(params);
    
    render(<RollTable />);
    
    // Check for seed links
    const seedLinks = screen.getAllByRole('link');
    expect(seedLinks.length).toBeGreaterThan(0);
    
    // Check the first seed link's href
    expect(seedLinks[0]).toHaveAttribute('href', '?seed=54321&lastCat=ユニットA&rolls=3&gatyasets=nyankogatya,nyankoplus');
  });
});

describe('Utility functions', () => {
  test('T function transposes a mock array of Roll arrays', () => {
    // Create mock Roll objects
    const roll1: Roll = {
      cellId: 'cell1',
      rarity: 1,
      raritySeed: 1000,
      unitIfDistinct: {
        unitIndex: 1,
        unitName: 'Unit1',
        unitSeed: 2000
      }
    };
    
    const roll2: Roll = {
      cellId: 'cell2',
      rarity: 2,
      raritySeed: 2000,
      unitIfDistinct: {
        unitIndex: 2,
        unitName: 'Unit2',
        unitSeed: 4000
      }
    };
    
    const roll3: Roll = {
      cellId: 'cell3',
      rarity: 3,
      raritySeed: 3000,
      unitIfDistinct: {
        unitIndex: 3,
        unitName: 'Unit3',
        unitSeed: 6000
      }
    };
    
    const roll4: Roll = {
      cellId: 'cell4',
      rarity: 4,
      raritySeed: 4000,
      unitIfDistinct: {
        unitIndex: 4,
        unitName: 'Unit4',
        unitSeed: 8000
      }
    };
    
    // Create arrays
    const array1 = [roll1, roll2];
    const array2 = [roll3, roll4];
    
    const input = [array1, array2];
    
    // Expected output after transposition
    const expected = [
      [roll1, roll3],
      [roll2, roll4]
    ];
    
    const result = T(input);
    
    // Check structure is correct
    expect(result.length).toBe(2); // Two rows
    expect(result[0].length).toBe(2); // Two columns
    
    // Check individual elements
    expect(result[0][0].cellId).toBe('cell1');
    expect(result[0][1].cellId).toBe('cell3');
    expect(result[1][0].cellId).toBe('cell2');
    expect(result[1][1].cellId).toBe('cell4');
  });
  
  test('zip function combines two mock arrays of Roll arrays', () => {
    // Create mock Roll objects
    const roll1: Roll = {
      cellId: 'cell1',
      rarity: 1,
      raritySeed: 1000,
      unitIfDistinct: {
        unitIndex: 1,
        unitName: 'Unit1',
        unitSeed: 2000
      }
    };
    
    const roll2: Roll = {
      cellId: 'cell2',
      rarity: 2,
      raritySeed: 2000,
      unitIfDistinct: {
        unitIndex: 2,
        unitName: 'Unit2',
        unitSeed: 4000
      }
    };
    
    const roll3: Roll = {
      cellId: 'cell3',
      rarity: 3,
      raritySeed: 3000,
      unitIfDistinct: {
        unitIndex: 3,
        unitName: 'Unit3',
        unitSeed: 6000
      }
    };
    
    const roll4: Roll = {
      cellId: 'cell4',
      rarity: 4,
      raritySeed: 4000,
      unitIfDistinct: {
        unitIndex: 4,
        unitName: 'Unit4',
        unitSeed: 8000
      }
    };
    
    // Create arrays
    const array1A = [roll1];
    const array1B = [roll2];
    const array2A = [roll3];
    const array2B = [roll4];
    
    const arr1 = [array1A, array1B];
    const arr2 = [array2A, array2B];
    
    // Expected output after zipping
    const expected = [
      [array1A, array2A],
      [array1B, array2B]
    ];
    
    const result = zip(arr1, arr2);
    
    // Check structure is correct
    expect(result.length).toBe(2);
    expect(result[0].length).toBe(2);
    
    // Check individual elements
    expect(result[0][0][0].cellId).toBe('cell1');
    expect(result[0][1][0].cellId).toBe('cell3');
    expect(result[1][0][0].cellId).toBe('cell2');
    expect(result[1][1][0].cellId).toBe('cell4');
  });
});