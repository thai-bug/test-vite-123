import { Link } from "@tanstack/react-router";
import { FC, useMemo } from "react";
import { Divider, Input, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { dayjs } from "@/utils/dayjs";
import StatusFFMTag from "@/components/helpers/StatusFFMTag";
import { IBaseTableProps } from "@/services/base/base.type";
import { IPickingJob } from "@/services/picking-job/picking-job.type";

interface PickingJobsTableProps extends IBaseTableProps<IPickingJob> {
  isShowCreate?: boolean;
}

const PickingJobsTable: FC<PickingJobsTableProps> = ({
  data,
  total,
  onSearch,
  onPageChange,
  isLoading,
  limit = 10,
  page = 1,
  queries,
}) => {
  const columns: ColumnsType<IPickingJob> = useMemo(() => {
    return [
      {
        title: "Code",
        dataIndex: "code",
        key: "code",
        render: (text, record) => (
          <Link
            to={`/fulfillment/outbound/picking-jobs/${record?.code}`}
            target="_blank"
          >
            {text}
          </Link>
        ),
      },
      {
        title: "Status",
        dataIndex: "status",
        key: "status",
        render: (value) => <StatusFFMTag status={value} />,
      },
      {
        title: "Quantity",
        dataIndex: "quantity",
        key: "quantity",
        render: (value) => value || "N|A",
      },
      {
        title: "Created at",
        dataIndex: "createdAt",
        key: "createdAt",
        render: (value: string) => {
          return (
            dayjs(value).isValid() && dayjs(value).format("HH:mm DD/MM/YYYY")
          );
        },
      },
    ];
  }, []);

  return (
    <>
      <div className="flex justify-end">
        <Input.Search
          defaultValue={queries?.search}
          allowClear
          size="large"
          className=" w-1/3"
          placeholder="Search ..."
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onSearch?.(e.currentTarget.value);
            }
          }}
          onClear={() => onSearch?.("")}
        />
      </div>
      <Divider />
      <Table
        rowKey={"code"}
        columns={columns}
        dataSource={data || []}
        loading={isLoading}
        pagination={{
          total: total || 0,
          onChange: onPageChange,
          pageSize: Number(limit) || 10,
          showSizeChanger: true,
          current: Number(page) || 1,
        }}
      />
    </>
  );
};

export default PickingJobsTable;
