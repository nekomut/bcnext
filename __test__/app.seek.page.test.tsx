import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import Page from '@/app/seek/page'

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
  useSearchParams: jest.fn(),
  Link: ({ children, href }: { children: React.ReactNode, href: string }) => <a href={href}>{children}</a>
}));

// Mock the components used in Page
jest.mock('@/app/seek/Seeker', () => () => <div data-testid="seeker">Seeker Component</div>);

describe('Seek Page', () => {
  // Setup for mocks
  const mockRouter = {
    push: jest.fn(),
    replace: jest.fn(),
  };

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
    (usePathname as jest.Mock).mockReturnValue('/seek');
    (useSearchParams as jest.Mock).mockReturnValue(new URLSearchParams());
    jest.clearAllMocks();
    
    // リセットdocument.title
    Object.defineProperty(document, 'title', {
      writable: true,
      value: ''
    });
  });

  test('should set the document title to "bcnext/seek"', () => {
    render(<Page />);
    expect(document.title).toBe('bcnext/seek');
  });

  test('should render the navigation links correctly', () => {
    render(<Page />);
    expect(screen.getByText('bcnext')).toBeInTheDocument();
    expect(screen.getByText('Normal')).toBeInTheDocument();
    expect(screen.getByText('Rare')).toBeInTheDocument();
    expect(screen.getByText('Event')).toBeInTheDocument();
    expect(screen.getByText('Seek')).toBeInTheDocument();
  });

  test('should render Seeker component', () => {
    render(<Page />);
    expect(screen.getByTestId('seeker')).toBeInTheDocument();
  });
  
  test('Seek リンクは現在のページであるため異なるスタイルか', () => {
    render(<Page />);
    
    // リンクのDOMノードを取得
    const seekLink = screen.getByText('Seek').closest('a');
    expect(seekLink).toHaveClass('text-green-500');
  });
  
  test('ナビゲーションリンクがすべて正しいhref属性を持つか', () => {
    render(<Page />);
    
    // 各リンクの href 属性を確認
    expect(screen.getByText('bcnext').closest('a')).toHaveAttribute('href', '/');
    expect(screen.getByText('Normal').closest('a')).toHaveAttribute('href', '/normal');
    expect(screen.getByText('Rare').closest('a')).toHaveAttribute('href', '/rare');
    expect(screen.getByText('Event').closest('a')).toHaveAttribute('href', '/event');
    expect(screen.getByText('Seek').closest('a')).toHaveAttribute('href', '/seek');
  });
  
  test('パフォーマンス - Seekページのレンダリング速度', () => {
    const startTime = performance.now();
    
    render(<Page />);
    
    const endTime = performance.now();
    const renderTime = endTime - startTime;
    
    console.log(`Seek page rendering took ${renderTime}ms`);
    expect(renderTime).toBeLessThan(500);
  });
});