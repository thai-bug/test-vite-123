import { usePickingJobsQuery } from "@/hooks/picking-job";

import { IQuery } from "@/utils/models";
import { getRouteApi } from "@tanstack/react-router";
import { Card } from "antd";

import { useSetRecoilState } from "recoil";
import { RoutesState } from "@/states/route.state";
import { useEffect } from "react";
import PickingJobsTable from "../components/PickingJobsTable";

const routeApi = getRouteApi("/fulfillment/outbound/picking-jobs/");

const PickingJobsPage = () => {
  const queries: IQuery = routeApi.useSearch();
  const navigate = routeApi.useNavigate();
  const setRoutesPath = useSetRecoilState(RoutesState);

  const { data, isLoading } = usePickingJobsQuery({ queries });

  useEffect(() => {
    setRoutesPath([
      {
        name: "Picking jobs",
      },
    ]);
  }, [setRoutesPath]);

  return (
    <Card title="Picking jobs">
      <PickingJobsTable
        queries={queries}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        isShowCreate={false}
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
              search: value,
            },
          });
        }}
      />
    </Card>
  );
};

export default PickingJobsPage;
