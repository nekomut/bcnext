import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

// Mock CSS imports to prevent Jest from trying to parse CSS
jest.mock('../src/app/globals.css', () => ({}), { virtual: true });

// RootLayout uses <html> as its root element, which makes it challenging
// to test in a standard React testing environment. We'll focus on testing the 
// metadata exports and basic non-rendering aspects.

// Import RootLayout after mocking CSS
import RootLayout from '@/app/layout';

// Mock next/font/google
jest.mock('next/font/google', () => ({
  Geist: () => ({
    variable: '--font-geist-sans',
  }),
  Geist_Mono: () => ({
    variable: '--font-geist-mono',
  }),
}));

describe('RootLayout', () => {
  // RootLayout uses <html> and <body> tags which cannot be properly 
  // rendered in the test environment, so we'll test other aspects
  
  test('is defined as a component', () => {
    // Test the component is defined
    expect(RootLayout).toBeDefined();
    expect(typeof RootLayout).toBe('function');
  });

  test('has correct structure definition', () => {
    // Mocking the component props
    const props = {
      children: <div>Test children</div>
    };
    
    // We can use jest.spyOn to verify how RootLayout would be called without rendering
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    
    // Create the element (but don't render it)
    const element = RootLayout(props);
    
    // Verify element has expected properties without rendering
    expect(element).toBeDefined();
    expect(element.type).toBe('html');
    expect(element.props.lang).toBe('ja');
    
    // Cleanup
    consoleSpy.mockRestore();
  });
});

// Test metadata
describe('RootLayout metadata', () => {
  test('exports metadata object with correct values', () => {
    // Import the metadata directly
    const { metadata } = require('@/app/layout');
    
    expect(metadata.title).toBe('bcnext');
    expect(metadata.description).toBe('bcnext');
  });
});