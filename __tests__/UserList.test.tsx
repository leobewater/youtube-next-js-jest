import { UserList } from '@/components/UserList';
import { render, screen } from '@testing-library/react';

describe('UserList - Rendering', () => {
  it('should have the text anson', async () => {
    render(<UserList />);

    expect(await screen.findByText(/anson/)).toBeInTheDocument();
    expect(screen.queryByText('No Users')).not.toBeInTheDocument();
  });

  // it('should have username mike rendered', async() => {
  //   render(<UserList />);

  //   expect(await screen.findByText(/mike/)).toBeInTheDocument();
  // })
});
