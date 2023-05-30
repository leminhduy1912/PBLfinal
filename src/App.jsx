/* eslint-disable jsx-a11y/aria-role */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import { Home } from "./pages/home/Home";
import { ErrorComponent } from "./components/Error/ErrorComponent";
import Sidebar from "./components/Sidebar/Sidebar";
import Login from "./components/form/Login/Login";
import CompanyRegister from "./components/form/CompanyRegister/CompanyRegister";
import { SidebarData } from "./Data/Data";
import { RequireAuth } from "~hoc";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/*" element={<ErrorComponent />} />
          <Route path="/404" element={<ErrorComponent />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<CompanyRegister />} />
          <Route path="/landingPage" index element={<Home />} />
          <Route
            path="/home"
            element={<Sidebar data={SidebarData} role="Admin" />}
          ></Route>
          <Route element={<RequireAuth roles={["Admin", "moderator"]} />}>
            <Route
              path="/home"
              element={<Sidebar data={SidebarData} role="Admin" />}
            ></Route>
            <Route path="/moderator" element={<Sidebar data={SidebarData} />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
