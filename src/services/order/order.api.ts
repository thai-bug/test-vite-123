/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

export const createOrder = async (payload: any) => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/api/v1/orders`,
    payload,
    {
      headers: {
        Authorization: `bearer ${sessionStorage.getItem("accessToken")}`,
      },
    }
  );

  return response.data;
};
