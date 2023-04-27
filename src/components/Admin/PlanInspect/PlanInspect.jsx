/* eslint-disable jsx-a11y/aria-role */
import React, { useState } from "react";
import { Pagination, TablePagination } from "@mui/material";
import "./PlanInspect.css";
import AddPlan from "../../form/AddPlan/AddPlan";
import UpdatePlan from "../../form/UpdatePlan/UpdatePlan";
import { RequireAuth } from "../../../hoc/RequiredAuth";
import { PlanRowElement } from "../../tables";
import DetailsPlan from "../../form/DetailsPlan/DetailsPlan";
import { usePlan } from "../../../hooks/usePlan";
import { usePlanDetails } from "../../../hooks/usePlanDetails";
function PlanInspect() {
  const {dataPlanDetails,loadingPlanDetails,errorPlanDetails}= usePlanDetails("RaEurAclqGCOy7vCSbuXFjZ");
console.log(dataPlanDetails);
  const [showModalDetailsPlan, setShowModalDetailsPlan] = useState(false);
  const handleShowMoDalDetailsPlan = (value) => {
    setShowModalDetailsPlan(value);
  };
  const [showModalUpdatePlan, setShowModalUpdatePlan] = useState(false);
  const handleShowModalUpdatePlan = (value) => {
    setShowModalUpdatePlan(value);
  };
  const [showModalAddPlan, setShowModalAddPlan] = useState(false);
  const handleShowModalAddPlan = (value) => {
    setShowModalAddPlan(value);
  };
const {data,loading,error}= usePlan();
console.log(data);
  

  const handleOnChange = (event, value) => {
    console.log(value);
  };
  return (
    <>
      {showModalDetailsPlan && (
        <DetailsPlan handleShowMoDalDetailsPlan={handleShowMoDalDetailsPlan} />
      )}
      {showModalUpdatePlan && (
        <UpdatePlan handleShowModalUpdatePlan={handleShowModalUpdatePlan} />
      )}
      {showModalAddPlan && (
        <AddPlan handleShowModalAddPlan={handleShowModalAddPlan} />
      )}
      <div className="table-wrapper">
        {/* <RequireAuth role="admin"> */}
        <div className="planInspect-header">
          <h1>Plan Management</h1>
          <button
            onClick={() => {
              setShowModalAddPlan(true);
            }}
          >
            Add Plan
          </button>
        </div>
    
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Company</th>
              <th>Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 &&
              data.map((item, index) => {
                return (
                  <PlanRowElement
                    key={index}
                    index={index + 1}
                    {...item}
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
