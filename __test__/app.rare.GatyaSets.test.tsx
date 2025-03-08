import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import GatyaSets from '@/app/rare/GatyaSets';
import { DEFAULTS } from '@/app/rare/constants';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useSearchParams: jest.fn(),
  usePathname: jest.fn(),
  useRouter: jest.fn(),
}));

// Mock the gatyasets data
jest.mock('@/data/gatyasets', () => ({
  RareGatyaSetList: [
    { shortName: '962', name: 'ルガ族', gatyasetId: 962, guaranteed: 10, rateCumSum: [0, 6970, 9470, 9970, 10000], pools: [{ rate: 0, units: [], reroll: false }] },
    { shortName: '945', name: 'エンペラーズ', gatyasetId: 945, guaranteed: -1, rateCumSum: [0, 6970, 9470, 9970, 10000], pools: [{ rate: 0, units: [], reroll: false }] },
    { shortName: '946', name: 'ウルトラソウルズ', gatyasetId: 946, guaranteed: 0, rateCumSum: [0, 6970, 9470, 9970, 10000], pools: [{ rate: 0, units: [], reroll: false }] },
  ],
}));

describe('Rare GatyaSets', () => {
  const mockUseSearchParams = useSearchParams as jest.Mock;
  const mockUsePathname = usePathname as jest.Mock;
  const mockUseRouter = useRouter as jest.Mock;
  const mockReplace = jest.fn();

  beforeEach(() => {
    mockUseSearchParams.mockReturnValue(new URLSearchParams());
    mockUsePathname.mockReturnValue('/rare');
    mockUseRouter.mockReturnValue({ replace: mockReplace });
    jest.clearAllMocks();
  });

  test('renders all available rare gatya sets with checkboxes', () => {
    render(<GatyaSets />);
    
    // Check if all gatya sets are rendered
    expect(screen.getByText(/ルガ族/)).toBeInTheDocument();
    expect(screen.getByText(/エンペラーズ/)).toBeInTheDocument();
    expect(screen.getByText(/ウルトラソウルズ/)).toBeInTheDocument();
    
    // Check if all checkboxes are rendered
    expect(screen.getByRole('checkbox', { name: /ルガ族/ })).toBeInTheDocument();
    expect(screen.getByRole('checkbox', { name: /エンペラーズ/ })).toBeInTheDocument();
    expect(screen.getByRole('checkbox', { name: /ウルトラソウルズ/ })).toBeInTheDocument();
  });

  test('shows guaranteed indicator for gatya sets with guaranteed property > 0', () => {
    render(<GatyaSets />);
    
    // Check if the guaranteed indicator is shown for the appropriate gatya set
    const guaranteedLabels = screen.getAllByText('確定');
    expect(guaranteedLabels).toHaveLength(1);
    
    // Make sure it's associated with the correct gatya set
    const guaranteedLabel = guaranteedLabels[0];
    const parentLabel = guaranteedLabel.closest('label');
    expect(parentLabel).toHaveTextContent('ルガ族');
  });

  test('selects gatya sets based on URL parameters', () => {
    // Simulate URL with specific gatya sets selected
    const params = new URLSearchParams();
    params.set('gatyasets', '962,946');
    mockUseSearchParams.mockReturnValue(params);
    
    render(<GatyaSets />);
    
    // Check that the relevant checkboxes are checked
    expect(screen.getByRole('checkbox', { name: /ルガ族/ })).toBeChecked();
    expect(screen.getByRole('checkbox', { name: /エンペラーズ/ })).not.toBeChecked();
    expect(screen.getByRole('checkbox', { name: /ウルトラソウルズ/ })).toBeChecked();
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
    params.set('gatyasets', '962');
    mockUseSearchParams.mockReturnValue(params);
    
    render(<GatyaSets />);
    
    // Click to select a new gatya set
    fireEvent.click(screen.getByRole('checkbox', { name: /ウルトラソウルズ/ }));
    
    // URL should be updated with both gatya sets
    expect(mockReplace).toHaveBeenCalledWith('/rare?gatyasets=962%2C946');
  });
  
  test('removes gatya set from URL when unchecked', () => {
    // Setup with initial selection of multiple sets
    const params = new URLSearchParams();
    params.set('gatyasets', '962,946');
    mockUseSearchParams.mockReturnValue(params);
    
    render(<GatyaSets />);
    
    // Verify initial state
    expect(screen.getByRole('checkbox', { name: /ルガ族/ })).toBeChecked();
    expect(screen.getByRole('checkbox', { name: /ウルトラソウルズ/ })).toBeChecked();
    
    // Click to deselect a gatya set
    fireEvent.click(screen.getByRole('checkbox', { name: /ルガ族/ }));
    
    // URL should be updated with only the remaining gatya set
    expect(mockReplace).toHaveBeenCalled();
  });

  test('preserves other URL parameters when updating gatyasets', () => {
    // Setup with multiple parameters
    const params = new URLSearchParams();
    params.set('seed', '12345');
    params.set('rolls', '10');
    params.set('gatyasets', '962');
    mockUseSearchParams.mockReturnValue(params);
    
    render(<GatyaSets />);
    
    // Select another gatya set
    fireEvent.click(screen.getByRole('checkbox', { name: /エンペラーズ/ }));
    
    // URL should include all parameters
    expect(mockReplace).toHaveBeenCalledWith(expect.stringContaining('seed=12345'));
    expect(mockReplace).toHaveBeenCalledWith(expect.stringContaining('rolls=10'));
    expect(mockReplace).toHaveBeenCalledWith(expect.stringContaining('gatyasets=962%2C945'));
  });

  test('prevents duplicate selections', () => {
    // Setup with initial selection with duplicate
    const params = new URLSearchParams();
    params.set('gatyasets', '962,962');
    mockUseSearchParams.mockReturnValue(params);
    
    render(<GatyaSets />);
    
    // Click to select a new gatya set
    fireEvent.click(screen.getByRole('checkbox', { name: /エンペラーズ/ }));
    
    // URL should be updated with deduplicated values
    expect(mockReplace).toHaveBeenCalledWith(expect.stringContaining('gatyasets=962%2C945'));
    expect(mockReplace).not.toHaveBeenCalledWith(expect.stringContaining('962%2C962'));
  });
});