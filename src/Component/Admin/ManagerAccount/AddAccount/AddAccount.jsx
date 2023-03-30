import React from 'react'
import { FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'
import "./AddAccount.css"
function AddAccount() {
    const navigate= useNavigate()
  return (
    <div className='AddAccount-container'>
    <div className='AddAccount-content'>
   
  <h1>Add Account</h1>
  
  <div className='x-icon'
  onClick={()=>{
    navigate('/admin/stores')
  }}
  ><FaTimes />
  </div>

  <form action="">
    <div className='form-group'>
    <label className='form-input-control'>Tên cửa hàng</label>
    <input className='form-input-control'type="text" placeholder='Tên cửa hàng'/>
    </div>
    <div className='form-group'>
    <label className='form-input-control'>Địa chỉ</label>
    <input className='form-input-control'type="text" placeholder='Địa chỉ'/>
    </div>
    <div className='form-group'>
    <label className='form-input-control'>Loại hình kinh doanh</label>
    <input className='form-input-control'type="text" placeholder='Loại hình kinh doanh'/>
    </div>
    <div className='form-group'>
    <label className='form-input-control'>Chứng nhận</label>
    <input className='form-input-control'type="text" placeholder='Chứng nhận'/>
    </div>
    <div className='form-group'>
    <label className='form-input-control'>Tình trạng</label>
    <input className='form-input-control'type="text" placeholder='Tình trạng'/>
    </div>
    
  </form>
  
  <button>Submit</button>
  
  

    </div>
</div>
  )
}

export default AddAccount