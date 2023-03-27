import './Sidebar.css'
import { useState } from 'react'

import {UilSignOutAlt} from "@iconscout/react-unicons"
import React from 'react'

import { Form, Outlet, useNavigate } from 'react-router-dom'
import { SidebarData } from '../../../Data/Data'
import  Logo  from '../../../Photos/admin.png'
import Dashboard from '../Dashboard/Dashboard'
import ManageAccount from '../ManagerAccount/ManageAccount'

const Sidebar= (props)=>{
  const  {data}= props;
  const navigate= useNavigate();
 
    const [selected,setSelected] = useState(0);
  
    return (
        <div className='Sidebar-container' >
    <div  className='Sidebar-glass'>
        <div>
        <div className="Sidebar">
            {/* {logo} */}
            <div className='logo'>
            <img src={Logo} alt="" />
            <span>Admin</span>
            </div>
        </div>

           {/* Menu */}

           <div className="menu">
             {data.map((item,index)=>{
                   return (
                    <div className={selected===index?'menuItem active':'menuItem'}
                    key={index}
                    onClick={()=>{
                      setSelected(index)
                      if(index===0){
                       navigate('/admin/dashBoard')
                      }
                      if(index===1){
                        navigate('/admin/planInspect')
                       }
                       if(index===2){
                        navigate('/admin/stores')
                       }
                      if(index===3){
                        navigate('/admin/manageAccount')
                                              }
                    }}
                    >
                           <item.icon/>
                           <span>{item.heading}</span>
                    </div>
                   )
             })}


             <div className='menuItem'>
                 <UilSignOutAlt/>
             </div>
           </div>
      </div>


        <div className="content">
        <Outlet/>
        </div>
      </div>
      </div>
    )
}
export default Sidebar