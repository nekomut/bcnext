import React from 'react';
import '@testing-library/jest-dom'
// import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import SeedAndRolls from '@/app/rare/SeedAndRolls';
import { DEFAULTS } from '@/app/rare/constants';


jest.mock('next/navigation', () => ({
  useSearchParams: jest.fn(),
  usePathname: jest.fn(),
  useRouter: jest.fn(),
}));

describe('SeedAndRolls', () => {
  const mockUseSearchParams = useSearchParams as jest.Mock;
  const mockUsePathname = usePathname as jest.Mock;
  const mockUseRouter = useRouter as jest.Mock;

  beforeEach(() => {
    mockUseSearchParams.mockReturnValue(new URLSearchParams());
    mockUsePathname.mockReturnValue('/test-path');
    mockUseRouter.mockReturnValue({
      replace: jest.fn(),
      refresh: jest.fn(),
    });
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

  test('updates seed input and query param', () => {
    render(<SeedAndRolls />);
    const seedInput = screen.getByLabelText(/seed/i);
    fireEvent.change(seedInput, { target: { value: '1' } });
    expect(seedInput).toHaveValue('1');
    expect(mockUseRouter().replace).toHaveBeenCalledWith('/test-path?seed=1');
  });

  test('deletes query param when value is empty', () => {
    render(<SeedAndRolls />);
    const seedInput = screen.getByLabelText(/seed/i);
    fireEvent.change(seedInput, { target: { value: '' } });
    expect(mockUseRouter().replace).toHaveBeenCalledWith('/test-path?');
  });

  test('updates rolls input and query param', () => {
    render(<SeedAndRolls />);
    const rollsInput = screen.getByLabelText(/rolls/i);
    fireEvent.change(rollsInput, { target: { value: '5' } });
    expect(rollsInput).toHaveValue(5);
    expect(mockUseRouter().replace).toHaveBeenCalledWith('/test-path?rolls=5');
  });

  test('updates rolls input and query param with non-positive number', () => {
    render(<SeedAndRolls />);
    const rollsInput = screen.getByLabelText(/rolls/i);
    fireEvent.change(rollsInput, { target: { value: '0' } });
    expect(rollsInput).toHaveValue(0);
    expect(mockUseRouter().replace).toHaveBeenCalledWith(`/test-path?rolls=${DEFAULTS.rolls}`);
  });

  test('refreshes the page on update button click', () => {
    render(<SeedAndRolls />);
    const updateButton = screen.getByRole('button', { name: /update/i });
    fireEvent.click(updateButton);
    expect(mockUseRouter().refresh).toHaveBeenCalled();
  });

});
