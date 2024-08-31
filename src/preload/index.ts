import { contextBridge, ipcRenderer } from "electron";
import { electronAPI } from "@electron-toolkit/preload";

// Custom APIs for renderer
const api = {};

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
	try {
		contextBridge.exposeInMainWorld("electron", electronAPI);
		contextBridge.exposeInMainWorld("api", api);

		contextBridge.exposeInMainWorld("electronAPI", {
			onOpenWidgetStore: (callback: any) =>
				ipcRenderer.on("open-widget-store", (_event, value) => callback(value)),
			onOpenSettings: (callback: any) =>
				ipcRenderer.on("open-settings", (_event, value) => callback(value)),
			openFile: () => ipcRenderer.invoke("open-file-dialog"),
		});
	} catch (error) {
		console.error(error);
	}
} else {
	// @ts-ignore (define in dts)
	window.electron = electronAPI;
	// @ts-ignore (define in dts)
	window.api = api;
}
