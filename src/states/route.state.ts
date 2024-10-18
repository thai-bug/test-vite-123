import { atom } from "recoil";

export const RoutesState = atom<any[]>({
  key: "routes-state",
  default: [],
});
