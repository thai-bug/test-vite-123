import StatusFFMTag from "@/components/helpers/StatusFFMTag";
import { useStoragesQuery } from "@/hooks/storage";
import { IStorage } from "@/services/storage/storage.type";
import { IWarehouse } from "@/services/warehouse/warehouse.type";
import { RoutesState } from "@/states/route.state";
import { dayjs } from "@/utils/dayjs";
import { FFMStatus } from "@/utils/enums/ffm";
import { IQuery } from "@/utils/models";
import { getRouteApi, Link } from "@tanstack/react-router";
import { Card, Divider, Input, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { useEffect, useMemo } from "react";
import { useSetRecoilState } from "recoil";

const routeApi = getRouteApi("/fulfillment/storages/");

const StoragesPage = () => {
  const queries: IQuery = routeApi.useSearch();
  const navigate = routeApi.useNavigate();
  const setRoutesPath = useSetRecoilState(RoutesState);

  const { data, isLoading } = useStoragesQuery({ queries });

  const columns: ColumnsType<IStorage> = useMemo(() => {
    return [
      {
        title: "Code",
        dataIndex: "code",
        render: (value) => {
          return (
            <Link to={`/fulfillment/storages/${value}`} target="_blank">
              {value}
            </Link>
          );
        },
      },
      {
        title: "status",
        dataIndex: "status",
        render: (value: FFMStatus) => {
          return <StatusFFMTag status={value} />;
        },
      },
      {
        title: "Warehouse",
        dataIndex: "warehouse",
        render: (value: IWarehouse) => {
          return (
            <Link
              to={`/fulfillment/inbound/warehouses/${value.id}`}
              target="_blank"
            >
              {value?.name}
            </Link>
          );
        },
      },
      {
        title: "Created at",
        dataIndex: "createdAt",
        render: (value: Date) => {
          return dayjs(value).format("DD/MM/YYYY HH:mm:ss");
        },
      },
    ];
  }, []);

  useEffect(() => {
    setRoutesPath([
      {
        name: "Storages",
      },
    ]);
  }, [setRoutesPath]);

  return (
    <Card title="Storages">
      <div>
        {/* <Button
        onClick={() => setOpenCreateModal(true)}
        icon={<PlusOutlined />}
      >
        Create Storage Labels
      </Button> */}
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
        rowKey={"id"}
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
      {/* <CreateStorageLabelsModal
      open={openCreateModal}
      onOk={() => {
        setOpenCreateModal(false);
        refetch();
      }}
      onCancel={() => setOpenCreateModal(false)}
    /> */}
    </Card>
  );
};

export default StoragesPage;
