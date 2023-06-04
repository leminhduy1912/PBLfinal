import { useState, useEffect } from "react";

import { useCallback } from "react";
import { getAllCertificatesAddProduct } from "../../service/certificate.service";
export const useGetCertificatesAddProduct = (clientId, token) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const loadData = useCallback(async (clientId, token) => {
    let res;
    try {
      res = await getAllCertificatesAddProduct(clientId, token);
      if (res.meta.status_code == 200) {
        setData(res.data.result);
        setSuccess(true);
      }
    } catch (error) {
      setError(error);
    }
  }, []);
  useEffect(() => {
    loadData(clientId, token);
  }, [loadData, clientId, token]);

  return {
    data,
    success,
    error,
    execute: loadData,
  };
};
