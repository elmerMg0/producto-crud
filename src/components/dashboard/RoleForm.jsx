import React,{useState} from 'react'


const initialRole = {
  name: "",
  description: ""
}


const RoleForm = ( {createRole} ) => {

  const [role, setRole] = useState(initialRole)
  
  const handleSubmit = (e) => {
    console.log(role)

    e.preventDefault();
    createRole(role);
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

export default RoleForm