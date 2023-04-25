import React, { useEffect, useState } from "react";
import "./TableRecentStores.css";
import { RowUsers } from "../tables/user/users";
import { useFetchUser } from "../../hooks/useFetchUser";
import DetailsStores from "../Stores/DetailsStores/DetailsStores";
import UpdateStore from "../Stores/UpdateStore/UpdateStore";
import { useFetchCertificate} from "../../hooks/useFetchCertificate";
import {useFetchBusinessType } from "../../hooks/useFetchBusinessType"
import DetailsUser from "../Stores/DetailsUser/DetailsUser";
import UpdateUser from "../Stores/UpdateUser/UpdateUser";
const TableRecentStores = () => {
   const { data, pagination, error, loading } = useFetchUser("");

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
console.log(formDataUser
);
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
