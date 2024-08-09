/* eslint-disable @typescript-eslint/no-explicit-any */
import { SelectedPackageState } from "@/services/packages/package.atom";
import { Button } from "@arco-design/mobile-react";
import React, { FC } from "react";
import { Virtuoso } from "react-virtuoso";
import { useSetRecoilState } from "recoil";

interface ListPackagesProps {
  packages: any[];
}

const PACKAGES = [
  {
    title: "5GB 180days",
    details: ["4G", "Full Speed", "Texts 100 MSM", "Call 100 Mins"],
    price: "$50.00",
    oldPrice: "¥99.00",
  },
  {
    title: "1GB 10days",
    details: ["Full Speed", "Top up"],
    price: "$1.99",
    oldPrice: "¥7.60",
  },
  {
    title: "1GB 30days",
    details: ["4G", "Full Speed", "Top up"],
    price: "$2.15",
    oldPrice: "¥4.50",
  },
  {
    title: "5GB 30days",
    details: ["Full Speed", "Top up"],
    price: "$2.99",
    oldPrice: "¥8.00",
  },
];

const ListPackages: FC<ListPackagesProps> = ({ packages }) => {
  const setSelectedPackage = useSetRecoilState<any>(SelectedPackageState);

  return (
    <div className="p-2">
      <Virtuoso
        style={{ height: "calc(100vh - 1rem)" }}
        totalCount={200}
        itemContent={(index: number, item: any) => (
          <div key={index} className="bg-white shadow-md rounded-2xl p-4 mb-4">
            <h2 className="text-lg text-gray-800 font-semibold">{item.name}</h2>

            <div className="flex flex-wrap gap-2 my-2">
              <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-md">
                {item.speed}
              </span>
              <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-md">
                {PACKAGES[0].details?.[1]}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <span className="text-sky-500 text-lg font-bold mr-2">
                  ${(item.retailPrice / 100).toFixed(2)}
                </span>

                <span className="text-xs text-sky-500 font-bold">
                  {item.durationUnit}
                </span>
              </div>

              <Button
                type="ghost"
                shape="round"
                className="w-1/6"
                onClick={() => setSelectedPackage(item)}
                // className="bg-blue-500 text-white px-5 py-1 rounded-lg focus:ring-4 transform active:scale-75 transition-transform"
              >
                Buy
              </Button>
            </div>
          </div>
        )}
        data={packages || []}
      />
    </div>
  );
};

export default ListPackages;
