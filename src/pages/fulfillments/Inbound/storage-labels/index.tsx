import { getRouteApi, Link } from "@tanstack/react-router";
import { IQuery } from "@/utils/models";
import { useEffect, useMemo, useState } from "react";
import { useSetRecoilState } from "recoil";
import { Button, Card, Divider, Input, Table } from "antd";
import { RoutesState } from "@/states/route.state";
import { ColumnsType } from "antd/es/table";
import { dayjs } from "@/utils/dayjs";
import { PlusOutlined } from "@ant-design/icons";
import StatusFFMTag from "@/components/helpers/StatusFFMTag";
import CreateStorageLabelsModal from "./components/CreateModal";
import { IStorageLabel } from "@/services/storage-label/storage-label.type";
import { useStorageLabelsQuery } from "@/hooks/storage-label";

const routeApi = getRouteApi("/fulfillment/inbound/storage-labels/");

const StorageLabels = () => {
  const queries: IQuery = routeApi.useSearch();
  const navigate = routeApi.useNavigate();
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const setRoutesPath = useSetRecoilState(RoutesState);

  const { data, isLoading, refetch } = useStorageLabelsQuery({ queries });

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

  useEffect(() => {
    setRoutesPath([
      {
        path: "/fulfillment/inbound/storage-labels",
        name: "Storage Labels",
      },
    ]);
  }, [setRoutesPath]);

  return (
    <Card title="Storage Labels">
      <div>
        <Button
          onClick={() => setOpenCreateModal(true)}
          icon={<PlusOutlined />}
        >
          Create Storage Labels
        </Button>
      </div>
      <div className="flex justify-end">
        <Input.Search
          allowClear
          size="large"
          className=" w-1/3"
          placeholder="Search ..."
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              navigate({
                search: {
                  ...queries,
                  page: 1,
                  search: e.currentTarget.value,
                },
              });
            }
          }}
        />
      </div>
      <Divider />
      <Table
        rowKey={"code"}
        columns={columns}
        dataSource={data?.data || []}
        loading={isLoading}
        pagination={{
          total: data?.total || 0,
          onChange(page, pageSize) {
            navigate({
              search: {
                ...queries,
                page: page,
                limit: pageSize,
              },
            });
          },
          pageSize: Number(queries?.limit) || 10,
          showSizeChanger: true,
          current: Number(queries?.page) || 1,
        }}
      />
      <CreateStorageLabelsModal
        open={openCreateModal}
        onOk={() => {
          setOpenCreateModal(false);
          refetch();
        }}
        onCancel={() => setOpenCreateModal(false)}
      />
    </Card>
  );
};

export default StorageLabels;
