import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

const Header = () => {

    const navigate = useNavigate()
    const [token, setToken] = useState(false)
    useEffect( () => {
        setToken(window.localStorage.getItem("userLoginToken"))
    },[])

    const logout = () => {
        window.localStorage.removeItem("userLoginToken");
        window.localStorage.removeItem("user");
        navigate("/login")
    }

  return (
    <div className='header'>
        <h3 onClick={() => logout()}> {token ? "Logout" : "Login" }</h3>
    </div>
  )
}

export default Header