import type { ElectronAPI } from "@electron-toolkit/preload";
import type { API } from "./src/preload";

declare global {
	interface Window {
		electron: ElectronAPI;
		api?: API;
	}
}
