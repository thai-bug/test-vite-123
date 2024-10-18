import httpClient from "@/client/httpClient"

export const getStorageLabels = async () => {
  const response = await httpClient.get(`/api/v1/ffm/inbound/storage-labels`)
  return response.data
}

export const createStorageLabels = async (data: { quantity: string }) => {
  const quantity = Number(data.quantity);
  const response = await httpClient.post('/api/v1/ffm/inbound/storage-labels', { quantity });
  return response?.data;
}

export const getDetailStorageLabels = async (code: string) => {
  const response = await httpClient.get(`/api/v1/ffm/inbound/storage-labels/${code}`)
  return response?.data
}