/* eslint-disable @typescript-eslint/no-explicit-any */
import { getPackingJobs } from "@/services/packing-job/packing-job.api";
import { IPackingJob } from "@/services/packing-job/packing-job.type";
import { useQuery } from "@tanstack/react-query";

interface IProps {
  queries?: any;
  enabled?: boolean;
}

const usePackingJobsQuery = ({ queries, enabled = true }: IProps) => {
  const data = useQuery<{
    data: IPackingJob[];
    total: number;
  }>({
    queryKey: ["packing-jobs", queries],
    queryFn: () => getPackingJobs(queries),
    enabled,
  });

  return { ...data };
};

export default usePackingJobsQuery;
