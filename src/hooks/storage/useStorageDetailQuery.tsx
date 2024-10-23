import { getStorageDetail } from "@/services/storage/storage.api";
import { IStorage } from "@/services/storage/storage.type";
import { useQuery } from "@tanstack/react-query";

interface IProps {
  code: string;
  enabled?: boolean;
}

const useStorageDetailQuery = ({ code, enabled = true }: IProps) => {
  const data = useQuery<IStorage>({
    queryKey: ["storage-label-detail", code],
    queryFn: () => getStorageDetail(code),
    enabled,
  });

  return { ...data };
};

export default useStorageDetailQuery;
