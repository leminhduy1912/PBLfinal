import Axios from "./../config/axios.config";

export const loginHandler = async (email, password) => {
  const formData = new FormData();
  formData.set("email", email);
  formData.set("password", password);
  return await Axios({
    method: "post",
    url: "/auth/login",
    data: formData,
  });
};
