import { useEffect, useState } from "react";
import { getAllUser } from "../service/user.service";
import { ConvertToQueryParams } from "../utils/ConvertToQueryParams";

export const useFetchUser = (url) => {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({});

  // (async () => {
  //   let res;
  //   try {
  //     setLoading(true);
  //     res = await getAllUser(ConvertToQueryParams(url));
  //     setData(res.data.result);
  //     setPagination(res.pagination);
  //   } catch (error) {
  //     setError(error);
  //   } finally {
  //      console.log(res);
  //     if (res !== undefined) {
  //       setLoading(false);
  //     }
  //   }
  // })();
  const loadData= async(url)=>{
  
      let res;
      try {
        setLoading(true);
        res = await getAllUser(ConvertToQueryParams(url));
        setData(res.data.result);
        setPagination(res.pagination);
       
        console.log(data);
        console.log(pagination);
      } catch (error) {
        setError(error);
      } finally {
      
        if (res !== undefined) {
          setLoading(false);
        }
      }

  }
  useEffect(() => {
    loadData(url)
  }, [url]);

  return { 
    data, 
    pagination, 
    error, 
    loading ,
    executeDataUser: loadData
  };
};
