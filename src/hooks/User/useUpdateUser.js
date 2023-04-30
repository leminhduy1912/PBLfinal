import { updateUser } from "../../service/user.service";
import { useState } from "react";
export const useUpdateUser=()=>{
    const [message,setMessage]= useState('')
    const [success,setSuccess]= useState(false)
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
     const handleUpdateUser=async(Obj,id)=>{
        console.log("Obj",Obj);
        console.log("id",id);
        console.log("hook update");
        try {
            let res;
            res = await updateUser(Obj,id)
            setMessage(res.meta.message)
            if (res.meta.status_code==201){
                setSuccess(true)
                setLoading(true)
            }
            console.log(message);
        } catch (error) {
            setError(error)
        }
     }
     return {success,error,loading,execute:handleUpdateUser}
}