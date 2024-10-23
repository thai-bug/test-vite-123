import useStorageDetailQuery from "@/hooks/storage/useStorageDetailQuery";
import { RoutesState } from "@/states/route.state";
import { getRouteApi } from "@tanstack/react-router";
import { Card, Collapse } from "antd";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import StorageGeneralInfo from "./components/StorageGeneralInfo";
import StorageLabelsTable from "@/pages/fulfillments/inbound/components/storage-label/StorageLabelsTable";
import { useStorageLabelsQuery } from "@/hooks/storage-label";

const routeApi = getRouteApi("/fulfillment/inbound/storages/$code");

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
        path: "/fulfillment/inbound/storages",
        name: "Storages",
      },
      {
        path: `/fulfillment/inbound/storages/${code}`,
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
            onPageChange={(page) => {
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
        {/*
        <Collapse.Panel
          key={"histories"}
          header={<div className="font-semibold">History</div>}
        >
          <StorageLabelHistoryTable storageLabel={data} />
        </Collapse.Panel> */}
      </Collapse>
    </Card>
  );
};

export default StorageDetail;
