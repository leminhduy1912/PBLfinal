import Axios from "../config/axios.config";

export const getAllPlans = () => {
  return Axios({
    method: "GET",
    headers: {
      ACCESS_TOKEN: "ABC",
    },
    url: "/private/plans",
  });
};
