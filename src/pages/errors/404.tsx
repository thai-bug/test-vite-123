import NotFound from "@/components/errors/NotFound";
import { FC } from "react";

const NotFoundPage: FC = () => {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <NotFound />
    </div>
  );
};

export default NotFoundPage;
