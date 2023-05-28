import React from "react";
import { useState, useCallback, useEffect } from "react";
import { getAllPost } from "../../service/post.service";
export const useGetAllPosts = (clientId, token) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  //   const [pagination, setPagination] = useState({});
  const [success, setSuccess] = useState(false);
  const loadData = useCallback(async (clientId, token) => {
    let res;
    try {
      setLoading(true);
      res = await getAllPost(clientId, token);
      if (res.meta.status_code == 200) {
        console.log("data", res.data.result);
        setData(res.data.result);
        // setPagination(res.pagination);
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
    // pagination,
    data,
    success,
    error,
    loading,
    execute: loadData,
  };
};
