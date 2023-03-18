import './Sidebar.css'
import { useState } from 'react'
import Logo from "../../photos/admin.png"
 import { SidebarData } from '../../Data/Data'
import {UilSignOutAlt} from "@iconscout/react-unicons"
import React from 'react'
import MainDash from './Maindash/MainDash'
import StoreInfor from './StoresInfor/StoreInfor'
const Sidebar= ()=>{
    const [selected,setSelected] = useState(0);
    let tab;
    if(selected===0){
        {tab = <MainDash/>}
 }
 if(selected===2){
    tab= <StoreInfor/>
 }
    return (
    <div  className='AppGlass'>
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


{ tab}
     
      </div>
    )
}
export default Sidebar