// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, ipcRenderer } from 'electron'

// declare the window.electronAPI, nor the font-end can't access electronAPI
declare global {
  interface Window {
    electronAPI: any;
  }
}

contextBridge.exposeInMainWorld('electronAPI', {
  onOpenWidgetStore: (callback: any) => ipcRenderer.on('open-widget-store', (_event, value) => callback(value)),
  onOpenSettings: (callback: any) => ipcRenderer.on('open-settings', (_event, value) => callback(value)),
})