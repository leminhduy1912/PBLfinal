import axios from "axios";

const Axios = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
Axios.interceptors.response.use((response) => {
  // Thrown error for request with OK status code
  // const { data } = response;

  return response.data;
});

export default Axios;
