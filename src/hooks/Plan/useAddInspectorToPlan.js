import { useState } from "react";
import { addInspectorToPlan } from "../../service/plan.service";

export const useAddInspectorToPlan=()=>{

 

    const [errorAddInspectorToPlan, setErrorAddInspectorToPlan]= useState("");
    const loadAddInspectorToPlan=async(Obj,clientId,token)=>{
let res;
try {
             res   =  await addInspectorToPlan(Obj,clientId,token)
//  if(res.meta.status_code==201){
//     setSuccessEditTimePlan(true)
//     setMessageEditTimePlan("Updated Plan")
//  }
} catch (error) {
    setErrorAddInspectorToPlan(error)
}
    }
    return {errorAddInspectorToPlan,executeAddInspectorToPlan:loadAddInspectorToPlan}
}