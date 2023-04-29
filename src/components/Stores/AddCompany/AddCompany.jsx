import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import "./AddCompany.css"
import { useFetchBusinessType } from '../../../hooks/useFetchBusinessType'
import { useCreateCompany } from '../../../hooks/useCreateUser'
const AddCompany = (props) => {
    const {dataBusinessType,loadingBusinessType,errorBusinessType} = useFetchBusinessType();
    const [errMessage,setErrMessage]= useState('');
    
    const [formDataAddCompany,setFormDataAddCompany]= useState({
        companyName:'',
        phoneNumber:'',
        description:'',
        taxIndentity:'',
        businessId:'',
        faxNumber:'',
        email:'',
        fullName:'',
        nationalId:'',
        userNumber:'',
        password:'',
        roleId:2
    })
    const {success,message,loading,error,execute}= useCreateCompany();

  if(success===true){
    props.handleShowModalAddCompany(false)}

    const handleAddCompanySubmit =  (e) => {
        e.preventDefault();
        execute(formDataAddCompany)
      if(success===true){
        props.handleShowModalAddCompany(false)
        props.fetchDataUser()
      }
      };


  return (
    <div className='add-company-container'>
    <div className='add-company-content'>
        <div className="add-company-form">
        <h1>Add Company</h1>
        <div 
        className="x-icon"
        onClick={()=>{props.handleShowModalAddCompany(false)}}
        >
            <FaTimes/>
        </div>
        <form action="">
            <div className='Company-infor'>

                <div className="form-group">

                <div className="label">
                <label  htmlFor="">Tên công ty</label>
                <span>(*)</span>
                </div>

                <input 
                className='form-control' 
                type="text" 
                placeholder='Tên công ty'
                onChange={(e)=>{setFormDataAddCompany({...formDataAddCompany,companyName:e.target.value}); console.log(formDataAddCompany);}}
                 />
                </div>
                

                <div className="form-group">
                <div className="label">    
                <label  htmlFor="">Số điện thoại công ty</label>
                <span>(*)</span>
                </div>
                <input 
                className='form-control' 
                type="number" 
                placeholder='Số điện thoại công ty' 
                onChange={(e)=>{setFormDataAddCompany({...formDataAddCompany,phoneNumber:e.target.value})}}
                />
                </div>
                 
                 <div className="form-group">
                    <div className='label'>
                <label className='form-control' htmlFor="">Email</label>
                <span>(*)</span>
                </div>
                <input 
                className='form-control' 
                type="text" 
                placeholder='Email' 
                onChange={(e)=>{setFormDataAddCompany({...formDataAddCompany,email:e.target.value})}}
                />
                </div>

                <div className="form-group">  
                <div className="label">
                <label  htmlFor="">FAX Number   </label>
                <span>(*)</span>
                </div>
                <input 
                className='form-control'    
                type="number" 
                placeholder='Mã số thuế' 
                onChange={(e)=>{setFormDataAddCompany({...formDataAddCompany,faxNumber:e.target.value})}}
                />
                </div>

                <div className="form-group">  
                <div className="label">
                <label  htmlFor="">Description  </label>
                <span>(*)</span>
                </div>
                <input 
                className='form-control' 
                type="text" 
                placeholder='Description ' 
                onChange={(e)=>{setFormDataAddCompany({...formDataAddCompany,description:e.target.value})}}
                />
                </div>

                <div className="form-group">
                <div className="label">
                <label htmlFor="">Loại hình kinh doanh</label>
                <span>(*)</span>
                </div>
                <select 
                 onChange={(e)=>{setFormDataAddCompany({...formDataAddCompany,businessId:e.target.value})}}
                 >
                    <option value="" disabled selected>--None--</option>
                  {dataBusinessType.map((item,index)=>{
                    return (
                        <option value={item.businessId}>{item.typeName}</option>
                    )
                  })}
                </select>
                </div>

            </div>

            <div className="Company-infor">

                <div className="form-group">  
                <div className="label">
                <label  htmlFor="">TAX Identity </label>
                <span>(*)</span>
                </div>
                <input 
                className='form-control' 
                type="text" 
                placeholder='TAX Identity' 
                onChange={(e)=>{setFormDataAddCompany({...formDataAddCompany,taxIndentity:e.target.value})}}
                />
                </div>

                <div className="form-group">   
                <div className="label">
                <label  htmlFor="">Họ và tên người đại diện công ty</label>
                <span>(*)</span>
                </div>
                <input 
                className='form-control' 
                type="text" 
                placeholder='Họ và tên' 
                onChange={(e)=>{setFormDataAddCompany({...formDataAddCompany,fullName:e.target.value})}}
                />
                </div>

                <div className="form-group">    
                <div className="label">
                <label  htmlFor="">Số điện thoại người đại diện</label>
                <span>(*)</span>
                </div>
                <input 
                className='form-control' 
                type="number" 
                placeholder='Số diện thoại' 
                onChange={(e)=>{setFormDataAddCompany({...formDataAddCompany,userNumber:e.target.value})}}
                />
                </div>

                <div className="form-group">
                <div className="label">    
                <label  htmlFor="">Số CMND/CCCD</label>
                <span>(*)</span>
                </div>
                <input 
                className='form-control' 
                type="text" 
                placeholder='Số CMND/CCCD' 
                onChange={(e)=>{setFormDataAddCompany({...formDataAddCompany,nationalId:e.target.value})}}
                />
                </div>

                <div className="form-group"> 
                <div className='label'>  
                <label  htmlFor="">Mật khẩu</label>
                <span>(*)</span>
                </div>
                <input 
                className='form-control' 
                type="text" 
                placeholder='Mật khẩu' 
                onChange={(e)=>{setFormDataAddCompany({...formDataAddCompany,password:e.target.value})}}
                />
                </div>

                <div className="form-group">
                <div className="label">
                <label htmlFor="">Chức vụ</label>
                <span>(*)</span>
                </div>
                <select name="" id="" disabled>
                    <option value={3} selected disabled>Store</option>
                </select>
                </div>

            </div>
        </form>

        
        <button
        onClick={handleAddCompanySubmit}
        >Register</button>
        </div>
    </div>
</div>
  )
}

export default AddCompany