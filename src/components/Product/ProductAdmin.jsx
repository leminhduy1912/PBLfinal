import { Pagination } from "@mui/material";
import "./Product.css";
import { useState } from "react";
import DetailsProduct from "../form/Product/DetailsProduct/DetailsProduct";
import ProductUpdate from "../form/Product/ProductUpdate/ProductUpdate";
import { ProductRow } from "~components";
import { useAdminProduct } from "~hooks";
import AddProduct from "../form/Product/AddProduct/AddProduct";
import ActionSuccess from "../ActionSuccess/ActionSuccess";
import AddCertificateToProduct from "../form/Product/AddCertificateToProduct/AddCertificateToProduct";

export const ProductAdmin = () => {
  const { data, error, loading,executeDataProduct } = useAdminProduct();
  const fetchDataProduct=async()=>{
    await executeDataProduct()
  }
  
  const [showModalDetailsProduct, setShowModalDetailsProduct] = useState(false);
  const handleShowMoDalDetailsProduct = (value) => {
    setShowModalDetailsProduct(value);
  };
  const [showModalUpdateProduct, setShowModalUpdateProduct] = useState(false);
  const handleShowMoDalUpdateProduct = (value) => {
    setShowModalUpdateProduct(value);
  };
  const [showModalAddProduct, setShowModalAddProduct] = useState(false);
  const handleShowModalAddProduct = (value) => {
    setShowModalAddProduct(value);
  };
  const [showModalAddCertificateToProduct, setShowModalAddCertificateToProduct] = useState(false);
  const [idProduct,setIdProduct]= useState("")
  const handleShowModalAddCertificateToProduct = (Obj) => {
  
    setShowModalAddCertificateToProduct(Obj.value);
    console.log(showModalAddCertificateToProduct);
    Obj.id && setIdProduct(Obj.id)
  };
  const [formDataProduct,setFormDataProduct]= useState({
    action:'',
    certificate:[],
    companyName:'',
    id:'',
    kindof:'',
    productName:'',
    product_type:{},
    userId:''
  })
  const handleSetFormDataProduct=(Obj)=>{
    setFormDataProduct(Obj)
  }
  const [messageAction,setMessageAction]= useState("")
  const [showSuccessAction,setShowSuccessAction]= useState(false)
  const handleShowSuccesAction=(message)=>{
    setMessageAction(message)
    setShowSuccessAction(true)
    setTimeout(()=>{
    setShowSuccessAction(false)
    },3000)
  }
    
  return (
    <>
    {showModalAddCertificateToProduct&&
    <AddCertificateToProduct
     idProduct={idProduct}
     handleShowModalAddCertificateToProduct={handleShowModalAddCertificateToProduct}
     handleShowSuccesAction={handleShowSuccesAction}
     fetchDataProduct={fetchDataProduct}
    />}
    {
      showSuccessAction&&<ActionSuccess messageAction={messageAction}  />
    }
      {showModalDetailsProduct && (
        <DetailsProduct
          handleShowMoDalDetailsProduct={handleShowMoDalDetailsProduct}
          formDataProduct={formDataProduct}
          handleSetFormDataProduct={handleSetFormDataProduct}
        />
      )}
      {showModalUpdateProduct && (
        <ProductUpdate
          handleShowMoDalUpdateProduct={handleShowMoDalUpdateProduct}
          formDataProduct={formDataProduct}
          fetchDataProduct={fetchDataProduct}
          handleSetFormDataProduct={handleSetFormDataProduct}
        />
      )}
      {showModalAddProduct && (
        <AddProduct 
        handleShowModalAddProduct={handleShowModalAddProduct} 
        handleShowSuccesAction={handleShowSuccesAction}
        fetchDataProduct={fetchDataProduct}
        />
      )}
      <div>
        <div className="product-header">
          <h1>Recent Product</h1>
          <button
            onClick={() => {
              setShowModalAddProduct(true);
            }}
          >
            Add Product
          </button>
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
                    handleSetFormDataProduct={handleSetFormDataProduct}
                    formDataProduct={formDataProduct}
                    fetchDataProduct={fetchDataProduct}
                    handleShowSuccesAction={handleShowSuccesAction}
                    handleShowModalAddCertificateToProduct={handleShowModalAddCertificateToProduct}
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
