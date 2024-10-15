import { RouteProps } from "@douyinfe/semi-ui/lib/es/breadcrumb";
import { atom } from "recoil";

const RoutesState = atom<RouteProps[]>({
  key: "routes-state",
  default: [],
});

export default RoutesState;
