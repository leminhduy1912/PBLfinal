import React, {  useState } from "react";
import "./TableRecentStores.css";
import { RowUsers } from "../tables/user/users";
import { useFetchUser } from "../../hooks/User/useFetchUser";
import DetailsStores from "../Stores/DetailsStores/DetailsStores";
import UpdateStore from "../Stores/UpdateStore/UpdateStore";
import DetailsUser from "../Stores/DetailsUser/DetailsUser";
import UpdateUser from "../Stores/UpdateUser/UpdateUser";
import ActionSuccess from "../ActionSuccess/ActionSuccess";
const TableRecentStores = () => {
  //  const { data, pagination, error, loading } = useFetchUser("");



   const [email, setEmail] = useState("");
   const [fullname, setFullName] = useState("");
   const [filter, setFilter] = useState({ fullname, email, page: 1 });
   const { data, pagination, error, loading, executeDataUser } =
     useFetchUser(filter);
 
   const fetchDataUser = async () => {
     setFilter({ email: "", fullname: "", page: 1 });
     await executeDataUser(filter);
   };
   const [actionPerform,setActionPerform]= useState(false)

  const handleShowActionPerform=()=>{

    setActionPerform(true)
    setTimeout(()=>{
      setActionPerform(false)
    },3000)
  }





   const [showModalDetailsUser,setShowModalDetailsUser]= useState(false)
   const handleShowUsersDetails=(value)=>{
    setShowModalDetailsUser(value)
   }
   const [showModalUserStoreDetails,setShowModalUserStoreDetails]= useState(false)
   const handleShowUserStoreDetails=(value)=>{
     setShowModalUserStoreDetails(value)
    }
    const [showModalUpdateUser,setShowModalUpdateUser]= useState(false)
    const handleShowUserUpdate=(value)=>{
     setShowModalUpdateUser(value)
    }
    const [showModalUpdateUserStore,setShowModalUpdateUserStore]= useState(false)
    const handleShowUserUpdateStore=(value)=>{
     setShowModalUpdateUserStore(value)
    }

   const [formDataUser,setFormDataUser]= useState( {
    action:'',
    email:'',
    fullName:'',
    id:'',
    nationalId:'',
    userNumber:'',
    roleId:'',
   })
   const handleSetFormDataUser=(newObj)=>{
   setFormDataUser(newObj)
   }
// console.log(formDataUser
// );
   const [formDataUserStore,setFormDataUserStore]= useState( {
    action:'',
    businessId:'',
    companyId:'',
    companyName:'',
    email:'',
    faxNumber:'',
    fullName:'',
    id:'',
    phoneNumber:'',
    nationalId:'',
    userNumber:'',
    roleId:'',
    taxIndentity:'',
  
   })
   const handleSetFormDataUserStore=(newObj)=>{
    setFormDataUserStore(newObj)
   }
 
// console.log(formDataUserStore);
  return (
    <>
    {actionPerform&& <ActionSuccess/>}
  {showModalUserStoreDetails&&
  <DetailsStores     
  handleShowUserStoreDetails={handleShowUserStoreDetails} 
  formDataUserStore={formDataUserStore}
  />}

  {showModalDetailsUser&& 
  <DetailsUser 
  handleShowUsersDetails={handleShowUsersDetails} 
  formDataUser={formDataUser}
  />}


  {showModalUpdateUser&& 
  <UpdateUser 
  handleShowUserUpdate={handleShowUserUpdate}
  formDataUser={formDataUser}
  />}

  {showModalUpdateUserStore &&
   <UpdateStore
   handleShowUserUpdateStore={handleShowUserUpdateStore}
   formDataUserStore={formDataUserStore}
   />}
    <div className="TableRecentStore">
      <h1>Recent Users</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Company</th>
            <th>TAX</th>
            <th>Type of Business</th>
            <th>Email</th>
            <th>Status</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(data) &&
            data.map((item, index) => {
              return <RowUsers 
              key={index} 
              index={index + 1} 
              {...item} 
              handleShowUsersDetails={handleShowUsersDetails}
              handleShowUserUpdate={handleShowUserUpdate}
              handleShowUserStoreDetails={handleShowUserStoreDetails}
              formDataUser={formDataUser}
              handleSetFormDataUser={handleSetFormDataUser}
              formDataUserStore={formDataUserStore}
              handleSetFormDataUserStore={handleSetFormDataUserStore}
              handleShowUserUpdateStore={handleShowUserUpdateStore}
              fetchDataUser={fetchDataUser}
              handleShowActionPerform={handleShowActionPerform}
              />;
            })}
        </tbody>
      </table>
      {loading && <div>Loading...</div>}
    </div>
    </>
  );
};

export default TableRecentStores;
