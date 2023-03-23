import React, { useState } from "react"
import { Navigate, Redirect, useHistory, useNavigate } from 'react-router-dom';

// import Sidebar from "../Sidebar/Sidebar";
// import Table from "../Table/Table";
import "./Login.css"

const Login=()=>{
 const navigate= useNavigate();
   const [username,setUsername] = useState('');
   const [password,setPassword] = useState('');
   const [role,setRole]= useState('Admin');
   const [success,setSuccess] = useState(false)
   const handleLogIn = (e)=>{
    e.preventDefault();
    if (success===false){
      navigate('/loading')
    }
    if (role==='Admin'){
      localStorage.setItem("Role","Admin")
      setSuccess(true)
      {setTimeout(()=>{
        navigate('/admin/dashBoard')
      },1000)}

    }
   }
    return(
       <div className="LogIn-container">
        <div className="LogIn-glass">
        <div className='Login'>
          <h1>Login</h1>
          <input type="text" placeholder='Username'
          onChange={(e)=>{setUsername(e.target.value)}}
          />
          <input type="text" placeholder='Password'
          onChange={(e)=>{setPassword(e.target.value)}}
          />
          <button
          onClick={(e)=>handleLogIn(e)}
          >Log In</button>
          <p>Not a member ? <a
          >Sign Up</a></p>
        </div>
        </div>
       </div>
    )
   
}
export default Login