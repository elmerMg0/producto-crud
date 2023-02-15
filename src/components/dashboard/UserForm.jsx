import React, { useState } from 'react'

const initialUser = {
    nombres: "",
    username: "",
    password: "",
}


const UserForm = ( {createUser} ) => {
    const [user, setUser] = useState(initialUser)

    const handleChange = (e) => {
        setUser(
            {...user, [e.target.name]: e.target.value}
            )
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(user)
        createUser(user);
    }

  return (
    <form onSubmit={handleSubmit} className='user-form'>
      
        <div>
            <label>Nombres</label>
            <input required type="text" name="nombres" onChange={handleChange} />
        </div>

        <div>
            <label>Username</label>
            <input required type="text" name="username" onChange={handleChange}/>
        </div>

        <div>
            <label>Password</label>
            <input required type="password" name="password" onChange={handleChange}/>
        </div>

        <button className='button button--blue'>Send</button>

    </form>
  )
}

export default UserForm