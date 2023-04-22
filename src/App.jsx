/* eslint-disable jsx-a11y/aria-role */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import { Admin } from "./pages/admin/Admin";
import { Home } from "./pages/home/Home";
import { ErrorComponent } from "./components/Error/ErrorComponent";
import Sidebar from "./components/Sidebar/Sidebar";
import Login from "./components/form/Login/Login";
import Register from "./components/form/Register/Register";
import CompanyRegister from "./components/form/CompanyRegister/CompanyRegister";
import { SidebarData } from "./Data/Data";
// import AddPlan from "./components/Admin/PlanInspect/AddPlan/AddPlan";
import { RedirectAccess, RequireAuth } from "~hoc";
import Contact from "../src/components/Contact/Contact";
import { Banner, Navbar } from "~components";
// import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* <Route
            path="/admin"
            element={<Sidebar data={SidebarData} role="Admin" />}
            />
          <Route path="/moderrator" element={<Sidebar data={SidebarData} />} /> */}
          <Route path="/*" element={<ErrorComponent />} />
          <Route path="/404" element={<ErrorComponent />} />

          <Route element={<RedirectAccess />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<CompanyRegister />} />
            <Route path="/" element={<Home />} />
          </Route>

          <Route element={<RequireAuth roles={["admin", "moderator"]} />}>
            <Route
              path="/home"
              element={<Sidebar data={SidebarData} role="Admin" />}
            >   
                

            </Route>
           
            <Route
              path="/moderrator"
              element={<Sidebar data={SidebarData} />}
            />
          </Route>
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
