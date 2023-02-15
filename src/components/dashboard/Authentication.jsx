import React from 'react'
import RoleForm from './RoleForm'
import RoleTable from './RoleTable'
const Authentication = () => {
  return (
        <div >
            <h5>Crear roles y permisos</h5>
            <div className='crud-container'>
            <RoleForm/>
            <RoleTable/>
            </div>
        </div>
    )
}

export default Authentication