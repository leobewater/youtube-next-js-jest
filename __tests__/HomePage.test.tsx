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
    expect(
      screen.getByRole('button', { name: 'Click Me' })
    ).toBeInTheDocument();
  });

  it('should have input field with label Enter Random Text', () => {
    render(<Home />);
    // find one input field
    //expect(screen.getByRole('textbox')).toBeInTheDocument();

    // find label text
    expect(screen.getByLabelText(/Enter Random Text/)).toBeInTheDocument();
  });

  it('should have input field with label Enter Specific Text', () => {
    render(<Home />);
    expect(screen.getByLabelText(/Enter Specific Text/)).toBeInTheDocument();
  });

  it('should find input field by placeholder text Search', () => {
    render(<Home />);
    expect(screen.getByPlaceholderText(/Search.../)).toBeInTheDocument();
  });

  it('should find input field by display value', () => {
    render(<Home />);
    expect(screen.getByDisplayValue(/AUDI Q5/)).toBeInTheDocument();
  });

  it('should not find element with text: This is the text!', () => {
    render(<Home />);
    expect(screen.queryByText('This is the text!')).not.toBeInTheDocument();
  });
});
