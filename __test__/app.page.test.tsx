import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import Page from '@/app/page'

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
  useSearchParams: jest.fn(),
  Link: ({ children, href }: { children: React.ReactNode, href: string }) => <a href={href}>{children}</a>
}));

describe('Main Page', () => {
  // Setup for mocks
  const mockRouter = {
    push: jest.fn(),
    replace: jest.fn(),
  };

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
    (usePathname as jest.Mock).mockReturnValue('/');
    (useSearchParams as jest.Mock).mockReturnValue(new URLSearchParams());
    jest.clearAllMocks();
    
    // リセットdocument.title
    Object.defineProperty(document, 'title', {
      writable: true,
      value: ''
    });
  });

  test('トップページがクラッシュしないか', () => {
    render(<Page />);
  });
  
  test('bcnextのリンクが正常に作成されるか', () => {
    render(<Page />);
    const link = screen.getByText((text: string) => text === 'bcnext');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/');
  });
  
  test('bcnext リンクは強調表示されているか', () => {
    render(<Page />);
    
    // リンクのDOMノードを取得
    const homeLink = screen.getByText('bcnext').closest('a');
    expect(homeLink).toHaveClass('text-green-500');
  });
  
  test('パフォーマンス - メインページのレンダリング速度', () => {
    const startTime = performance.now();
    
    render(<Page />);
    
    const endTime = performance.now();
    const renderTime = endTime - startTime;
    
    console.log(`Main page rendering took ${renderTime}ms`);
    expect(renderTime).toBeLessThan(500);
  });
});
