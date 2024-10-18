import httpClient from "@/client/httpClient"

export const login = async (data: { username: string; password: string }) => {
  const response = await httpClient.post('/api/v1/auth/login', data)
  return response?.data
}

export const getUserProfile = async () => {
  const response = await httpClient.get('/api/v1/auth/profile');
  return response.data
}