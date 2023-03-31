import React, { useState } from "react";
import { loginHandler } from "../../../service/auth.service";
import { useContext } from "react";
import { StoreContext } from "../../../store";
import { SET_AUTH_STATE } from "../../../store/Constants";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errMessage, setErrMessage] = useState();
  const [state, dispatch] = useContext(StoreContext);
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
      return navigate("/admin/dashBoard");
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
            <label>
              <p>Email</p>
              <input type="text" onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
              <p>Password</p>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            {errMessage && <div>{errMessage}</div>}
            <div>
              <button type="submit" onClick={handleLogin}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
