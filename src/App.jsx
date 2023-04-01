/* eslint-disable jsx-a11y/aria-role */


import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import Login from "./Component/Login/Login";
// import Sidebar from "./Component/Admin/Sidebar/Sidebar";
// import Dashboard from "./Component/Admin/Dashboard/Dashboard";
// import Loading from "./Component/Loading/Loading";
// import HomePage from "./Component/HomePage/HomePage";
// import ManageAccount from "./Component/Admin/ManagerAccount/ManageAccount";
// import AccountUpdate from "./Component/Admin/ManagerAccount/AccountUpdate/AccountUpdate";
// import PlanInspect from "./Component/Admin/PlanInspect/PlanInspect";
// import Stores from "./Component/Admin/Stores/Stores";
// import UpdateStore from "./Component/Admin/Stores/UpdateStore/UpdateStore";
// import InforSelf from "./Component/Admin/InforSelf/InforSelf";
// import AddStore from "./Component/Admin/Stores/AddStore/AddStore";
// import AddAccount from "./Component/Admin/ManagerAccount/AddAccount/AddAccount";
// import CompanyRegister from "./Component/CompanyRegister/CompanyRegister";
// import { RequireAuth } from "./Component/Error/RequiredAuth";
import { Admin } from "./pages/admin/Admin";
import { Home } from "./pages/home/Home";
import { ErrorComponent } from "./components/Error/ErrorComponent";
import Sidebar from "./components/Sidebar/Sidebar"
import Login from "./components/form/Login/Login";
import Register from "./components/form/Register/Register";
import CompanyRegister from "./components/form/CompanyRegister/CompanyRegister";
import { SidebarData } from "./Data/Data";
import AddPlan from "./components/Admin/PlanInspect/AddPlan/AddPlan";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Sidebar data={SidebarData} role="Admin"/>} />
          <Route path="/*" element={<ErrorComponent />} />
          <Route path="/404" element={<ErrorComponent />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<CompanyRegister />} />
        </Routes>
        {/* <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<CompanyRegister />} />
          <Route path="/loading" element={<Loading />} />

          <Route
            path="/admin"
            element={
              <RequireAuth role="Moderator">
                <Sidebar data={SidebarData} role={"Admin"} />
              </RequireAuth>
            }
          >
            <Route path="dashBoard" element={<Dashboard />} />
            <Route path="manageAccount" element={<ManageAccount />} />
            <Route path="accountUpdate" element={<AccountUpdate />} />
            <Route path="addAccount" element={<AddAccount />} />

            <Route path="planInspect" element={<PlanInspect />} />
            <Route path="stores" element={<Stores />} />
            <Route path="storesUpdate" element={<UpdateStore />} />
            <Route path="addStore" element={<AddStore />} />
            <Route path="inforSelf" element={<InforSelf />} />
          </Route>

          <Route
            path="/moderrator"
            element={<Sidebar data={SidebarData} role={"Moderator"} />}
          >
            <Route path="dashBoard" element={<Dashboard />} />
          </Route>
          <Route
            path="/user"
            element={<Sidebar data={SidebarData} role={"User"} />}
          >
            <Route path="stores" element={<Stores />} />
          </Route>
        </Routes> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
