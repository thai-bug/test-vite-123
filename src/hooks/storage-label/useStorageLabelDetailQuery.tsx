import { getStorageLabelDetail } from "@/services/storage-label/storage-label.api";
import { IStorageLabel } from "@/services/storage-label/storage-label.type";
import { useQuery } from "@tanstack/react-query";

interface IProps {
  code: string;
}

const useStorageLabelDetailQuery = ({ code }: IProps) => {
  const data = useQuery<IStorageLabel>({
    queryKey: ["storage-label-detail", code],
    queryFn: () => getStorageLabelDetail(code),
  });

  return { ...data };
};

export default useStorageLabelDetailQuery;
