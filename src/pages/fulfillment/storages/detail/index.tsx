import useStorageDetailQuery from "@/hooks/storage/useStorageDetailQuery";
import { RoutesState } from "@/states/route.state";
import { getRouteApi } from "@tanstack/react-router";
import { Card, Collapse } from "antd";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import StorageGeneralInfo from "./components/StorageGeneralInfo";
import { useStorageLabelsQuery } from "@/hooks/storage-label";
import StorageLabelsTable from "../../inbound/components/storage-label/StorageLabelsTable";

const routeApi = getRouteApi("/fulfillment/storages/$code");

const StorageDetail = () => {
  const { code } = routeApi.useParams();
  const setRoutesPath = useSetRecoilState(RoutesState);
  const { data: storageDetail, isLoading } = useStorageDetailQuery({ code });

  const [storageLabelQueries, setStorageLabelQueries] = useState({
    storageId: storageDetail?.id,
    limit: 10,
    page: 1,
  });

  const { data, isLoading: isLoadingStorageLabels } = useStorageLabelsQuery({
    queries: storageLabelQueries,
    enabled: !!storageDetail,
  });

  useEffect(() => {
    setRoutesPath([
      {
        path: "/fulfillment/storages",
        name: "Storages",
      },
      {
        name: code,
      },
    ]);
  }, [code, setRoutesPath]);

  return (
    <Card title={`Storage ${code}`} loading={isLoading}>
      <Collapse activeKey={["info", "images", "histories"]}>
        <Collapse.Panel
          key={"info"}
          header={<div className="font-semibold">General Info</div>}
        >
          <StorageGeneralInfo data={storageDetail} />
        </Collapse.Panel>

        <Collapse.Panel
          key={"images"}
          header={<div className="font-semibold">Images</div>}
        >
          <StorageLabelsTable
            isShowCreate={false}
            data={data?.data}
            onPageChange={(page: number) => {
              setStorageLabelQueries((prev) => ({
                ...prev,
                page,
              }));
            }}
            onSearch={(value: string) => {
              setStorageLabelQueries((prev) => ({
                ...prev,
                search: value,
              }));
            }}
            isLoading={isLoadingStorageLabels}
          />
        </Collapse.Panel>
      </Collapse>
    </Card>
  );
};

export default StorageDetail;
