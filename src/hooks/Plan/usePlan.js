import { useEffect } from "react";
import { useState } from "react";
import { getAllPlans } from "../../service/plan.service";

export const usePlan = () => {
  const [data, setData] = useState([]);
  // const [loading,setLoading]=useState(false)
  const [error,setError]= useState(null)
  const loadDataPlan=async()=>{
   let res;
   try {
    res= await getAllPlans()
    setData(res.data.result);
   } catch (error) {
    setError(error)
   }
  }
  useEffect( () => {
 loadDataPlan()
  }, []);
  return {data,error,executeAllPlans:loadDataPlan}
};
