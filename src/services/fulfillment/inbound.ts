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

export const createStorageLabels = async (quantity: number) => {
  const response = await httpClient.post('/api/v1/ffm/inbound/storage-labels')
}