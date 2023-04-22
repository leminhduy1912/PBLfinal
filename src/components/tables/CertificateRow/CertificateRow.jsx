
import { ProductImage } from '../../Image/ProductImage/ProductImage';
import React from 'react'
import "./CertificateRow.css"
function CertificateRow(props) {
    
    const {index,certificate}= props;
    
    const {
      name,
      description,
      path
    }= certificate
    console.log(path);
    const handleShowModalAddCertificate=()=>{
      props.handleShowModalUpdateCertificate(true)
    }
  return (
    <>
    <tr>
      <td>{name}</td>
      <td>{description}</td>
      <td>{<ProductImage image={path} />   }</td>
      <td>
        <button
        onClick={handleShowModalAddCertificate}
        >Update</button>
        <button>Delete</button>
      </td>
     
    </tr>
    </>
  )
}

export default CertificateRow