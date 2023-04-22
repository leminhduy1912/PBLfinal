import { useFetchCertificate } from '../../../hooks/useFetchCertificate'
import React, { useState } from 'react'
import { Pagination } from '@mui/material'
import CertificateRow from '../../tables/CertificateRow/CertificateRow'
import "./Certificate.css"
import AddCertificate from '../../form/AddCertificate/AddCertificate'
import UpdateCertificate from '../../form/UpdateCertificate/UpdateCertificate'
const Certificate = () => {
    const {data,error,loading} = useFetchCertificate();
    const [showModalAddCertificate,setShowModalAddCertificate]= useState(false)
    const handleShowModalAddCertificate=(value)=>{
    setShowModalAddCertificate(value)
    }
    const [showModalUpdateCertificate,setShowModalUpdateCertificate]= useState(false)
    const handleShowModalUpdateCertificate=(value)=>{
    setShowModalUpdateCertificate(value)
    }
    
  return (
    <>
    {showModalAddCertificate&& <AddCertificate  handleShowModalAddCertificate={handleShowModalAddCertificate}/>}
    {showModalUpdateCertificate&& <UpdateCertificate  handleShowModalUpdateCertificate={handleShowModalUpdateCertificate}  />}
    <div className="certificate-container">
    <div className="certificate-header">
        <h1>Certificates Management</h1>
        <button
        onClick={()=>setShowModalAddCertificate(true)}
        >Add Certificate</button>
    </div>
 
           <table className='certificate-table'>
            <thead>
              <tr>
              <th>Tên chứng chỉ</th>
              <th>Mô tả</th>
              <th className='certificate-img'>Hình ảnh</th>
               <th>Action</th>
              </tr>
          </thead>
          <tbody>

       { Array.isArray(data) && data.map((item,index)=>{
         return (
           <CertificateRow
           key={index}
           index={index+1}
           certificate={item}
           handleShowModalUpdateCertificate={handleShowModalUpdateCertificate}
           />
           )
          })}
          </tbody>
        
          </table>
          <div className="pagination">
          <Pagination
        count={20}
        showFirstButton
        showLastButton
        
      />
          </div>
    </div>
    </>
  )
}

export default Certificate