import React, { useEffect, useState } from "react";
import RoleForm from "./RoleForm";
import RoleTable from "./RoleTable";
import { genericRequest } from "../../services/api.services";
import PermissionForm from "./PermissionForm";
import PermissionTable from "./PermisssionTable";
import AssignPermissionRole from './AssignPermissionRole'

const Authentication = () => {
  const [permissions, setPermissions] = useState([]);
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    getRoles();
    getPermissions();
  }, []);

  const getRoles = () => {
    genericRequest.get("auth/get-roles", "").then((res) => {
      if (res.status === 200) {
        setRoles(Object.values(res.roles));
      } else {
      }
      console.log(permissions)
    });
  };

  const getPermissions = () => {
    genericRequest.get("auth/get-permissions", "").then((res) => {
        if (res.status === 200) {
            setPermissions(Object.values(res.permissions));
        } else {
        }
      });
  }

  const createRole = (data) => {
    genericRequest.post("auth/create-role", "", data).then((res) => {
      if (res.status === 200) {
        getRoles();
      }
    });
  };

  const createPermissions = ( data )=>{
    genericRequest.post("auth/create-permission", "", data).then((res) => {
        if (res.status === 200) {
          getPermissions();
        }
      });
  }

  return (
    <div>
      <div>
        <h5>Crear roles</h5>
        <div className="crud-container">
          <RoleForm createRole={createRole} />
          <RoleTable roles={roles} />
        </div>
      </div>
      <div>
        <h5>Crear permisos</h5>
        <div className="crud-container">
          <PermissionForm createPermissions={createPermissions} />
          <PermissionTable permissions={permissions} />
        </div>
      </div>
    <div>
        <AssignPermissionRole/>
    </div>

    </div>
  );
};

export default Authentication;
