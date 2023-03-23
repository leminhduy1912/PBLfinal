import React from 'react'
import "./AccountUpdate.css"
import { FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
function AccountUpdate() {
  const navigate=useNavigate();
  return (
    <div className='AccountUpdate-container'>
      <div className='AccountUpdate-content'>
        <h1>Cập nhật tài khoản</h1>
        <div className='x-icon'
        onClick={()=>{
          navigate('/admin/manageAccount')
          
        }}
        ><FaTimes /></div>
        <form action="">
          <label htmlFor="">Tên người dùng:</label>
          <input type="text" placeholder='Tên người dùng' />
          <label htmlFor="">Email:</label>
          <input type="text" placeholder='Email'/>
          <label htmlFor="">Địa chỉ:</label>
          <input type="text" placeholder='Địa chỉ'/>
          <label htmlFor="">Giới tính</label>
          <select name="" id="">
           <option value="">Female</option>
           <option value="">Male</option>
           <option value="">Other</option>
          </select>
          <label htmlFor="">Status</label>
          <select name="" id="">
           <option value="">Active</option>
           <option value="">Pause</option>
          </select>
        </form>
        <button>Submit</button>
      </div>
    </div>
  )
}

export default AccountUpdate