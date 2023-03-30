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
import './App.css';
import Login from './Component/Login/Login';
import Sidebar from './Component/Admin/Sidebar/Sidebar';
import Dashboard from './Component/Admin/Dashboard/Dashboard';
import Loading from './Component/Loading/Loading';
import HomePage from './Component/HomePage/HomePage';
import ManageAccount from './Component/Admin/ManagerAccount/ManageAccount';
import AccountUpdate from './Component/Admin/ManagerAccount/AccountUpdate/AccountUpdate';
import PlanInspect from './Component/Admin/PlanInspect/PlanInspect';
import Stores from './Component/Admin/Stores/Stores';
import UpdateStore from './Component/Admin/Stores/UpdateStore/UpdateStore';
import InforSelf from './Component/Admin/InforSelf/InforSelf';
import AddStore from './Component/Admin/Stores/AddStore/AddStore';
import AddAccount from './Component/Admin/ManagerAccount/AddAccount/AddAccount';
import Register from './Component/Register/Register';
// import Register from './Component/Register'

function App() {


  return (
    <BrowserRouter>
    <div className='App'>
     <Routes>
      <Route exact path='/' element={<HomePage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route  path='/loading' element={<Loading/>}/>

      <Route path='/admin' element={<Sidebar data={SidebarData} role={"Admin"}  />}>
        <Route path='dashBoard' element={<Dashboard/>}/>
        {/* Account */}
        <Route path='manageAccount' element={<ManageAccount/>}/>
        <Route path='accountUpdate' element={<AccountUpdate/>}/>
        <Route path='addAccount' element={<AddAccount/>}/>

        
        <Route path='planInspect' element={<PlanInspect/>}/>
        <Route path='stores' element={<Stores/>}/>
        <Route path='storesUpdate' element={<UpdateStore/>}/>
        <Route path='addStore' element={<AddStore/>}/>
        <Route path='inforSelf' element={<InforSelf/>}/>
      </Route>

      <Route path='/moderrator' element={<Sidebar data={SidebarData}  role={"Moderator"} />}>
        <Route path='dashBoard' element={<Dashboard/>}/>
      </Route>
      <Route path='/user' element={<Sidebar data={SidebarData}  role={"User"} />}>
        <Route path='stores' element={<Stores/>}/>
      </Route>

      </Routes>
  </div>
  </BrowserRouter>
  )

}

export default App;
