import { getProductDetail } from '@/services/product/product';
import { RoutesState } from '@/states/route.state';
import { useQuery } from '@tanstack/react-query';
import { getRouteApi } from '@tanstack/react-router';
import { Card, Image, } from 'antd';
import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil';

const routeApi = getRouteApi("/product/$id");

const ProductDetail = () => {
  const { id } = routeApi.useParams();
  const setRoutesPath = useSetRecoilState(RoutesState);

  const { data, isLoading } = useQuery({
    queryKey: ["storageLabels", id],
    queryFn: () => getProductDetail(id),
  });

  useEffect(() => {
    setRoutesPath([
      {
        path: "/product",
        name: "Product",
      },
      {
        path: `/product/${data?.id}`,
        name: id,
      },
    ]);
  }, [id, data, setRoutesPath]);

  const items = [
    { label: "ID", text: data?.id },
    { label: "Name", text: data?.name },
    { label: "Price", text: data?.price },
    { label: "Status", text: data?.statusId },
    { label: "Store Id", text: data?.storeId },
    { label: "Pickup Fees", text: data?.pickupFees },
    { label: "Description", text: data?.description },
    { label: "Note", text: data?.note },
  ]

  return (
    <Card title={`Product ${data?.id}`} loading={isLoading} >
      <div className='mr-7'>
        <div className='flex justify-between'>
          <div>
            {items.map((item) => (
              <div className='mt-2' key={item?.label}>
                <strong>{item?.label}: </strong>
                {item.text ? item.text : "N/A"}
              </div>
            ))}
          </div>
          <Image
            width={200}
            src={data?.image ? data.image : "/no-product-image.png"}
          />
        </div>
      </div>
    </Card>

  )
}

export default ProductDetail