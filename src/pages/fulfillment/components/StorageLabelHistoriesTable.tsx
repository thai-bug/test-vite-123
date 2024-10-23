import StatusFFMTag from "@/components/helpers/StatusFFMTag";
import { IBaseTableProps } from "@/services/base/base.type";
import { updateStorageLabelHistory } from "@/services/storage-label-history/storage-label-history.api";
import {
  IStorageLabel,
  IStorageLabelHistory,
} from "@/services/storage-label/storage-label.type";
import { dayjs } from "@/utils/dayjs";
import { FFMStatus } from "@/utils/enums/ffm";
import { CheckCircleOutlined } from "@ant-design/icons";
import { useMutation } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { Button, Table, Tooltip, Typography } from "antd";
import { ColumnsType } from "antd/es/table";
import { FC, useMemo } from "react";

interface StorageLabelHistoriesProps
  extends IBaseTableProps<IStorageLabelHistory> {
  onItemUpdated?: () => void;
}

const StorageLabelHistories: FC<StorageLabelHistoriesProps> = ({
  data,
  onItemUpdated,
}) => {
  const updateStorageLabelHistoryMutate = useMutation({
    mutationFn: updateStorageLabelHistory,
    onSuccess: () => {
      onItemUpdated?.();
    },
    onError: () => {},
  });

  const columns: ColumnsType<IStorageLabelHistory> = useMemo(() => {
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
        title: "Storage",
        dataIndex: "storageLabel",
        key: "storage",
        render: (value: IStorageLabel) => {
          const { storage } = value;

          return (
            <Link to={`/fulfillment/storages/${storage?.code}`} target="_blank">
              {storage?.code}
            </Link>
          );
        },
      },
      {
        title: "Label",
        dataIndex: "storageLabel",
        key: "storageLabel",
        render: (value: IStorageLabel) => {
          return (
            <Link
              to={`/fulfillment/inbound/storage-labels/${value?.code}`}
              target="_blank"
            >
              {value?.code}
            </Link>
          );
        },
      },
      {
        title: "Product",
        dataIndex: "storageLabel",
        key: "product",
        render: (value: IStorageLabel) => {
          const { product } = value;
          return (
            <Link to={`/products/${product?.id}`} target="_blank">
              {product?.name}
            </Link>
          );
        },
      },
      {
        title: "Status",
        dataIndex: "status",
        key: "status",
        render: (value) => <StatusFFMTag status={value} />,
      },
      {
        title: "Created At",
        dataIndex: "createdAt",
        key: "createdAt",
        render: (value) => dayjs(value).format("YYYY-MM-DD HH:mm:ss"),
      },
      {
        title: "",
        dataIndex: "actions",
        key: "id",
        render: (_, record: IStorageLabelHistory) => {
          if (record.status === FFMStatus.PICKING) {
            return (
              <Tooltip title="Just tick when item is picked">
                <Button
                  type="primary"
                  icon={<CheckCircleOutlined />}
                  onClick={() =>
                    updateStorageLabelHistoryMutate.mutate({
                      id: record.id,
                      status: FFMStatus.PICKED,
                    })
                  }
                >
                  Picked
                </Button>
              </Tooltip>
            );
          }
        },
      },
    ];
  }, [updateStorageLabelHistoryMutate]);

  return (
    <Table dataSource={data} columns={columns} rowKey="id" pagination={false} />
  );
};

export default StorageLabelHistories;
