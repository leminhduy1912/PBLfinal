import React, { useState } from "react";
import { Navigate, Redirect, useHistory, useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";

// import Sidebar from "../Sidebar/Sidebar";
// import Table from "../Table/Table";
import "./Login.css";
import { loginHandler } from "./../../service/auth.service";

const Login = () => {
  const data = [
    {
      email: "minhngoc@gmail.com",
      password: "123",
      role: "Admin",
    },
    {
      email: "minhduy@gmail.com",
      password: "123",
      role: "MOD",
    },
    {
      email: "minhquan@gmail.com",
      password: "123",
      role: "User",
    },
  ];
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState("Admin");
  const [dataLogin, setDataLogin] = useState([]);
  const [success, setSuccess] = useState(false);

  // const handleLogIn = (e) => {
  //   e.preventDefault();
  //   success && <Loading />;
  //   // Admin
  //   if (email === "minhngoc@gmail.com" && password === "123") {
  //     localStorage.setItem("Role", "Admin");
  //     setSuccess(true);
  //     navigate("/admin/dashBoard");
  //   }
  //   // Moderrator
  //   if (email === "minhduy@gmail.com" && password === "123") {
  //     localStorage.setItem("Role", "Moderrator");
  //     setSuccess(true);
  //     navigate("/moderrator/dashBoard");
  //   }
  //   if (email === "minhquan@gmail.com" && password === "123") {
  //     localStorage.setItem("Role", "user");
  //     setSuccess(true);
  //     navigate("/user/stores");
  //   }
  // };
  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.set("email", email);
    formData.set("password", password);
    const res = await loginHandler(formData);
    console.log(res);
  };
  return (
    <div className="LogIn-container">
      <div className="LogIn-glass">
        <div className="Login">
          <h1>Please Log In</h1>
          <form onSubmit={handleLogin}>
            <label>
              <p>Username</p>
              <input type="text" onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
              <p>Password</p>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    //  <div className="LogIn-container">
    //   <div className="LogIn-glass">
    //   <div className='Login'>
    //     <h1>Login</h1>
    //     <input type="text" placeholder='Username'
    //     onChange={(e)=>{setEmail(e.target.value)}}
    //     />
    //     <input type="text" placeholder='Password'
    //     onChange={(e)=>{setPassword(e.target.value)}}
    //     />
    //     <button
    //     onClick={(e)=>handleLogIn(e)}
    //     >Log In</button>
    //     <p>Not a member ? <a
    //     >Sign Up</a></p>
    //   </div>
    //   </div>
    //  </div>
  );
};
export default Login;
