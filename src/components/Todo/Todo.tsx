import React, { useEffect, useState } from 'react';
import { User } from '../../types/todo';
export const Todo = () => {
  const [userName, setUserName] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [users, setUsers] = useState<User[]>([] as User[]);
  const [id, setId] = useState<number>(0);
  useEffect(() => {
    setUsers([]);
  }, []);
  const deleteUser = (id: number) => {
    // const id = +e.currentTarget.getAttribute("data-id");
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
  };
  const addUser = () => {
    if(userName.length <= 3){
      setError('Username length should be greater than or equal to 3')
    }
    else{
      const nextId = id + 1;
      setId(nextId);
      users.push({
        id: nextId,
        name: userName
      });
      setUsers(users);
      setUserName('');
      setError('');
    }
  };
  return (
    <>
      <h2>This is todo app</h2>
      Name
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <div 
      style={{
        color: '#f50057'
      }}>{error}</div>
      <br />
      <button type="submit" onClick={addUser}>
        Submit
      </button>
      <br />
      {users.length ? (
        <table border={1}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => deleteUser(user.id)}
                    value={user.id}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        'No users found'
      )}
    </>
  );
};
