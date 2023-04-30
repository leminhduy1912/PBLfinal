import { useState } from "react"
import { deleteCertificate } from "../../service/certificate.service";

export const useDeleteCertificate=()=>{
    const [error,setError]= useState(null)
    const [message,setMessage]= useState("")
    const handleDeleteCertificate=async(id)=>{
        try {
            let res;
            res = await deleteCertificate(id)
            setMessage(res.meta.message)
        } catch (error) {
            setError(error)
        }
    }
    return {message,error,execute:handleDeleteCertificate}
}