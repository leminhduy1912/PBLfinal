import React, { useState } from "react";
import { loginHandler } from "../../../service/auth.service";
import { useContext } from "react";
import { StoreContext } from "../../../store";
import { SET_AUTH_STATE } from "../../../store/Constants";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errMessage, setErrMessage] = useState();
  const [dispatch] = useContext(StoreContext);
  const navigate = useNavigate();
  const updateGlobalState = ({ token, role }) => {
    dispatch({ type: SET_AUTH_STATE, payload: { token: token, role: role } });
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await loginHandler(email, password);
      if (res.meta.error) {
        setErrMessage(res.meta.error);
        return;
      }
      updateGlobalState({ token: res.data.ACCESS_TOKEN, role: res.data.role });
      return navigate("/admin");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="LogIn-container">
      <div className="LogIn-glass">
        <div className="Login">
          <h1>Log In</h1>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {errMessage && <div>{errMessage}</div>}

            <button type="submit" onClick={(e)=>handleLogin(e)}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
