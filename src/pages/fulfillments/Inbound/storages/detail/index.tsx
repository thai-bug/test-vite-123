import useStorageDetailQuery from "@/hooks/storage/useStorageDetailQuery";
import { RoutesState } from "@/states/route.state";
import { getRouteApi } from "@tanstack/react-router";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

const routeApi = getRouteApi("/fulfillment/inbound/storages/$code");

const StorageDetail = () => {
  const { code } = routeApi.useParams();
  const setRoutesPath = useSetRecoilState(RoutesState);
  useStorageDetailQuery(code);

  useEffect(() => {
    setRoutesPath([
      {
        path: "/fulfillment/inbound/storages",
        name: "Storages",
      },
      {
        path: `/fulfillment/inbound/storages/${code}`,
        name: code,
      },
    ]);
  }, [code, setRoutesPath]);

  return <div>index</div>;
};

export default StorageDetail;
