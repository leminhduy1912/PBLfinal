import { useState } from "react"
import { deleteCertificate } from "../../service/certificate.service";

export const useDeleteCertificate=()=>{
    const [success,setSuccess]= useState(false)
    const [error,setError]= useState(null)
    const [message,setMessage]= useState("")
    const handleDeleteCertificate=async(id)=>{
        let res;
        try {
            res = await deleteCertificate(id)
            if (res.meta.status_code==204){
                setSuccess(true)
                setMessage(res.meta.message)
            }            

        } catch (error) {
            setError(error)
        }
    }
    return {success,message,error,execute:handleDeleteCertificate}
}