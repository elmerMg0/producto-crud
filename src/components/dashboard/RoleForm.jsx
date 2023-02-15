import React from 'react'

const RoleForm = () => {
  return (
    <form >
        <div>
            <label>Name</label>
            <input required type="text" />
        </div>

        <div>
            <label>Description</label>
            <input type="text" />
        </div>
    </form>
  )
}

export default RoleForm