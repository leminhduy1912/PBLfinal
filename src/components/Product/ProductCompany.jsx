import { StoreContext } from "~store";
import { useGetAllProductCompany } from "../../hooks/Company/useGetAllProductCompany";
import React, { useContext, useState } from "react";
import { ProductRow } from "../../components/tables/product/ProductRow";
import { Pagination } from "@mui/material";
import DetailsProduct from "../form/Product/DetailsProduct/DetailsProduct";
import AddProduct from "../form/Product/AddProduct/AddProduct";
import { ToastContainer, toast } from "react-toastify";
const ProductCompany = () => {
  const [state] = useContext(StoreContext);
  const [pageCurrent, setPageCurrent] = useState(1);
  const [filter, setFilter] = useState({ page: 1 });
  const { pagination, data, error, loading, execute } = useGetAllProductCompany(
    filter,
    state.id,
    state.token
  );
  const [showModalDetailsProduct, setShowModalDetailsProduct] = useState(false);
  const handleShowMoDalDetailsProduct = (value) => {
    setShowModalDetailsProduct(value);
  };
  const [formDataProduct, setFormDataProduct] = useState({
    action: "",
    certificate: [],
    companyName: "",
    id: "",
    kindof: "",
    productName: "",
    product_type: {},
    userId: "",
  });
  const handleSetFormDataProduct = (Obj) => {
    setFormDataProduct(Obj);
  };
  const handleOnChange = (event, value) => {
    setPageCurrent(value);
    setFilter({ page: value });
  };
  const [showModalAddProduct, setShowModalAddProduct] = useState(false);
  const handleShowModalAddProduct = (value) => {
    setShowModalAddProduct(value);
  };
  const handleShowSuccesAction = (message) => {
    toast.success(message);
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {showModalDetailsProduct && (
        <DetailsProduct
          formDataProduct={formDataProduct}
          handleSetFormDataProduct={handleSetFormDataProduct}
          handleShowMoDalDetailsProduct={handleShowMoDalDetailsProduct}
        />
      )}
      {showModalAddProduct && (
        <AddProduct
          handleShowModalAddProduct={handleShowModalAddProduct}
          handleShowSuccesAction={handleShowSuccesAction}
        />
      )}
      <div className="product-header">
        <h1>Recent Product</h1>
        <button
          onClick={() => {
            setShowModalAddProduct(true);
          }}
        >
          Request Add Product
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
          {Array.isArray(data) &&
            data.map((item, index) => {
              return (
                <ProductRow
                  key={index}
                  index={index + 1 + (pageCurrent - 1) * 8}
                  product={item}
                  handleShowMoDalDetailsProduct={handleShowMoDalDetailsProduct}
                  handleSetFormDataProduct={handleSetFormDataProduct}
                  formDataProduct={formDataProduct}
                />
              );
            })}
        </tbody>
      </table>

      {pagination && (
        <>
          <br />
          <div className="pagination">
            <Pagination
              count={pagination.totalPages}
              showFirstButton
              showLastButton
              onChange={handleOnChange}
            />
          </div>
        </>
      )}
    </>
  );
};

export default ProductCompany;
