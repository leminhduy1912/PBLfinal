import React from "react";
import CardsChart from "../../StatsBanner/StatsBanner";
import TableRecentStores from "../TableRecentStores/TableRecentStores";

import "./Dashboard.css";
const Dashboard = () => {
  return (
    <div className="Maindash">
      <h1>Dashboard</h1>
      <CardsChart />
      <TableRecentStores />
    </div>
  );
};
export default Dashboard;
