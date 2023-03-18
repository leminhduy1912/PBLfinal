
import { useEffect, useRef, useState } from 'react'
import {UilSignOutAlt} from "@iconscout/react-unicons"
import { SidebarData } from './Data/Data';
import React from 'react'
import MainDash from './components/Sidebar/Maindash/MainDash';
import Login from './components/Login/Login';
import './App.css';

import {
  BrowserRouter,
  Switch,
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
     <Switch>
      <Route exact path='/' > <Login/> </Route>
      <Route path='/adminDashboard'> <Sidebar/></Route>
     </Switch>
 
  </div>
  </BrowserRouter>
  )

}

export default App;
