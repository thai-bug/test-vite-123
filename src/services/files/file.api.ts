/* eslint-disable @typescript-eslint/no-explicit-any */
import httpClient from "@/client/httpClient";

export const uploadImage = async (data: any) => {
  const response = await httpClient.post("/api/v1/files", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return response.data;
};
