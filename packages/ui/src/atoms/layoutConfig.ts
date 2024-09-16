import { atomWithStorage } from "jotai/utils";

export const layoutConfigAtom = atomWithStorage("config", {
  unit: 50,
  gap: 10,
  editMode: true,
  compactType: "vertical",
  preventCollision: false,
});
