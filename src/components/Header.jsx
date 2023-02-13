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
        navigate("/login")
    }

  return (
    <div className='header'>
        <h3 onClick={() => logout()}> {token ? "Logout" : "Login" }</h3>
    </div>
  )
}

export default Header