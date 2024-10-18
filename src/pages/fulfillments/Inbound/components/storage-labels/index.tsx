import { useQuery } from "@tanstack/react-query";
import { getStorageLabels } from "@/services/fulfillment/inbound";

import { getRouteApi, Link } from "@tanstack/react-router";
import { IQuery } from "@/utils/models";
import { useEffect, useMemo } from "react";
import { useSetRecoilState } from "recoil";
import { Card, Divider, Input, Table } from "antd";
import { RoutesState } from "@/states/route.state";
import { ColumnsType } from "antd/es/table";

const routeApi = getRouteApi("/fulfillment/inbound/storage-labels/");

const StorageLabels = () => {
  const queries: IQuery = routeApi.useSearch();
  const navigate = routeApi.useNavigate();
  const setRoutesPath = useSetRecoilState(RoutesState);

  const { data, isLoading } = useQuery({
    queryKey: ["storageLabels", queries],
    queryFn: () => getStorageLabels(queries),
  });

  const columns: ColumnsType = useMemo(() => {
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
  }, []);

  return (
    <Card title="Storage Labels">
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
    </Card>
  );
};

export default StorageLabels;
