/* eslint-disable @typescript-eslint/no-explicit-any */
import httpClient from "@/client/httpClient";

export const getProducts = async (payload: any) => {
  const response = await httpClient.get(`/api/v1/products`, {
    params: payload,
  });

  return response.data;
};

export const assignProductToStorageLabel = async (payload: any) => {
  const response = await httpClient.post(
    `/api/v1/ffm/inbound/storage-labels/product`,
    payload
  );

  return response.data;
};
