import { atom } from "recoil";

export const OpenKeysStates = atom<string[]>({
  key: "open-key-states",
  default: [],
});

export const CollapseStates = atom<boolean>({
  key: "collapse-states",
  default: false,
});
