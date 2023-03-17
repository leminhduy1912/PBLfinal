
import './App.css';
import MainDash from './components/Sidebar/Maindash/MainDash';
import { useEffect, useRef, useState } from 'react'
import { Route,Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {UilSignOutAlt} from "@iconscout/react-unicons"
import { SidebarData } from './Data/Data';
import React from 'react'
import Logo from './photos/admin.png'
import Table from './components/Table/Table';
// const Login=()=>{
 
//     return(
//         <div className='Login'>
//           <h1>Login</h1>
//           <input type="text" placeholder='Username'/>
//           <input type="text" placeholder='Password'/>
//           <button>Log In</button>
//           <p>Not a member ? <a
//           >Sign Up</a></p>
//         </div>
//     )
   
// }


// const Sidebar= (props)=>{
//     const [selected,setSelected] = useState(0)
//    let contentCurrent;
//    if(selected===0){
//  contentCurrent= <MainDash/>
//    }
//    const component = [<MainDash/>]
//     return (
//         <div className='AppGlass'>
//         <div>
//         <div className="Sidebar">
//             {/* {logo} */}
//             <div className='logo'>
//             <img src={Logo} alt="" />
//             <span>{props.name}</span>
//             </div>
//         </div>

//            {/* Menu */}

//            <div className="menu">
//              {SidebarData.map((item,index)=>{
//                    return (
//                     <div className={selected===index?'menuItem active':'menuItem'}
//                     key={index}
//                     onClick={()=>{setSelected(index)
//                     }}
//                     >
//                            <item.icon/>
//                            <span>{item.heading}</span>
//                     </div>
//                    )
//              })}
//              <div className='menuItem'>
//                  <UilSignOutAlt/>
//              </div>
//            </div>
//       </div>
//      {/* < MainDash/> */}
//      <div>{contentCurrent}</div>;
//       </div>
//     )
// }

function App() {
  
 return (
  <div className='App'>
    <a href='/'>click</a>
  <Routes>
  <Route path='/' element={Table}/>
  </Routes>

   </div>
  
 )
}

export default App;
