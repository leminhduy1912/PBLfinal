import React, { useState } from "react"
import { Redirect, useHistory } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Table from "../Table/Table";
import "./Login.css"

const Login=()=>{
    const history = useHistory()
   const [username,setUsername] = useState('');
   const [password,setPassword] = useState('');
   const [role,setRole]= useState('Admin')
   const handleLogIn = (e)=>{
    e.preventDefault();
    if (role==='Admin'){
       history.replace('/adminDashboard')
       {console.log("a");}
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
          <a href="/dashboard"
          onClick={(e)=>handleLogIn(e)}
          >Log In</a>
          <p>Not a member ? <a
          >Sign Up</a></p>
        </div>
    )
   
}
export default Login
