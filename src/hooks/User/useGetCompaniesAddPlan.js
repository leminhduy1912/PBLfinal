import { getAllCompaniesAddPlan } from "../../service/user.service";
import { useEffect, useState, useCallback } from "react";
export const useGetAllCompaniesAddPLan = (clientId, token) => {
  const [errorGetAllCompaniesAddPlan, setErrorGetAllCompaniesAddPlan] =
    useState(null);
  const [successGetAllCompaniesAddPlan, setSuccessGetAllCompaniesAddPlan] =
    useState(false);
  const [dataGetAllCompaniesAddPlan, setDataGetAllCompaniesAddPlan] = useState(
    []
  );
  const loadDataGetAllCompaniesAddPlan = useCallback(
    async (clientId, token) => {
      let res;
      try {
        res = await getAllCompaniesAddPlan(clientId, token);
        if (res.meta.status_code == 200) {
          setDataGetAllCompaniesAddPlan(res.data.result);
          setSuccessGetAllCompaniesAddPlan(true);
        }
      } catch (error) {
        setErrorGetAllCompaniesAddPlan(error);
      }
    },
    []
  );
  useEffect(() => {
    loadDataGetAllCompaniesAddPlan(clientId, token);
  }, [loadDataGetAllCompaniesAddPlan, clientId, token]);

  return {
    successGetAllCompaniesAddPlan,
    dataGetAllCompaniesAddPlan,
    errorGetAllCompaniesAddPlan,
    executeDataGetAllCompaniesAddPlan: loadDataGetAllCompaniesAddPlan,
  };
};
