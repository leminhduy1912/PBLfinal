/* eslint-disable jsx-a11y/aria-role */
import { DateConvert } from "../../../utils/DateConvert";
import "./plans.css";
import { RequireAuth } from "./../../../hoc/RequiredAuth";

import { usePlanDetails } from '../../../hooks/Plan/usePlanDetails';
export const PlanRowElement = (props) => {
// const {data,loading,error}= usePlanDetails("RaEurAclqGCOy7vCSbuXFjZ");
// console.log(data);
  const handleDetails = () => {
    props.handleShowMoDalDetailsPlan(true);
  };
  const hanldeUpdate = () => {
    props.handleShowModalUpdatePlan(true);
 
  };
  return (
    <>
      <tr>
        <td style={{ textAlign: "center", padding: 0 }}>{props.index}</td>
        <td>{props.company.companyName}</td>
        <td>{DateConvert(props.time)}</td>
        <td className="td-button" style={{ overflow: "hidden" }}>
          {/* <RequireAuth role="admin"> */}
          <button onClick={handleDetails}>Details</button>
          <button onClick={hanldeUpdate}>Update</button>
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
