import { useState } from "react";
import { deletePlan } from "../../service/plan.service";
export const useDeletePlan=()=>{
    
   
    const [errorDeletePlan, setErrorDeletePlan]= useState(null); 
    const loadDeletePlan=async(planId)=>{
        let res;
        try {
            res= await deletePlan(planId)

        } catch (error) {
            setErrorDeletePlan(error)
        }
    }
    return {errorDeletePlan,executeDeletePlan:loadDeletePlan}
}