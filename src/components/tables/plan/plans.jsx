/* eslint-disable jsx-a11y/aria-role */
import { DateConvert } from "../../../utils/DateConvert";
import "./plans.css";
import { RequireAuth } from "./../../../hoc/RequiredAuth";
const getInfo = (props) => {
  console.log(props);
};
export const PlanRowElement = (props) => {
  const handleDetails = () => {
    props.handleShowMoDalDetailsPlan(true);
  };
  const hanldeUpdate = () => {
    props.handleShowModalUpdatePlan(true);
    console.log("a");
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
          <button>Report</button>
          {/* </RequireAuth> */}
        </td>
      </tr>
    </>
  );
};
