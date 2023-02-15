import React from "react";

const UserTable = ({ users }) => {
  return (
    <div>
      <h5>Users List</h5>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Username</th>
            <th>---</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.length > 0 &&
            users.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{user.nombres}</td>
                  <td>{user.username}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
