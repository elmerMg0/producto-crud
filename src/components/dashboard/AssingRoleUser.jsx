import React, { useEffect, useState } from "react";
import { genericRequest } from "../../services/api.services";
import RoleUserTable from './RoleUserTable'
const AssingRoleUser = () => {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [user, setUser] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    getUsers();
    getRoles();
  }, []);

  const getUsers = () => {
    genericRequest.get("user", "").then((res) => {
      if (res.status === 200) {
        setUsers(res.users);
        console.log(res.users);
      }
    });
  };

  const getRoles = () => {
    genericRequest.get("auth/get-roles", "").then((res) => {
      if (res.status === 200) {
        setRoles(Object.values(res.roles));
      }
    });
  };

  const assignRoleToUser = () =>{
 /*    $params = `name=${role}&idUser=${user}`
    genericRequest.get("auth/assign-permission?", $params).then(res => {

    }) */
    console.log(user,role)
  }

  return (
    <div className="assign-role-user">
      <div className="crud-container">
        <div>
        <h5>Assign role to user</h5>
          <div className="card-categoryproduct">
            <select name="user" onChange={(e) => setUser(e.target.value)}>
              <option className="option" selected disabled="disabled">
                User
              </option>
              {users &&
                users.length > 0 &&
                users.map((user, index) => {
                  return (
                    <option key={index} value={user.id}>
                      {user.nombres}
                    </option>
                  );
                })}
            </select>
          </div>
          <div className="card-categoryproduct">
            <select name="role" onChange={(e) => setRole(e.target.value)}>
              <option className="option" selected disabled="disabled">
                Role
              </option>
              {roles &&
                roles.length > 0 &&
                roles.map((user, index) => {
                  return (
                    <option key={index} value={user.name}>
                      {user.name}
                    </option>
                  );
                })}
            </select>
          </div>
          <button onClick={()=>assignRoleToUser()} className="button button--blue">Enviar</button>
        </div>
        <RoleUserTable users={users}/>
      </div>
    </div>
  );
};

export default AssingRoleUser;
