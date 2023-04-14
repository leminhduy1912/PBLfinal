import { useEffect, useState } from "react";
import { getAllProducts } from "~service";
import { ConvertToQueryParams } from "~utils";

export const useAdminProduct = (url) => {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({});
  console.log(ConvertToQueryParams(url));
  useEffect(() => {
    (async () => {
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
    })();
  }, [url]);

  return { data: { items: data, pagination }, error, loading };
};
