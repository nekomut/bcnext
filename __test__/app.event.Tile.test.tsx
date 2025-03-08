import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { useSearchParams } from 'next/navigation';
import Tile, { T, zip, chunk } from '@/app/event/Tile';
import { DEFAULTS } from '@/app/event/constants';
import * as seedModule from '@/app/event/seed';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useSearchParams: jest.fn(),
}));

// Mock the seed module
jest.mock('@/app/event/seed', () => ({
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
        },
        {
          rarity: 1,
          raritySeed: 23456,
        },
        {
          rarity: 2,
          raritySeed: 34567,
        }
      ],
      trackB: [
        {
          rarity: 0,
          raritySeed: 12345,
        },
        {
          rarity: 1,
          raritySeed: 23456,
        },
        {
          rarity: 2,
          raritySeed: 34567,
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
          rarity: 3,
          raritySeed: 12345,
        },
        {
          rarity: 4,
          raritySeed: 23456,
        }
      ],
      trackB: [
        {
          rarity: 3,
          raritySeed: 12345,
        },
        {
          rarity: 4,
          raritySeed: 23456,
        }
      ]
    }
  ]),
}));

// Mock the data module
jest.mock('@/data/gatyasets', () => ({
  EventGatyaSetList: [
    { shortName: 'e36', name: 'イベントガチャ36', gatyasetId: 36, guaranteed: 0 },
    { shortName: 'e37', name: 'イベントガチャ37', gatyasetId: 37, guaranteed: 1 },
  ],
}));

describe('Event Tile Component', () => {
  const mockUseSearchParams = useSearchParams as jest.Mock;

  beforeEach(() => {
    mockUseSearchParams.mockReturnValue(new URLSearchParams());
    jest.clearAllMocks();
  });

  test('renders tile view with correct structure', () => {
    // Set up search params
    const params = new URLSearchParams();
    params.set('seed', '12345');
    params.set('gatyasets', 'e36,e37');
    mockUseSearchParams.mockReturnValue(params);
    
    render(<Tile />);
    
    // Should render the tile container
    const tileContainers = screen.getAllByRole('table');
    expect(tileContainers.length).toBeGreaterThan(0);
  });

  test('renders table with track A and B rows', () => {
    // Set up search params
    const params = new URLSearchParams();
    params.set('seed', '12345');
    params.set('gatyasets', 'e36,e37');
    mockUseSearchParams.mockReturnValue(params);
    
    render(<Tile />);
    
    // Check if the track IDs are rendered (1A and 1B)
    expect(screen.getByText('1A')).toBeInTheDocument();
    expect(screen.getByText('1B')).toBeInTheDocument();
  });

  test('renders header with gatyaset name', () => {
    const params = new URLSearchParams();
    params.set('seed', '12345');
    params.set('gatyasets', 'e36');
    mockUseSearchParams.mockReturnValue(params);
    
    render(<Tile />);
    
    // Check if the header with the gatyaset name is rendered
    expect(screen.getByText(/限定キャラ/)).toBeInTheDocument();
    expect(screen.getByText(/イベントガチャ36/)).toBeInTheDocument();
  });

  test('uses default values when URL parameters are not provided', () => {
    render(<Tile />);
    
    // Should use defaults from constants
    expect(seedModule.GenerateAllRolls).toHaveBeenCalledWith(
      parseInt(DEFAULTS.seed, 10),
      2000, // Hardcoded in component
      expect.any(Array),
      DEFAULTS.lastCat
    );
  });
});

describe('Utility functions', () => {
  test('utility functions exist', () => {
    expect(typeof T).toBe('function');
    expect(typeof zip).toBe('function');
    expect(typeof chunk).toBe('function');
  });
});