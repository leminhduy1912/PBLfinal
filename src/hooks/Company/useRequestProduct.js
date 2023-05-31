import { useState } from "react";
import { companyRequestProduct, createNewProduct } from "~service";

export const useRequestProduct = () => {
  const [successRequestProduct, setSuccessRequestProduct] = useState(false);

  const [errorRequestProduct, setErrorRequestProduct] = useState(null);

  const loadDataRequestProduct = async (Obj, clientId, token) => {
    let res;
    try {
      res = await companyRequestProduct(Obj, clientId, token);
      if (res.meta.status_code == 201) {
        setSuccessRequestProduct(true);
      }
    } catch (error) {
      setErrorRequestProduct(error);
    }
  };
  return {
    successRequestProduct,
    errorRequestProduct,
    executeRequestProduct: loadDataRequestProduct,
  };
};
