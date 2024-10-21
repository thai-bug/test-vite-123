/* eslint-disable @typescript-eslint/no-explicit-any */
import httpClient from "@/client/httpClient";

export const getStorageLabels = async (payload: any) => {
  const response = await httpClient.get(`/api/v1/ffm/inbound/storage-labels`, {
    params: payload,
  });
  return response.data;
};

export const getStorageLabelDetail = async (code: string) => {
  const response = await httpClient.get(
    `/api/v1/ffm/inbound/storage-labels/${code}`
  );

  return response.data;
};

export const createStorageLabels = async (data: { quantity: string }) => {
  const quantity = Number(data.quantity);
  const response = await httpClient.post("/api/v1/ffm/inbound/storage-labels", {
    quantity,
  });
  return response?.data;
};

export const getStorageLabelHistories = async (payload: any) => {
  const response = await httpClient.get(
    `/api/v1/ffm/inbound/storage-labels/${payload.storageLabelCode}/histories`,
    {
      params: payload,
    }
  );

  return response.data;
};
