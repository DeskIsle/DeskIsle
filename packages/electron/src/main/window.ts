import { join } from "node:path";
import { is } from "@electron-toolkit/utils";
import { BrowserWindow, screen, shell } from "electron";
import icon from "../../resources/logo.png?asset";

function getExternalDisplay() {
	const displays = screen.getAllDisplays();
	const externalDisplay = displays.find((display) => {
		return display.bounds.x !== 0 || display.bounds.y !== 0;
	});
	return externalDisplay;
}

// function mouseEventThroughTransparency(window: BrowserWindow) {
//   const updateIgnoreMouseEvents = async (x: number, y: number) => {
//     // capture 1x1 image of mouse position.
//     if (window.isDestroyed()) {
//       return;
//     }
//     const image = await window.webContents.capturePage({
//       x,
//       y,
//       width: 1,
//       height: 1,
//     });

//     const buffer = image.getBitmap();

//     const transparent = !buffer[3];
//     window.setIgnoreMouseEvents(transparent);
//   };
//   return setInterval(() => {
//     if (!window) {
//       return;
//     }
//     const point = screen.getCursorScreenPoint();
//     const [x, y] = window.getPosition();
//     const [w, h] = window.getSize();

//     if (point.x > x && point.x < x + w && point.y > y && point.y < y + h) {
//       updateIgnoreMouseEvents(point.x - x, point.y - y);
//     }
//   }, 200);
// }

export function createWindow(): BrowserWindow {
	// Create the browser window.

	const primaryDisplay = screen.getPrimaryDisplay();
	let { width, height } = primaryDisplay.bounds;

	const externalDisplay = getExternalDisplay();
	if (externalDisplay) {
		width = externalDisplay.bounds.width;
		height = externalDisplay.bounds.height;
	}

	const mainWindow = new BrowserWindow({
		width,
		height,
		icon,
		webPreferences: {
			preload: join(__dirname, "../preload/index.js"),
			nodeIntegration: true,
			webSecurity: false,
		},
		resizable: false,
		center: true,
		frame: false,
		transparent: true,
		skipTaskbar: true,
		autoHideMenuBar: true,
		alwaysOnTop: false,
	});
	mainWindow.setIgnoreMouseEvents(true);
	// mouseEventThroughTransparency(mainWindow);

	// toBottom(mainWindow.getNativeWindowHandle());
	// DisableMinimize(mainWindow.getNativeWindowHandle());

	mainWindow.webContents.setWindowOpenHandler((details) => {
		shell.openExternal(details.url);
		return { action: "deny" };
	});

	// HMR for renderer base on electron-vite cli.
	// Load the remote URL for development or the local html file for production.
	if (is.dev && process.env.ELECTRON_RENDERER_URL) {
		mainWindow.loadURL(process.env.ELECTRON_RENDERER_URL);
	} else {
		mainWindow.loadFile(join(__dirname, "../renderer/index.html"));
	}

	mainWindow.on("focus", () => {
		if (mainWindow.isDestroyed()) {
			return;
		}
		// toBottom(mainWindow.getNativeWindowHandle())
	});
	mainWindow.on("closed", () => {
		mainWindow.removeAllListeners();
	});

	return mainWindow;
}
