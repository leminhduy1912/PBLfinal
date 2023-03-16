
import './App.css';
import MainDash from './components/Sidebar/Maindash/MainDash';
import Sidebar from './components/Sidebar/Sidebar';
import { useState } from 'react'
import {UilSignOutAlt} from "@iconscout/react-unicons"
import React from 'react'
const Login=()=>{
    return(
        <div>Login</div>
    )

}



function App() {
    const [admin,setAdmin] = useState(false);
// setRole("Admin")
 return (
  <div className='App'>
   <div className='AppGlass'>
    <Sidebar />
    {admin||<MainDash />}   
   </div>
  </div>
 )
}

export default App;
