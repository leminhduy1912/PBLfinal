import { useContext, useEffect, useState } from "react";
import { useAddCertificateToProduct } from "../../../../hooks/Certificate/useAddCertificateToProduct";
// import { useFetchCertificate } from "../../../../hooks/Certificate/useFetchCertificate";
import "./AddCertificateToProduct.css";
import ClearIcon from "@mui/icons-material/Clear";
import { StoreContext } from "~store";

import { useGetCertificatesAddProduct } from "../../../../hooks/Certificate/useGetAllCertificatesAddProduct";
const AddCertificateToProduct = (props) => {
  console.log("hhahaha");
  // console.log("id",props.idProduct);
  const [state] = useContext(StoreContext);
  const [listCertificates, setListCertificates] = useState([]);
  const { data, success, error, execute } = useGetCertificatesAddProduct(
    state.id,
    state.token
  );
  useEffect(() => {
    if (success) {
      setListCertificates(data);
    }
  }, [success]);
  const [certificateId, setCertificateId] = useState("");
  const {
    successAddCertificateToProduct,
    messageAddCertificateToProduct,
    errorAddCertificateToProduct,
    executeAddCertificateToProduct,
  } = useAddCertificateToProduct();
  const handleAddCertificateToProduct = async (e) => {
    e.preventDefault();
    await executeAddCertificateToProduct({
      productId: props.idProduct,
      certificateId: certificateId,
    });
    await props.handleShowModalAddCertificateToProduct({ value: false });
    props.handleShowSuccesAction("Added Certificate To Product");
    props.fetchDataProduct();
  };
  return (
    <>
      {listCertificates &&
        listCertificates.length > 0 &&
        Array.isArray(listCertificates) && (
          <div className="add-certificate-product-container">
            <div className="add-certificate-product-content">
              <h1>Add Certificate To Product</h1>

              <div className="x-icon">
                <ClearIcon
                  onClick={() => {
                    props.handleShowModalAddCertificateToProduct({
                      value: false,
                    });
                  }}
                />
              </div>

              <form action="">
                <div className="form-group">
                  <label htmlFor="Product Kind" className="form-input-control">
                    Certificate Name
                  </label>
                  <select
                    name=""
                    id=""
                    onChange={(e) => {
                      setCertificateId(e.target.value);
                    }}
                  >
                    <option value="" disabled selected>
                      --None--
                    </option>
                    {data.map((item, index) => {
                      return (
                        <option key={index} value={item.id}>
                          {item.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </form>

              <button onClick={handleAddCertificateToProduct}>Submit</button>
            </div>
          </div>
        )}
    </>
  );
};

export default AddCertificateToProduct;
