import { electronAPI } from "@electron-toolkit/preload";
import { contextBridge, ipcRenderer } from "electron";

// Custom APIs for renderer
export const api = {
	onOpenWidgetStore: (callback: (value: boolean) => void) => {
		ipcRenderer.on("open-widget-store", (_event, value) => callback(value));
	},
	onOpenSettings: (callback: (value: boolean) => void) => {
		ipcRenderer.on("open-settings", (_event, value) => callback(value));
	},
	openFile: () => {
		return ipcRenderer.invoke("open-file-dialog");
	},
};

export type API = typeof api;

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
	try {
		contextBridge.exposeInMainWorld("electron", electronAPI);
		contextBridge.exposeInMainWorld("api", api);
	} catch (error) {
		console.error(error);
	}
} else {
	window.electron = electronAPI;
	window.api = api;
}
