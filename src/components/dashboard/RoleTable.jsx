import React from "react";

const RoleTable = ({ roles }) => {
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
          {roles &&
            roles.length > 0 &&
            roles.map((per, index) => {
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

export default RoleTable;
