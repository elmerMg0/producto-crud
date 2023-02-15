import React,{useState} from 'react'


const initialPermission = {
  name: "",
  description: ""
}


const PermissionForm = ( {createPermissions} ) => {

  const [role, setRole] = useState(initialPermission)
  
  const handleSubmit = (e) => {
    console.log(role)

    e.preventDefault();
    createPermissions(role);
  }
  
  const handleChange = (e) => {
    setRole({
      ...role,
      [e.target.name] : e.target.value
    })
  } 

  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label>Name</label>
            <input required type="text" name='name' value={role.name} onChange={handleChange}/>
        </div>

        <div>
            <label>Description</label>
            <input type="text" name='description' value={role.description} onChange={handleChange}/>
        </div>
        <button className='button button--blue'>Enviar</button>
    </form>
  )
}

export default PermissionForm