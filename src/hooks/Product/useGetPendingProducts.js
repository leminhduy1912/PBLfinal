import { useCallback } from "react";
import { useEffect, useState } from "react";
import { getAllPendingProduct } from "~service";

import { ConvertToQueryParams } from "~utils";

export const useGetPendingProduct = () => {
  const [dataGetPendingProduct, setDataGetPendingProduct] = useState({});
  const [errorGetPendingProduct, setErrorGetPendingProduct] = useState(null);

  const [paginationGetPendingProduct, setPaginationGetPendingProduct] =
    useState({});
  const loadDataPendingProduct = useCallback(async (url, clientId, token) => {
    let res;
    try {
      res = await getAllPendingProduct(
        ConvertToQueryParams(url),
        clientId,
        token
      );
      if (res.meta.status_code === 200) {
        setDataGetPendingProduct(res.data.result);
        setPaginationGetPendingProduct(res.pagination);
      }
    } catch (error) {
      setErrorGetPendingProduct(error);
    }
  }, []);

  useEffect(() => {
    loadDataPendingProduct();
  }, [loadDataPendingProduct]);

  return {
    dataGetPendingProduct,
    paginationGetPendingProduct,
    errorGetPendingProduct,
    executeDataGetPendingProduct: loadDataPendingProduct,
  };
};
