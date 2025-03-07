import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Page from '@/app/rare/page';
// import { useEffect } from 'react';

// Mock the components used in Page
jest.mock('@/app/rare/GatyaSets', () => () => <div>GatyaSets Component</div>);
jest.mock('@/app/rare/SeedAndRolls', () => () => <div>SeedAndRolls Component</div>);
jest.mock('@/app/rare/RollTable', () => () => <div>RollTable Component</div>);
jest.mock('@/app/rare/Tile', () => () => <div>Tile Component</div>);

describe('Page', () => {
    it('should set the document title to "bcnext/rare"', () => {
        render(<Page />);
        expect(document.title).toBe('bcnext/rare');
    });

    it('should render the navigation links', () => {
        render(<Page />);
        expect(screen.getByText('bcnext')).toBeInTheDocument();
        expect(screen.getByText('Normal')).toBeInTheDocument();
        expect(screen.getByText('Rare')).toBeInTheDocument();
        expect(screen.getByText('Event')).toBeInTheDocument();
        expect(screen.getByText('Seek')).toBeInTheDocument();
    });

    it('should render the components inside Suspense', () => {
        render(<Page />);
        expect(screen.getByText('GatyaSets Component')).toBeInTheDocument();
        expect(screen.getByText('SeedAndRolls Component')).toBeInTheDocument();
        expect(screen.getByText('RollTable Component')).toBeInTheDocument();
        expect(screen.getByText('Tile Component')).toBeInTheDocument();
    });
});