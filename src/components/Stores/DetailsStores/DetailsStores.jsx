import React from 'react'
import "./DetailsStores.css"
import { FaTimes } from 'react-icons/fa'
import { useFetchBusinessType } from '../../../hooks/useFetchBusinessType'
function DetailsStores(props) {
   const {dataBusinessType,loadingBusinessType,errorBusinessType}= useFetchBusinessType();

  return (
    <div className='company-information-container'>
    <div className='company-information-content'>
        <div className="company-information-form">
          <div 
          className="x-icon"
          onClick={()=>{
            props.handleShowUserStoreDetails(false)
          }}
          >
            <FaTimes/>
            
          </div>
        <h1>Company Details</h1>
        <form action="">
            <div className='company-information'>

                <div className="form-group">

                <div className="label">
                <label  htmlFor="">Tên công ty</label>
                
                </div>

                <input
                disabled 
                className='form-control' 
                type="text" 
                placeholder='Tên công ty' 
                value={props.formDataUserStore.companyName}
                />
                </div>
                

                <div className="form-group">
                <div className="label">    
                <label  htmlFor="">FAX Number</label>
              
                </div>
                <input
                disabled 
                className='form-control' 
                type="text" 
                placeholder='FAX Number'
                value={props.formDataUserStore.faxNumber}
                 />
                </div>
                 
                 <div className="form-group">
                    <div className='label'>
                <label className='form-control' htmlFor="">Email</label>
                
                </div>
                <input 
                disabled
                className='form-control' 
                type="text" 
                placeholder='Email'
                value={props.formDataUserStore.email}
                 />
                </div>

                <div className="form-group">  
                <div className="label">
                <label  htmlFor="">Mã số thuế</label>
               
                </div>
                <input
                disabled 
                className='form-control'
                type="text" 
                placeholder='Mã số thuế' 
                value={props.formDataUserStore.taxIndentity}
                />
                </div>
                 
                <div className="form-group">
                <div className="label">
                <label htmlFor="">Status</label>
                
                </div>
                <select name="" id="" disabled value={props.formDataUserStore.action}>
                <option value={1}>Active</option>
                <option value={0}>Inactive</option>
                </select>
                </div>
             

            </div>

            <div className="company-information">

                <div className="form-group">   
                <div className="label">
                <label  htmlFor="">Họ và tên người đại diện công ty(chi nhánh)</label>
                
                </div>
                <input 
                disabled
                className='form-control' 
                type="text" 
                placeholder='Họ và tên'
                value={props.formDataUserStore.fullName}
                 />
                </div>

                <div className="form-group">    
                <div className="label">
                <label  htmlFor="">Số điện thoại người đại diện</label>
                
                </div>
                <input 
                disabled
                className='form-control' 
                type="text" 
                placeholder='Số diện thoại' 
                value={props.formDataUserStore.phoneNumber}
                />
                </div>

                <div className="form-group">
                <div className="label">    
                <label  htmlFor="">Số CMND/CCCD người đại diện</label>
               
                </div>
                <input 
                disabled
                className='form-control' 
                type="text" 
                placeholder='Số CMND/CCCD'
                value={props.formDataUserStore.nationalId     }
                 />
                </div>

                <div className="form-group">
                <div className="label">
                <label htmlFor="">Loại hinh kinh doanh</label>
                
                </div>
                <select name="" id="" disabled value={props.formDataUserStore.businessId}> 
                  {dataBusinessType.map((item)=>{
                    return (
                      <option value={item.businessId}>{item.typeName}</option>
                    )
                  })}
                </select>
                </div>


                <div className="form-group">
                <div className="label">
                <label htmlFor="">Chức vụ</label>
                
                </div>
                <select name="" id="" value={props.formDataUserStore.roleId} disabled>
                 <option value={0}>Admin</option>
                 <option value={1}>Moderator</option>
                 <option value={2}>User</option>
                 <option value={3}>Store</option>
                </select>
                </div>

              
                

            </div>
        </form>

        
      
        </div>
    </div>
</div>
  )
}

export default DetailsStores