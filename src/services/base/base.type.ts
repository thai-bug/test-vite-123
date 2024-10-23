export interface IBaseTableProps<T> {
  data?: T[];
  total?: number;
  onSearch?: (value: string) => void;
  onPageChange?: (page: number, pageSize: number) => void;
  onCreate?: () => void;
  isLoading?: boolean;
  limit?: number;
  page?: number;
}
