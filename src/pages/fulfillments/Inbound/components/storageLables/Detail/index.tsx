import React, { useEffect } from 'react';
import { getRouteApi, Link } from '@tanstack/react-router';
import { useSetRecoilState } from 'recoil';
import RoutesState from '@/states/route.state';
import { useQuery } from '@tanstack/react-query';
import { getDetailStorageLabels } from '@/services/fulfillment/inbound';
import { Button, Typography } from '@douyinfe/semi-ui';
import { IconArticle } from '@douyinfe/semi-icons';

const routeApi = getRouteApi("/fulfillment/inbound/storage-labels/$code/detail/");


const DetailStorageLabelsPage = () => {
  const params = routeApi.useParams();
  const setRoutesPath = useSetRecoilState(RoutesState);

  useEffect(() => {
    setRoutesPath([
      {
        name: "Storage Labels",
      },
      {
        name: `${params?.code}`,
        path: `/fulfillment/inbound/storage-labels/${params?.code}/detail`,
      },
    ]);
  }, []);

  const { data } = useQuery({
    queryKey: ['storage-labels', params?.code],
    queryFn: () => getDetailStorageLabels(params?.code)
  });

  console.log(data);


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

  return (
    <>
      <div className='grid gay-y-5'>
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
      <Button className='mt-5 right-5 top-1 absolute' icon={<IconArticle />}>
        <Link to="/">Assign Storage Labels</Link>
      </Button>
    </>
  );
};

export default DetailStorageLabelsPage;
