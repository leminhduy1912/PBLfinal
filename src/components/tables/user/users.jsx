import "./users.css";
export const RowUsers = (props) => {
  const test = () => {};
  return (
    <>
      <tr className="user-table-row">
        <td>{props.index}</td>
        <td>{props.companyName ?? "null"}</td>
        <td>{props.taxIndentity ?? "null"}</td>
        <td>{props.businessId ?? "null"}</td>
        <td>{props.email}</td>
        <td>{props.action === 1 ? "Active" : "Inactive"}</td>
        <td>{props.role.roleName ?? ""}</td>
        <td className="td-button">
          <button onClick={() => test()}>Details</button>
          <button>Update</button>
          <button>Inactive</button>
        </td>
      </tr>
    </>
  );
};
