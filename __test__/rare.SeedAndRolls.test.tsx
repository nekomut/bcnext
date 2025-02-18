import React from 'react';
import '@testing-library/jest-dom'
// import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import SeedAndRolls from '../src/app/rare/SeedAndRolls';
// import { DEFAULTS } from '@/app/rare/constants';


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
        fireEvent.change(seedInput, { target: { value: 'new-seed' } });
        expect(seedInput).toHaveValue('new-seed');
        expect(mockUseRouter().replace).toHaveBeenCalledWith('/test-path?seed=new-seed');
    });

    test('updates rolls input and query param', () => {
        render(<SeedAndRolls />);
        const rollsInput = screen.getByLabelText(/rolls/i);
        fireEvent.change(rollsInput, { target: { value: '5' } });
        expect(rollsInput).toHaveValue(5);
        expect(mockUseRouter().replace).toHaveBeenCalledWith('/test-path?rolls=5');
    });

    test('refreshes the page on update button click', () => {
        render(<SeedAndRolls />);
        const updateButton = screen.getByRole('button', { name: /update/i });
        fireEvent.click(updateButton);
        expect(mockUseRouter().refresh).toHaveBeenCalled();
    });
});