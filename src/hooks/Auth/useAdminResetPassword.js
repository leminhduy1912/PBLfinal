import { useState } from "react";
import { adminResetPassword } from "~service";

export const useAdminResetPassword = () => {
  const [successAdminResetPassword, setSuccessAdminResetPassword] =
    useState(false);
  const [errorAdminResetPassword, setErrorAdminResetPassword] = useState("");
  const [statusCodeAdminResetPasword, setStatusCodeAdminResetPasword] =
    useState();
  const loadAdminResetPassword = async (id, clientId, token) => {
    let res;
    try {
      res = await adminResetPassword(id, clientId, token);
      if (res.meta.status_code == 200) {
        setSuccessAdminResetPassword(true);
        setStatusCodeAdminResetPasword(200);
      }
    } catch (error) {
      setErrorAdminResetPassword(error);
    }
  };
  return {
    statusCodeAdminResetPasword,
    successAdminResetPassword,
    errorAdminResetPassword,
    executeAdminResetPassord: loadAdminResetPassword,
  };
};
