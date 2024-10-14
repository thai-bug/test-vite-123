import httpClient from "@/client/httpClient"

export const login = async (data: { email: string; password: string }) => {
  const response = await httpClient.post('', data)
  return response?.data
}