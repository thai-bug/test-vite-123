import httpClient from "@/client/httpClient";

export const getAllStores = async () => {
  const response = await httpClient.get("/api/v1/stores")
  return response.data
}

export const getDetailStore = async (id: string) => {
  const response = await httpClient.get(`/api/v1/stores/${id}`)
  return response.data
}