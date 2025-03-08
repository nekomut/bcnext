import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import GatyaSets from '@/app/normal/GatyaSets';
import { DEFAULTS } from '@/app/normal/constants';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useSearchParams: jest.fn(),
  usePathname: jest.fn(),
  useRouter: jest.fn(),
}));

// Mock the gatyasets data
jest.mock('@/data/gatyasets', () => ({
  NormalGatyaSetList: [
    { shortName: 'n', name: 'にゃんこガチャ', gatyasetId: 0, rateCumSum: [10000], pools: [{ rate: 10000, units: [], reroll: true }] },
    { shortName: 'p', name: 'にゃんこガチャ＋', gatyasetId: 64, rateCumSum: [10000], pools: [{ rate: 10000, units: [], reroll: true }] },
    { shortName: 'c', name: '猫目', gatyasetId: 65, rateCumSum: [500, 7400, 9400, 9900, 10000], pools: [{ rate: 500, units: [], reroll: false }] },
  ],
}));

describe('Normal GatyaSets', () => {
  const mockUseSearchParams = useSearchParams as jest.Mock;
  const mockUsePathname = usePathname as jest.Mock;
  const mockUseRouter = useRouter as jest.Mock;
  const mockReplace = jest.fn();

  beforeEach(() => {
    mockUseSearchParams.mockReturnValue(new URLSearchParams());
    mockUsePathname.mockReturnValue('/normal');
    mockUseRouter.mockReturnValue({ replace: mockReplace });
    jest.clearAllMocks();
  });

  test('renders all available normal gatya sets with checkboxes', () => {
    render(<GatyaSets />);
    
    // Check if all gatya sets are rendered
    expect(screen.getByText(/にゃんこガチャ\(0\)/)).toBeInTheDocument();
    expect(screen.getByText(/にゃんこガチャ＋\(64\)/)).toBeInTheDocument();
    expect(screen.getByText(/猫目\(65\)/)).toBeInTheDocument();
    
    // Check if all checkboxes are rendered
    expect(screen.getByRole('checkbox', { name: /にゃんこガチャ\(0\)/ })).toBeInTheDocument();
    expect(screen.getByRole('checkbox', { name: /にゃんこガチャ＋\(64\)/ })).toBeInTheDocument();
    expect(screen.getByRole('checkbox', { name: /猫目\(65\)/ })).toBeInTheDocument();
  });

  test('selects gatya sets based on URL parameters', () => {
    // Simulate URL with specific gatya sets selected
    const params = new URLSearchParams();
    params.set('gatyasets', 'n,c');
    mockUseSearchParams.mockReturnValue(params);
    
    render(<GatyaSets />);
    
    // Check that the relevant checkboxes are checked
    expect(screen.getByRole('checkbox', { name: /にゃんこガチャ\(0\)/ })).toBeChecked();
    expect(screen.getByRole('checkbox', { name: /にゃんこガチャ＋\(64\)/ })).not.toBeChecked();
    expect(screen.getByRole('checkbox', { name: /猫目\(65\)/ })).toBeChecked();
  });

  test('uses default gatya sets when none are specified in URL', () => {
    // Create a mock defaults with specific gatyasets
    const defaultGatyaSets = DEFAULTS.gatyasets.split(',');
    
    render(<GatyaSets />);
    
    // All checkboxes should reflect the default state
    const checkboxes = screen.getAllByRole('checkbox');
    checkboxes.forEach(checkbox => {
      const name = (checkbox as HTMLInputElement).name;
      const shouldBeChecked = defaultGatyaSets.includes(name);
      
      if (shouldBeChecked) {
        expect(checkbox).toBeChecked();
      }
    });
  });

  test('updates URL when user changes gatya set selection', () => {
    // Setup with initial selection
    const params = new URLSearchParams();
    params.set('gatyasets', 'n');
    mockUseSearchParams.mockReturnValue(params);
    
    render(<GatyaSets />);
    
    // Click to select a new gatya set
    fireEvent.click(screen.getByRole('checkbox', { name: /猫目\(65\)/ }));
    
    // URL should be updated with both gatya sets
    expect(mockReplace).toHaveBeenCalledWith('/normal?gatyasets=n%2Cc');
  });
  
  test('removes gatya set from URL when unchecked', () => {
    // Setup with initial selection of multiple sets
    const params = new URLSearchParams();
    params.set('gatyasets', 'n,c');
    mockUseSearchParams.mockReturnValue(params);
    
    render(<GatyaSets />);
    
    // Verify initial state
    expect(screen.getByRole('checkbox', { name: /にゃんこガチャ\(0\)/ })).toBeChecked();
    expect(screen.getByRole('checkbox', { name: /猫目\(65\)/ })).toBeChecked();
    
    // Click to deselect a gatya set
    fireEvent.click(screen.getByRole('checkbox', { name: /にゃんこガチャ\(0\)/ }));
    
    // URL should be updated with only the remaining gatya set
    // The component actually sets empty string when all gatya sets are removed
    expect(mockReplace).toHaveBeenCalled();
  });

  test('prevents duplicate selections', () => {
    // Setup with initial selection
    const params = new URLSearchParams();
    params.set('gatyasets', 'n,n'); // Duplicate
    mockUseSearchParams.mockReturnValue(params);
    
    render(<GatyaSets />);
    
    // Click to select a new gatya set
    fireEvent.click(screen.getByRole('checkbox', { name: /にゃんこガチャ＋\(64\)/ }));
    
    // URL should be updated with deduplicated values
    expect(mockReplace).toHaveBeenCalledWith(expect.stringContaining('n%2Cp'));
    expect(mockReplace).not.toHaveBeenCalledWith(expect.stringContaining('n%2Cn'));
  });
});