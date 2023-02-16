import React,{useState} from "react";

const initialRolePer = {
  namePermission: "",
  nameRole: ""
}


const AssignPermissionRole = ({ roles, permissions, assignPermissionToRole }) => {
  const [rolesPermission, setRolesPermission] = useState(initialRolePer);

  const handleChange = (e) =>{
    e.preventDefault();
    setRolesPermission(
      {...rolesPermission,
        [e.target.name]: e.target.value
      })
      console.log(rolesPermission)
  }

  const handleSumit = () => {
    assignPermissionToRole(rolesPermission);
  }
  return (
    <div className="roleandpermission">
      <h5>Assign permission to role</h5>
      <div className="card-categoryproduct">
        <h5>Select a role</h5>
        <select  name="nameRole" id="" onChange={handleChange}>
        <option className='option' selected disabled="disabled" >Role</option>
          {roles &&
            roles.length > 0 &&
            roles.map((role, index) => {
              return <option key={index} value={role.name}>{role.name}</option>;
            })}
        </select>
      </div>

      <div className="card-categoryproduct">
        <h5>Select a permission</h5>
        <select name="namePermission" id="" onChange={handleChange}>
        <option className='option' selected disabled="disabled" >Permission</option>
          {permissions &&
            permissions.length > 0 &&
            permissions.map((permission, index) => {
              return <option key={index}  value={permission.name}>{permission.name}</option>;
            })}
        </select>
      </div>

      <button className="button button--blue" onClick={handleSumit}>Enviar</button>
    </div>
  );
};

export default AssignPermissionRole;
