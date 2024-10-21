import httpClient from "@/client/httpClient"

export const getProducts = async (payload: any) => {
  const response = await httpClient.get('/api/v1/products', {
    params: payload
  })
  return response.data
}

export const getProductDetail = async (id: string) => {
  const response = await httpClient.get(`/api/v1/products/${id}`)
  return response.data
}