import React, { useState } from "react";
import { genericRequest } from "../../services/api.services";
const PermissionRoleTable = ({ roles }) => {
  const [permissions, setPermissions] = useState([]);
  const [nameRole, setNameRole] = useState("");
  const handleChange = (e) => {
    const params = `name=${e.target.value}`;
    genericRequest.get("auth/get-permission-by-role?", params).then((res) => {
      if (res.status === 200) {
        setPermissions(Object.values(res.permissions));
        console.log(permissions);
      }
    });
    //getPermissionsByRole()
  };

  const getPermissionsByRole = () => {
    console.log(nameRole);
    const params = `name=${nameRole}`;
    genericRequest.get("auth/get-permission-by-role?", params).then((res) => {
      if (res.status === 200) {
        setPermissions(Object.values(res.permissions));
        console.log(permissions);
      }
      getPermissionsByRole();
    });
  };

  return (
    <div>
      <select name="role" onChange={(e) => handleChange(e)}>
        <option selected disabled="disabled">
          Role
        </option>
        {roles &&
          roles.length > 0 &&
          roles.map((role, index) => {
            return (
              <option key={index} value={role.name}>
                {role.name}
              </option>
            );
          })}
      </select>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {permissions &&
            permissions.length > 0 &&
            permissions.map((perm, index) => {
              return (
                <tr key={index}>
                  <td>{perm.name}</td>
                  <td>{perm.description}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default PermissionRoleTable;
