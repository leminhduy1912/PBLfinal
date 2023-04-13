import React from "react";
import "./TableRecentStores.css";
import { RowUsers } from "../tables/user/users";
import { useFetchUser } from "../../hooks/useFetchUser";
const TableRecentStores = () => {
  const { data, pagination, error, loading } = useFetchUser("");
  // console.log(pagination);
  return (
    <div>
      <h1>Recent Stores</h1>
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
              return <RowUsers key={index} index={index + 1} {...item} />;
            })}
        </tbody>
      </table>
      {loading && <div>Loading...</div>}
    </div>
  );
};

export default TableRecentStores;
