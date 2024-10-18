import { getStorageLabelHistories } from "@/services/fulfillment/storage-label";
import { dayjs } from "@/utils/dayjs";
import { useQuery } from "@tanstack/react-query";
import { Table, Typography } from "antd";
import { ColumnsType } from "antd/es/table";
import React, { FC, useMemo } from "react";

interface StorageLabelHistoryTableProps {
  storageLabelCode?: string;
}

const StorageLabelHistoryTable: FC<StorageLabelHistoryTableProps> = ({
  storageLabelCode,
}) => {
  const [currentPage, setCurrentPage] = React.useState(1);

  const { data, isLoading } = useQuery({
    queryKey: ["storageLabelHistory", storageLabelCode, currentPage],
    queryFn: () =>
      getStorageLabelHistories({
        storageLabelCode,
        page: currentPage,
      }),
    enabled: !!storageLabelCode,
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
          Storage label histories of {storageLabelCode}
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

export default StorageLabelHistoryTable;
