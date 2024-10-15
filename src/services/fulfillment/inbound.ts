import httpClient from "@/client/httpClient"

export const getStorageLabels = async () => {
  const response = await httpClient.get(`/api/v1/ffm/inbound/storage-labels`)
  return response.data
}