import { useQuery } from '@tanstack/react-query'
import { getProducts } from '@/services/product/product'
import { IQuery } from '@/utils/models';
import { getRouteApi, Link } from '@tanstack/react-router';
import Table, { ColumnsType } from 'antd/es/table';
import { useEffect, useMemo } from 'react';
import { useSetRecoilState } from 'recoil';
import { RoutesState } from '@/states/route.state';
import { Button, Card, Divider, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';


const routeApi = getRouteApi("/product/");

const Product = () => {
  const queries: IQuery = routeApi.useSearch();
  const setRoutesPath = useSetRecoilState(RoutesState);
  const navigate = routeApi.useNavigate()

  const columns: ColumnsType = useMemo(() => {
    return [
      {
        title: "Id",
        dataIndex: "id",
        key: "id",
        render: (text, record) => (
          <Link
            to={`/product/${record?.id}`}
            target="_blank"
          >
            {text}
          </Link>
        ),
      },
      {
        title: "Name",
        dataIndex: "name",
        key: "name"
      },
      {
        title: "Status",
        dataIndex: "status",
        key: "status"
      },
      {
        title: "Weight (Kg)",
        dataIndex: "weight",
        key: "weight"
      }
    ]
  }, [])

  useEffect(() => {
    setRoutesPath([
      {
        path: "/product",
        name: "Products",
      },
    ]);
  }, [setRoutesPath]);

  const { data, isLoading } = useQuery({
    queryKey: ['products', queries],
    queryFn: () => getProducts(queries)
  })

  console.log(data);


  return (
    <Card title="Product">
      <div className='flex justify-between items-center w-full'>
        <Button
          icon={<PlusOutlined />}
          onClick={() => alert("Z")}
        >
          Create Product
        </Button>
        <Input.Search
          allowClear
          size="large"
          className=" w-1/3"
          placeholder="Search ..."
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              navigate({
                search: {
                  ...queries,
                  page: 1,
                  search: e.currentTarget.value,
                },
              });
            }
          }}
        />
      </div>
      <Divider />
      <Table
        rowKey={"id"}
        columns={columns}
        dataSource={data?.data || []}
        loading={isLoading}
        pagination={{
          total: data?.total || 0,
          onChange(page, pageSize) {
            navigate({
              search: {
                ...queries,
                page: page,
                limit: pageSize,
              },
            });
          },
          pageSize: Number(queries?.limit) || 10,
          showSizeChanger: true,
          current: Number(queries?.page) || 1,
        }}
      />
    </Card>
  )
}

export default Product