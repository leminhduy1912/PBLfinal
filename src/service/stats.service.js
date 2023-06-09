import { Axios } from "~config";

export const getStatsUsers = async (clientId, token) => {
  return await Axios({
    method: "GET",
    headers: {
      ACCESS_TOKEN: token,
      client_id: clientId,
    },
    url: "/private/adm/users/stats",
  });
};
export const getStatsCertificates = async (clientId, token) => {
  return await Axios({
    method: "GET",
    headers: {
      ACCESS_TOKEN: token,
      client_id: clientId,
    },
    url: "/private/adm/certificates/stats",
  });
};
export const getStatsPlans = async (clientId, token) => {
  return await Axios({
    method: "GET",
    headers: {
      ACCESS_TOKEN: token,
      client_id: clientId,
    },
    url: "/private/adm/plans/stats",
  });
};
