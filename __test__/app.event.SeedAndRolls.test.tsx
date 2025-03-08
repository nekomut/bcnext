import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import SeedAndRolls from '@/app/event/SeedAndRolls';
import { DEFAULTS } from '@/app/event/constants';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useSearchParams: jest.fn(),
  usePathname: jest.fn(),
  useRouter: jest.fn(),
}));

// Mock localStorage
const localStorageMock = (function() {
  let store: Record<string, string> = {};
  return {
    getItem: function(key: string) {
      return store[key] || null;
    },
    setItem: function(key: string, value: string) {
      store[key] = value.toString();
    },
    clear: function() {
      store = {};
    },
    removeItem: function(key: string) {
      delete store[key];
    }
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
});

describe('Event SeedAndRolls', () => {
  const mockUseSearchParams = useSearchParams as jest.Mock;
  const mockUsePathname = usePathname as jest.Mock;
  const mockUseRouter = useRouter as jest.Mock;
  const mockReplace = jest.fn();
  const mockRefresh = jest.fn();

  beforeEach(() => {
    mockUseSearchParams.mockReturnValue(new URLSearchParams());
    mockUsePathname.mockReturnValue('/event');
    mockUseRouter.mockReturnValue({
      replace: mockReplace,
      refresh: mockRefresh,
    });
    localStorageMock.clear();
    jest.clearAllMocks();
  });

  test('renders seed and rolls inputs', () => {
    render(<SeedAndRolls />);
    
    expect(screen.getByLabelText(/seed/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/rolls/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /update/i })).toBeInTheDocument();
  });

  test('initializes with URL parameters if available', () => {
    // Set up URL parameters
    const params = new URLSearchParams();
    params.set('seed', '12345');
    params.set('rolls', '10');
    mockUseSearchParams.mockReturnValue(params);
    
    render(<SeedAndRolls />);
    
    expect(screen.getByLabelText(/seed/i)).toHaveValue('12345');
    expect(screen.getByLabelText(/rolls/i)).toHaveValue(10);
  });

  test('initializes with localStorage seed if no URL parameter', () => {
    // Set a value in localStorage
    localStorageMock.setItem('event_seed', '54321');
    
    render(<SeedAndRolls />);
    
    // Should use the localStorage value since no URL param is available
    expect(screen.getByLabelText(/seed/i)).toHaveValue('54321');
  });

  test('initializes with defaults if no URL parameter or localStorage', () => {
    render(<SeedAndRolls />);
    
    // Should use the default values
    const rollsInput = screen.getByLabelText(/rolls/i);
    expect(rollsInput).toHaveValue(Number(DEFAULTS.rolls));
  });

  test('updates URL when seed input changes', () => {
    render(<SeedAndRolls />);
    
    // Change the seed input
    const seedInput = screen.getByLabelText(/seed/i);
    fireEvent.change(seedInput, { target: { value: '98765' } });
    
    // Should update the URL
    expect(mockReplace).toHaveBeenCalledWith('/event?seed=98765');
  });

  test('updates URL when rolls input changes', () => {
    render(<SeedAndRolls />);
    
    // Change the rolls input
    const rollsInput = screen.getByLabelText(/rolls/i);
    fireEvent.change(rollsInput, { target: { value: '15' } });
    
    // Should update the URL
    expect(mockReplace).toHaveBeenCalledWith('/event?rolls=15');
  });

  test('refreshes the page when update button is clicked', () => {
    render(<SeedAndRolls />);
    
    // Click the update button
    const updateButton = screen.getByRole('button', { name: /update/i });
    fireEvent.click(updateButton);
    
    // Should call router.refresh()
    expect(mockRefresh).toHaveBeenCalledTimes(1);
  });

  test('saves seed to localStorage when it changes', () => {
    render(<SeedAndRolls />);
    
    // Change the seed input
    const seedInput = screen.getByLabelText(/seed/i);
    fireEvent.change(seedInput, { target: { value: '13579' } });
    
    // Should save to localStorage
    expect(localStorageMock.getItem('event_seed')).toBe('13579');
  });

  test('uses default rolls value when input is less than 1', () => {
    render(<SeedAndRolls />);
    
    // Set rolls to an invalid value
    const rollsInput = screen.getByLabelText(/rolls/i);
    fireEvent.change(rollsInput, { target: { value: '0' } });
    
    // Should use the default value in the URL
    expect(mockReplace).toHaveBeenCalledWith(`/event?rolls=${DEFAULTS.rolls}`);
  });

  test('preserves other URL parameters when updating seed or rolls', () => {
    // Set up URL with multiple parameters
    const params = new URLSearchParams();
    params.set('seed', '12345');
    params.set('rolls', '10');
    params.set('gatyasets', 'e36,e37');
    mockUseSearchParams.mockReturnValue(params);
    
    render(<SeedAndRolls />);
    
    // Change the seed
    const seedInput = screen.getByLabelText(/seed/i);
    fireEvent.change(seedInput, { target: { value: '54321' } });
    
    // URL should contain all parameters
    expect(mockReplace).toHaveBeenCalledWith('/event?seed=54321&rolls=10&gatyasets=e36%2Ce37');
  });
});