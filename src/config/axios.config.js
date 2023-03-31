import axios from "axios";

const Axios = axios.create({
  baseURL: import.meta.env.VITE_APP_BACKEND_URL,
});
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
Axios.interceptors.response.use((response) => {
  // Thrown error for request with OK status code
  // const { data } = response;

  return response.data;
});

export default Axios;
