import { getRouteApi } from "@tanstack/react-router";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { Card } from "antd";
import { RoutesState } from "@/states/route.state";
import StorageLabelsTable from "../components/storage-label/StorageLabelsTable";
import { IQuery } from "@/utils/models";
import { useStorageLabelsQuery } from "@/hooks/storage-label";

const routeApi = getRouteApi("/fulfillment/inbound/storage-labels/");

const StorageLabels = () => {
  const queries: IQuery = routeApi?.useSearch();
  const navigate = routeApi?.useNavigate();
  const setRoutesPath = useSetRecoilState(RoutesState);

  const { data, isLoading, refetch } = useStorageLabelsQuery({ queries });

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
      <StorageLabelsTable
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        onPageChange={(page, pageSize) => {
          navigate?.({
            search: {
              ...queries,
              page: page,
              limit: pageSize,
            },
          });
        }}
        onSearch={(value) => {
          navigate?.({
            search: {
              ...queries,
              page: 1,
              search: value,
            },
          });
        }}
        onCreate={refetch}
      />
    </Card>
  );
};

export default StorageLabels;
