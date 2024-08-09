/* eslint-disable @typescript-eslint/no-explicit-any */
import { RefreshProvider } from "@/contexts/RefreshContext";
import { getPackages } from "@/services/packages/packages.api";
import { Loading, NavBar } from "@arco-design/mobile-react";
import { useQuery } from "@tanstack/react-query";
import { getRouteApi } from "@tanstack/react-router";
import classNames from "classnames";
import Header from "./components/Header";
import ListPackages from "./components/ListPackages";
import DetailPackage from "./components/DetailPackage";
import { FC } from "react";

const routeApi = getRouteApi("/packages");
const PackagesPage: FC = () => {
  const { code }: any = routeApi.useSearch();
  const { data, isLoading } = useQuery({
    queryKey: ["packages", code],
    queryFn: () =>
      getPackages({
        locationCode: code,
      }),
    enabled: !!code,
  });

  if (!code) {
    return <></>;
  }

  return (
    <>
      <NavBar
        fixed={true}
        title="Title"
        hasBottomLine={false}
        onClickRight={() => {}}
      />
      <RefreshProvider>
        <div
          className={classNames("min-h-screen", {
            "flex justify-center items-center": isLoading,
          })}
        >
          {isLoading && <Loading type="circle" />}

          {!isLoading && (
            <>
              <Header countryCode={code} />
              <ListPackages packages={data || []} />
              <DetailPackage />
            </>
          )}
        </div>
      </RefreshProvider>
    </>
  );
};

export default PackagesPage;
