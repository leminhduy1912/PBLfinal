import { useContext } from "react";
import TableRecentStores from "../../components/TableRecentStores/TableRecentStores";
import StatsBanner from "./../../components/StatsBanner/StatsBanner";
import "./Admin.css";
import { StoreContext } from "~store";
import { motion } from "framer-motion";
export const Admin = () => {
  const [state] = useContext(StoreContext);
  return (
    <motion.div
      className="Maindash"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {state.role === "Admin" && (
        <>
          <h1>Dashboard</h1> <StatsBanner />
        </>
      )}
      <TableRecentStores />
    </motion.div>
  );
};
