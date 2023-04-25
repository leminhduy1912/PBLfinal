import React from 'react'
import "./UpdateUser.css"
import { FaTimes } from 'react-icons/fa'
const UpdateUser = (props) => {
    
  return (
    <div className="update-user-container">
      <div className="update-user-content">

        
        <h1>Update User</h1>

        <div
          className="x-icon"
         onClick={()=>{props.handleShowUserUpdate(false)}}
        >
          <FaTimes />
        </div>

        <form action="">
          <div className="form-group">
            <label className="form-input-control">Name Store</label>
            <input
            value={props.formDataUser.fullName}
              className="form-input-control"
              type="text"
              placeholder="Name Store"
            />
          </div>
          <div className="form-group">
            <label className="form-input-control">Số điện thoại</label>
            <input
            value={props.formDataUser.userNumber}
              className="form-input-control"
              type="text"
              placeholder="Name Store"
            />
          </div>
          <div className="form-group">
            <label className="form-input-control">Email</label>
            <input
            value={props.formDataUser.email}
              className="form-input-control"
              type="text"
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <label className="form-input-control">Số CCCD/CMND</label>
            <input
            value={props.formDataUser.nationalId}
              className="form-input-control"
              type="text"
              placeholder="Name Store"
            />
          </div>

          <div className="form-group">
            <label className="form-input-control">Chức vụ</label>
            <select name="" id="" value={props.formDataUser.roleId}>
              
              <option value={0}>Admin</option>
              <option value={2}>Moderator</option>
              <option value={1}>User</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-input-control">Status</label>
            <select name="" id="" value={props.formDataUser.action}>
              <option value="" selected disabled>
                --Status--
              </option>
              <option value={1}>Active</option>
              <option value={0}>Inactive</option>
            </select>
          </div>
        </form>

        <button>Submit</button>
      </div>
    </div>
  )
}

export default UpdateUser