import StatusFFMTag from "@/components/helpers/StatusFFMTag";
import { IPickingJob } from "@/services/picking-job/picking-job.type";
import { dayjs } from "@/utils/dayjs";
import { Typography } from "antd";
import { FC } from "react";

interface PickingJobInfoProps {
  data?: IPickingJob;
}

const PickingJobInfo: FC<PickingJobInfoProps> = ({ data }) => {
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
        <div className="font-semibold">Packing job: </div>{" "}
        <Typography.Link
          href={`/fulfillment/outbound/packing-jobs/${data?.packingJob?.code}`}
          target="_blank"
          copyable
        >
          {data?.packingJob?.code}
        </Typography.Link>
      </div>
    </div>
  );
};

export default PickingJobInfo;
