import { useQuery } from "@tanstack/react-query";
import { getStorageLabelDetail } from "@/services/fulfillment/inbound";

import { getRouteApi } from "@tanstack/react-router";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { Card, Typography } from "antd";
import { RoutesState } from "@/states/route.state";

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
  }, [data]);

  return (
    <>
      <Card title={`Storage label: (${data?.code})`} loading={isLoading}>
        <div className="grid gap-y-5">
          <Typography className='text-center'>
            <div className='text-2xl font-bold'>Storage Labels Detail</div>
            <div className='text-sm'>( {data?.code} )</div>
          </Typography>
          {data ? (
            <div>
              {attributes.map((attr, index) => (
                <div key={index}>
                  <strong>{attr.label}: </strong>
                  {typeof attr.value === 'object' && attr.value !== null ? (
                    <div className='ml-4'>
                      {Object.keys(attr.value).map((key) => (
                        <div key={key}>
                          <strong>{key}:</strong> {attr.value[key] || "N/A"}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <span>{attr.value || "N/A"}</span>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </Card>
    </>
  );
};

export default StorageLabelDetail;
