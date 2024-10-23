/* eslint-disable @typescript-eslint/no-explicit-any */
import { getStorageLabels } from "@/services/storage-label/storage-label.api";
import { IStorageLabel } from "@/services/storage-label/storage-label.type";
import { useQuery } from "@tanstack/react-query";

interface IProps {
  queries?: any;
  enabled?: boolean;
}

const useStorageLabelsQuery = ({ queries, enabled = true }: IProps) => {
  const data = useQuery<{
    data: IStorageLabel[];
    total: number;
  }>({
    queryKey: ["storageLabels", queries],
    queryFn: () => getStorageLabels(queries),
    enabled,
  });

  return { ...data };
};

export default useStorageLabelsQuery;
