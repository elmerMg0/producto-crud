import React, { useState } from "react";
import { userServices } from "../services/api.services";
import { useNavigate } from "react-router";
import {toast , Toaster} from 'react-hot-toast'
import {useDispatch} from 'react-redux'
import { addUser } from '../features/login/loginSlice'

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    userServices.userLogin(username, password).then((res) => {
      if (res.status === 200) {
        navigate("/producto");
        window.localStorage.setItem("userLoginToken", JSON.stringify(res.accessToken));

        const user = {
          user: username,
          token: res.accessToken,
          isLogin: true,
        }

        dispatch(addUser(user))

        userServices.setToken(res.token);
        showToast(res.message, "✅");
      } else {
        showToast(res.message, "⚠️");
        console.log(res)  
      }
    });
  };

  const showToast = (message, icon) => {
    toast(message, {
      icon: icon,
      duration: 3000,
      style: {
        border: "2px solid #ff7c01",
        padding: "10px",
        color: "#fff",
        background: "#000",
        borderRadius: "4%",
      },
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="login">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Login</button>
      </form>
      <Toaster/>
    </div>
  );
};

export default LoginForm;
