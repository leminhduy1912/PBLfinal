import { useEffect, useRef, useState } from 'react'
import {UilSignOutAlt} from "@iconscout/react-unicons"
import { SidebarData } from './Data/Data';
import React from 'react'
// import MainDash from './components/Sidebar/Maindash/MainDash';

import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from './Component/Login/Login';
import Sidebar from './Component/Admin/Sidebar/Sidebar';
import Dashboard from './Component/Admin/Dashboard/Dashboard';
import Loading from './Component/Loading/Loading';
import HomePage from './Component/HomePage/HomePage';
// import Sidebar from './components/Sidebar/Sidebar';

function App() {


  return (
    <BrowserRouter>
    <div className='App'>
     <Routes>
      <Route exact path='/' element={<HomePage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route  path='/loading' element={<Loading/>}/>
      <Route path='/admin' element={<Sidebar/>}  />
      </Routes>
  </div>
  </BrowserRouter>
  )

}

export default App;
