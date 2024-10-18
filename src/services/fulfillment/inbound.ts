/* eslint-disable @typescript-eslint/no-explicit-any */
import httpClient from "@/client/httpClient";

export const getStorageLabels = async (payload: any) => {
  const response = await httpClient.get(`/api/v1/ffm/inbound/storage-labels`, {
    params: payload,
  });
  return response.data;
};
