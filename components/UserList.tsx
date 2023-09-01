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
    <div className="mt-8">
      {users.length > 0 ? (
        <div>
          <h2 className="text-xl">List Of Users</h2>
          {users.map((user) => (
            <div key={user.id}>{user.username}</div>
          ))}
        </div>
      ) : (
        <span>No Users</span>
      )}
    </div>
  );
};
