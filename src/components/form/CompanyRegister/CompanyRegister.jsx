import React from 'react'
import {UilStar,UilAsterisk} from '@iconscout/react-unicons'
import "./CompanyRegister.css"
function CompanyRegister() {
  return (
    <div className='CompanyRegister-container'>
        <div className='CompanyRegister-content'>
            <div className="CompanyRegister-form">
            <h1>Register Company</h1>
            <form action="">
                <div className='Company-infor'>

                    <div className="form-group">

                    <div className="label">
                    <label  htmlFor="">Tên công ty</label>
                    <span>(*)</span>
                    </div>

                    <input className='form-control' type="text" placeholder='Tên công ty' />
                    </div>
                    

                    <div className="form-group">
                    <div className="label">    
                    <label  htmlFor="">Số điện thoại công ty</label>
                    <span>(*)</span>
                    </div>
                    <input className='form-control' type="text" placeholder='Số điện thoại công ty' />
                    </div>
                     
                     <div className="form-group">
                        <div className='label'>
                    <label className='form-control' htmlFor="">Email</label>
                    <span>(*)</span>
                    </div>
                    <input className='form-control' type="text" placeholder='Email' />
                    </div>

                    <div className="form-group">  
                    <div className="label">
                    <label  htmlFor="">Mã số thuế</label>
                    <span>(*)</span>
                    </div>
                    <input className='form-control' type="text" placeholder='Mã số thuế' />
                    </div>

                    <div className="form-group">
                    <div className="label">
                    <label htmlFor="">Loại hinh kinh doanh</label>
                    <span>(*)</span>
                    </div>
                    <select name="" id="">
                        <option value="" selected disabled>--Loại hình kinh doanh--</option>
                        <option value="">Kinh doanh ăn uống</option>
                        <option value="">kinh doanh thực phẩm</option>
                    </select>
                    </div>

                </div>

                <div className="Company-infor">
    
                    <div className="form-group">   
                    <div className="label">
                    <label  htmlFor="">Họ và tên người đại diện công ty(chi nhánh)</label>
                    <span>(*)</span>
                    </div>
                    <input className='form-control' type="text" placeholder='Họ và tên' />
                    </div>

                    <div className="form-group">    
                    <div className="label">
                    <label  htmlFor="">Số điện thoại người đại diện</label>
                    <span>(*)</span>
                    </div>
                    <input className='form-control' type="text" placeholder='Số diện thoại' />
                    </div>

                    <div className="form-group">
                    <div className="label">    
                    <label  htmlFor="">Số CMND/CCCD</label>
                    <span>(*)</span>
                    </div>
                    <input className='form-control' type="text" placeholder='Số CMND/CCCD' />
                    </div>

                    <div className="form-group"> 
                    <div className='label'>  
                    <label  htmlFor="">Mật khẩu</label>
                    <span>(*)</span>
                    </div>
                    <input className='form-control' type="text" placeholder='Mật khẩu' />
                    </div>

                    <div className="form-group"> 
                    <div className="label">   
                    <label  htmlFor="">Nhập lại mật khẩu</label>
                    <span>(*)</span>
                    </div>
                    <input className='form-control' type="text" placeholder='Nhập lại mật khẩu' />
                    </div>

                </div>
            </form>

            
            <button>Register</button>
            </div>
        </div>
    </div>
  )
}

export default CompanyRegister