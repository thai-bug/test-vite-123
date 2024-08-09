/* eslint-disable @typescript-eslint/no-explicit-any */
import { atom } from "recoil";

export const SelectedPackageState = atom<any>({
  key: "SelectedPackageState",
  default: undefined,
});
