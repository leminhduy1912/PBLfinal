/* eslint-disable jsx-a11y/aria-role */
import React, { useState } from "react";
import "./PlanInspect.css";
import AddPlan from "./AddPlan/AddPlan";
import UpdatePlan from "./UpdatePlan/UpdatePlan";
import { RequireAuth } from "../../../hoc/RequiredAuth";
import { PlanRowElement } from "../../tables";
import { Pagination, TablePagination } from "@mui/material";
function PlanInspect() {
  const [showModalAddPlan, setShowModalAddPlan] = useState(false);
  const handleShowMoDalAddPlan = (value) => {
    setShowModalAddPlan(value);
    console.log("A");
  };
  const [showModalUpdatePlan, setShowModalUpdatePlan] = useState(false);
  const handleShowModalUpdatePlan = (value) => {
    setShowModalUpdatePlan(value);
  };

  const plans = [
    {
      id: "RaEurAclqGCOy7vCSbuXFjZ",
      createdAt: 1680407431000,
      updatedAt: 1680407431000,
      time: 1699041973000,
      action: 1,
      company: {
        companyId: "-SxF6l_IpKQFWbxJKM2QYb1",
        companyName: "Moore Group",
        action: 1,
      },
    },
    {
      id: "RaEurAclqGCOy7vCSbuXFjZ",
      createdAt: 1680407431000,
      updatedAt: 1680407431000,
      time: 1699041973000,
      action: 1,
      company: {
        companyId: "-SxF6l_IpKQFWbxJKM2QYb1",
        companyName: "Moore Group",
        action: 1,
      },
    },
    {
      id: "RaEurAclqGCOy7vCSbuXFjZ",
      createdAt: 1680407431000,
      updatedAt: 1680407431000,
      time: 1699041973000,
      action: 1,
      company: {
        companyId: "-SxF6l_IpKQFWbxJKM2QYb1",
        companyName: "Moore Group",
        action: 1,
      },
    },
    {
      id: "RaEurAclqGCOy7vCSbuXFjZ",
      createdAt: 1680407431000,
      updatedAt: 1680407431000,
      time: 1699041973000,
      action: 1,
      company: {
        companyId: "-SxF6l_IpKQFWbxJKM2QYb1",
        companyName: "Moore Group",
        action: 1,
      },
    },
    {
      id: "2QUlh6NRY_LSsG_TuR2cBwz",
      createdAt: 1680417327000,
      updatedAt: 1680417327000,
      time: 1699041973000,
      action: 1,
      company: {
        companyId: "gAqA9MeKb3IRVEXJHs7uFpz",
        companyName: "Hoppe LLC",
        action: 1,
      },
    },
  ];
  const columns = [
    {
      Header: "Name Store",
      accessor: "nameStore",
    },
    {
      Header: "Address Store",
      accessor: "addressStore",
    },
    {
      Header: "Time Test",
      accessor: "time",
    },
    {
      Header: "Auditor",
      accessor: "auditor",
    },
    {
      Header: "Test Reason",
      accessor: "testReason",
    },
    {
      Header: "Status",
      accessor: "status",
    },
    {
      Header: "Action",
      Cell: (row) => (
        <button onClick={() => handleShowModalUpdatePlan(true)}>Update</button>
      ),
    },
  ];
  // const getTdProps = (state, rowInfo, column) => {
  //   if (!rowInfo) {
  //     return {};
  //   }
  //   return {
  //     className:
  //       rowInfo.original.status === "Qualified" ? "Qualified" : "Unqualified",
  //   };
  // };
  // const pageSizeOptions = [10];
  const handleOnChange = (event, value) => {
    console.log(value);
  };
  return (
    // <div className="PlanInspect">
    //   {showModalAddPlan && (
    //     <AddPlan statusHideModalAddPlan={handleShowMoDalAddPlan} />
    //   )}
    //   {showModalUpdatePlan && (
    //     <UpdatePlan statusHideModalUpdatePlan={handleShowModalUpdatePlan} />
    //   )}
    //   <div className="PlanInspect-header">
    //     <h1>Plan Management</h1>
    //     <RequireAuth role={"admin"}>
    //       <button onClick={() => handleShowMoDalAddPlan(true)}>Add Plan</button>
    //     </RequireAuth>
    //   </div>

    //  <ReactTable
    //   getTdProps={getTdProps}
    //   data={data}
    //   columns={columns}
    //   defaultPageSize={9}
    //   pageSizeOptions={pageSizeOptions}
    // />
    <>
      <div className="table-wrapper">
        <RequireAuth role="admin">
          <button>Add Plan</button>
        </RequireAuth>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Company</th>
              <th>Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {plans.length > 0 &&
              plans.map((plan, index) => {
                return (
                  <PlanRowElement
                    key={index}
                    index={index + 1}
                    {...plan}
                  ></PlanRowElement>
                );
              })}
          </tbody>
        </table>
      </div>
      {/* <TablePagination total={5} /> */}
      <Pagination
        count={20}
        showFirstButton
        showLastButton
        onChange={handleOnChange}
      />
    </>
    // </div>
  );
}

export default PlanInspect;
