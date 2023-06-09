import { useState, useEffect } from "react";
import {
  getStatsCertificates,
  getStatsPlans,
  getStatsUsers,
} from "../../service/stats.service";
export const useGetStatsUsers = (clientId, token) => {
  const [dataStatsUsers, setDataStatsUsers] = useState([]);

  const [errorStatsUsers, setErrorStatsUsers] = useState(null);
  useEffect(() => {
    let res;
    (async () => {
      try {
        res = await getStatsUsers(clientId, token);
        if (res.meta.status_code === 200) {
          setDataStatsUsers(res.data.result);
        }
      } catch (error) {
        setErrorStatsUsers(error);
      }
    })();
  }, []);
  return { dataStatsUsers, errorStatsUsers };
};
export const useGetStatsCertificates = (clientId, token) => {
  const [dataStatsCertificates, setDataStatsCertificates] = useState([]);

  const [errorStatsCertificates, setErrorStatsCertificates] = useState(null);
  useEffect(() => {
    let res;
    (async () => {
      try {
        res = await getStatsCertificates(clientId, token);
        if (res.meta.status_code === 200) {
          setDataStatsCertificates(res.data.result);
        }
      } catch (error) {
        setErrorStatsCertificates(error);
      }
    })();
  }, []);
  return { dataStatsCertificates, errorStatsCertificates };
};
export const useGetStatsPlans = (clientId, token) => {
  const [dataStatsPlans, setDataStatsPlans] = useState([]);

  const [errorStatsPlans, setErrorStatsPlans] = useState(null);
  useEffect(() => {
    let res;
    (async () => {
      try {
        res = await getStatsPlans(clientId, token);
        if (res.meta.status_code === 200) {
          setDataStatsPlans(res.data.result);
        }
      } catch (error) {
        setErrorStatsPlans(error);
      }
    })();
  }, []);
  return { dataStatsPlans, errorStatsPlans };
};
