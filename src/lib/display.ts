import { screen } from "electron";

export function getExternalDisplay() {
  const displays = screen.getAllDisplays()
  let externalDisplay = displays.find((display) => {
      return display.bounds.x !== 0 || display.bounds.y !== 0
  })
  return externalDisplay
}