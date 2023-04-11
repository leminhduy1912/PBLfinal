/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import "./UpdateStore.css";
function UpdateStore({statusModalUpdate}) {
  const navigate = useNavigate();
const handleHideUpdateModal=(value)=>{
statusModalUpdate(value)
}
  return (
    
    <div className="UpdateStore-container"
    
    >
      <div className="UpdateStore-content">

        
        <h1>Update Store</h1>

        <div
          className="x-icon"
          onClick={() => {
            console.log("B");
              handleHideUpdateModal(false)
          }}
        >
          <FaTimes />
        </div>

        <form action="">
          <div className="form-group">
            <label className="form-input-control">Name Store</label>
            <input
              className="form-input-control"
              type="text"
              placeholder="Name Store"
            />
          </div>
          <div className="form-group">
            <label className="form-input-control">Address</label>
            <input
              className="form-input-control"
              type="text"
              placeholder="Address"
            />
          </div>
          <div className="form-group">
            <label className="form-input-control">Kind of Bussiness</label>
            <select name="" id="">
              <option value="" selected disabled>
                --Kind Of Bussiness--
              </option>
              <option value="">Kinh doanh thuc pham</option>
              <option value="">Kinh doanh thuc uon</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-input-control">Certificated</label>
            <select name="" id="">
              <option value="" selected disabled>
                --Certificated--
              </option>
              <option value="">Kinh doanh thuc pham</option>
              <option value="">Kinh doanh thuc uon</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-input-control">Status</label>
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
