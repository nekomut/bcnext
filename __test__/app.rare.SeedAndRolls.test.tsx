import React from 'react';
import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import SeedAndRolls from '@/app/rare/SeedAndRolls';
import { DEFAULTS } from '@/app/rare/constants';

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value;
    },
    clear: () => {
      store = {};
    }
  };
})();

Object.defineProperty(window, 'localStorage', { value: localStorageMock });

jest.mock('next/navigation', () => ({
  useSearchParams: jest.fn(),
  usePathname: jest.fn(),
  useRouter: jest.fn(),
}));

describe('SeedAndRolls', () => {
  const mockUseSearchParams = useSearchParams as jest.Mock;
  const mockUsePathname = usePathname as jest.Mock;
  const mockUseRouter = useRouter as jest.Mock;
  const mockReplace = jest.fn();
  const mockRefresh = jest.fn();

  beforeEach(() => {
    mockUseSearchParams.mockReturnValue(new URLSearchParams());
    mockUsePathname.mockReturnValue('/test-path');
    mockUseRouter.mockReturnValue({
      replace: mockReplace,
      refresh: mockRefresh,
    });
    localStorageMock.clear();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders SeedAndRolls component', () => {
    render(<SeedAndRolls />);
    expect(screen.getByLabelText(/seed/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/rolls/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /update/i })).toBeInTheDocument();
  });

  test('initializes seed from localStorage when no URL params', () => {
    // Set localStorage value
    localStorageMock.setItem('rare_seed', '12345');
    
    // Render with no URL params - should use localStorage
    render(<SeedAndRolls />);
    expect(screen.getByLabelText(/seed/i)).toHaveValue('12345');
  });
  
  test('initializes seed from URL params when available', () => {
    // Setup URL param
    const params = new URLSearchParams();
    params.set('seed', '67890');
    mockUseSearchParams.mockReturnValue(params);
    
    // Clear any localStorage value to ensure we're testing URL param priority
    localStorageMock.clear();
    
    render(<SeedAndRolls />);
    expect(screen.getByLabelText(/seed/i)).toHaveValue('67890');
  });

  test('updates seed input and query param', () => {
    render(<SeedAndRolls />);
    const seedInput = screen.getByLabelText(/seed/i);
    fireEvent.change(seedInput, { target: { value: '1' } });
    expect(seedInput).toHaveValue('1');
    expect(mockReplace).toHaveBeenCalledWith('/test-path?seed=1');
  });

  test('deletes query param when value is empty', () => {
    render(<SeedAndRolls />);
    const seedInput = screen.getByLabelText(/seed/i);
    fireEvent.change(seedInput, { target: { value: '' } });
    expect(mockReplace).toHaveBeenCalledWith('/test-path?');
  });

  test('updates rolls input and query param', () => {
    render(<SeedAndRolls />);
    const rollsInput = screen.getByLabelText(/rolls/i);
    fireEvent.change(rollsInput, { target: { value: '5' } });
    expect(rollsInput).toHaveValue(5);
    expect(mockReplace).toHaveBeenCalledWith('/test-path?rolls=5');
  });

  test('updates rolls input and query param with non-positive number', () => {
    render(<SeedAndRolls />);
    const rollsInput = screen.getByLabelText(/rolls/i);
    fireEvent.change(rollsInput, { target: { value: '0' } });
    expect(rollsInput).toHaveValue(0);
    expect(mockReplace).toHaveBeenCalledWith(`/test-path?rolls=${DEFAULTS.rolls}`);
  });

  test('refreshes the page on update button click', () => {
    render(<SeedAndRolls />);
    const updateButton = screen.getByRole('button', { name: /update/i });
    fireEvent.click(updateButton);
    expect(mockRefresh).toHaveBeenCalled();
  });
  
  test('handles large seed values', () => {
    render(<SeedAndRolls />);
    const seedInput = screen.getByLabelText(/seed/i);
    const largeValue = '9999999999999999';
    
    fireEvent.change(seedInput, { target: { value: largeValue } });
    expect(seedInput).toHaveValue(largeValue);
    expect(mockReplace).toHaveBeenCalledWith(`/test-path?seed=${largeValue}`);
  });
  
  test('handles large rolls value', () => {
    render(<SeedAndRolls />);
    const rollsInput = screen.getByLabelText(/rolls/i);
    const largeRolls = '999';
    
    fireEvent.change(rollsInput, { target: { value: largeRolls } });
    expect(rollsInput).toHaveValue(999);
    expect(mockReplace).toHaveBeenCalledWith(`/test-path?rolls=${largeRolls}`);
  });
  
  test('handles negative rolls value by using default', () => {
    render(<SeedAndRolls />);
    const rollsInput = screen.getByLabelText(/rolls/i);
    
    fireEvent.change(rollsInput, { target: { value: '-5' } });
    expect(mockReplace).toHaveBeenCalledWith(`/test-path?rolls=${DEFAULTS.rolls}`);
  });
  
  test('saves seed value to localStorage', () => {
    render(<SeedAndRolls />);
    const seedInput = screen.getByLabelText(/seed/i);
    
    fireEvent.change(seedInput, { target: { value: '42424242' } });
    expect(localStorageMock.getItem('rare_seed')).toBe('42424242');
  });
  
  test('maintains multiple parameters when updating individual values', () => {
    // Mock existing URL params
    const mockParams = new URLSearchParams();
    mockParams.set('seed', '500');
    mockParams.set('rolls', '10');
    mockParams.set('gatyasets', 'set1,set2');
    mockUseSearchParams.mockReturnValue(mockParams);
    
    render(<SeedAndRolls />);
    
    // Update the rolls value
    const rollsInput = screen.getByLabelText(/rolls/i);
    fireEvent.change(rollsInput, { target: { value: '20' } });
    
    // Verify that parameters are preserved in the URL
    const lastCallArg = mockReplace.mock.calls[mockReplace.mock.calls.length - 1][0];
    expect(lastCallArg).toContain('seed=500');
    expect(lastCallArg).toContain('rolls=20');
    expect(lastCallArg).toContain('gatyasets=set1%2Cset2');
  });
});
