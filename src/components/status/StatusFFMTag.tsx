import { FFMStatus } from "@/utils/enums/ffm";
import { Tag } from "antd";
import React, { FC, useMemo } from "react";

interface StatusFFMTagProps {
  status?: FFMStatus;
  customColor?: string;
  customText?: string;
}

const StatusFFMTag: FC<StatusFFMTagProps> = ({
  status,
  customColor,
  customText,
}) => {
  const text = useMemo(() => {
    if (customText) return customText;

    switch (status) {
      case FFMStatus.ACTIVE:
        return "Active";

      case FFMStatus.AVAILABLE:
        return "Available";

      default:
        return "";
    }
  }, [status, customText]);

  const color = useMemo(() => {
    if (customColor) return customColor;

    switch (status) {
      case FFMStatus.ACTIVE:
        return "green";

      case FFMStatus.AVAILABLE:
        return "blue";

      default:
        return "default";
    }
  }, [customColor, status]);

  return <Tag color={color}>{text}</Tag>;
};

export default StatusFFMTag;
