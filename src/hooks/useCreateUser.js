import { useEffect ,useState} from "react";
import { createCompanyUser,createUser } from "../service/user.service";


export const useCreateCompany=()=>{
    const [success,setSuccess]= useState(false)
    const [message, setMessage] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
 
    const createCompany=async(Object)=>{
        let res;
        try {
                res= await createCompanyUser(Object)
                if (res.meta.status_code==201){
                    setSuccess(true)
                    setMessage("Add New Company Success")
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
    const [message, setMessage] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
 
    const createUserAdmin=async(Object)=>{
        let res;
        try {
                res= await createUser(Object)
                if (res.meta.status_code==201){
                    setSuccess(true)
                    setMessage("Add New User Success")
                 
                } 
            
        } catch (error) {
            setError(error)
            setSuccess(false)
        }
      

    }
    return{ success,
            message,
             error,
             loading,
             execute: createUserAdmin
            }
}