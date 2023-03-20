import Home from "./Home/Home"
import React, { useState } from 'react'
import Navbar from './Navbar/Navbar'
import "./HomePage.css"
const HomePage = () => {
  return (
    <div className="homePage-container">
   <Navbar/>
   <Home/>
   </div>
  )
}

export default HomePage