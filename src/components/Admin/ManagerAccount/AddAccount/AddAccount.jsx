import React from 'react'
import { FaTimes } from 'react-icons/fa';

import "./AddAccount.css"
function AddAccount({statusModalAddAccountHide}) {
   const handleHideModaAddAccount=()=>{
   statusModalAddAccountHide(false)
   
   }
  return (
    <div className='AddAccount-container'>
    <div className='AddAccount-content'>
   
  <h1>Add Account</h1>
  
  <div className='x-icon'
  onClick={ handleHideModaAddAccount  }
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
    <input className='form-input-control'type="text" placeholder='Số điện thoại'/>
    </div>
    <div className='form-group'>
    <label className='form-input-control'>Địa chỉ</label>
    <input className='form-input-control'type="text" placeholder='Địa chỉ'/>
    </div>
    <div className='form-group'>
    <label className='form-input-control'>Số CMND/CCCD</label>
    <input className='form-input-control'type="text" placeholder='Số CMND/CCCD'/>
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