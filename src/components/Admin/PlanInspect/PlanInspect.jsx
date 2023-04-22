/* eslint-disable jsx-a11y/aria-role */
import React, { useState } from "react";
import "./PlanInspect.css";
import AddPlan from "../../form/AddPlan/AddPlan";
import UpdatePlan from "../../form/UpdatePlan/UpdatePlan";
import { RequireAuth } from "../../../hoc/RequiredAuth";
import { PlanRowElement } from "../../tables";
import { Pagination, TablePagination } from "@mui/material";
import DetailsPlan from "../../form/DetailsPlan/DetailsPlan";
function PlanInspect() {
  const [showModalDetailsPlan, setShowModalDetailsPlan] = useState(false);
  const handleShowMoDalDetailsPlan = (value) => {
    setShowModalDetailsPlan(value);
  };
  const [showModalUpdatePlan, setShowModalUpdatePlan] = useState(false);
  const handleShowModalUpdatePlan = (value) => {
    setShowModalUpdatePlan(value);
  };
  const [showModalAddPlan,setShowModalAddPlan]= useState(false)
  const handleShowModalAddPlan=(value)=>{
   setShowModalAddPlan(value)
  }

  const plans = [
    {
      id: "RaEurAclqGCOy7vCSbuXFjZ",
      createdAt: 1680407431000,
      updatedAt: 1680407431000,
      time: 1699041973000,
      action: 1,
      company: {
        companyId: "-SxF6l_IpKQFWbxJKM2QYb1",
        companyName: "Moore Group",
        action: 1,
      },
    },
    {
      id: "RaEurAclqGCOy7vCSbuXFjZ",
      createdAt: 1680407431000,
      updatedAt: 1680407431000,
      time: 1699041973000,
      action: 1,
      company: {
        companyId: "-SxF6l_IpKQFWbxJKM2QYb1",
        companyName: "Moore Group",
        action: 1,
      },
    },
    {
      id: "RaEurAclqGCOy7vCSbuXFjZ",
      createdAt: 1680407431000,
      updatedAt: 1680407431000,
      time: 1699041973000,
      action: 1,
      company: {
        companyId: "-SxF6l_IpKQFWbxJKM2QYb1",
        companyName: "Moore Group",
        action: 1,
      },
    },
    {
      id: "RaEurAclqGCOy7vCSbuXFjZ",
      createdAt: 1680407431000,
      updatedAt: 1680407431000,
      time: 1699041973000,
      action: 1,
      company: {
        companyId: "-SxF6l_IpKQFWbxJKM2QYb1",
        companyName: "Moore Group",
        action: 1,
      },
    },
    {
      id: "2QUlh6NRY_LSsG_TuR2cBwz",
      createdAt: 1680417327000,
      updatedAt: 1680417327000,
      time: 1699041973000,
      action: 1,
      company: {
        companyId: "gAqA9MeKb3IRVEXJHs7uFpz",
        companyName: "Hoppe ",
        action: 1,
      },
    },
  ];
 

  const handleOnChange = (event, value) => {
    console.log(value);
  };
  return (

    <>
    {showModalDetailsPlan&& <DetailsPlan   handleShowMoDalDetailsPlan={handleShowMoDalDetailsPlan}    />}
    {showModalUpdatePlan&& <UpdatePlan handleShowModalUpdatePlan={handleShowModalUpdatePlan}            />}
    {showModalAddPlan&& <AddPlan   handleShowModalAddPlan={handleShowModalAddPlan}/>}
      <div className="table-wrapper">
        {/* <RequireAuth role="admin"> */}
        <div className="planInspect-header">
          <h1>Plan Management</h1>
          <button
          onClick={()=>{
          setShowModalAddPlan(true)
           
          }}  
          >Add Plan</button>

        </div>
        {/* </RequireAuth> */}
        <table>
          <thead>
            <tr>
              
              <th>Company</th>
              <th>Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {plans.length > 0 &&
              plans.map((plan, index) => {
                return (
                  <PlanRowElement
                    key={index}
                    index={index + 1}
                    {...plan}
                    handleShowModalUpdatePlan={handleShowModalUpdatePlan}
                    handleShowMoDalDetailsPlan={handleShowMoDalDetailsPlan}
                  ></PlanRowElement>
                );
              })}
          </tbody>
        </table>
      </div>
      {/* <TablePagination total={5} /> */}
      <div className="pagination">
      <Pagination
        count={20}
        showFirstButton
        showLastButton
        onChange={handleOnChange}
      />
      </div>
    </>
   
  );
}

export default PlanInspect;
