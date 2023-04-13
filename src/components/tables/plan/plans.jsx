/* eslint-disable jsx-a11y/aria-role */
import { DateConvert } from "../../../utils/DateConvert";
import "./plans.css";
import { RequireAuth } from "./../../../hoc/RequiredAuth";
const getInfo = (props) => {
  console.log(props);
};
export const PlanRowElement = (props) => {
  return (
    <>
      <tr>
        <td style={{ textAlign: "center", padding: 0 }}>
          {props.index}
          <input value={props.id} disabled></input>
        </td>
        <td>{props.company.companyName}</td>
        <td>{DateConvert(props.time)}</td>
        <td className="td-button" style={{ overflow: "hidden" }}>
          {/* <RequireAuth role="admin"> */}
          <button onClick={() => getInfo(props)}>Details</button>
          <button>Update</button>
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
