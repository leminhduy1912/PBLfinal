import TableRecentStores from "../../components/TableRecentStores/TableRecentStores";
import StatsBanner from "./../../components/StatsBanner/StatsBanner";
import "./Admin.css";
export const Admin = () => {
  return (
    <div className="Maindash">
      <h1>Dashboard</h1>
      <StatsBanner />
      <TableRecentStores />
    </div>
  );
};
