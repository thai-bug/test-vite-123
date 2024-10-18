import { useQuery } from "@tanstack/react-query"
import { getStorageLabels } from "@/services/fulfillment/inbound"
import { Button, Empty, Table, Typography } from "@douyinfe/semi-ui"
import { getRouteApi, Link } from "@tanstack/react-router";
import { IQuery } from "@/utils/models";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import RoutesState from "@/states/route.state";
import { IconPlus } from "@douyinfe/semi-icons";
import { IllustrationConstruction } from "@douyinfe/semi-illustrations";
import CreateStorageLabelsModal from "./Create/CreateStorageLabelsModal";

const columns = [
  {
    title: "Code",
    dataIndex: 'code',
    key: "code",
    render: (code: any) => {
      return (
        <div>
          <Typography.Text
            copyable={{
              content: code,
            }}
          >
            <Link to={`/fulfillment/inbound/storage-labels/${code}/detail`}>{code}</Link>
          </Typography.Text>
        </div>
      );
    },
  },
  {
    title: "ID",
    dataIndex: 'id',
    key: "id"
  },
  {
    title: "Status",
    dataIndex: 'status',
    key: "status"
  }
]

const routeApi = getRouteApi("/fulfillment/inbound/storage-labels/");

const StorageLabels = () => {

  const queries: IQuery = routeApi.useSearch();
  const navigate = routeApi.useNavigate();
  const [openCreateModal, setOpenCreateModal] = useState(false)

  const { data, isLoading, refetch } = useQuery({
    queryKey: ['storageLabels', queries],
    queryFn: () => getStorageLabels()
  })

  const setRoutesPath = useSetRecoilState(RoutesState);

  useEffect(() => {
    setRoutesPath([
      {
        path: "/fulfillment/inbound/storage-labels",
        name: "Storage Labels",
        // icon: <IconHome />,
      },
    ]);
  }, []);


  return (
    <div>
      <div className="grid gap-y-5">
        <div>
          <Button onClick={() => setOpenCreateModal(true)} icon={<IconPlus />}>
            Create Storage Labels
          </Button>
        </div>
        <Table
          columns={columns}
          dataSource={data?.data || []}
          loading={isLoading}
          pagination={{
            total: data?.total || 0,
            currentPage: Number(queries?.page) || 1,
            onChange(currentPage: string, pageSize: string) {
              navigate({
                search: {
                  ...queries,
                  page: currentPage.toString(),
                  limit: pageSize.toString(),
                },
              });
            },
            pageSize: Number(queries?.limit) || 10,
            showSizeChanger: true,
          }}
          empty={
            <Empty
              image={<IllustrationConstruction />}
              description="Empty"
            />
          }
        />
      </div>
      <CreateStorageLabelsModal
        open={openCreateModal}
        onOk={() => {
          setOpenCreateModal(false);
          refetch();
        }}
        onCancel={() => setOpenCreateModal(false)}
      />
    </div>
  )
}

export default StorageLabels

