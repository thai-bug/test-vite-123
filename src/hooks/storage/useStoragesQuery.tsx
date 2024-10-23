/* eslint-disable @typescript-eslint/no-explicit-any */
import { getStorages } from "@/services/storage/storage.api";
import { IStorage } from "@/services/storage/storage.type";
import { useQuery } from "@tanstack/react-query";

interface IProps {
  queries?: any;
}

const useStoragesQuery = ({ queries }: IProps) => {
  const data = useQuery<{
    data: IStorage[];
    total: number;
  }>({
    queryKey: ["storages", queries],
    queryFn: () => getStorages(queries),
  });

  return { ...data };
};

export default useStoragesQuery;
