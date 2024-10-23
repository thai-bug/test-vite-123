import StatusFFMTag from "@/components/helpers/StatusFFMTag";
import { IStorage } from "@/services/storage/storage.type";
import { dayjs } from "@/utils/dayjs";
import { Typography } from "antd";
import React, { FC } from "react";

interface StorageGeneralInfoProps {
  data?: IStorage;
}

const StorageGeneralInfo: FC<StorageGeneralInfoProps> = ({ data }) => {
  return (
    <div className="grid md:grid-cols-2 gap-2">
      <div className="flex gap-2 items-center">
        <div className="font-semibold">Code: </div>{" "}
        <Typography.Text copyable>{data?.code}</Typography.Text>
      </div>

      <div className="flex gap-2">
        <div className="font-semibold">Created at: </div>{" "}
        <Typography.Text>
          {dayjs(data?.createdAt).isValid() &&
            dayjs(data?.createdAt).format("DD/MM/YYYY HH:mm")}
        </Typography.Text>
      </div>

      <div className="flex gap-2">
        <div className="font-semibold">Status: </div>{" "}
        <StatusFFMTag status={data?.status} />
      </div>

      <div className="flex gap-2">
        <div className="font-semibold">Warehouse: </div>{" "}
        <Typography.Link
          href={`/fulfillment/warehouses/${data?.warehouse?.name}`}
          target="_blank"
          copyable
        >
          {data?.warehouse?.name}
        </Typography.Link>
      </div>
    </div>
  );
};

export default StorageGeneralInfo;
