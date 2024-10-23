import httpClient from "@/client/httpClient";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const updateStorageLabelHistory = async (data: any) => {
  const response = await httpClient.put(
    `/api/v1/ffm/inbound/storage-label-histories/${data.id}`,
    data
  );
  return response.data;
};

export const getStorageLabelHistories = async (payload: any) => {
  const response = await httpClient.get(
    `/api/v1/ffm/inbound/storage-label-histories`,
    {
      params: payload,
    }
  );

  return response.data;
};
