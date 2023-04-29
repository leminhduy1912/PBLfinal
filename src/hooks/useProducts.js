import { useState } from "react";
import { getAllProducts } from "~service";
import { ConvertToQueryParams } from "~utils";

export const useProduct = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({});

  const loadData = async (url) => {
    let res = {};
    try {
      setLoading(true);
      res = await getAllProducts(ConvertToQueryParams(url));
      setData(res.data.result);
      setPagination(res.pagination);
    } catch (error) {
      setError(error);
    } finally {
      // console.log(res);
      if (res !== undefined) {
        setLoading(false);
      }
    }
  };

 
  return {
    data: { items: data, pagination },
    error,
    loading,
    execute: loadData,
  };
};
