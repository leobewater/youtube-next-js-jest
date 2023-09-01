import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { LoginForm } from '@/components/LoginForm';
import userEvent from '@testing-library/user-event';
import { server } from '@/mocks/server';
import { rest } from 'msw';

describe('LoginForm', () => {
  it('should enter username and password and click on login button', async () => {
    render(<LoginForm />);

    const loginButton = screen.getByRole('button', { name: 'Login' });
    expect(loginButton).toBeDisabled();

    // Enter username and password in form
    await userEvent.type(screen.getByLabelText(/Username:/), 'anson');
    await userEvent.type(screen.getByLabelText(/Password:/), '12345');
    expect(loginButton).toBeEnabled();

    await userEvent.click(loginButton);

    // check success message
    expect(await screen.findByText('Success Logging In')).toBeInTheDocument();
  });

  it('should login user and display error message', async () => {
    // override mockup handler
    server.use(
      rest.post('/api/auth', (req, res, ctx) => {
        return res(ctx.status(400));
      })
    );

    render(<LoginForm />);

    const loginButton = screen.getByRole('button', { name: 'Login' });
    expect(loginButton).toBeDisabled();

    // Enter username and password in form
    await userEvent.type(screen.getByLabelText(/Username:/), 'anson');
    await userEvent.type(screen.getByLabelText(/Password:/), '12345');
    expect(loginButton).toBeEnabled();

    await userEvent.click(loginButton);

    // check success message
    expect(await screen.findByText('Error Logging In')).toBeInTheDocument();
  });
});
