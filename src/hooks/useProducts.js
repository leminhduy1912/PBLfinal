import { useEffect } from "react";
import { useState } from "react";
import { getAllProducts } from "./../service/product.service";
import { ConvertToQueryParams } from "../utils/ConvertToQueryParams";

export const useProduct = (url) => {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({});

  useEffect(() => {
    let res;
    (async () => {
      try {
        setLoading(true);
        const res = await getAllProducts(ConvertToQueryParams(url));
        setData(res.data.result);
        setPagination(res.pagination);
      } catch (error) {
        setError(error);
      } finally {
        if (res) setLoading(false);
      }
    })();
  }, [url]);
  return [data, pagination, error, loading];
};
