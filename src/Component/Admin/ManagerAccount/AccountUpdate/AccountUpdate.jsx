import React from 'react'
import "./AccountUpdate.css"
import { FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
function AccountUpdate() {
  const navigate=useNavigate();
  return (
    <div className='AccountUpdate-container'>
    <div className='AccountUpdate-content'>
      <h1>Update Account</h1>
      
      <div className='x-icon'
      onClick={()=>{
       
        navigate('/admin/addAccount')
      }}
      ><FaTimes />
      </div>

      <form action="">
        <div className='form-group'>
        <label className='form-input-control'>Tên đầy đủ</label>
        <input className='form-input-control'type="text" placeholder='Tên đầy đủ'/>
        </div>
        <div className='form-group'>
        <label className='form-input-control'>Email</label>
        <input className='form-input-control'type="text" placeholder='Email'/>
        </div>
        <div className='form-group'>
        <label className='form-input-control'>Số điện thoại</label>
        <input className='form-input-control'type="text" placeholder='Phone Number'/>
        </div>
        <div className='form-group'>
        <label className='form-input-control'>Địa chỉ</label>
        <input className='form-input-control'type="text" placeholder='Address'/>
        </div>
        <div className='form-group'>
        <label className='form-input-control'>Số CCCD</label>
        <input className='form-input-control'type="text" placeholder='NationalID'/>
        </div>
        <div className='form-group'>
        <label className='form-input-control'>Tình trạng</label>
        <select className='form-input-control'>
          <option value="" >Active</option>
          <option value="" >Inactive</option>
          <option value="" disabled  selected>---Select---</option>
        </select>
        </div>
        
      </form>
      
      <button>Submit</button>
      
      
    </div>
  </div>
  )
}

export default AccountUpdate