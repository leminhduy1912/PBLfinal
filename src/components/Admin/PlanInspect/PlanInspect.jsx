/* eslint-disable jsx-a11y/aria-role */
import React, { useState, useEffect, useContext } from "react";
import { Pagination, TablePagination } from "@mui/material";
import "./PlanInspect.css";
import AddPlan from "../../form/AddPlan/AddPlan";
import UpdatePlan from "../../form/UpdatePlan/UpdatePlan";
import { RequireAuth } from "../../../hoc/RequiredAuth";
import { PlanRowElement } from "../../tables";
import DetailsPlan from "../../form/DetailsPlan/DetailsPlan";
import { usePlan } from "../../../hooks/Plan/usePlan";
import { usePlanDetails } from "../../../hooks/Plan/usePlanDetails";
import ReportDocx from "../../form/ReportDocx/ReportDocx";
import ActionSuccess from "../../ActionSuccess/ActionSuccess";
import { useGetSpecific } from "../../../hooks/Plan/useGetSpecificPlan";
import { StoreContext } from "~store";
import AddInspector from "../../form/AddInspector/AddInspector";
function PlanInspect() {
  const [state] = useContext(StoreContext);
  const { dataPlanDetails, loadingPlanDetails, errorPlanDetails } =
    usePlanDetails("RaEurAclqGCOy7vCSbuXFjZ");
  const [showModalAddInspector, setShowModalAddInspector] = useState(false);
  const handleShowModalAddInspectorToPlan = (value) => {
    setShowModalAddInspector(value);
  };
  const [showModalReport, setShowModalReport] = useState(false);
  const handleShowMoDalReport = (value) => {
    setShowModalReport(value);
  };
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
  const { data, error, executeAllPlans } = usePlan();
  const fetchDataPlans = () => {
    executeAllPlans();
  };
  const [messageAction, setMessageAction] = useState("");
  const [showActionSuccess, setShowActionSuccess] = useState(false);
  const handleShowSuccessAction = (message) => {
    setMessageAction(message);
    setShowActionSuccess(true);
    setTimeout(() => {
      setShowActionSuccess(false);
    }, 3000);
  };
  const [time, setTime] = useState(null);
  const [planId, setPlanId] = useState(null);
  const handleSetTimePlan = (time, planId) => {
    setTime(time);
    setPlanId(planId);
  };
  const [detailsPlan, setDetailsPlan] = useState({});

  const {
    dataGetSpecificPlan,
    errorGetSpecificPlan,
    successGetSpecificPlan,
    executeGetSpecificPlan,
  } = useGetSpecific();
  const [isLoaded, setIsLoaded] = useState(false);

  const handleSetPlanId = async (id) => {
    await executeGetSpecificPlan(id, state.id, state.token);
  };
  useEffect(() => {
    if (successGetSpecificPlan) {
      setDetailsPlan(dataGetSpecificPlan);
      setIsLoaded(true);
    }
  }, [dataGetSpecificPlan, successGetSpecificPlan]);
  const handleOnChange = (event, value) => {
    console.log(value);
  };

  return (
    <>
      {state.role === "Admin" && (
        <>
          {showActionSuccess && <ActionSuccess messageAction={messageAction} />}
          {isLoaded && showModalDetailsPlan && (
            <DetailsPlan
              handleShowMoDalDetailsPlan={handleShowMoDalDetailsPlan}
              detailsPlan={detailsPlan}
            />
          )}
          {showModalAddInspector && (
            <AddInspector
              handleShowModalAddInspectorToPlan={
                handleShowModalAddInspectorToPlan
              }
              planId={planId}
              handleShowSuccessAction={handleShowSuccessAction}
            />
          )}
          {showModalReport && (
            <ReportDocx
              handleShowMoDalReport={handleShowMoDalReport}
              planId={planId}
              handleShowSuccessAction={handleShowSuccessAction}
            />
          )}

          {showModalUpdatePlan && (
            <UpdatePlan
              handleShowModalUpdatePlan={handleShowModalUpdatePlan}
              time={time}
              planId={planId}
              fetchDataPlans={fetchDataPlans}
              handleShowSuccessAction={handleShowSuccessAction}
            />
          )}
          {showModalAddPlan && (
            <AddPlan
              handleShowModalAddPlan={handleShowModalAddPlan}
              fetchDataPlans={fetchDataPlans}
              handleShowSuccessAction={handleShowSuccessAction}
            />
          )}
          <div className="table-wrapper">
            {/* <RequireAuth role="admin"> */}
            <div className="planInspect-header">
              <h1>Plan Management</h1>
              <button
                className="btn-add-plan"
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
                  <th>Công ty</th>
                  <th>Thời gian</th>
                  <th>Hành động</th>
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
                        handleShowMoDalReport={handleShowMoDalReport}
                        handleSetTimePlan={handleSetTimePlan}
                        handleShowMoDalDetailsPlan={handleShowMoDalDetailsPlan}
                        handleSetPlanId={handleSetPlanId}
                        fetchDataPlans={fetchDataPlans}
                        handleShowSuccessAction={handleShowSuccessAction}
                        handleShowModalAddInspectorToPlan={
                          handleShowModalAddInspectorToPlan
                        }
                        setPlanId={setPlanId}
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
      )}

      {state.role === "Moderator" && (
        <div className="planInspect-header">
          <h1>Submit Report Result</h1>
          <button
            className="btn-add-plan"
            onClick={() => {
              setShowModalAddPlan(true);
            }}
          >
            Click Here To Submit
          </button>
        </div>
      )}
    </>
  );
}

export default PlanInspect;
