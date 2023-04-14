import React from "react";
import "./TableRecentStores.css";
import { RowUsers } from "../tables/user/users";
import { useFetchUser } from "../../hooks/useFetchUser";
const TableRecentStores = () => {
  const { data, pagination, error, loading } = useFetchUser("");
  // console.log(pagination);
  return (
    <div className="TableRecentStore">
      <h1>Recent Stores</h1>
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
              return <RowUsers key={index} index={index + 1} {...item} classname/>;
            })}
        </tbody>
      </table>
      {loading && <div>Loading...</div>}
    </div>
  );
};

export default TableRecentStores;
