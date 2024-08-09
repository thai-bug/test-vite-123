/* eslint-disable @typescript-eslint/no-explicit-any */

import axios from "axios";

export const getPackages = async (payload: any) => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/api/v1/esim/packages`,
    {
      params: payload,
    }
  );

  return response.data;
};
