import "./users.css";
import { useFetchBusinessType } from "../../../hooks/useFetchBusinessType";
export const RowUsers = (props) => {
  // console.log(props.formDataUserStore);
  const {dataBusinessType,errorBusinessType,loadingBusinessType}= useFetchBusinessType();
  // console.log(props.index);

  let nameBusinessType="";
for ( let i=0;i<dataBusinessType.length;i++){

  if ( props.businessId && props.businessId===dataBusinessType[i].businessId){
  nameBusinessType=dataBusinessType[i].typeName
  }}

  let Object;
  if (props.role.roleCode ==="MOD"){
    Object={
      ...props.formDataUser,
      fullName:props.fullName,
      id:props.id,
      email:props.email,
      action: props.action,
      nationalId:props.nationalId,
      userNumber:props.userNumber,
      roleId:props.role.roleId
    }
  }

  if (props.role.roleCode ==="STR"){
    Object={
      ...props.formDataUserStore,
        action:props.action,
        businessId:props.businessId,
        companyId:props.companyId,
        companyName:props.companyName,
        email:props.email,
        faxNumber:props.faxNumber,
        fullName:props.fullName,
        id:props.id,
        phoneNumber:props.phoneNumber,
        nationalId:props.nationalId,
        userNumber:props.userNumber,
        roleId:props.role.roleId,
        taxIndentity:props.taxIndentity,
    }
  }
  
  const handleShowUsersDetail=()=>{
  
 
    if (props.role.roleCode ==="MOD"){
      props.handleShowUsersDetails(true)
      props.handleSetFormDataUser(Object)
    }

    if (props.role.roleCode ==="STR"){
      props.handleShowUserStoreDetails(true)
      props.handleSetFormDataUserStore(Object)
    }
  }

  const handleShowUserUpdate=()=>{
    if (props.role.roleCode ==="MOD"){
      props.handleShowUserUpdate(true)
     
      props.handleSetFormDataUser(Object)
    }
    if (props.role.roleCode ==="STR"){
      props.handleShowUserUpdateStore(true)
     
      props.handleSetFormDataUserStore(Object)
    }
    
  }


  return (
    
      <tr className="user-table-row">
        <td>{props.index}</td>
        <td>{props.companyName ?? "null"}</td>
        <td>{props.taxIndentity ?? "null"}</td>
        <td>
          {nameBusinessType}
            {/* <option value="">{props.businessId ?? "null"}</option> */}
         
        </td>
        <td>{props.email}</td>
        <td>{props.action === 1 ? "Active" : "Inactive"}</td>
        <td>{props.role.roleName ?? ""}</td>
        <td >
          <button onClick={handleShowUsersDetail} className="btn">Details</button>
          <button onClick={handleShowUserUpdate} className="btn">Update</button>
          <button>Inactive</button>
        </td>
      </tr>
    
  );
};
