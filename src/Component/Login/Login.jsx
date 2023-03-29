import React, { useState } from "react"
import { Navigate, Redirect, useHistory, useNavigate } from 'react-router-dom';
import Loading from "../Loading/Loading";

// import Sidebar from "../Sidebar/Sidebar";
// import Table from "../Table/Table";
import "./Login.css"

const Login=()=>{
  const data=[
    {
   email:"minhngoc@gmail.com",
   password:"123",
   role:"Admin"
  },
  {
    email:"minhduy@gmail.com",
    password:"123",
    role:"MOD"
   },
   {
    email:"minhquan@gmail.com",
    password:"123",
    role:"User"
   }
]
 const navigate= useNavigate();
   const [email,setEmail] = useState('')
   const [password,setPassword] = useState('')
   const [role,setRole]= useState('Admin');
   const [dataLogin,setDataLogin]= useState([])
   const [success,setSuccess] = useState(false)
  
   const handleLogIn = (e)=>{
    e.preventDefault();
    if (success===false){
      <Loading/>
    }
    // Admin
    if (email==="minhngoc@gmail.com" && password==="123"){
      localStorage.setItem("Role","Admin")
      setSuccess(true)
      navigate('/admin/dashBoard')
    }
    // Moderrator
    if (email==="minhduy@gmail.com" && password==="123"){
      localStorage.setItem("Role","Moderrator")
      setSuccess(true)
      navigate('/moderrator/dashBoard')
    }
   }
   
    return(
       <div className="LogIn-container">
        <div className="LogIn-glass">
        <div className='Login'>
          <h1>Login</h1>
          <input type="text" placeholder='Username'
          onChange={(e)=>{setEmail(e.target.value)}}
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