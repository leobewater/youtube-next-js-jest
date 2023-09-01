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
  });
});
