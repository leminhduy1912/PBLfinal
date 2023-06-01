import { activePendingProduct } from "~service";
import { useState } from "react";

export const useActivePendingProduct = () => {
  const [successActivePendingProduct, setSuccessActivePendingProduct] =
    useState(false);

  const [errorActivePendingProduct, setErrorActivePendingProduct] =
    useState(null);
  const loadDataActivePendingProduct = async (id, clientId, token) => {
    let res;
    try {
      res = await activePendingProduct(id, clientId, token);
      if (res.meta.status_code == 200) {
        setSuccessActivePendingProduct(true);
      }
    } catch (error) {
      setErrorActivePendingProduct(error);
    }
  };
  return {
    successActivePendingProduct,
    errorActivePendingProduct,
    executeActivePendingProduct: loadDataActivePendingProduct,
  };
};

export default useActivePendingProduct;
