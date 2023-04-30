
import { ProductImage } from '../../Image/ProductImage/ProductImage';
import React from 'react'
import "./CertificateRow.css"
import { useDeleteCertificate } from '../../../hooks/Certificate/useDeleteCetificate';

function CertificateRow(props) {
  const {message,error,execute}= useDeleteCertificate()
    const {index,certificate}= props;
    const handleDeleteCertificate= async(e)=>{
   e.preventDefault();
     await execute(id);
    }
    const {
      id,
      action,
      name,
      description,
      path
    }= certificate
    const newObject ={
      ...props.formDataCertificate,
      id:id,
      action:action,
      name:name,
      description:description,
      path:path
    }
   
    const handleShowModalUpdateCertificate=()=>{
      props.handleShowModalUpdateCertificate(true)
      props.handleSetFormDataCertificate(newObject)
    }
  return (
    <>
    <tr>
      <td>{name}</td>
      <td>{description}</td>
      <td>{<ProductImage image={certificate} />   }</td>
      <td>
        <button
        onClick={handleShowModalUpdateCertificate}
        >Update</button>
        <button
        onClick={handleDeleteCertificate}
        >Delete</button>
      </td>
     
    </tr>
    </>
  )
}

export default CertificateRow