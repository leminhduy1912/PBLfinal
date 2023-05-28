import { Axios } from "~config";

export const getAllPost = async (clientId, token) => {
  return await Axios({
    method: "GET",
    headers: {
      ACCESS_TOKEN: token,
      client_id: clientId,
    },
    // withCredentials: true,
    url: "/private/adm/posts",
  });
};
