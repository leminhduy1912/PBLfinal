import { Pagination } from "@mui/material";
import "./Product.css";
import { useEffect, useState } from "react";
import DetailsProduct from "../form/Product/DetailsProduct/DetailsProduct";
import ProductUpdate from "../form/Product/ProductUpdate/ProductUpdate";
import { ProductRow } from "~components";
import { useAdminProduct } from "~hooks";
import AddProduct from "../form/Product/AddProduct/AddProduct";
import ActionSuccess from "../ActionSuccess/ActionSuccess";
import AddCertificateToProduct from "../form/Product/AddCertificateToProduct/AddCertificateToProduct";
import { useContext } from "react";
import { StoreContext } from "~store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useGetPendingProduct } from "../../hooks/Product/useGetPendingProducts";

export const ProductAdmin = () => {
  const [state] = useContext(StoreContext);
  const [disableBtnGetAllProduct, setDisableBtnGetAllProduct] = useState(true);
  const [disableBtnGetPendingProduct, setDisableBtnPendingProduct] =
    useState(false);
  const handleGetProducts = () => {
    setDisableBtnPendingProduct(false);
    setDisableBtnGetAllProduct(true);
  };
  const handleGetPendindProducts = () => {
    setDisableBtnGetAllProduct(false);
    setDisableBtnPendingProduct(true);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState({ page: 1 });
  const { pagination, data, error, loading, executeDataProduct } =
    useAdminProduct();
  const handleOnChange = (event, value) => {
    setCurrentPage(value);
    setFilter({ page: value });
  };

  const [currentPagePendingProduct, setCurrentPagePendingProduct] = useState(1);
  const [filterPendingProduct, setFilterPendingProduct] = useState({ page: 1 });
  const {
    dataGetPendingProduct,
    paginationGetPendingProduct,
    errorGetPendingProduct,
    executeDataGetPendingProduct,
  } = useGetPendingProduct();
  const handleOnChangePendingProduct = (event, value) => {
    setCurrentPagePendingProduct(value);
    setFilterPendingProduct({ page: value });
  };
  useEffect(() => {
    if (disableBtnGetAllProduct === true) {
      executeDataProduct(filter, state.id, state.token);
    }
  }, [filter, disableBtnGetAllProduct]);
  useEffect(() => {
    if (disableBtnGetPendingProduct === true) {
      executeDataGetPendingProduct(filterPendingProduct, state.id, state.token);
    }
  }, [filterPendingProduct, disableBtnGetPendingProduct]);
  const fetchDataProduct = async () => {
    await executeDataProduct(filter, state.id, state.token);
  };

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
  const [
    showModalAddCertificateToProduct,
    setShowModalAddCertificateToProduct,
  ] = useState(false);
  const [idProduct, setIdProduct] = useState("");
  const handleShowModalAddCertificateToProduct = (Obj) => {
    setShowModalAddCertificateToProduct(Obj.value);
    Obj.id && setIdProduct(Obj.id);
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
  const [messageAction, setMessageAction] = useState("");
  const [showSuccessAction, setShowSuccessAction] = useState(false);
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
      {showModalAddCertificateToProduct && (
        <AddCertificateToProduct
          idProduct={idProduct}
          handleShowModalAddCertificateToProduct={
            handleShowModalAddCertificateToProduct
          }
          handleShowSuccesAction={handleShowSuccesAction}
          fetchDataProduct={fetchDataProduct}
        />
      )}

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
          handleShowSuccesAction={handleShowSuccesAction}
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
          <div>
            <button
              disabled={disableBtnGetAllProduct}
              onClick={handleGetProducts}
            >
              Get Products
            </button>
            <button
              disabled={disableBtnGetPendingProduct}
              onClick={handleGetPendindProducts}
            >
              Get Pending Product
            </button>
            <button
              onClick={() => {
                setShowModalAddProduct(true);
              }}
            >
              Add Product
            </button>
          </div>
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
            {disableBtnGetAllProduct &&
              Array.isArray(data) &&
              data.map((item, index) => {
                return (
                  <ProductRow
                    key={index}
                    index={index + 1 + (currentPage - 1) * 8}
                    product={item}
                    handleShowMoDalDetailsProduct={
                      handleShowMoDalDetailsProduct
                    }
                    handleShowMoDalUpdateProduct={handleShowMoDalUpdateProduct}
                    handleSetFormDataProduct={handleSetFormDataProduct}
                    formDataProduct={formDataProduct}
                    fetchDataProduct={fetchDataProduct}
                    handleShowSuccesAction={handleShowSuccesAction}
                    handleShowModalAddCertificateToProduct={
                      handleShowModalAddCertificateToProduct
                    }
                  />
                );
              })}
            {disableBtnGetPendingProduct &&
              Array.isArray(dataGetPendingProduct) &&
              dataGetPendingProduct.map((item, index) => {
                return (
                  <ProductRow
                    key={index}
                    index={index + 1 + (currentPage - 1) * 8}
                    product={item}
                    handleShowMoDalDetailsProduct={
                      handleShowMoDalDetailsProduct
                    }
                    handleShowMoDalUpdateProduct={handleShowMoDalUpdateProduct}
                    handleSetFormDataProduct={handleSetFormDataProduct}
                    formDataProduct={formDataProduct}
                    fetchDataProduct={fetchDataProduct}
                    handleShowSuccesAction={handleShowSuccesAction}
                    handleShowModalAddCertificateToProduct={
                      handleShowModalAddCertificateToProduct
                    }
                  />
                );
              })}
          </tbody>
        </table>

        {disableBtnGetAllProduct && pagination && (
          <>
            <br />
            <div className="pagination">
              <Pagination
                page={currentPage}
                count={pagination.totalPages}
                showFirstButton
                showLastButton
                onChange={handleOnChange}
              />
            </div>
          </>
        )}
        {disableBtnGetPendingProduct && paginationGetPendingProduct && (
          <>
            <br />
            <div className="pagination">
              <Pagination
                page={currentPagePendingProduct}
                count={paginationGetPendingProduct.totalPages}
                showFirstButton
                showLastButton
                onChange={handleOnChangePendingProduct}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};
