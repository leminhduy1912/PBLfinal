import React, { useEffect, useState } from 'react'
import "./AddCertificate.css"
import { FaTimes } from 'react-icons/fa'
import { useCreateCertificate } from '../../../hooks/Certificate/useCreateCertificate'
import ActionSuccess from '../../ActionSuccess/ActionSuccess'
function Addcertificate(props) {
   const [formDataCertificate,setFormDataCertificate]= useState({name:'',description:'',image:''})
   const  {success,message, error, loading ,execute}= useCreateCertificate();
  //  const [actionPerform,setActionPerform]= useState(false)
  //  let  messsagePayload="";
   const actionSuccess=async()=>{
     await props.handleShowModalAddCertificate(false);
     await props.handleSetShowSuccess({message:message})
   }
  if (success==true){
   actionSuccess()
  }
   const  handleAddCertificate=async(e)=>{
    e.preventDefault();
  await execute(formDataCertificate)
   }
  return (
    <>

 
    <div className="add-certificate-container">
      <div className="add-certificate-content">
        <h1>Add Certificate</h1>
    
        <div
          className="x-icon"
         
        >
          <FaTimes 
           onClick={()=>{props.handleShowModalAddCertificate(false)}}
          />
        </div>

        <form action="">
          <div className="form-group">
            <label className="form-input-control">Tên chứng nhận</label>
            <input
              className="form-input-control"
              type="text"
              placeholder="Tên chứng nhận"
              onChange={(e)=>{setFormDataCertificate({...formDataCertificate,name:e.target.value})}}
            />
          </div>
        
          <div className="form-group">
            <label className="form-input-control">Mô tả</label>
            <input
              className="form-input-control"
              type="text"
              placeholder="Nhập mô tả"
              onChange={(e)=>{setFormDataCertificate({...formDataCertificate,description:e.target.value})}}
            />
          </div>
          <div className="form-group">
            <label className="form-input-control">Hình ảnh</label>
            <input
              className="form-input-control"
              type="file"
              onChange={(e)=>{
              setFormDataCertificate({...formDataCertificate,image:e.target.files[0]})
            }
              }
            />
          </div>

        </form>

        <button
       onClick={handleAddCertificate}
        >Submit</button>
      </div>
    </div>
    </>
  )
}

export default Addcertificate