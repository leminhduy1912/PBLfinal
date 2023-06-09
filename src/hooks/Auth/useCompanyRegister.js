import { useState } from "react";
import { companyRegister } from "../../service/user.service";

export const useCompanyRegister = () => {
  // const [success,setSuccess]= useState(false)
  // const [message, setMessage] = useState('');
  // const [loading, setLoading] = useState(false);
  const [errorRegister, setErrorRegister] = useState("");
  const [statusCode, setStateCode] = useState();
  const loadCompanyRegister = async (Obj) => {
    let res;
    try {
      res = await companyRegister(Obj);
      setStateCode(res.meta.status_code);
    } catch (error) {
      setErrorRegister(error);
    }
  };
  return {
    statusCode,
    errorRegister,
    executeCompanyRegister: loadCompanyRegister,
  };
};
