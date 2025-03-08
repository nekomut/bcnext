import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import Page from '@/app/event/page'

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
  useSearchParams: jest.fn(),
  Link: ({ children, href }: { children: React.ReactNode, href: string }) => <a href={href}>{children}</a>
}));

// Mock the components used in Page
jest.mock('@/app/event/GatyaSets', () => () => <div data-testid="gatya-sets">GatyaSets Component</div>);
jest.mock('@/app/event/SeedAndRolls', () => () => <div data-testid="seed-and-rolls">SeedAndRolls Component</div>);
jest.mock('@/app/event/RollTable', () => () => <div data-testid="roll-table">RollTable Component</div>);
jest.mock('@/app/event/Tile', () => () => <div data-testid="tile">Tile Component</div>);

describe('Event Page', () => {
  // Setup for mocks
  const mockRouter = {
    push: jest.fn(),
    replace: jest.fn(),
  };

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
    (usePathname as jest.Mock).mockReturnValue('/event');
    (useSearchParams as jest.Mock).mockReturnValue(new URLSearchParams());
    jest.clearAllMocks();
    
    // リセットdocument.title (JSDOMの制限により直接変更できない場合がある)
    Object.defineProperty(document, 'title', {
      writable: true,
      value: ''
    });
  });

  test('should set the document title to "bcnext/event"', () => {
    render(<Page />);
    expect(document.title).toBe('bcnext/event');
  });

  test('should render the navigation links correctly', () => {
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
  
  test('Event リンクは現在のページであるため異なるスタイルか', () => {
    render(<Page />);
    
    // リンクのDOMノードを取得
    const eventLink = screen.getByText('Event').closest('a');
    expect(eventLink).toHaveClass('text-green-500');
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
  
  test('検索パラメータが正しく処理されるか', () => {
    // イベント ID を含む URL パラメータをシミュレート
    const mockParams = new URLSearchParams();
    mockParams.set('gatyasets', 'e36,e37');
    mockParams.set('seed', '987654');
    mockParams.set('rolls', '5');
    (useSearchParams as jest.Mock).mockReturnValue(mockParams);
    
    render(<Page />);
    
    // コンポーネントが正常にレンダリングされるか確認
    expect(screen.getByTestId('gatya-sets')).toBeInTheDocument();
    expect(screen.getByTestId('seed-and-rolls')).toBeInTheDocument();
    expect(screen.getByTestId('roll-table')).toBeInTheDocument();
  });
  
  test('パフォーマンス - Eventページのレンダリング速度', () => {
    const startTime = performance.now();
    
    render(<Page />);
    
    const endTime = performance.now();
    const renderTime = endTime - startTime;
    
    console.log(`Event page rendering took ${renderTime}ms`);
    expect(renderTime).toBeLessThan(500);
  });
  
  test('例外テスト - 無効なガチャセットIDでも正常に動作するか', () => {
    // 無効なガチャセットIDを含むURLパラメータをシミュレート
    const mockParams = new URLSearchParams();
    mockParams.set('gatyasets', 'invalid-id,e37');
    (useSearchParams as jest.Mock).mockReturnValue(mockParams);
    
    // エラーが発生せずにレンダリングできることを確認
    expect(() => render(<Page />)).not.toThrow();
    
    // 主要コンポーネントが表示されることを確認
    expect(screen.getByTestId('gatya-sets')).toBeInTheDocument();
    expect(screen.getByTestId('seed-and-rolls')).toBeInTheDocument();
  });
});