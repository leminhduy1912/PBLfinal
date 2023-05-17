import { useState} from "react";
import { createCompanyUser,createUser } from "../../service/user.service";


export const useCreateCompany=()=>{
    const [success,setSuccess]= useState(false)
    const [message, setMessage] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
 
    const createCompany=async(Object,id,token)=>{
        let res;
        try {   
                setLoading(true)
                res= await createCompanyUser(Object,id,token)
                if (res.meta.status_code==201){
                    setSuccess(true)
                    setMessage("Add New Company Success")
                    setLoading(false)
                } 
               
        } catch (error) {
            setError(error)
        }
}
    return{ success,
            message,
             error,
             loading,
             execute: createCompany
            }
}
export const useCreateUser=()=>{
    const [success,setSuccess]= useState(false)
    const [message,setMessage]= useState('')
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const createUserAdmin=async(Object,clientId,token)=>{
        let res;
        try {   
                setLoading(true)
                res= await createUser(Object,clientId,token) 
                if (res.meta.status_code==201){
                    setSuccess(true)
                    setMessage("Add New User Success")
                    setLoading(false)
                }   
        } catch (error) {
            setError(error)
        }
      
}


    return{ success,
            message,
             error,
             loading,
             execute: createUserAdmin
            }
}