import { useState } from 'react';

export const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const isDisabled = () => !username || !password;

  const handleLogin = (e: React.SyntheticEvent) => {
    e.preventDefault();

    setError('');
    setSuccess('');

    fetch('/api/auth', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        setSuccess('Success Logging In');
      })
      .catch((err) => {
        setError('Error Logging In');
      });
  };

  return (
    <form className="mt-10 p-8">
      <div>{error}</div>
      <div>{success}</div>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        className="border rounded p-2 ml-2"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <br />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        className="border rounded p-2 ml-2"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />

      <br />
      <button
        type="submit"
        onClick={handleLogin}
        disabled={isDisabled()}
        className="border rounded bg-slate-300 py-2 px-4 cursor-pointer"
      >
        Login
      </button>
    </form>
  );
};
