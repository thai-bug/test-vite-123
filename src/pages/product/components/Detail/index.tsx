import { getProductDetail } from '@/services/product/product';
import { RoutesState } from '@/states/route.state';
import { useQuery } from '@tanstack/react-query';
import { getRouteApi } from '@tanstack/react-router';
import { Card, Collapse } from 'antd';
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
  console.log(data);

  return (
    <Card title={`Product ${data?.id}`} loading={isLoading}>
      <Collapse activeKey={["Detail"]}>
        <Collapse.Panel key={"Detail"} header="Detail">
          abc
        </Collapse.Panel>
      </Collapse>
    </Card>
  )
}

export default ProductDetail