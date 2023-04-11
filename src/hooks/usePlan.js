import { useEffect } from "react";
import { useState } from "react";
import { getAllPlans } from "../service/plan.service";

export const usePlan = () => {
  const [data, setData] = useState({ hits: [] });
  useEffect(async () => {
    const result = await getAllPlans();

    setData(result.data);
  }, []);
};
