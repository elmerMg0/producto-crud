import React, {useEffect}from 'react'
import Producto from '../components/CrudProduct'
import Header from "../components/Header"
import {useSelector, useDispatch} from 'react-redux'
import { userServices } from '../services/api.services'
import { addUser } from '../features/login/loginSlice'

function Home() {
  const user = useSelector(state => state.login)
  const dispatch = useDispatch(); 

  useEffect ( ()=>{
    const loggedUserJSON = window.localStorage.getItem("userLoginToken");
    if(loggedUserJSON){
      const token = JSON.parse(loggedUserJSON);
      
      userServices.setToken( token )
      
      dispatch(addUser({
        username: "",
        token: token,
        isLogin: true,
      }))
    }
  },[] )
  
  return (
    <div>
        <Header/>
        {user.isLogin && <Producto/>}
    </div>
  )
}

export default Home