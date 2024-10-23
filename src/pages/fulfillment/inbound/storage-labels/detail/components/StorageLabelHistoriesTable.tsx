import { getStorageLabelHistories } from "@/services/storage-label/storage-label.api";
import {
  IStorageLabel,
  IStorageLabelHistory,
} from "@/services/storage-label/storage-label.type";
import { dayjs } from "@/utils/dayjs";
import { useQuery } from "@tanstack/react-query";
import { Table, Typography } from "antd";
import { ColumnsType } from "antd/es/table";
import React, { FC, useMemo } from "react";

interface StorageLabelHistoriesTableProps {
  storageLabel?: IStorageLabel;
}

const StorageLabelHistoriesTable: FC<StorageLabelHistoriesTableProps> = ({
  storageLabel,
}) => {
  const [currentPage, setCurrentPage] = React.useState(1);

  const { data, isLoading } = useQuery<{
    data: IStorageLabelHistory[];
    total: number;
  }>({
    queryKey: ["storageLabelHistory", storageLabel?.id, currentPage],
    queryFn: () =>
      getStorageLabelHistories({
        storageLabelId: storageLabel?.id,
        page: currentPage,
      }),
    enabled: !!storageLabel?.id,
  });

  const columns: ColumnsType = useMemo(() => {
    return [
      {
        title: "ID",
        dataIndex: "id",
        key: "id",
      },
      {
        title: "Quantity",
        dataIndex: "quantity",
        key: "quantity",
        render: (value) => {
          return (
            <Typography.Text type={value > 1 ? "success" : "danger"}>
              {value}
            </Typography.Text>
          );
        },
      },
      {
        title: "Status",
        dataIndex: "status",
        key: "status",
      },
      {
        title: "Created At",
        dataIndex: "createdAt",
        key: "createdAt",
        render: (value) => dayjs(value).format("YYYY-MM-DD HH:mm:ss"),
      },
    ];
  }, []);

  return (
    <Table
      title={() => (
        <Typography.Title level={5}>
          Storage label histories of {storageLabel?.code}
        </Typography.Title>
      )}
      loading={isLoading}
      dataSource={data?.data}
      columns={columns}
      rowKey={"id"}
      pagination={{
        current: currentPage,
        total: data?.total,
        pageSize: 10,
        onChange: (page) => {
          setCurrentPage(page);
        },
      }}
    />
  );
};

export default StorageLabelHistoriesTable;
