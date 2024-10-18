import { useQuery } from "@tanstack/react-query";
import { getStorageLabelDetail } from "@/services/fulfillment/inbound";

import { getRouteApi } from "@tanstack/react-router";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { Card } from "antd";
import { RoutesState } from "@/states/route.state";

const routeApi = getRouteApi("/fulfillment/inbound/storage-labels/$code/");

const StorageLabelDetail = () => {
  const { code } = routeApi.useParams();
  const setRoutesPath = useSetRecoilState(RoutesState);

  const { data, isLoading } = useQuery({
    queryKey: ["storageLabels", code],
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
  }, [data]);

  return (
    <Card title={`Storage label ${data?.code}`} loading={isLoading}></Card>
  );
};

export default StorageLabelDetail;
