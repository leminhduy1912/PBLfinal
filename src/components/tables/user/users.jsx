import "./users.css";
export const RowUsers = (props) => {
// console.log(props.handleShowUsersDetails);
  // const {handleShowUsersDetails}= {props}
  // const handleShowUsersDetails=()=>{

  // }
  
  const handleShowUsersDetail=()=>{
    props.handleShowUsersDetails(true)
    
  }
  const handleShowUserUpdate=()=>{
     props.handleShowUserUpdate(true)
    
    
  }


  return (
    
      <tr className="user-table-row">
        <td>{props.index}</td>
        <td>{props.companyName ?? "null"}</td>
        <td>{props.taxIndentity ?? "null"}</td>
        <td>{props.businessId ?? "null"}</td>
        <td>{props.email}</td>
        <td>{props.action === 1 ? "Active" : "Inactive"}</td>
        <td>{props.role.roleName ?? ""}</td>
        <td className="td-button">
          <button onClick={handleShowUsersDetail}>Details</button>
          <button onClick={handleShowUserUpdate}>Update</button>
          <button>Inactive</button>
        </td>
      </tr>
    
  );
};
