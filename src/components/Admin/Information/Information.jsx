import React from 'react'
import "./Information.css"
function Information() {
  return (
    <div className='Information-container'>
        <h1>Information Account</h1>
        <div className="Information-content">

<form action="">
    <div className="Information-group">
        <div className="form-group">
        <label htmlFor="">Tên đầy đủ:</label>
        <input type="text" placeholder='Tên đầy đủ' />
        </div>

        <div className="form-group">
        <label htmlFor="">Email</label>
        <input type="text" placeholder='Email' />
        </div>

        <div className="form-group">
        <label htmlFor="">Số CMND/CCCD</label>
        <input type="text" placeholder='Số CMND/CCCD' />
        </div>

        <div className="form-group">
        <label htmlFor="">Giới tính</label>
        <select name="" id="">
            <option value="" disabled selected>--Giới tính--</option>
            <option value="">Nam</option>
            <option value="">Nữ</option>
        </select>
        </div>
        </div>

        <div className="Information-group">
        <div className="form-group">
        <label htmlFor="">Địa chỉ</label>
        <input type="text" placeholder='Địa chỉ' />
        </div>

        <div className="form-group">
        <label htmlFor="">Chức vụ</label>
        <input type="text" placeholder='Chức vụ' />
        </div>

        <div className="form-group">
        <label htmlFor="">Mật khẩu</label>
        <input type="text" placeholder='Mật khẩu' />
        </div>

        </div>
        

</form>


   <button >Cập nhật</button>
        </div>
    </div>
  )
}

export default Information