/* eslint-disable @typescript-eslint/no-explicit-any */
import httpClient from "@/client/httpClient";

export const getPackingJobs = async (payload: any) => {
  const response = await httpClient.get(`/api/v1/ffm/outbound/packing-jobs`, {
    params: payload,
  });

  return response.data;
};

export const getPackingJobDetail = async (code?: string) => {
  const response = await httpClient.get(
    `/api/v1/ffm/outbound/packing-jobs/${code}`
  );
  return response.data;
};
