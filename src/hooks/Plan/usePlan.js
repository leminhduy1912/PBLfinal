import { useEffect } from "react";
import { useState } from "react";
import { getAllPlans } from "../../service/plan.service";

export const usePlan = () => {
  const [data, setData] = useState([]);
  const [loading,setLoading]=useState(false)
  const [error,setError]= useState(null)
  useEffect( () => {
    let res;
    (
      async()=>{
       try {
        setLoading(true)
        res= await getAllPlans()
        setData(res.data.result);
  
       } catch (error) {
        setError(error)
       } finally{
        if (res !== undefined) {
          setLoading(false);
        }
       }
      }
    )()
  }, []);
  return {data,loading,error}
};
