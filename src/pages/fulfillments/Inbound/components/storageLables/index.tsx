import { useQuery } from "@tanstack/react-query"
import { getStorageLabels } from "@/services/fulfillment/inbound"
import { Table } from "@douyinfe/semi-ui"
import { getRouteApi } from "@tanstack/react-router";
import { IQuery } from "@/utils/models";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import RoutesState from "@/states/route.state";

const columns = [
  {
    title: "Code",
    dataIndex: 'code',
    key: "code"
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

  const { data, isLoading } = useQuery({
    queryKey: ['storageLabels', queries],
    queryFn: () => getStorageLabels()
  })

  console.log(data);

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
          locale: {
            page: "page"
          }
        }}
      />
    </div>
  )
}

export default StorageLabels