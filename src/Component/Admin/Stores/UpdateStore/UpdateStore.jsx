/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import "./UpdateStore.css";
function UpdateStore() {
  const navigate = useNavigate();
  return (
    <div className="UpdateStore-container">
      <div className="UpdateStore-content">
        <h1>Update Store</h1>

        <div
          className="x-icon"
          onClick={() => {
            navigate("/admin/stores");
          }}
        >
          <FaTimes />
        </div>

        <form action="">
          <div className="form-group">
            <label className="form-input-control">Tên cửa hàng</label>
            <input
              className="form-input-control"
              type="text"
              placeholder="Fullname"
            />
          </div>
          <div className="form-group">
            <label className="form-input-control">Địa chỉ</label>
            <input
              className="form-input-control"
              type="text"
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <label className="form-input-control">Loại hình kinh doanh</label>
            <select name="" id="">
              <option value="" selected disabled>
                --Kind Of Bussiness--
              </option>
              <option value="">Kinh doanh thuc pham</option>
              <option value="">Kinh doanh thuc uon</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-input-control">Chứng nhận</label>
            <select name="" id="">
              <option value="" selected disabled>
                --Certificated--
              </option>
              <option value="">Kinh doanh thuc pham</option>
              <option value="">Kinh doanh thuc uon</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-input-control">Trạng thái hoạt động</label>
            <select name="" id="">
              <option value="" selected disabled>
                --Status--
              </option>
              <option value="">Active</option>
              <option value="">Inactive</option>
            </select>
          </div>
        </form>

        <button>Submit</button>
      </div>
    </div>
  );
}

export default UpdateStore;
