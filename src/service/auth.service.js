import axios from "axios";
import Axios from "./../config/axios.config";

export const loginHandler = (formData) => {
  return Axios({
    method: "post",
    url: "/auth/login",
    data: formData,
  });
};
