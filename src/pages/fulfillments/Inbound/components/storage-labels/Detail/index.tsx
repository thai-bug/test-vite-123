import { useQuery } from "@tanstack/react-query";
import { getStorageLabelDetail } from "@/services/fulfillment/storage-label";

import { getRouteApi } from "@tanstack/react-router";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { Card, Collapse } from "antd";
import { RoutesState } from "@/states/route.state";
import StorageLabelHistoryTable from "./components/StorageLabelHistoryTable";

const routeApi = getRouteApi("/fulfillment/inbound/storage-labels/$code");

const StorageLabelDetail = () => {
  const { code } = routeApi.useParams();
  const setRoutesPath = useSetRecoilState(RoutesState);

  const { data, isLoading } = useQuery({
    queryKey: ["storageLabels", code],
    queryFn: () => getStorageLabelDetail(code),
  });

  const attributes = data ? [
    { label: "Code", value: data?.code },
    { label: "Created at", value: data?.createdAt },
    { label: "Expired Date", value: data?.expiredDate },
    { label: "ID", value: data?.id },
    { label: "Manufactured Date", value: data?.manufacturedDate },
    { label: "Product ID", value: data?.productId },
    { label: "Product", value: data?.product },
    { label: "Storage ID", value: data?.storageId },
    { label: "Storage", value: data?.storage },
    { label: "Store ID", value: data?.storeId },
    { label: "Store", value: data?.store },
  ] : [];

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
    <Card title={`Storage label ${data?.code}`} loading={isLoading}>
      <Collapse activeKey={["Histories"]}>
        <Collapse.Panel key={"Histories"} header="Histories">
          <StorageLabelHistoryTable storageLabelCode={data?.code} />
        </Collapse.Panel>
      </Collapse>
    </Card>
  );
};

export default StorageLabelDetail;
