import React from "react";
import "./ProductRow.css";
export const ProductRow = (props) => {
  const { index, product } = props;
  const {
    id,
    kindof,
    productName,
    companyName,
    certificates,
    userId,
    action,
    product_type: { id: typeId, name: typeName },
  } = product;
  return (
    <>
      <tr className="product-table-row">
        <td>{index}</td>
        <td>{productName}</td>
        <td>{companyName}</td>
        <td>{props.action === 1 ? "Active" : "Inactive"}</td>
        <td className="td-button">
          <button>Details</button>
          <button>Update</button>
          <button>Inactive</button>
        </td>
      </tr>
    </>
  );
};
