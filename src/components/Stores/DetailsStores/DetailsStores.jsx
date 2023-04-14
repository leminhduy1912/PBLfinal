import React from 'react'
import "./DetailsStores.css"
import { FaTimes } from 'react-icons/fa'
function DetailsStores(props) {
   const  handleHideModalDetailsUser=()=>{
        props.handleShowUsersDetails(false)
    }
  return (
    <div className="DetailsStore-container">
      <div className="DetailsStore-content">
        <h1>User Details</h1>

        <div
          className="x-icon"
          onClick={handleHideModalDetailsUser}
        >
          <FaTimes />
        </div>

        <form action="">
          <div className="form-group">
            <label className="form-input-control">Tên cửa hàng</label>
            <input
              className="form-input-control"
              type="text"
              placeholder="Tên cửa hàng"
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
            <label className="form-input-control">Tình trạng</label>
            <select name="" id="">
              <option value="" selected disabled>
                --Status--
              </option>
              <option value="">Active</option>
              <option value="">Inactive</option>
            </select>
          </div>
        </form>

      
      </div>
    </div>
  )
}

export default DetailsStores