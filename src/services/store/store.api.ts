/* eslint-disable @typescript-eslint/no-explicit-any */
import httpClient from "@/client/httpClient";

export const getStores = async (payload: any) => {
  const response = await httpClient.get("/api/v1/stores", {
    params: payload,
  });

  return response.data;
};

export const getDetailStore = async (id: string) => {
  const response = await httpClient.get(`/api/v1/stores/${id}`);
  return response.data;
};
