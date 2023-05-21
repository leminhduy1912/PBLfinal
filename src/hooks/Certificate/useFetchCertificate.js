import axios from "axios";
import { getAllCertificate } from "../../service/certificate.service";
import { useState,useEffect } from "react";
import { ConvertToQueryParams } from "~utils";
export const useFetchCertificate = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [pagination,setPagination]= useState({})
    const [success,setSuccess]= useState(false)
   const loadData=async(url)=>{
    let res
    try {
      setLoading(true);
      res= await getAllCertificate(ConvertToQueryParams(url));
      if (res.meta.status_code==200){
        setData(res.data.result)
        setPagination(res.pagination)
        setSuccess(true)
      }
     
    }
    catch (error){
      setError(error)
    }
    finally{
      
      if (res !== undefined) {
        setLoading(false);
      }
    }
   }
     useEffect(()=>{
      loadData()
     },[])

     return { pagination,data,success, error, loading,execute:loadData }
  };