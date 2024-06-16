import { atomWithStorage } from "jotai/utils"

export const layoutConfigAtom = atomWithStorage('user-config', {
  unit: 50,
  gap: 20,
  dragMode: true
})