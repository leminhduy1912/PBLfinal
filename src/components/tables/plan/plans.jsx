/* eslint-disable jsx-a11y/aria-role */
import { DateConvert } from "../../../utils/DateConvert";
import "./plans.css";
import { RequireAuth } from "./../../../hoc/RequiredAuth";

import { usePlanDetails } from '../../../hooks/Plan/usePlanDetails';
export const PlanRowElement = (props) => {

  const handleShowDetailsPlan=async()=>{
await props.handleShowMoDalDetailsPlan(true)
await props.handleSetPlanId(props.id)

  }
  const handleShowReport = () => {
    console.log(props.handleShowMoDalReport(true));
    // props.handleShowMoDalReport(true);
  };
  const hanldeEditTime = () => {
    props.handleShowModalUpdatePlan(true);
    props.handleSetTimePlan(props.time,props.id)
  
  };
  return (
    <>
      <tr>
        <td style={{ textAlign: "center", padding: 0,width:50 }}>{props.index}</td>
        <td>{props.company.companyName}</td>
        <td>{DateConvert(props.time)}</td>
        <td className="td-button" style={{ overflow: "hidden" }}>
          {/* <RequireAuth role="admin"> */}
          <button onClick={handleShowReport}>Report</button>
          <button onClick={handleShowDetailsPlan}>Details</button>
          <button onClick={hanldeEditTime}>Edit Time</button>
          <button>Cancel</button>
          {/* </RequireAuth> */}
          {/* <RequireAuth role="moderator"> */}
          <button>Add Inspector</button>
          {/* </RequireAuth> */}
        </td>
      </tr>
    </>
  );
};
