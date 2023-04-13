import React from "react";
import "./Stores.css";
import AddStore from "./AddStore/AddStore";
import { useFetchUser } from "../../hooks/useFetchUser";
import { RowUsers } from "../tables/user/users";
import { Pagination } from "@mui/material";
import { useState } from "react";
function Stores() {
  const [currentPage, setCurrentPage] = useState(1);
  const [email, setEmail] = useState("");
  const [fullname, setFullName] = useState("");
  const [filter, setFilter] = useState({ fullname, email, page: 1 });
  const { data, pagination, error, loading } = useFetchUser(filter);
  const handleOnChange = (event, value) => {
    setCurrentPage(value);
    setFilter({ fullname: fullname, email: email, page: value });
    // console.log(currentPage);
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
      <div>
        <input
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={handleKeyEnter}
          placeholder="--email--"
        ></input>
        <input
          onChange={(e) => setFullName(e.target.value)}
          onKeyDown={handleKeyEnter}
          placeholder="--fullname--"
        ></input>
        <button onClick={handleOnClick}> Search </button>
        <button> Add </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Company</th>
            <th>TAX</th>
            <th>Type of Business</th>
            <th>email</th>
            <th>status</th>
            <th>role</th>
            <th>action</th>
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
          <Pagination
            count={pagination.totalPages}
            showFirstButton
            showLastButton
            page={currentPage}
            onChange={handleOnChange}
          />
        </>
      )}
    </>
  );
}

export default Stores;
