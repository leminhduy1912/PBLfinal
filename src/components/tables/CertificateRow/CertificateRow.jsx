
import { ProductImage } from '../../Image/ProductImage/ProductImage';
import React from 'react'
import "./CertificateRow.css"
import { usePlanDetails } from '../../../hooks/usePlanDetails';
function CertificateRow(props) {
  const {data,loading,error}= usePlanDetails();
  console.log(data);
    const {index,certificate}= props;
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
      <td>{<ProductImage image={path} />   }</td>
      <td>
        <button
        onClick={handleShowModalUpdateCertificate}
        >Update</button>
        <button>Delete</button>
      </td>
     
    </tr>
    </>
  )
}

export default CertificateRow