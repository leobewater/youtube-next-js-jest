import Home from '@/app/page';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Home Page - Rendering', () => {
  it('should have Home Page text', () => {
    render(<Home />);
    expect(screen.getByText('Homepage')).toBeInTheDocument();
  });

  it('should have button with text Click Me', () => {
    render(<Home />);
    // search for button with text Click Me
    expect(screen.getByRole("button", {name: 'Click Me'})).toBeInTheDocument();
  })
});
