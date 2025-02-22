import React from 'react';
import './styles.css';

export const UserList = ({ users = [] }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Lastname</th>
          </tr>
        </thead>
        <tbody>
          {users.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.id}</td>
              <td>{usuario.name}</td>
              <td>{usuario.email}</td>
              <td>{usuario.lastname}</td> 
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default UserList;