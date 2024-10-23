import StatusFFMTag from "@/components/helpers/StatusFFMTag";
import { usePackingJobsQuery } from "@/hooks/packing-job";
import { IPackingJob } from "@/services/packing-job/packing-job.type";
import { RoutesState } from "@/states/route.state";
import { dayjs } from "@/utils/dayjs";
import { FFMStatus } from "@/utils/enums/ffm";
import { IQuery } from "@/utils/models";
import { getRouteApi } from "@tanstack/react-router";
import { Card, Divider, Input, Table, Typography } from "antd";
import { ColumnsType } from "antd/es/table";
import { useEffect, useMemo } from "react";
import { useSetRecoilState } from "recoil";

const routeApi = getRouteApi("/fulfillment/outbound/packing-jobs/");

const PackingJobsPage = () => {
  const queries: IQuery = routeApi.useSearch();
  const navigate = routeApi.useNavigate();
  const setRoutesPath = useSetRecoilState(RoutesState);

  const { data, isLoading } = usePackingJobsQuery({ queries });

  const columns: ColumnsType<IPackingJob> = useMemo(() => {
    return [
      {
        title: "Code",
        dataIndex: "code",
        render: (value) => {
          return (
            <Typography.Link
              href={`/fulfillment/outbound/packing-jobs/${value}`}
              target="_blank"
              copyable
            >
              {value}
            </Typography.Link>
          );
        },
      },
      {
        title: "Shipping Code",
        dataIndex: "shippingCode",
        render: (value) => {
          return <Typography.Text copyable>{value}</Typography.Text>;
        },
      },
      {
        title: "Package code",
        dataIndex: "packageCode",
        render: (value) => {
          return <Typography.Text copyable>{value}</Typography.Text>;
        },
      },
      {
        title: "status",
        dataIndex: "status",
        render: (value: FFMStatus) => {
          return <StatusFFMTag status={value} />;
        },
      },
      {
        title: "Created at",
        dataIndex: "createdAt",
        render: (value: Date) => {
          return dayjs(value).format("DD/MM/YYYY HH:mm:ss");
        },
      },
    ];
  }, []);

  useEffect(() => {
    setRoutesPath([
      {
        name: "PackingJobs",
      },
    ]);
  }, [setRoutesPath]);

  return (
    <Card title="PackingJobs">
      <div>
        {/* <Button
        onClick={() => setOpenCreateModal(true)}
        icon={<PlusOutlined />}
      >
        Create PackingJob Labels
      </Button> */}
      </div>
      <div className="flex justify-end">
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
      {/* <CreatePackingJobLabelsModal
      open={openCreateModal}
      onOk={() => {
        setOpenCreateModal(false);
        refetch();
      }}
      onCancel={() => setOpenCreateModal(false)}
    /> */}
    </Card>
  );
};

export default PackingJobsPage;
