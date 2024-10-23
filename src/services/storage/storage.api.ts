/* eslint-disable @typescript-eslint/no-explicit-any */
import httpClient from "@/client/httpClient";

export const getStorages = async (payload: any) => {
  const response = await httpClient.get(`/api/v1/ffm/storages`, {
    params: payload,
  });
  return response.data;
};

export const getStorageDetail = async (code: string) => {
  const response = await httpClient.get(`/api/v1/ffm/storages/${code}`);

  return response.data;
};
