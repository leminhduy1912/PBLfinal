import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa';
import "./UpdateStore.css"
function UpdateStore() {
  const navigate= useNavigate()
  return (
    <div className='UpdateStore-container'>
      <div className='UpdateStore-content'>
        <h1>Update Store</h1>
        
        <div className='x-icon'
        onClick={()=>{
          navigate('/admin/stores')
        }}
        ><FaTimes />
        </div>

        <form action="">
          <div className='form-group'>
          <label className='form-input-control'>Tên cửa hàng</label>
          <input className='form-input-control'type="text" placeholder='Fullname'/>
          </div>
          <div className='form-group'>
          <label className='form-input-control'>Địa chỉ</label>
          <input className='form-input-control'type="text" placeholder='Email'/>
          </div>
          <div className='form-group'>
          <label className='form-input-control'>Loại hình kinh doanh</label>
          <input className='form-input-control'type="text" placeholder='Phone Number'/>
          </div>
          <div className='form-group'>
          <label className='form-input-control'>Chứng nhận</label>
          <input className='form-input-control'type="text" placeholder='Address'/>
          </div>
          <div className='form-group'>
          <label className='form-input-control'>Trạng thái hoạt động</label>
          <input className='form-input-control'type="text" placeholder='NationalID'/>
          </div>
          
        </form>
        
        <button>Submit</button>
        
        
      </div>
    </div>
  )
}

export default UpdateStore