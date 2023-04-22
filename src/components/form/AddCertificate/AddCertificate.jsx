import React from 'react'
import "./AddCertificate.css"
import { FaTimes } from 'react-icons/fa'
function Addcertificate(props) {
    const handleHideModalAddCertificate =  ()=>{
        props.handleShowModalAddCertificate(false)
    }
  return (
    <div className="add-certificate-container">
      <div className="add-certificate-content">
        <h1>Add Certificate</h1>
    
        <div
          className="x-icon"
          onClick={handleHideModalAddCertificate}
        >
          <FaTimes />
        </div>

        <form action="">
          <div className="form-group">
            <label className="form-input-control">Tên chứng nhận</label>
            <input
              className="form-input-control"
              type="text"
              placeholder="Tên chứng nhận"
            />
          </div>
        
          <div className="form-group">
            <label className="form-input-control">Mô tả</label>
            <input
              className="form-input-control"
              type="text"
              placeholder="Nhập mô tả"
            />
          </div>
          <div className="form-group">
            <label className="form-input-control">Hình ảnh</label>
            <input
              className="form-input-control"
              type="file"
            />
          </div>

        </form>

        <button>Submit</button>
      </div>
    </div>
  )
}

export default Addcertificate