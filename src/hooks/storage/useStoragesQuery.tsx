/* eslint-disable @typescript-eslint/no-explicit-any */
import { getStorages } from "@/services/storage/storage.api";
import { IStorage } from "@/services/storage/storage.type";
import { useQuery } from "@tanstack/react-query";

interface IProps {
  queries?: any;
  enabled?: boolean;
}

const useStoragesQuery = ({ queries, enabled = true }: IProps) => {
  const data = useQuery<{
    data: IStorage[];
    total: number;
  }>({
    queryKey: ["storages", queries],
    queryFn: () => getStorages(queries),
    enabled,
  });

  return { ...data };
};

export default useStoragesQuery;
