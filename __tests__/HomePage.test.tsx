import Home from '@/app/page';
import { render, screen } from '@testing-library/react';
describe('Home Page - Rendering', () => {
  it('should have Home Page text', () => {
    render(<Home />);
    screen.getByText('Homepage');
  });
});
