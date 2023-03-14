import './Sidebar.css'
import { useState } from 'react'
import Logo from "../../photos/admin.png"
 import { SidebarData } from '../../Data/Data'
import {UilSignOutAlt} from "@iconscout/react-unicons"
import React from 'react'
const Sidebar= ()=>{
    const [selected,setSelected] = useState(0)
    return (
        
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
             {SidebarData.map((item,index)=>{
                   return (
                    <div className={selected===index?'menuItem active':'menuItem'}
                    key={index}
                    onClick={()=>setSelected(index)}
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
 
    )
}
export default Sidebar