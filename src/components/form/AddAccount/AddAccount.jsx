import React from 'react'
// import { FaTimes } from 'react-icons/fa';
import ClearIcon from '@mui/icons-material/Clear';
import "./AddAccount.css"
function AddAccount(props) {
   const handleHideModaAddUser=()=>{
 props.handleShowModalAddUser(false)
   
   }
  return (
    <div className='AddAccount-container'>
    <div className='AddAccount-content'>
   
    <h1>Add User</h1>
    
    <div className='x-icon'
    onClick={ handleHideModaAddUser  }
    ><ClearIcon/>
    </div>

    <form action="">
      <div className='form-group'>
      <label className='form-input-control'>Tên người dùng / Tên cửa hàng</label>
      <input className='form-input-control'type="text" placeholder='Nhập tên người dùng / cửa hàng'/>
      </div>
      <div className='form-group'>
      <label className='form-input-control'>Email</label>
      <input className='form-input-control'type="text" placeholder='Email'/>
      </div>
      <div className='form-group'>
      <label className='form-input-control'>Số điện thoại</label>
      <input className='form-input-control'type="text" placeholder='Số điện thoại'/>
      </div>
      <div className='form-group'>
      <label className='form-input-control'>Địa chỉ</label>
      <input className='form-input-control'type="text" placeholder='Địa chỉ'/>
      </div>
    
      <div className='form-group'>
      <label className='form-input-control'>Chức vụ</label>
      <select name="" id="">
        <option value="" disabled selected>--Chức vụ--</option>
        <option value="">Người dùng</option>
        <option value="">Thanh tra</option>
        <option value="">Cửa hàng</option>
      </select>
      </div>
      <div className='form-group'>
      <label className='form-input-control'>Loại hình kinh doanh(đối với cửa hàng)</label>
      <input className='form-input-control'type="text" placeholder='Loại hình kinh doanh'/>
      </div>
      <div className='form-group'>
      <label className='form-input-control'>Mật khẩu</label>
      <input className='form-input-control'type="password" placeholder='Mật khẩu'/>
      </div>
      <div className='form-group'>
      <label className='form-input-control'>Nhập lại mật khẩu</label>
      <input className='form-input-control'type="password" placeholder='Nhập lại mật khẩu'/>
      </div>
      <div className='form-group'>
      <label className='form-input-control'>Trạng thái hoạt động</label>
      <select name="" id="">
        <option value="" disabled selected>--Status--</option>
        <option value="">Active</option>
        <option value="">Inactive</option>
      </select>
      </div>
      
    </form>
    
    <button>Submit</button>
  
  

    </div>
</div>
  )
}

export default AddAccount