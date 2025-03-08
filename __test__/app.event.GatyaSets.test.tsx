import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import GatyaSets from '@/app/event/GatyaSets';
import { DEFAULTS } from '@/app/event/constants';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useSearchParams: jest.fn(),
  usePathname: jest.fn(),
  useRouter: jest.fn(),
}));

// Mock the gatyasets data
jest.mock('@/data/gatyasets', () => ({
  EventGatyaSetList: [
    { shortName: 'e36', name: '春節', gatyasetId: 36, guaranteed: 1, rateCumSum: [1000, 6000, 9000, 10000], pools: [{ rate: 1000, units: [], reroll: false }] },
    { shortName: 'e37', name: 'にゃんこ学園', gatyasetId: 37, guaranteed: 1, rateCumSum: [1000, 6000, 8500, 10000], pools: [{ rate: 1000, units: [], reroll: false }] },
  ],
}));

describe('GatyaSets', () => {
  const mockUseSearchParams = useSearchParams as jest.Mock;
  const mockUsePathname = usePathname as jest.Mock;
  const mockUseRouter = useRouter as jest.Mock;
  const mockReplace = jest.fn();

  beforeEach(() => {
    // Setup mocks
    mockUsePathname.mockReturnValue('/event');
    mockUseRouter.mockReturnValue({ replace: mockReplace });
    
    // Clear mocks between tests
    jest.clearAllMocks();
  });

  test('renders all gatya sets from the list', () => {
    // Mock empty search params
    const mockParams = new URLSearchParams();
    mockUseSearchParams.mockReturnValue(mockParams);

    render(<GatyaSets />);
    
    // Check if all gatya sets are rendered
    expect(screen.getByText(/春節/)).toBeInTheDocument();
    expect(screen.getByText(/にゃんこ学園/)).toBeInTheDocument();
    
    // Check if IDs are displayed
    expect(screen.getByText(/\(36\)/)).toBeInTheDocument();
    expect(screen.getByText(/\(37\)/)).toBeInTheDocument();
  });

  test('checks boxes based on URL parameters', () => {
    // Mock search params with specific gatya sets
    const mockParams = new URLSearchParams();
    mockParams.set('gatyasets', 'e36');
    mockUseSearchParams.mockReturnValue(mockParams);

    render(<GatyaSets />);
    
    // Ensure the correct checkbox is checked
    const e36Checkbox = screen.getByLabelText(/春節\(36\)/) as HTMLInputElement;
    const e37Checkbox = screen.getByLabelText(/にゃんこ学園\(37\)/) as HTMLInputElement;
    
    expect(e36Checkbox.checked).toBe(true);
    expect(e37Checkbox.checked).toBe(false);
  });

  test('uses default gatya sets when none specified in URL', () => {
    // Mock empty search params
    const mockParams = new URLSearchParams();
    mockUseSearchParams.mockReturnValue(mockParams);

    render(<GatyaSets />);
    
    // Default gatya sets from constants should be checked
    const defaultSets = DEFAULTS.gatyasets.split(',');
    
    // Validate that e37 (from defaults) is checked and e36 is not
    const e36Checkbox = document.getElementById('ckbox-e36') as HTMLInputElement;
    const e37Checkbox = document.getElementById('ckbox-e37') as HTMLInputElement;
    
    if (defaultSets.includes('e36')) {
      expect(e36Checkbox.checked).toBe(true);
    } else {
      expect(e36Checkbox.checked).toBe(false);
    }
    
    if (defaultSets.includes('e37')) {
      expect(e37Checkbox.checked).toBe(true);
    } else {
      expect(e37Checkbox.checked).toBe(false);
    }
  });

  test('adds gatya set to URL when checkbox is clicked', () => {
    // Start with e36 selected
    const mockParams = new URLSearchParams();
    mockParams.set('gatyasets', 'e36');
    mockUseSearchParams.mockReturnValue(mockParams);

    render(<GatyaSets />);
    
    // Click to select e37 (not currently selected)
    fireEvent.click(screen.getByLabelText(/にゃんこ学園\(37\)/));
    
    // URL should be updated with both selected gatya sets
    expect(mockReplace).toHaveBeenCalledWith('/event?gatyasets=e36%2Ce37');
  });
  
  test('removes gatya set from URL when checkbox is unchecked', () => {
    // Start with both selected
    const mockParams = new URLSearchParams();
    mockParams.set('gatyasets', 'e36,e37');
    mockUseSearchParams.mockReturnValue(mockParams);
    
    const { container } = render(<GatyaSets />);
    
    // Find and click the first e36 checkbox using its ID instead of text
    const e36Checkbox = container.querySelector('#ckbox-e36') as HTMLInputElement;
    fireEvent.click(e36Checkbox);
    
    // URL should be updated with only e37
    expect(mockReplace).toHaveBeenCalledWith('/event?gatyasets=e37');
  });
  
  test('handles edge case with all checkboxes unchecked', () => {
    // Mock initially selected gatya set
    const mockParams = new URLSearchParams();
    mockParams.set('gatyasets', 'e37');
    mockUseSearchParams.mockReturnValue(mockParams);

    render(<GatyaSets />);
    
    // Uncheck the last selected checkbox
    fireEvent.click(screen.getByLabelText(/にゃんこ学園\(37\)/));
    
    // URL should be updated with empty gatyasets or removed parameter
    expect(mockReplace).toHaveBeenCalledWith('/event?');
  });
  
  test('preserves other URL parameters when updating gatyasets', () => {
    // Mock search params with gatyasets and other parameters
    const mockParams = new URLSearchParams();
    mockParams.set('gatyasets', 'e36');
    mockParams.set('seed', '12345');
    mockParams.set('rolls', '10');
    mockUseSearchParams.mockReturnValue(mockParams);

    render(<GatyaSets />);
    
    // Click to select an additional gatya set
    fireEvent.click(screen.getByLabelText(/にゃんこ学園\(37\)/));
    
    // URL should be updated, preserving other parameters
    const lastCallArg = mockReplace.mock.calls[mockReplace.mock.calls.length - 1][0];
    expect(lastCallArg).toContain('seed=12345');
    expect(lastCallArg).toContain('rolls=10');
    expect(lastCallArg).toContain('gatyasets=e36%2Ce37');
  });
});
