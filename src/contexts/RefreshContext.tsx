/* eslint-disable @typescript-eslint/no-explicit-any */
import { PullRefresh } from "@arco-design/mobile-react";
import { FC } from "react";
import { IconCheck, IconRefresh } from "@arco-design/mobile-react/esm/icon";

interface IProps {
  children?: React.ReactNode;
  onRefresh?: (data?: any) => Promise<void>;
}

export const RefreshProvider: FC<IProps> = ({
  children,
  onRefresh,
}: IProps) => {
  return (
    <PullRefresh
      loadingText={<IconRefresh className="animate-spin " fontSize={20} />}
      finishText={<IconCheck fontSize={20} />}
      onRefresh={onRefresh}
    >
      {children}
    </PullRefresh>
  );
};
