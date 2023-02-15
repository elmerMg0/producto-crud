import React , {useEffect} from "react";
import Header from "../components/Header";
import UserForm from "../components/dashboard/UserForm";
import CrudUser from "../components/dashboard/CrudUser";
import Authentication from "../components/dashboard/Authentication";
import {useSelector,useDispatch} from 'react-redux'
import {userServices} from '../services/api.services'
import { addUser } from '../features/login/loginSlice'

const Dashboard = () => {

  const isLogin = useSelector(state => state.login.isLogin)
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
    <>
      <Header />
      {
        isLogin ?
        <>
        <CrudUser/>
        <Authentication/>
        </>
        :
        null
      }
    </>
  );
};

export default Dashboard;
