import { SelectedPackageState } from "@/services/packages/package.atom";
import { Avatar } from "@arco-design/mobile-react";
import React, { FC } from "react";
import { useRecoilValue } from "recoil";

const BuyForm: FC = () => {
  const selectedPackage = useRecoilValue(SelectedPackageState);

  return (
    <div className="min-h-screen max-w-lg p-3">
      <div className="">
        <div className="bg-white shadow-md mt-5 rounded-2xl p-4 mb-4">
          <div className="flex">
            <Avatar
              src={`https://flagcdn.com/w80/${selectedPackage?.location?.toLowerCase()}.png`}
              size="large"
            />
            <div>
              <h1 className="text-gray-800 text-2xl font-bold my-2">
                {selectedPackage?.currentName}
              </h1>
              <p className="text-gray-800 font-medium text-sm">
                {selectedPackage?.name}
              </p>
            </div>
          </div>

          <div className="w-full my-5 bg-gray-300 h-[1px]"></div>

          <div className="flex justify-between">
            <p className="text-gray-800 font-medium text-sm">Price</p>

            <div>
              <p className="text-right text-sky-500 font-medium text-xl">
                {selectedPackage?.currencyCode}$
                {(selectedPackage?.retailPrice / 100).toFixed(2)}
              </p>

              {/* <i className="text-gray-500 my-1 text-xs">{`( ${"$"}${(
        selectedPackage?.retailPrice / 100
      ).toFixed(2)} / day * ${selectedPackage?.duration}days = ${(selectedPackage?.retailPrice / 100).toFixed(
        2
      )}${"$"} )`}</i> */}
              {/* 
      <p className="text-right text-gray-800 font-medium text-sm">
        = {selectedPackage?.currencyCode}${(selectedPackage?.retailPrice / 100).toFixed(2)}
      </p> */}
            </div>
          </div>
        </div>

        <h1 className="text-gray-800 text-xl mb-5 font-bold">
          Select a payment method:
        </h1>

        <div className="bg-white shadow-md rounded-2xl p-4 mb-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-gray-800 font-semibold">
              Credit / Debit Card
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyForm;
