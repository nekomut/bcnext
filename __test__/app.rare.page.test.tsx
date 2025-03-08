import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import Page from '@/app/rare/page'

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
  useSearchParams: jest.fn(),
  Link: ({ children, href }: { children: React.ReactNode, href: string }) => <a href={href}>{children}</a>
}));

// Mock the components used in Page
jest.mock('@/app/rare/GatyaSets', () => () => <div data-testid="gatya-sets">GatyaSets Component</div>);
jest.mock('@/app/rare/SeedAndRolls', () => () => <div data-testid="seed-and-rolls">SeedAndRolls Component</div>);
jest.mock('@/app/rare/RollTable', () => () => <div data-testid="roll-table">RollTable Component</div>);
jest.mock('@/app/rare/Tile', () => () => <div data-testid="tile">Tile Component</div>);

describe('Rare Page', () => {
  // Setup for mocks
  const mockRouter = {
    push: jest.fn(),
    replace: jest.fn(),
  };

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
    (usePathname as jest.Mock).mockReturnValue('/rare');
    (useSearchParams as jest.Mock).mockReturnValue(new URLSearchParams());
    jest.clearAllMocks();
  });

  test('should set the document title to "bcnext/rare"', () => {
    render(<Page />);
    expect(document.title).toBe('bcnext/rare');
  });

  test('should render the navigation links', () => {
    render(<Page />);
    expect(screen.getByText('bcnext')).toBeInTheDocument();
    expect(screen.getByText('Normal')).toBeInTheDocument();
    expect(screen.getByText('Rare')).toBeInTheDocument();
    expect(screen.getByText('Event')).toBeInTheDocument();
    expect(screen.getByText('Seek')).toBeInTheDocument();
  });

  test('should render all components inside Suspense', () => {
    render(<Page />);
    expect(screen.getByTestId('gatya-sets')).toBeInTheDocument();
    expect(screen.getByTestId('seed-and-rolls')).toBeInTheDocument();
    expect(screen.getByTestId('roll-table')).toBeInTheDocument();
    expect(screen.getByTestId('tile')).toBeInTheDocument();
  });
  
  test('Rare リンクは現在のページであるため異なるスタイルか', () => {
    render(<Page />);
    
    // リンクのDOMノードを取得
    const rareLink = screen.getByText('Rare').closest('a');
    expect(rareLink).toHaveClass('text-green-500');
  });
  
  test('境界値テスト - 検索パラメータが存在する場合の動作', () => {
    // 検索パラメータが含まれたURLを模擬
    const mockParams = new URLSearchParams();
    mockParams.set('seed', '12345');
    mockParams.set('rolls', '10');
    mockParams.set('gatyasets', 'set942,set943');
    (useSearchParams as jest.Mock).mockReturnValue(mockParams);
    
    render(<Page />);
    
    // ページが正常にレンダリングされることを確認
    expect(screen.getByTestId('gatya-sets')).toBeInTheDocument();
    expect(screen.getByTestId('seed-and-rolls')).toBeInTheDocument();
  });
  
  test('パフォーマンス - Rareページのレンダリング速度', () => {
    const startTime = performance.now();
    
    render(<Page />);
    
    const endTime = performance.now();
    const renderTime = endTime - startTime;
    
    console.log(`Rare page rendering took ${renderTime}ms`);
    expect(renderTime).toBeLessThan(500);
  });
});
