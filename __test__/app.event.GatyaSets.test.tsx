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
    { shortName: 'e1', name: 'Event 1', gatyasetId: 101 },
    { shortName: 'e2', name: 'Event 2', gatyasetId: 102 },
    { shortName: 'e3', name: 'Event 3', gatyasetId: 103 },
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
    expect(screen.getByText(/Event 1/)).toBeInTheDocument();
    expect(screen.getByText(/Event 2/)).toBeInTheDocument();
    expect(screen.getByText(/Event 3/)).toBeInTheDocument();
    
    // Check if IDs are displayed
    expect(screen.getByText(/\(101\)/)).toBeInTheDocument();
    expect(screen.getByText(/\(102\)/)).toBeInTheDocument();
    expect(screen.getByText(/\(103\)/)).toBeInTheDocument();
  });

  test('checks boxes based on URL parameters', () => {
    // Mock search params with some selected gatya sets
    const mockParams = new URLSearchParams();
    mockParams.set('gatyasets', 'e1,e3');
    mockUseSearchParams.mockReturnValue(mockParams);

    render(<GatyaSets />);
    
    // Ensure the correct checkboxes are checked
    expect(screen.getByLabelText(/Event 1/).closest('input')).toBeChecked();
    expect(screen.getByLabelText(/Event 3/).closest('input')).toBeChecked();
    expect(screen.getByLabelText(/Event 2/).closest('input')).not.toBeChecked();
  });

  test('uses default gatya sets when none specified in URL', () => {
    // Mock empty search params
    const mockParams = new URLSearchParams();
    mockUseSearchParams.mockReturnValue(mockParams);

    render(<GatyaSets />);
    
    // Default gatya sets from constants should be checked
    const defaultSets = DEFAULTS.gatyasets.split(',');
    
    for (const set of defaultSets) {
      const regex = new RegExp(`ckbox-${set}`);
      const checkbox = document.getElementById(`ckbox-${set}`) as HTMLInputElement;
      if (checkbox) {
        expect(checkbox.checked).toBe(true);
      }
    }
  });

  test('updates URL when checkbox is clicked', () => {
    // Mock search params with some selected gatya sets
    const mockParams = new URLSearchParams();
    mockParams.set('gatyasets', 'e1,e3');
    mockUseSearchParams.mockReturnValue(mockParams);

    render(<GatyaSets />);
    
    // Click to uncheck a selected gatya set
    fireEvent.click(screen.getByLabelText(/Event 1/));
    
    // URL should be updated with the remaining selected gatya set
    expect(mockReplace).toHaveBeenCalledWith('/event?gatyasets=e3');
    
    // Click to check an unselected gatya set
    fireEvent.click(screen.getByLabelText(/Event 2/));
    
    // URL should be updated with both selected gatya sets
    expect(mockReplace).toHaveBeenCalledWith('/event?gatyasets=e1%2Ce3%2Ce2');
  });
});