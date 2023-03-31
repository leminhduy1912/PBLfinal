import React from "react";
import "./Register.css";
function Register() {
  return (
    <div className="Register-container">
      <div className="Register-content">
        <div className="Register-form">
          <h1>Register</h1>
          <form action="">
            <div className="form-group">
              <label className="form-input-control">Tên đầy đủ</label>
              <input
                className="form-input-control"
                type="text"
                placeholder="Tên đầy đủ"
              />
            </div>
            <div className="form-group">
              <label className="form-input-control">Địa chỉ</label>
              <input
                className="form-input-control"
                type="text"
                placeholder="Địa chỉ"
              />
            </div>
            <div className="form-group">
              <label className="form-input-control">Email</label>
              <input
                className="form-input-control"
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <label className="form-input-control">Số CMND/CCCD</label>
              <input
                className="form-input-control"
                type="text"
                placeholder="Số CMND/CCCD"
              />
            </div>
            <div className="form-group">
              <label className="form-input-control">Nhập mật khẩu</label>
              <input
                className="form-input-control"
                type="text"
                placeholder="Nhập mật khẩu"
              />
            </div>
            <div className="form-group">
              <label className="form-input-control">Nhập lại mật khẩu</label>
              <input
                className="form-input-control"
                type="text"
                placeholder="Nhập lại mật khẩu"
              />
            </div>
          </form>
          <button>Register</button>
        </div>
      </div>
    </div>
  );
}

export default Register;
