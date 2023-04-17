import { Pagination } from "@mui/material";
import "./Product.css"
import { useState } from "react";
import DetailsProduct from "../form/Product/DetailsProduct/DetailsProduct";
import ProductUpdate from "../form/Product/ProductUpdate/ProductUpdate";
import { ProductRow } from "~components";
import { useAdminProduct } from "~hooks";
import AddProduct from "../form/Product/AddProduct/AddProduct";

export const ProductAdmin = () => {
  const { data, error, loading } = useAdminProduct();
  const [showModalDetailsProduct,setShowModalDetailsProduct]= useState(false)
  const handleShowMoDalDetailsProduct=(value)=>{
    setShowModalDetailsProduct(value)
  }
  const [showModalUpdateProduct,setShowModalUpdateProduct]= useState(false)
  const handleShowMoDalUpdateProduct=(value)=>{
    setShowModalUpdateProduct(value)
  }
  const [showModalAddProduct,setShowModalAddProduct]= useState(false)
  const handleShowModalAddProduct=(value)=>{
    setShowModalAddProduct(value)
  }
  return (
    <>
     {showModalDetailsProduct&&<DetailsProduct     handleShowMoDalDetailsProduct={handleShowMoDalDetailsProduct}    />}
     {showModalUpdateProduct&& <ProductUpdate      handleShowMoDalUpdateProduct={handleShowMoDalUpdateProduct}      />}
     {showModalAddProduct&& <AddProduct            handleShowModalAddProduct={handleShowModalAddProduct}      />}
      <div>
       <div className="product-header">
       <h1>Recent Product</h1>
        <button
        onClick={()=>{setShowModalAddProduct(true)}}
        >Add Product</button>
       </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Company name</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(data.items) &&
              data.items.map((item, index) => {
                return (
                  <ProductRow 
                  key={index} 
                  index={index + 1} 
                  product={item}
                  handleShowMoDalDetailsProduct={handleShowMoDalDetailsProduct}
                  handleShowMoDalUpdateProduct={handleShowMoDalUpdateProduct}
                   />
                );
              })}
          </tbody>
        </table>
        {loading && <div>Loading...</div>}
        {data.items && (
          <>
            <br />
            <div className="pagination">
            <Pagination
              count={data.pagination.totalPages}
              showFirstButton
              showLastButton
              page={data.pagination.currentPage}
              onPage
              // onChange={handleOnChange}
            />
            </div>
          </>
        )}
      </div>
    </>
  );
};
