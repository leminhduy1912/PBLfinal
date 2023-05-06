import { useEffect, useState } from "react";
import { getAllProducts } from "~service";
import { ConvertToQueryParams } from "~utils";

export const useAdminProduct = (url) => {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({});
const loadDataProduct=async(url)=>{
  let res;
  try {
    setLoading(true);
    res = await getAllProducts(ConvertToQueryParams(url));
    setData(res.data.result);
    setPagination(res.pagination);
  } catch (error) {
    setError(error);
  } finally {
    if(res !== undefined){
      setLoading(false);
    }
  }
}
  useEffect(() => {
   loadDataProduct(url)
  }, [url]);

  return { data: { items: data, pagination }, error, loading,executeDataProduct:loadDataProduct };
};
