import { useEffect, useState } from 'react';

type usersType = {
  id: number;
  username: string;
};

export const UserList = () => {
  const [users, setUsers] = useState<usersType[]>([]);

  useEffect(() => {
    fetch('/api/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      {users.length > 0 ? (
        users.map((user) => <div key={user.id}>{user.username}</div>)
      ) : (
        <span>No Users</span>
      )}
    </div>
  );
};
