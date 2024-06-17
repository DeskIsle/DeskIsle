import { atomWithStorage } from "jotai/utils"

export const layoutConfigAtom = atomWithStorage('config', {
  unit: 50,
  gap: 20,
  editMode: true
})