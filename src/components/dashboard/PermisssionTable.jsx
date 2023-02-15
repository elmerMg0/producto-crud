import React from "react";

const PermissionTable = ({ permissions }) => {
  return (
    <div>
      <h5>Role List</h5>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripcion</th>
          </tr>
        </thead>
        <tbody>
          {permissions &&
            permissions.length > 0 &&
            permissions.map((per, index) => {
              return (
                <tr key={index}>
                  <td>{per.name}</td>
                  <td>{per.description}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default PermissionTable;
