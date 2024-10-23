import { Link } from "@tanstack/react-router";
import { FC, useMemo, useState } from "react";
import { Button, Divider, Input, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { dayjs } from "@/utils/dayjs";
import { PlusOutlined } from "@ant-design/icons";
import StatusFFMTag from "@/components/helpers/StatusFFMTag";
import { IStorageLabel } from "@/services/storage-label/storage-label.type";
import CreateStorageLabelsModal from "./CreateModal";
import { IBaseTableProps } from "@/services/base/base.type";

interface StorageLabelsTableProps extends IBaseTableProps<IStorageLabel> {
  isShowCreate?: boolean;
}

const StorageLabelsTable: FC<StorageLabelsTableProps> = ({
  data,
  total,
  onSearch,
  onPageChange,
  onCreate,
  isLoading,
  limit = 10,
  page = 1,
  isShowCreate = true,
}) => {
  const [openCreateModal, setOpenCreateModal] = useState(false);

  const columns: ColumnsType<IStorageLabel> = useMemo(() => {
    return [
      {
        title: "Code",
        dataIndex: "code",
        key: "code",
        render: (text, record) => (
          <Link
            to={`/fulfillment/inbound/storage-labels/${record?.code}`}
            target="_blank"
          >
            {text}
          </Link>
        ),
      },
      {
        title: "Status",
        dataIndex: "status",
        key: "status",
        render: (value) => <StatusFFMTag status={value} />,
      },
      {
        title: "Quantity",
        dataIndex: "quantity",
        key: "quantity",
        render: (value) => value || "N|A",
      },
      {
        title: "Product",
        dataIndex: "product",
        key: "product",
        render: (_, { product }) => (
          <Link to={`/products/${product?.id}`}>{product?.name}</Link>
        ),
      },
      {
        title: "Created at",
        dataIndex: "createdAt",
        key: "createdAt",
        render: (value: string) => {
          return (
            dayjs(value).isValid() && dayjs(value).format("HH:mm DD/MM/YYYY")
          );
        },
      },
      {
        title: "Store",
        dataIndex: "store",
        key: "store",
        render: (_, { store }) => (
          <Link to={`/stores/${store?.id}`}>{store?.name}</Link>
        ),
      },
    ];
  }, []);

  return (
    <>
      {isShowCreate && (
        <div>
          <Button
            onClick={() => setOpenCreateModal(true)}
            icon={<PlusOutlined />}
          >
            Create Storage Labels
          </Button>
        </div>
      )}
      <div className="flex justify-end">
        <Input.Search
          allowClear
          size="large"
          className=" w-1/3"
          placeholder="Search ..."
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onSearch?.(e.currentTarget.value);
            }
          }}
          onClear={() => onSearch?.("")}
        />
      </div>
      <Divider />
      <Table
        rowKey={"code"}
        columns={columns}
        dataSource={data || []}
        loading={isLoading}
        pagination={{
          total: total || 0,
          onChange: onPageChange,
          pageSize: Number(limit) || 10,
          showSizeChanger: true,
          current: Number(page) || 1,
        }}
      />
      <CreateStorageLabelsModal
        open={openCreateModal}
        onOk={() => {
          setOpenCreateModal(false);
          onCreate?.();
        }}
        onCancel={() => setOpenCreateModal(false)}
      />
    </>
  );
};

export default StorageLabelsTable;
