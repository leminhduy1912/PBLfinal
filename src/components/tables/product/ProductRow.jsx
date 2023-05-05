import React from "react";
import "./ProductRow.css";

export const ProductRow = (props) => {


const handleShowDetailsProduct=()=>{
  props.handleShowMoDalDetailsProduct(true)
  props.handleSetFormDataProduct(formTemp)
}
const handleShowMoDalUpdateProduct=()=>{
  props.handleShowMoDalUpdateProduct(true)

}

// console.log(props.handleSetFormDataProduct());
  const { index, product } = props;

  const {
    id,
    kindof,
    productName,
    companyName,
    certificates,
    userId,
    action,
  } = product;
  
const formTemp={
  id:id,
  kindof:kindof,
  productName:productName,
  companyName:companyName,
  certificates:certificates,
  userId:userId,
  action:action,
  productType:props.product.product_type
}


  return (
    <>
      <tr className="product-table-row">
        <td>{index}</td>
        <td>{productName}</td>
        <td>{companyName}</td>
        <td>{props.action === 1 ? "Active" : "Inactive"}</td>
        <td>
          <button onClick={handleShowDetailsProduct}>Details</button>
          <button onClick={handleShowMoDalUpdateProduct}>Update</button>
          <button>Delete</button>
          <button>Add Certificate</button>
        </td>
      </tr>
    </>
  );
};
