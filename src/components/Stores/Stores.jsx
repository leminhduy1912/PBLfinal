import React, { useEffect } from "react";
import "./Stores.css";
import { Search, SearchOutlined } from "@mui/icons-material";
import AddStore from "./AddStore/AddStore";
import { useFetchUser } from "../../hooks/useFetchUser";
import { RowUsers } from "../tables/user/users";
import { Pagination } from "@mui/material";
import { useState } from "react";
import DetailsStores from "./DetailsStores/DetailsStores";
import UpdateStore from "./UpdateStore/UpdateStore";
import AddAccount from "../form/AddAccount/AddAccount";
import DetailsUser from "./DetailsUser/DetailsUser";
import UpdateUser from "./UpdateUser/UpdateUser";
import AddCompany from "./AddCompany/AddCompany";
function Stores() {
  // Details
  const [showModalUsersDetails, setShowModalUsersDetails] = useState(false);
  const handleShowUsersDetails = (value) => {
    setShowModalUsersDetails(value);
  };
  const [formDataUser, setFormDataUser] = useState({
    action: "",
    email: "",
    fullName: "",
    id: "",
    nationalId: "",
    userNumber: "",
    roleId: "",
  });
  const handleSetFormDataUser = (newObj) => {
    setFormDataUser(newObj);
  };

  const [showModalUserDetailsStore, setShowModalUserDetailsStore] =
    useState(false);
  const handleShowUserStoreDetails = (value) => {
    setShowModalUserDetailsStore(value);
  };
  const [formDataUserStore, setFormDataUserStore] = useState({
    action: "",
    businessId: "",
    companyId: "",
    companyName: "",
    email: "",
    faxNumber: "",
    fullName: "",
    id: "",
    phoneNumber: "",
    nationalId: "",
    userNumber: "",
    roleId: "",
    taxIndentity: "",
  });
  const handleSetFormDataUserStore = (newObj) => {
    setFormDataUserStore(newObj);
  };

  //  Update
  const [showModalUsersUpdate, setShowModalUsersUpdate] = useState(false);
  const handleShowUserUpdate = (value) => {
    setShowModalUsersUpdate(value);
  };

  const [showModalUpdateUserStore, setShowModalUpdateUserStore] =
    useState(false);
  const handleShowUserUpdateStore = (value) => {
    setShowModalUpdateUserStore(value);
  };

  const [showModalAddUser, setShowModalAddUser] = useState(false);
  const handleShowModalAddUser = () => {
    setShowModalAddUser(false);
  };
  const [showModalAddCompany, setShowModalAddCompany] = useState(false);
  const handleShowModalAddCompany = (value) => {
    setShowModalAddCompany(value);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [email, setEmail] = useState("");
  const [fullname, setFullName] = useState("");
  const [filter, setFilter] = useState({ fullname, email, page: 1 });
  const { data, pagination, error, loading, executeDataUser } =
    useFetchUser(filter);

  const fetchDataUser = async () => {
    setFilter({ email: "", fullname: "", page: 1 });
    await executeDataUser(filter);
  };

  const handleOnChange = (event, value) => {
    setCurrentPage(value);
    setFilter({ fullname: fullname, email: email, page: value });
  };
  const handleOnClick = () => {
    setFilter({ fullname: fullname, email: email, page: currentPage });
    setEmail("");
    setFullName("");
  };
  const handleKeyEnter = (event) => {
    if (event.key === "Enter")
      setFilter({ fullname: fullname, email: email, page: currentPage });
  };

  return (
    <>
      {showModalUsersDetails && (
        <DetailsUser
          formDataUser={formDataUser}
          handleShowUsersDetails={handleShowUsersDetails}
        />
      )}

      {showModalUserDetailsStore && (
        <DetailsStores
          formDataUserStore={formDataUserStore}
          handleShowUserStoreDetails={handleShowUserStoreDetails}
        />
      )}

      {showModalUsersUpdate && (
        <UpdateUser
          handleShowUserUpdate={handleShowUserUpdate}
          formDataUser={formDataUser}
        />
      )}

      {showModalUpdateUserStore && (
        <UpdateStore
          formDataUserStore={formDataUserStore}
          handleShowUserUpdateStore={handleShowUserUpdateStore}
        />
      )}

      {showModalAddUser && (
        <AddAccount
          handleShowModalAddUser={handleShowModalAddUser}
          fetchDataUser={fetchDataUser}
          setShowModalAddUser={setShowModalAddUser}
        />
      )}
      {showModalAddCompany && (
        <AddCompany
          handleShowModalAddCompany={handleShowModalAddCompany}
          fetchDataUser={fetchDataUser}
        />
      )}
      <div className="header-users">
        <div className="searching">
          <span>
            <SearchOutlined />
          </span>
          <input
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={handleKeyEnter}
            placeholder="Enter Email"
          ></input>
          <input
            onChange={(e) => setFullName(e.target.value)}
            onKeyDown={handleKeyEnter}
            placeholder="Enter FullName"
          ></input>
          <button onClick={handleOnClick}> Search </button>
        </div>
        <div className="btn-area">
          <button
            className="btn"
            onClick={() => {
              setShowModalAddUser(true);
            }}
          >
            {" "}
            Add User
          </button>
          <button
            className="btn"
            onClick={() => {
              setShowModalAddCompany(true);
            }}
          >
            {" "}
            Add Company
          </button>
        </div>
      </div>
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
              return (
                <RowUsers
                  key={index}
                  index={index + 1 + (currentPage - 1) * 8}
                  {...item}
                  handleShowUsersDetails={handleShowUsersDetails}
                  formDataUser={formDataUser}
                  handleSetFormDataUser={handleSetFormDataUser}
                  handleShowUserStoreDetails={handleShowUserStoreDetails}
                  formDataUserStore={formDataUserStore}
                  handleSetFormDataUserStore={handleSetFormDataUserStore}
                  handleShowUserUpdate={handleShowUserUpdate}
                  handleShowUserUpdateStore={handleShowUserUpdateStore}
                />
              );
            })}
        </tbody>
      </table>
      {loading && <> Loading...</>}
      {!(
        data &&
        Object.keys(data).length === 0 &&
        Object.getPrototypeOf(data) === Object.prototype
      ) && (
        <>
          <br />
          <div className="pagination">
            <Pagination
              count={pagination.totalPages}
              showFirstButton
              showLastButton
              page={currentPage}
              onChange={handleOnChange}
            />
          </div>
        </>
      )}
    </>
  );
}

export default Stores;
