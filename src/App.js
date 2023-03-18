
import { useEffect, useRef, useState } from 'react'
import {UilSignOutAlt} from "@iconscout/react-unicons"
import { SidebarData } from './Data/Data';
import React from 'react'
import MainDash from './components/Sidebar/Maindash/MainDash';
import Login from './components/Login/Login';
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Sidebar from './components/Sidebar/Sidebar';

function App() {
//   const [logInSuccess,setLogInSuccess] = useState(true)
//  return (
//   <div className='App'>
// {logInSuccess&&<Sidebar/>}
//   </div>
//  )

  return (
    <BrowserRouter>
    <div className='App'>
     <Routes>
      <Route exact path='/' element={<Login/>}/>
      <Route path='/admin' element={<Sidebar/>}  />
           
    
      </Routes>
 
  </div>
  </BrowserRouter>
  )

}

export default App;
