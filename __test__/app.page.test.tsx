import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '@/app/page'
// import mockRouter from 'next-router-mock'
// import { text } from 'stream/consumers';
 
describe('Page', () => {

  test ('トップページがクラッシュしないか?', () => {
    render(<Page />);
  });
  
  test ('/ のリンクが正常に作成されるか?', () => {
    render(<Page />);
    const link = screen.getByText((text: string) => text === 'bcnext');
    expect(link).toBeInTheDocument();
  });

});