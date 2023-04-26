import React from 'react'
import "./UpdateCertificate.css"
import { FaTimes } from 'react-icons/fa'
function UpdateCertificate(props) {
    const handleHideModalUpdateCertificate=()=>{
   props.handleShowModalUpdateCertificate(false)
    }
  return (
    <div className="update-certificate-container">
    <div className="update-certificate-content">
      <h1>Update Certificate</h1>
  
      <div
        className="x-icon"
        onClick={handleHideModalUpdateCertificate}
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
            value={props.formDataCertificate.name}
          />
        </div>
      
        <div className="form-group">
          <label className="form-input-control">Mô tả</label>
          <input
            className="form-input-control"
            type="text"
            placeholder="Nhập mô tả"
            value={props.formDataCertificate.description}
          />
        </div>
        <div className="form-group">
          <label className="form-input-control">Hình ảnh</label>
          <input
            className="form-input-control"
            type="file"
            // value={props.formDataCertificate.path}
          />
        </div>

      </form>

      <button>Submit</button>
    </div>
  </div>
  )
}

export default UpdateCertificate