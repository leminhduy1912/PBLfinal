import React, { useState } from 'react'
import "./Navbar.css"
import Logo from "../../../Photos/logoDanang.jpg"
import { useNavigate } from 'react-router-dom'
function Navbar() {
  const navigate= useNavigate()
  const [selected,setSelected] = useState(0)
  const menuOptions= [{title:"Trang Chủ"},{title:"Giới thiệu"},{title:"Liên hệ"},{title:"Đóng góp ý kiến"}]
  return (
    <div className="nav">
        <div className="logo">
            <img src={Logo} alt="" />
          </div>
        <div className="homePage-options">
          {menuOptions.map ((item,index)=>{
            return(
               <li
               className={selected===index?'active':''}
               key={index}
               onClick={()=>setSelected(index)}
               >{item.title}</li>)
          })}
        </div>
        <div className="btn">
          <button
          onClick={()=>{navigate('/login')}}
          >Log In</button>
          <button>Sign Up</button>
        </div>
      </div>
  )
}

export default Navbar