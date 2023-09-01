import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { UserProfile } from '@/components/UserProfile';

describe('User Profile', () => {
  describe('Rendering', () => {
    it('should have text Email Verified when isEmailVerified is true', () => {
      // passing props to component
      render(
        <UserProfile
          displayName="Anson The Developer"
          username="ansonthedev"
          email="ansonthedev@ansonthedev.com"
          isEmailVerified={true}
        />
      );

      // may need to wrap text with span/div when using text not regrex
      //console.log(screen.getByText('Email Verified'));
      expect(screen.getByText('Email Verified')).toBeInTheDocument();
    });

    it('should have text Email Not Verified when isEmailVerified is false', () => {
      render(
        <UserProfile
          displayName="Anson The Developer"
          username="ansonthedev"
          email="ansonthedev@ansonthedev.com"
          isEmailVerified={false}
        />
      );

      expect(screen.queryByText('Email Verified')).not.toBeInTheDocument();
      expect(screen.getByText('Email Not Verified')).toBeInTheDocument();
    });
  });

  it('should have display name end with three dots when length is greater than 30 characters', () => {
    render(
      <UserProfile
        displayName="Anson The Developer Anson The Developer Anson The Developer Anson The Developer"
        username="ansonthedev"
        email="ansonthedev@ansonthedev.com"
        isEmailVerified={false}
      />
    );

    // find the label then the parent element
    const displayNameSpanElement = screen.getByText(/Display Name: /);
    // console.log(displayNameSpanElement);
    
    // use regex to test the end of the element has 3 dots 
    //TODO: but if more than 3 dots it still passes
    expect(displayNameSpanElement).toHaveTextContent(/.*\.\.\./)
  });

  it('should not have three dots at the end of display name when less than 30 characters', () => {
    render(
      <UserProfile
        displayName="Anson"
        username="ansonthedev"
        email="ansonthedev@ansonthedev.com"
        isEmailVerified={false}
      />
    );

    const displayNameSpanElement = screen.getByText(/Display Name: /);
    expect(displayNameSpanElement).not.toHaveTextContent(/.*\.\.\./)
  });


});
