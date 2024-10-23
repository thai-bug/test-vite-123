/* eslint-disable @typescript-eslint/no-explicit-any */
import { getPickingJobs } from "@/services/picking-job/picking-job.api";
import { IPickingJob } from "@/services/picking-job/picking-job.type";
import { useQuery } from "@tanstack/react-query";

interface IProps {
  queries?: any;
  enabled?: boolean;
}

const usePickingJobsQuery = ({ queries, enabled = true }: IProps) => {
  const data = useQuery<{
    data: IPickingJob[];
    total: number;
  }>({
    queryKey: ["picking-jobs", queries],
    queryFn: () => getPickingJobs(queries),
    enabled,
  });
  return { ...data };
};

export default usePickingJobsQuery;
