import React, { useState } from "react";
import "./TableRecentStores.css";
import { RowUsers } from "../tables/user/users";
import { useFetchUser } from "../../hooks/useFetchUser";
import DetailsStores from "../Stores/DetailsStores/DetailsStores";
import UpdateStore from "../Stores/UpdateStore/UpdateStore";
import { useFetchCertificate } from "../../hooks/useFetchCertificate";
const TableRecentStores = () => {
   const { data, pagination, error, loading } = useFetchUser("");
  // const {data,error,loading}= useFetchCertificate()
   const [showModalDetailsUser,setShowModalDetailsUser]= useState(false)
   const handleShowUsersDetails=(value)=>{
    setShowModalDetailsUser(value)
   }
   const [showModalUpdateUser,setShowModalUpdateUser]= useState(false)
   const handleShowUserUpdate=(value)=>{
    setShowModalUpdateUser(value)
   }
  
  return (
    <>
  {showModalDetailsUser&&<DetailsStores     handleShowUsersDetails={handleShowUsersDetails} />}
  {showModalUpdateUser&& <UpdateStore handleShowUserUpdate={handleShowUserUpdate}/>}
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
