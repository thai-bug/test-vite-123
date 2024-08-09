/* eslint-disable @typescript-eslint/no-explicit-any */
import { SelectedPackageState } from "@/services/packages/package.atom";
import { Button, Image, PopupSwiper, Tabs } from "@arco-design/mobile-react";
import { useNavigate } from "@tanstack/react-router";
import { useRecoilState } from "recoil";

const tabData = [{ title: "Profile" }, { title: "Networks" }];

const DetailPackage = () => {
  const [selectedPackage, setSelectedPackage] =
    useRecoilState(SelectedPackageState);

  const navigate = useNavigate();

  const handleBuy = () => {
    navigate({
      to: "/buy",
    });
  };

  return (
    <PopupSwiper
      visible={!!selectedPackage}
      close={() => setSelectedPackage(null)}
      direction="bottom"
      allowSwipeDirections={["right"]}
      contentClass="rounded-t-md"
    >
      <div className="min-h-12 p-5">
        <div className="text-center">
          <span className="font-semibold text-lg">{selectedPackage?.name}</span>
          <br />
          <p className="text-center text-gray-800 text-xs py-1">
            Data only, SMS & Voice are not available
          </p>
        </div>

        <div className="flex justify-between bg-gray-100 font-medium mt-3 text-gray-800 text-xs p-3 rounded-xl">
          <span>Data</span>
          <span className="font-bold text-sky-500">
            {selectedPackage?.dataType} GB
          </span>
        </div>

        <div className="flex justify-between bg-gray-100 font-medium text-gray-800 mt-3 text-xs p-3 rounded-xl">
          <span>Validity</span>
          <span className="font-bold text-sky-500">
            {selectedPackage?.duration} {selectedPackage?.durationUnit}
          </span>
        </div>

        <div className="my-2">
          <Tabs
            useCaterpillar
            underlineInnerStyle={{ borderRadius: 6 }}
            caterpillarProperty="size"
            tabBarPadding={22}
            caterpillarMaxScale={6}
            tabs={tabData}
            type="line-divide"
            defaultActiveTab={0}
            tabBarHasDivider={false}
            onAfterChange={(tab, index) => {
              console.log("[tabs]", tab, index);
            }}
            translateZ={false}
          >
            <div className="demo-tab-content py-4">
              <li className="text-gray-500 text-sm font-medium rounded-t-lg">
                - Please active your data within {selectedPackage?.duration}{" "}
                {selectedPackage?.durationUnit}, it will not be available and
                refundale after the order expries
              </li>
              <li className="text-gray-500 my-2 text-sm font-medium rounded-t-lg">
                - Network: {selectedPackage?.speed}
              </li>
              {selectedPackage?.locationNetworkList?.map(
                (item: any, index: number) => (
                  <p key={index} className="text-gray-500 text-sm rounded-t-lg">
                    {item.networkType} {item.operatorName}
                  </p>
                )
              )}
            </div>
            <div className="demo-tab-content py-4">
              {selectedPackage?.locationNetworkList?.map(
                (item: any, index: number) => (
                  <div
                    key={index}
                    className="flex mb-3 justify-between items-center"
                  >
                    <div className="flex items-center">
                      <Image
                        src={item.locationLogo}
                        alt={item.locationName}
                        width={60}
                        height={60}
                        className="mr-2 w-[30px] h-[30px] rounded-[50%]"
                      />
                      <p className="text-gray-900 text-sm">
                        {item.locationName}
                      </p>
                    </div>

                    <div>
                      {item?.operatorList?.map(
                        (operator: any, index: number) => (
                          <div
                            key={index}
                            className="flex mb-1 gap-2 items-center justify-end"
                          >
                            <p className="text-gray-500 text-sm">
                              {operator.operatorName}
                            </p>
                            <p
                              key={index}
                              className="bg-sky-500 rounded-xl p-1 text-white text-sm"
                            >
                              {operator.networkType}
                            </p>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )
              )}
            </div>
          </Tabs>
        </div>

        <div>
          <Button size="huge" shape="round" onClick={handleBuy}>
            Buy
          </Button>
        </div>
      </div>
    </PopupSwiper>
  );
};

export default DetailPackage;
