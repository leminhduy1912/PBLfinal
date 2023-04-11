import { useState } from "react";
import { getAllProducts } from "~service";
import { ConvertToQueryParams } from "~utils";

export const useProduct = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({});

  const loadData = async (url) => {
    let res = null;
    try {
      setLoading(true);
      res = await getAllProducts(ConvertToQueryParams(url));
      setData(res.data.result);
      setPagination(res.pagination);
    } catch (error) {
      setError(error);
    } finally {
      if (res !== null) setLoading(false);
    }
  };

  // useEffect(() => {
  //   // async () => {
  //   //   let res = null;
  //   //   try {
  //   //     setLoading(true);
  //   //     res = await getAllProducts(ConvertToQueryParams(url));
  //   //     setData(res.data.results);
  //   //     setPagination(res.pagination);
  //   //   } catch (error) {
  //   //     setError(error);
  //   //   } finally {
  //   //     if (res !== null) setLoading(false);
  //   //   }
  //   // };
  //   loadData();
  // }, [url, loadData]);
  return {
    data: { items: data, pagination },
    error,
    loading,
    execute: loadData,
  };
};
