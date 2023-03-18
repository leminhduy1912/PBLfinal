import React, { useState } from "react"
import { Navigate, Redirect, useHistory, useNavigate } from 'react-router-dom';

import Sidebar from "../Sidebar/Sidebar";
import Table from "../Table/Table";
import "./Login.css"

const Login=()=>{
   const navigate= useNavigate()
   const [username,setUsername] = useState('');
   const [password,setPassword] = useState('');
   const [role,setRole]= useState('Admin')
   const handleLogIn = (e)=>{
    e.preventDefault();
    if (role==='Admin'){
      navigate('/admin')
    }
   }
    return(
        <div className='Login'>
          <h1>Login</h1>
          <input type="text" placeholder='Username'
          onChange={(e)=>{setUsername(e.target.value)}}
          />
          <input type="text" placeholder='Password'
          onChange={(e)=>{setPassword(e.target.value)}}
          />
          <a href="/adminDashboar"
          onClick={(e)=>handleLogIn(e)}
          >Log In</a>
          <p>Not a member ? <a
          >Sign Up</a></p>
        </div>
    )
   
}
export default Login
