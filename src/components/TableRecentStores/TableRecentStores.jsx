import React, { useEffect, useState } from "react";

import ReactTable from "react-table";
import "react-table/react-table.css";
import "./TableRecentStores.css";
import { RowUsers } from "../tables/user/users";
import { useFetchUser } from "../../hooks/useFetchUser";

const TableRecentStores = () => {
  const columns = [
    {
      Header: "Name Store",
      accessor: "storeName",
    },
    {
      Header: "Address Store",
      accessor: "storeAddress",
    },
    {
      Header: "Phone Number",
      accessor: "number",
    },
    {
      Header: "Store Description",
      accessor: "description",
    },
    {
      Header: "Kind Of Bussiness",
      accessor: "kindof",
    },
    {
      Header: "Status",
      accessor: "action",
    },
  ];

  const getTdProps = (state, rowInfo, column) => {
    if (!rowInfo) {
      return {};
    }
    return {
      className: rowInfo.original.action === "Active" ? "Active" : "Pause",
    };
  };
  const pageSizeOptions = [6];

  const [users, setUsers] = useState();
  const { data, error, loading } = useFetchUser("");
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
  // <ReactTable
  //   getTdProps={getTdProps}
  //   columns={columns}
  //   data={recentStores}
  //   defaultPageSize={6}
  //   pageSizeOptions={pageSizeOptions}
  // />
};

export default TableRecentStores;
