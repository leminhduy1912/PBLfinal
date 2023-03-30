import React from 'react'
import {  useNavigate } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa';
import "./AddStore.css"
function AddStore() {
    const navigate= useNavigate()
  return (
    <div className='AddStore-container'>
        <div className='AddStore-content'>
       
      <h1>Add Store</h1>
      
      <div className='x-icon'
      onClick={()=>{
       
        navigate('/admin/stores')
      }}
      ><FaTimes />
      </div>

      <form action="">
        <div className='form-group'>
        <label className='form-input-control'>Tên đầy đủ</label>
        <input className='form-input-control'type="text" placeholder='Tên cửa hàng'/>
        </div>
        <div className='form-group'>
        <label className='form-input-control'>Email</label>
        <input className='form-input-control'type="text" placeholder='Địa chỉ'/>
        </div>
        <div className='form-group'>
        <label className='form-input-control'>Số điện thoại</label>
        <input className='form-input-control'type="text" placeholder='Loại hình kinh doanh'/>
        </div>
        <div className='form-group'>
        <label className='form-input-control'>Số CCCD</label>
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

export default AddStore