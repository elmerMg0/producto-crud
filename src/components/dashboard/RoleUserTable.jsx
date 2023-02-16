import React,{useState} from 'react'
import {genericRequest} from '../../services/api.services'
const RoleUserTable = ({users}) => {
    const [roles, setRoles] = useState([]);
    const handleChange = (e) => {
      const params = `useId=${e.target.value}`;
      genericRequest.get("auth/get-roles-by-user?", params).then((res) => {
        if (res.status === 200) {
          setRoles(Object.values(res.roles));
          //console.log(res);
        }
      });
      //getPermissionsByRole()
    };
  
    const getPermissionsByRole = () => {
    /*   const params = `name=${nameRole}`;
      genericRequest.get("auth/get-permission-by-role?", params).then((res) => {
        if (res.status === 200) {
          setPermissions(Object.values(res.permissions));
          console.log(permissions);
        }
        getPermissionsByRole();
      }); */
    };
  
    return (
      <div>
        <select name="role" onChange={(e) => handleChange(e)}>
          <option selected disabled="disabled">
            User
          </option>
          {users &&
            users.length > 0 &&
            users.map((users, index) => {
              return (
                <option key={index} value={users.id}>
                  {users.nombres}
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
            {roles &&
              roles.length > 0 &&
              roles.map((perm, index) => {
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
  };export default RoleUserTable