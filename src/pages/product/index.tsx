import { useQuery } from '@tanstack/react-query'
import { getProducts } from '@/services/product/product'
import { IQuery } from '@/utils/models';
import { getRouteApi, Link } from '@tanstack/react-router';
import Table, { ColumnsType } from 'antd/es/table';
import { useEffect, useMemo, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { RoutesState } from '@/states/route.state';
import { Button, Card, Divider, Input, Modal } from 'antd';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';


const routeApi = getRouteApi("/product/");

interface CreateModalProps {
  open: boolean;
  onOk: () => void;
  onCancel: () => void;
}

const Product = ({ open, onOk, onCancel }: CreateModalProps) => {
  const queries: IQuery = routeApi.useSearch();
  const setRoutesPath = useSetRecoilState(RoutesState);
  const navigate = routeApi.useNavigate()
  const [showModal, setShowModal] = useState(false)

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
      },
      {
        title: "Action",
        key: "action",
        render: (text, record) => (
          <DeleteOutlined
            style={{ cursor: "pointer", color: "red" }}
            onClick={() => setShowModal(true)}
          />
        )
      }
    ]
  }, [])

  const showWarningModal = () => {
    Modal.warning({
      title: 'Warning',
      content: 'Do you want to delete this product ?',
      onCancel,
      onOk
    });
  };

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

  return (
    <Card title="Product">
      <div className='flex justify-between items-center w-full'>
        <Link to='/product/create'>
          <Button icon={<PlusOutlined />}>
            Create Product
          </Button>
        </Link>
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
        className='text-center'
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
      <Modal />
    </Card >
  )
}

export default Product