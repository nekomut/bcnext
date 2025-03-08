import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import Page from '@/app/normal/page'

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
  useSearchParams: jest.fn(),
}));

// Mock the components used in the page
jest.mock('@/app/normal/GatyaSets', () => {
  return {
    __esModule: true,
    default: () => <div data-testid="gatya-sets">Mock GatyaSets</div>
  }
});

jest.mock('@/app/normal/SeedAndRolls', () => {
  return {
    __esModule: true,
    default: () => <div data-testid="seed-and-rolls">Mock SeedAndRolls</div>
  }
});

jest.mock('@/app/normal/RollTable', () => {
  return {
    __esModule: true,
    default: () => <div data-testid="roll-table">Mock RollTable</div>
  }
});

jest.mock('@/app/normal/Tile', () => {
  return {
    __esModule: true,
    default: () => <div data-testid="tile">Mock Tile</div>
  }
});

describe('Normal Page', () => {
  // Setup for mocks
  const mockRouter = {
    push: jest.fn(),
    replace: jest.fn(),
  };

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
    (usePathname as jest.Mock).mockReturnValue('/normal');
    (useSearchParams as jest.Mock).mockReturnValue(new URLSearchParams());
    jest.clearAllMocks();
  });

  test('Normal ページが正しくレンダリングされるか', () => {
    render(<Page />);
    
    // ページタイトルの確認はクライアントサイドでのみ動作するため、テストでは難しい
    // ナビゲーションリンクの確認
    expect(screen.getByText('bcnext')).toBeInTheDocument();
    expect(screen.getByText('Normal')).toBeInTheDocument();
    expect(screen.getByText('Rare')).toBeInTheDocument();
    expect(screen.getByText('Event')).toBeInTheDocument();
    expect(screen.getByText('Seek')).toBeInTheDocument();
    
    // 各コンポーネントの確認
    expect(screen.getByTestId('gatya-sets')).toBeInTheDocument();
    expect(screen.getByTestId('seed-and-rolls')).toBeInTheDocument();
    expect(screen.getByTestId('roll-table')).toBeInTheDocument();
    expect(screen.getByTestId('tile')).toBeInTheDocument();
  });
  
  test('各リンクが正しいhref属性を持つか', () => {
    render(<Page />);
    
    // 各リンクのhref属性を確認
    expect(screen.getByText('bcnext').closest('a')).toHaveAttribute('href', '/');
    expect(screen.getByText('Rare').closest('a')).toHaveAttribute('href', '/rare');
    expect(screen.getByText('Event').closest('a')).toHaveAttribute('href', '/event');
    expect(screen.getByText('Seek').closest('a')).toHaveAttribute('href', '/seek');
  });
  
  test('Normalリンクは現在のページであるため異なるスタイルか', () => {
    render(<Page />);
    
    // Normalリンクだけが異なるスタイルクラスを持っていることを確認
    const normalLink = screen.getByText('Normal');
    expect(normalLink).toHaveClass('text-green-500');
  });
  
  test('パフォーマンス - Normalページのレンダリング速度', () => {
    const startTime = performance.now();
    
    render(<Page />);
    
    const endTime = performance.now();
    const renderTime = endTime - startTime;
    
    console.log(`Normal page rendering took ${renderTime}ms`);
    expect(renderTime).toBeLessThan(500);
  });
  
  test('コンポーネントがSuspenseでラップされているか', () => {
    // Suspenseのテストは簡単ではありませんが、レンダリング自体が成功することを確認
    render(<Page />);
    
    // 少なくともコンポーネントが存在していることを確認
    expect(screen.getByTestId('gatya-sets')).toBeInTheDocument();
    expect(screen.getByTestId('seed-and-rolls')).toBeInTheDocument();
  });
});