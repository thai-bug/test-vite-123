/* eslint-disable @typescript-eslint/no-explicit-any */
import { getStorageLabels } from "@/services/storage-label/storage-label.api";
import { IStorageLabel } from "@/services/storage-label/storage-label.type";
import { useQuery } from "@tanstack/react-query";

interface IProps {
  queries?: any;
}

const useStorageLabelsQuery = ({ queries }: IProps) => {
  const data = useQuery<{
    data: IStorageLabel[];
    total: number;
  }>({
    queryKey: ["storageLabels", queries],
    queryFn: () => getStorageLabels(queries),
  });

  return { ...data };
};

export default useStorageLabelsQuery;
