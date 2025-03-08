import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Results from '@/app/seek/Results';
import { GatyaSet } from '@/data/gatyasets';

// Mock the seed functions
jest.mock('@/app/seek/seed', () => ({
  xorShift32: jest.fn((seed: number) => seed + 1), // Just increment for testing
  generateRollsLightweight: jest.fn((seed: number) => [seed + 100, false]) // Return modified seed and no reroll flag
}));

describe('Results Component', () => {
  // Sample gatya set for testing
  const sampleGatyaSet: GatyaSet = {
    shortName: 'set944',
    name: 'レアガチャ944',
    gatyasetId: 944,
    rateCumSum: [5000, 9000, 10000],
    pools: [
      {
        rate: 50,
        units: ['unitA', 'unitB', 'unitC'],
        reroll: true
      },
      {
        rate: 40,
        units: ['unitSR1', 'unitSR2'],
        reroll: false
      },
      {
        rate: 9,
        units: ['unitSSR1'],
        reroll: false
      },
      {
        rate: 1,
        units: ['unitLR1'],
        reroll: false
      }
    ]
  };

  test('renders searching state correctly', () => {
    const props = {
      guaranteed: false,
      workerProgresses: [25, 50, 75],
      seedsFound: [],
      isSearching: true,
      gatyaSet: sampleGatyaSet,
      numPulls: 5
    };

    render(<Results {...props} />);
    
    // Should show searching message
    expect(screen.getByText('計算中...')).toBeInTheDocument();
    
    // Should show progress bars for each worker
    expect(screen.getByText('#1')).toBeInTheDocument();
    expect(screen.getByText('#2')).toBeInTheDocument();
    expect(screen.getByText('#3')).toBeInTheDocument();
    
    // Should show percentages
    expect(screen.getByText('25%')).toBeInTheDocument();
    expect(screen.getByText('50%')).toBeInTheDocument();
    expect(screen.getByText('75%')).toBeInTheDocument();
  });

  test('renders no results found state correctly', () => {
    const props = {
      guaranteed: false,
      workerProgresses: [100, 100, 100],
      seedsFound: [],
      isSearching: false,
      gatyaSet: sampleGatyaSet,
      numPulls: 5
    };

    render(<Results {...props} />);
    
    // Should show no results message
    expect(screen.getByText('シード値が見つかりませんでした')).toBeInTheDocument();
  });

  test('renders found seeds correctly', () => {
    const props = {
      guaranteed: false,
      workerProgresses: [100, 100, 100],
      seedsFound: [12345, 67890],
      isSearching: false,
      gatyaSet: sampleGatyaSet,
      numPulls: 5
    };

    render(<Results {...props} />);
    
    // Should show success message
    expect(screen.getByText('2個のシードが見つかりました')).toBeInTheDocument();
    
    // Should show seed information
    expect(screen.getByText('Seed 1')).toBeInTheDocument();
    expect(screen.getByText('Seed 2')).toBeInTheDocument();
    
    // Should show the seed values
    expect(screen.getByText('12445')).toBeInTheDocument(); // 12345 + 100
    expect(screen.getByText('67990')).toBeInTheDocument(); // 67890 + 100
    
    // Should show original seed values
    expect(screen.getByText('12345')).toBeInTheDocument();
    expect(screen.getByText('67890')).toBeInTheDocument();
    
    // Should not show reroll warning
    expect(screen.queryByText('⚠️ 次回レア被り検知‼️')).not.toBeInTheDocument();
  });

  test('shows reroll warning when next roll is a reroll', () => {
    // Mock the generateRollsLightweight to return reroll flag
    require('@/app/seek/seed').generateRollsLightweight.mockImplementation((seed: number) => [seed + 100, true]);
    
    const props = {
      guaranteed: false,
      workerProgresses: [100],
      seedsFound: [12345],
      isSearching: false,
      gatyaSet: sampleGatyaSet,
      numPulls: 5
    };

    render(<Results {...props} />);
    
    // Should show reroll warning
    expect(screen.getByText('⚠️ 次回レア被り検知‼️')).toBeInTheDocument();
  });

  test('shows guaranteed seed value when guaranteed is true', () => {
    const props = {
      guaranteed: true,
      workerProgresses: [100],
      seedsFound: [12345],
      isSearching: false,
      gatyaSet: sampleGatyaSet,
      numPulls: 5
    };

    render(<Results {...props} />);
    
    // Should show guaranteed seed value
    expect(screen.getByText('確定枠のシード値:')).toBeInTheDocument();
    expect(screen.getByText('12446')).toBeInTheDocument(); // 12445 (modified seed) + 1 (xorShift32)
  });

  test('limits the number of seeds displayed to 200', () => {
    // Create an array of 300 seeds
    const manySeeds = Array.from({ length: 300 }, (_, i) => i + 1);
    
    const props = {
      guaranteed: false,
      workerProgresses: [100],
      seedsFound: manySeeds,
      isSearching: false,
      gatyaSet: sampleGatyaSet,
      numPulls: 5
    };

    render(<Results {...props} />);
    
    // Should show message with correct count of found seeds
    expect(screen.getByText('200個のシードが見つかりました')).toBeInTheDocument();
    
    // Should only render 200 seeds
    const seedElements = screen.getAllByText(/Seed \d+/);
    expect(seedElements).toHaveLength(200);
    
    // Should have Seed 1 through Seed 200, but not Seed 201
    expect(screen.getByText('Seed 1')).toBeInTheDocument();
    expect(screen.getByText('Seed 200')).toBeInTheDocument();
    expect(screen.queryByText('Seed 201')).not.toBeInTheDocument();
  });

  test('generates correct links for different gatya sets', () => {
    // Test for rare gatya set
    const rareGatyaSet: GatyaSet = { 
      ...sampleGatyaSet, 
      shortName: '944'
    };
    
    const props = {
      guaranteed: false,
      workerProgresses: [100],
      seedsFound: [12345],
      isSearching: false,
      gatyaSet: rareGatyaSet,
      numPulls: 5
    };

    const { rerender } = render(<Results {...props} />);
    
    // Should create link to rare page
    expect(screen.getByText('12445').closest('a')).toHaveAttribute('href', 'rare?seed=12445');
    
    // Test for event gatya set
    const eventGatyaSet: GatyaSet = { 
      ...sampleGatyaSet, 
      shortName: 'e37' 
    };
    
    rerender(
      <Results
        {...props}
        gatyaSet={eventGatyaSet}
      />
    );
    
    // Should create link to event page
    expect(screen.getByText('12445').closest('a')).toHaveAttribute('href', 'event?seed=12445');
    
    // Test for normal gatya set
    const normalGatyaSet: GatyaSet = { 
      ...sampleGatyaSet, 
      shortName: 'nyankogatya' 
    };
    
    rerender(
      <Results
        {...props}
        gatyaSet={normalGatyaSet}
      />
    );
    
    // Should create link to normal page
    expect(screen.getByText('12445').closest('a')).toHaveAttribute('href', 'normal?seed=12445');
  });
});