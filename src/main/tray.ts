import { type BrowserWindow, Menu, Tray, app, nativeImage } from "electron";

export function createTray(window: BrowserWindow) {
	const trayIcon = nativeImage.createFromPath("resources/logo.ico");
	const tray = new Tray(trayIcon);
	tray.setTitle("DeskIsle");
	const contextMenu = Menu.buildFromTemplate([
		{
			label: "组件商店",
			click: () => {
				window.webContents.send("open-widget-store", true);
			},
		},
		{
			label: "设置",
			click: () => {
				window.webContents.send("open-settings", true);
			},
		},
		{
			label: "刷新",
			click: () => {
				window.reload();
			},
		},
		{
			label: "退出",
			click: () => {
				app.quit();
			},
		},
	]);
	tray.setToolTip("DeskIsle");
	tray.setContextMenu(contextMenu);
}
