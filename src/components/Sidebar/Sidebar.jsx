/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import "./Sidebar.css";
import { useRef, useState } from "react";

import { UilSignOutAlt } from "@iconscout/react-unicons";

import { Form, Outlet, useNavigate } from "react-router-dom";
import { SidebarData } from "../../Data/Data";
import Logo from "../../asset/admin.png";
import Dashboard from "../Admin/Dashboard/Dashboard";
import ManageAccount from "../Admin/ManagerAccount/ManageAccount";
import { Admin } from "../../pages/admin/Admin";
import PlanInspect from "../Admin/PlanInspect/PlanInspect"
import Stores from "../Stores/Stores"
const Sidebar = (props) => {
  const { data, role } = props;
  const navigate = useNavigate();
  const [selected, setSelected] = useState(0);
  let tab;
  if (selected===0){
    tab= <Admin/>
  }
  if (selected===1){
    tab= <PlanInspect/>
  }
  if (selected===2){
    tab= <Stores/>
  }
  if (selected===3){
    tab= <ManageAccount/>
  }

  return (
    
   
    <div className="Sidebar-container">
     
      <div className="Sidebar-glass">
        <div>
          <div className="Sidebar">
            <div className="logo">
              <img src={Logo} alt="" />
              <span>{role}</span>
            </div>
          </div>

          {/* Menu */}

          <div className="menu">
            {data.map((item, index) => {
              return (
                <div
                  className={
                    selected === index ? "menuItem active" : "menuItem"
                  }
                  key={index}
                  onClick={() => {
                    setSelected(index);
                    // if (index === 0) {
                    //   tab = <Admin/>
                    //  {console.log(tab);}
                    // }
                    // if (index === 1) {
                    //   navigate("/admin/planInspect");
                    // }
                    // if (index === 2) {
                    //   navigate("/admin/stores");
                    // }
                    // if (index === 3) {
                    //   navigate("/admin/manageAccount");
                    // }
                    // if (index === 4) {
                    //   navigate("/admin/inforSelf");
                    // }
                  }}
                >
                  <item.icon />
                  <span>{item.heading}</span>
                </div>
              );
            })}

            <div className="menuItem">
              <UilSignOutAlt />
            </div>
          </div>
        </div>

        <div className="content">
        {tab}
        </div>
      </div>
    </div>
    
  );
};
export default Sidebar;
