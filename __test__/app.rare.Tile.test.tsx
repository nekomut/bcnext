import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import Tile, { T, zip, chunk } from '@/app/rare/Tile';
import { DEFAULTS, MISTIC_CATS, LIMITED_CATS, PICKUP_UBER_CATS } from '@/app/rare/constants';
import * as seedModule from '@/app/rare/seed';
import { Roll } from '@/app/rare/seed';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useSearchParams: jest.fn(),
  usePathname: jest.fn(),
  useRouter: jest.fn(),
}));

// Mock the seed module
jest.mock('@/app/rare/seed', () => ({
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
    }
  ]),
  Roll: {}
}));

// Mock the data module
jest.mock('@/data/gatyasets', () => ({
  RareGatyaSetList: [
    { 
      shortName: 'set944', 
      name: 'レアガチャ944', 
      gatyasetId: 944, 
      guaranteed: 0,
      pools: [
        { units: [['レアユニット1', 'レアユニット2']] },
        { units: [['スーパーレアユニット1']] },
        { units: [['ウルトラスーパーレアユニット1']] },
        { units: [['ネコムート', 'ネコガキ']] }
      ]
    },
    { 
      shortName: 'set945', 
      name: 'レアガチャ945', 
      gatyasetId: 945, 
      guaranteed: 1,
      pools: [
        { units: [['レアユニット3', 'レアユニット4']] },
        { units: [['スーパーレアユニット2']] },
        { units: [['ウルトラスーパーレアユニット2']] },
        { units: [['ネコムート', 'ネコガキ']] }
      ]
    },
  ],
}));

// Mock constants to include special cat lists
jest.mock('@/app/rare/constants', () => ({
  DEFAULTS: {
    seed: '12345',
    rolls: '10',
    gatyasets: 'set944',
    lastCat: '',
    selected: '',
  },
  MISTIC_CATS: ['ミミック', 'ミトラ'],
  LIMITED_CATS: ['ネコムート', 'ネコガキ'],
  PICKUP_UBER_CATS: ['ダークヒーロー', 'ダークガル']
}));

describe('Rare Tile Component', () => {
  const mockUseSearchParams = useSearchParams as jest.Mock;
  const mockUsePathname = usePathname as jest.Mock;
  const mockUseRouter = useRouter as jest.Mock;
  const mockReplace = jest.fn();

  beforeEach(() => {
    mockUseSearchParams.mockReturnValue(new URLSearchParams());
    mockUsePathname.mockReturnValue('/rare');
    mockUseRouter.mockReturnValue({
      replace: mockReplace
    });
    jest.clearAllMocks();
  });

  test('renders tile view with correct structure', () => {
    // Set up search params
    const params = new URLSearchParams();
    params.set('seed', '12345');
    params.set('rolls', '3');
    params.set('gatyasets', 'set944');
    mockUseSearchParams.mockReturnValue(params);
    
    render(<Tile />);
    
    // Should render the tile container
    const tileContainers = screen.getAllByRole('table');
    expect(tileContainers.length).toBeGreaterThan(0);
  });

  test('renders units with correct styling based on rarity', () => {
    // Set up search params
    const params = new URLSearchParams();
    params.set('seed', '12345');
    params.set('rolls', '3');
    params.set('gatyasets', 'set944');
    mockUseSearchParams.mockReturnValue(params);
    
    render(<Tile />);
    
    // In the tile view, units are represented as squares with rarity-based styling
    // Check for elements with appropriate rarity classes
    const rarityAElements = document.querySelectorAll('.tile-rarity-0A');
    expect(rarityAElements.length).toBeGreaterThan(0);
    
    const rarityBElements = document.querySelectorAll('.tile-rarity-1A');
    expect(rarityBElements.length).toBeGreaterThan(0);
    
    // Check for the header text that mentions the gatya set
    expect(screen.getByText((content, element) => {
      return element?.tagName.toLowerCase() === 'h1' && content.includes('レアガチャ944');
    })).toBeInTheDocument();
    
    // Check that the option for ネコムート exists
    const optionElement = screen.getByText((content) => content.includes('ネコムート'));
    expect(optionElement).toBeInTheDocument();
    expect(optionElement.tagName.toLowerCase()).toBe('option');
  });

  test('generates proper tile layout based on numRolls', () => {
    // Test with different roll counts
    const params = new URLSearchParams();
    params.set('seed', '12345');
    params.set('rolls', '3'); // Just 3 rolls
    params.set('gatyasets', 'set944');
    mockUseSearchParams.mockReturnValue(params);
    
    render(<Tile />);
    
    // With 3 rolls, we should have all units shown in a single table
    const tileContainers = screen.getAllByRole('table');
    expect(tileContainers.length).toBe(1);
  });

  test('uses default values when URL parameters are not provided', () => {
    // Clear any previous calls
    jest.clearAllMocks();
    
    render(<Tile />);
    
    // Should call GenerateAllRolls - we can't check exact parameters because numRolls is hard-coded in the component
    expect(seedModule.GenerateAllRolls).toHaveBeenCalled();
    
    // Check that it was called with the default seed at least
    const calls = (seedModule.GenerateAllRolls as jest.Mock).mock.calls;
    expect(calls[0][0]).toBe(parseInt(DEFAULTS.seed, 10));
    
    // Also verify the component rendered something
    const tileContainers = screen.getAllByRole('table');
    expect(tileContainers.length).toBeGreaterThan(0);
  });

  test('shows track IDs in the tile view', () => {
    const params = new URLSearchParams();
    params.set('seed', '12345');
    params.set('rolls', '3');
    params.set('gatyasets', 'set944');
    mockUseSearchParams.mockReturnValue(params);
    
    render(<Tile />);
    
    // Track row identifiers should be visible
    const trackAElements = document.querySelectorAll('.tile-chunkId-A');
    expect(trackAElements.length).toBeGreaterThan(0);
    expect(trackAElements[0].textContent).toBe('1A');
    
    const trackBElements = document.querySelectorAll('.tile-chunkId-B');
    expect(trackBElements.length).toBeGreaterThan(0);
    expect(trackBElements[0].textContent).toBe('1B');
  });

  test('handles select change to update URL', () => {
    const params = new URLSearchParams();
    params.set('seed', '12345');
    params.set('rolls', '3');
    params.set('gatyasets', 'set944');
    mockUseSearchParams.mockReturnValue(params);
    
    render(<Tile />);
    
    // Find the select dropdown and simulate a change
    const select = document.querySelector('select');
    expect(select).not.toBeNull();
    
    if (select) {
      fireEvent.change(select, { target: { value: 'ネコムート,ネコガキ' } });
      
      // URL should be updated (router.replace should be called)
      expect(mockReplace).toHaveBeenCalled();
      
      // The URL should contain the selected value
      const replaceCalls = mockReplace.mock.calls;
      const lastCall = replaceCalls[replaceCalls.length - 1][0];
      expect(lastCall).toContain('selected=');
    }
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

  test('chunk function splits array into chunks of specified size', () => {
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
    
    const roll5: Roll = {
      cellId: 'cell5',
      rarity: 5,
      raritySeed: 5000,
      unitIfDistinct: {
        unitIndex: 5,
        unitName: 'Unit5',
        unitSeed: 10000
      }
    };
    
    const input = [roll1, roll2, roll3, roll4, roll5];
    
    // Chunk into groups of 2
    const result = chunk(input, 2);
    
    // Check the structure
    expect(result.length).toBe(3);
    expect(result[0].length).toBe(2);
    expect(result[1].length).toBe(2);
    expect(result[2].length).toBe(1);
    
    // Check individual elements
    expect(result[0][0].cellId).toBe('cell1');
    expect(result[0][1].cellId).toBe('cell2');
    expect(result[1][0].cellId).toBe('cell3');
    expect(result[1][1].cellId).toBe('cell4');
    expect(result[2][0].cellId).toBe('cell5');
    
    // Handle empty array
    expect(chunk([], 3).length).toBe(0);
  });
});