import { Button, NavBar, Sticky, Toast } from "@arco-design/mobile-react";
import classNames from "classnames";
import React, { FC } from "react";
import BuyForm from "./components/BuyForm";
import { useMutation } from "@tanstack/react-query";
import { createOrder } from "@/services/order/order.api";
import { SelectedPackageState } from "@/services/packages/package.atom";
import { useRecoilValue } from "recoil";
import { useNavigate } from "@tanstack/react-router";

const BuyPage: FC = () => {
  const navigate = useNavigate();
  const selectedPackage = useRecoilValue(SelectedPackageState);

  const createOrderMutate = useMutation({
    mutationFn: createOrder,
    onSuccess: (data) => {
      console.log({
        intentId: data?.order?.transaction?.intentId,
        clientSecret: data?.order?.transaction?.clientSecret,
      });
      navigate({
        to: "/checkout",
        search: {
          intentId: data?.order?.transaction?.intentId,
          clientSecret: data?.order?.transaction?.clientSecret,
        },
      });
    },
    onError: (error) => {
      Toast.toast({
        type: "error",
        content: error.message,
      });
    },
  });

  const handleBuy = () => {
    createOrderMutate.mutate({
      type: "ESIM",
      packageCode: selectedPackage?.packageCode,
      paymentType: "CARD",
      paymentProvider: "AIR_WALLEX",
    });
  };

  return (
    <>
      <NavBar
        fixed={true}
        title="Title"
        hasBottomLine={false}
        onClickRight={() => {}}
      />

      <div className={classNames("min-h-screen")}>
        <BuyForm />
      </div>

      <div className="p-3">
        <Sticky position="bottom" bottomOffset={40}>
          <Button
            needActive
            loading={createOrderMutate?.isPending}
            onClick={handleBuy}
            shape="round"
            size="huge"
          >
            Buy
          </Button>
        </Sticky>
      </div>
    </>
  );
};

export default BuyPage;
