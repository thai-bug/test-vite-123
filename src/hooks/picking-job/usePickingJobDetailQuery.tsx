import { getPickingJobDetail } from "@/services/picking-job/picking-job.api";
import { IPickingJob } from "@/services/picking-job/picking-job.type";
import { useQuery } from "@tanstack/react-query";

interface IProps {
  code?: string;
  enabled?: boolean;
}

const usePickingJobDetailQuery = ({ code, enabled = true }: IProps) => {
  const data = useQuery<IPickingJob>({
    queryKey: ["picking-job-detail", code],
    queryFn: () => getPickingJobDetail(code),
    enabled,
  });

  return { ...data };
};

export default usePickingJobDetailQuery;
