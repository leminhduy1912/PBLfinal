import { useEffect, useRef, useState } from 'react'
import {UilSignOutAlt} from "@iconscout/react-unicons"
import { SidebarData } from './Data/Data';
import React from 'react'

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
import ManageAccount from './Component/Admin/ManagerAccount/ManageAccount';
import AccountUpdate from './Component/Admin/ManagerAccount/AccountUpdate/AccountUpdate';
import PlanInspect from './Component/Admin/PlanInspect/PlanInspect';
import './App.css';


function App() {


  return (
    <BrowserRouter>
    <div className='App'>
     <Routes>
      <Route exact path='/' element={<HomePage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route  path='/loading' element={<Loading/>}/>
      <Route path='/admin' element={<Sidebar data={SidebarData}/>}>
        <Route path='dashBoard' element={<Dashboard/>}/>
        <Route path='manageAccount' element={<ManageAccount/>}/>
        <Route path='accountUpdate' element={<AccountUpdate/>}/>
        <Route path='planInspect' element={<PlanInspect/>}/>
      </Route>
      </Routes>
  </div>
  </BrowserRouter>
  )

}

export default App;
