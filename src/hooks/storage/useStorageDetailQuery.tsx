import { getStorageDetail } from "@/services/storage/storage.api";
import { IStorage } from "@/services/storage/storage.type";
import { useQuery } from "@tanstack/react-query";

const useStorageDetailQuery = (code: string) => {
  const data = useQuery<IStorage>({
    queryKey: ["storage-label-detail", code],
    queryFn: () => getStorageDetail(code),
  });

  return { ...data };
};

export default useStorageDetailQuery;
