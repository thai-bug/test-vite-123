import { useQuery } from "@tanstack/react-query";
import { getStorageLabelDetail } from "@/services/storage-label/storage-label.api";

import { getRouteApi } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { Button, Card, Collapse } from "antd";
import { RoutesState } from "@/states/route.state";
import StorageLabelHistoryTable from "./components/StorageLabelHistoryTable";
import StorageLabelGeneralInfo from "./components/StorageLabelGeneralInfo";
import { IStorageLabel } from "@/services/storage-label/storage-label.type";
import { FFMStatus } from "@/utils/enums/ffm";
import AssignProductModal from "./components/AssignProductModal";

const routeApi = getRouteApi("/fulfillment/inbound/storage-labels/$code");

const StorageLabelDetail = () => {
  const { code } = routeApi.useParams();
  const setRoutesPath = useSetRecoilState(RoutesState);
  const [showAssignProduct, setShowAssignProduct] = useState(false);

  const { data, isLoading } = useQuery<IStorageLabel>({
    queryKey: ["storage-label-detail", code],
    queryFn: () => getStorageLabelDetail(code),
  });

  useEffect(() => {
    setRoutesPath([
      {
        path: "/fulfillment/inbound/storage-labels",
        name: "Storage Labels",
      },
      {
        path: `/fulfillment/inbound/storage-labels/${data?.code}`,
        name: code,
      },
    ]);
  }, [code, data, setRoutesPath]);

  return (
    <>
      <Card title={`Storage label ${data?.code}`} loading={isLoading}>
        {data?.status === FFMStatus.AVAILABLE && (
          <div className="my-2">
            <Button onClick={() => setShowAssignProduct(true)}>
              Assign product
            </Button>
          </div>
        )}

        <Collapse activeKey={["info", "histories"]}>
          <Collapse.Panel
            key={"info"}
            header={<div className="font-semibold">General Info</div>}
          >
            <StorageLabelGeneralInfo data={data} />
          </Collapse.Panel>
          <Collapse.Panel
            key={"histories"}
            header={<div className="font-semibold">History</div>}
          >
            <StorageLabelHistoryTable storageLabel={data} />
          </Collapse.Panel>
        </Collapse>
      </Card>

      <AssignProductModal
        open={showAssignProduct}
        data={data}
        onOk={() => setShowAssignProduct(false)}
        onCancel={() => setShowAssignProduct(false)}
      />
    </>
  );
};

export default StorageLabelDetail;
