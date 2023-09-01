import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import Home from '@/app/page';

describe('Home Page', () => {
  describe('Rendering', () => {
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
  });

  describe('Behavior', () => {
    it('should not find element with text: This is the text!', () => {
      render(<Home />);
      expect(screen.queryByText('This is the text!')).not.toBeInTheDocument();
    });

    it('should click on Show Text button and find new text', async () => {
      render(<Home />);
      // check if text is not in the doc
      expect(screen.queryByText('This is the text!')).not.toBeInTheDocument();

      // trigger click "Show Text" button
      const showTextButton = screen.getByRole('button', { name: 'Show Text' });
      
      // fire a user-event
      await userEvent.click(showTextButton);
      //expect(screen.getByText(/This is the text!/)).toBeInTheDocument();

      // use findByText with async or waiting for some values to be updating. findBy default max waiting for 1000ms or define your own timeout
      expect(await screen.findByText(/This is the text!/, {}, {timeout: 5000})).toBeInTheDocument();
    });
  });
});
