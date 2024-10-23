import { usePickingJobDetailQuery } from "@/hooks/picking-job";
import { RoutesState } from "@/states/route.state";
import { getRouteApi } from "@tanstack/react-router";
import { Card, Collapse } from "antd";
import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import PickingJobInfo from "./components/PickingJobInfo";
import StorageLabelHistories from "@/pages/fulfillment/components/StorageLabelHistoriesTable";

const routeApi = getRouteApi("/fulfillment/outbound/picking-jobs/$code");

const PickingJobDetail = () => {
  const { code } = routeApi.useParams();
  const setRoutesPath = useSetRecoilState(RoutesState);

  const { data, isLoading, refetch } = usePickingJobDetailQuery({ code });

  useEffect(() => {
    setRoutesPath([
      {
        path: "/fulfillment/outbound/picking-jobs",
        name: "Picking jobs",
      },
      {
        name: code,
      },
    ]);
  }, [code, setRoutesPath]);

  return (
    <Card title={`Picking job ${code}`} loading={isLoading}>
      <Collapse activeKey={["info", "picking-items", "histories"]}>
        <Collapse.Panel
          key={"info"}
          header={<div className="font-semibold">General Info</div>}
        >
          <PickingJobInfo data={data} />
        </Collapse.Panel>

        <Collapse.Panel
          key={"picking-items"}
          header={<div className="font-semibold">Picking Items</div>}
        >
          <StorageLabelHistories
            data={data?.storageLabelHistories || []}
            onItemUpdated={refetch}
          />
        </Collapse.Panel>

        {/*   <Collapse.Panel
          key={"histories"}
          header={<div className="font-semibold">History</div>}
        >
          <StorageLabelHistoryTable storageLabel={data} />
        </Collapse.Panel> */}
      </Collapse>
    </Card>
  );
};

export default PickingJobDetail;
