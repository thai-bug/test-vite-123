/* eslint-disable @typescript-eslint/no-explicit-any */
import httpClient from "@/client/httpClient";

export const getPickingJobs = async (payload: any) => {
  const response = await httpClient.get(`/api/v1/ffm/outbound/picking-jobs`, {
    params: payload,
  });

  return response.data;
};

export const getPickingJobDetail = async (code?: string) => {
  const response = await httpClient.get(
    `/api/v1/ffm/outbound/picking-jobs/${code}`
  );
  return response.data;
};
