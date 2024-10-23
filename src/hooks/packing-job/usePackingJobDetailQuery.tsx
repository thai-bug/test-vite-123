import { getPackingJobDetail } from "@/services/packing-job/packing-job.api";
import { IPackingJob } from "@/services/packing-job/packing-job.type";
import { useQuery } from "@tanstack/react-query";

interface IProps {
  code?: string;
  enabled?: boolean;
}

const usePackingJobDetailQuery = ({ code, enabled = true }: IProps) => {
  const data = useQuery<IPackingJob>({
    queryKey: ["packing-job-detail", code],
    queryFn: () => getPackingJobDetail(code),
    enabled,
  });

  return { ...data };
};

export default usePackingJobDetailQuery;
