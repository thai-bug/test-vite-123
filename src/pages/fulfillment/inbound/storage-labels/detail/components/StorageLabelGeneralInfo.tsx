import StatusFFMTag from "@/components/helpers/StatusFFMTag";
import { IStorageLabel } from "@/services/storage-label/storage-label.type";
import { dayjs } from "@/utils/dayjs";
import { Typography } from "antd";
import React, { FC } from "react";

interface StorageLabelGeneralInfoProps {
  data?: IStorageLabel;
}

const StorageLabelGeneralInfo: FC<StorageLabelGeneralInfoProps> = ({
  data,
}) => {
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
        <div className="font-semibold">Current Quantity: </div>{" "}
        <Typography.Text>{data?.quantity}</Typography.Text>
      </div>

      <div className="flex gap-2">
        <div className="font-semibold">Storage: </div>{" "}
        <Typography.Link
          href={`/fulfillment/storages/${data?.storage?.code}`}
          target="_blank"
          copyable
        >
          {data?.storage?.code}
        </Typography.Link>
      </div>

      <div className="flex gap-2">
        <div className="font-semibold">Warehouse: </div>{" "}
        <Typography.Link
          href={`/fulfillment/warehouses/${data?.storage?.warehouse?.name}`}
          target="_blank"
          copyable
        >
          {data?.storage?.warehouse?.name}
        </Typography.Link>
      </div>

      <div className="flex gap-2">
        <div className="font-semibold">Product: </div>{" "}
        <Typography.Link
          href={`/products/${data?.product?.id}`}
          target="_blank"
        >
          {data?.product?.name}
        </Typography.Link>
      </div>

      <div className="flex gap-2">
        <div className="font-semibold">Store: </div>{" "}
        <Typography.Link href={`/stores/${data?.store?.slug}`} target="_blank">
          {data?.store?.name}
        </Typography.Link>
      </div>
    </div>
  );
};

export default StorageLabelGeneralInfo;
