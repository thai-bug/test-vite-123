import { RoutesState } from "@/states/route.state";
import { Card } from "antd";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import CreateForm from "./components/CreateForm";

const CreateProduct = () => {
  const setRoutesPath = useSetRecoilState(RoutesState);

  useEffect(() => {
    setRoutesPath([
      {
        path: "/products/",
        name: "Product",
      },
      {
        path: `/products/create`,
        name: "Create",
      },
    ]);
  }, [setRoutesPath]);

  return (
    <div>
      <Card title={`Create Product`}>
        <CreateForm />
      </Card>
    </div>
  );
};

export default CreateProduct;
