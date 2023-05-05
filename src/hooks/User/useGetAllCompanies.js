import { getAllCompanies } from "../../service/user.service";
import { useEffect, useState } from "react";
export const getAllCompaniesCurrent=()=>{
 
   
    const [errorCompanies, setErrorCompanies] = useState(null);
    const [dataCompanies,setDataCompanies]= useState([])
   
    useEffect( () => {
        let res;
        (
          async()=>{
           try {
           
            res= await getAllCompanies()
            if (res.meta.status_code==200){
                setDataCompanies(res.data.result);
            }
      
           } catch (error) {
            setErrorCompanies(error)
         
           } 
           
          }
        )()
      }, []);
    return {dataCompanies,errorCompanies}
}