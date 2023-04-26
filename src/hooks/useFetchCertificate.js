import axios from "axios";
import { getAllCertificate } from "../service/certificate.service";
import { useState,useEffect } from "react";
export const useFetchCertificate = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
 
     useEffect(()=>{
      let res ;
       (async()=>{
        try {
          setLoading(true);
          res= await getAllCertificate();
          setData(res.data.result)
         
        }
        catch (error){
          setError(error)
        }
        finally{
          
          if (res !== undefined) {
            setLoading(false);
          }
        }
      })()
     },[])

     return { data, error, loading }
  };