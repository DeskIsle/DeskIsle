import { app, BrowserWindow, HandlerDetails, screen, shell, nativeImage, Tray, Menu, ipcMain, dialog } from 'electron';
import path from 'path';
import { getExternalDisplay } from './lib/display';
import { setInterval } from 'timers';
import { toBottom } from "electron-swd";
import { DisableMinimize } from 'electron-disable-minimize';


const gotTheLock = app.requestSingleInstanceLock();

if (!gotTheLock) {
  app.quit();
}

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

let mainWindow: BrowserWindow
let tray
let mouseEventThroughTransparencyTimer: NodeJS.Timeout | null
const mouseEventThroughTransparency = () => {
  const updateIgnoreMouseEvents = async (x: number, y: number) => {
    // capture 1x1 image of mouse position.
    const image = await mainWindow.webContents.capturePage({
      x,
      y,
      width: 1,
      height: 1,
    });
  
    const buffer = image.getBitmap();
    
    const transparent = !buffer[3]
    mainWindow.setIgnoreMouseEvents(transparent);
  };
  mouseEventThroughTransparencyTimer = setInterval(() => {
    if (!mainWindow) return
    const point = screen.getCursorScreenPoint();
    const [x, y] = mainWindow.getPosition();
    const [w, h] = mainWindow.getSize();
  
    if (point.x > x && point.x < x + w && point.y > y && point.y < y + h) {
      updateIgnoreMouseEvents(point.x - x, point.y - y);
    }
  }, 200);
}
  

const createWindow = () => {
  const primaryDisplay = screen.getPrimaryDisplay()
  let width = primaryDisplay.bounds.width, height = primaryDisplay.bounds.height
  const externalDisplay = getExternalDisplay()
  if (externalDisplay) {
    width = externalDisplay.bounds.width
    height = externalDisplay.bounds.height
  }
  mainWindow = new BrowserWindow({
    width: width,
    height: height,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      webSecurity: false
    },
    icon: path.join(__dirname, 'icons/logo.ico'),
    resizable: false,
    center: true,
    frame: false, 
    transparent: true,
    skipTaskbar: true,
    autoHideMenuBar: true,
    alwaysOnTop: false,
  });
  mainWindow.setIgnoreMouseEvents(true)
  mouseEventThroughTransparency()
  toBottom(mainWindow.getNativeWindowHandle())
  DisableMinimize(mainWindow.getNativeWindowHandle())
  
  // and load the index.html of the app.
  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
  } else {
    mainWindow.loadFile(path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`));
  }

  // 拦截链接打开方式
  mainWindow.webContents.setWindowOpenHandler((details: HandlerDetails) => {
    const url = (details.url as string)
    shell.openExternal(url)
    return { action: "deny"}
  })

  // Open the DevTools.
  // mainWindow.webContents.openDevTools({mode: 'detach'});

  mainWindow.on('focus', () => {
    toBottom(mainWindow.getNativeWindowHandle())
  })
};
const createTray = () => {
  const trayIcon = nativeImage.createFromPath('icons/logo.ico')
  tray = new Tray(trayIcon)
  tray.setTitle('DeskIsle')
  const contextMenu = Menu.buildFromTemplate([
    {
      label: '组件商店',
      click: () => {
        mainWindow.webContents.send('open-widget-store', true)
      }
    },
    {
      label: '设置',
      click: () => {
        mainWindow.webContents.send('open-settings', true)
      }
    },
    {
      label: '刷新',
      click: () => {
        mainWindow.reload()
      }
    }, 
    {
      label: '退出',
      click: () => {
        app.quit()
      }
    }
  ])
  tray.setToolTip('DeskIsle')
  tray.setContextMenu(contextMenu)
}
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()
  createTray()
  ipcMain.handle('open-file-dialog', handleFileOpen)
})
// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit(); 
  } 
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

async function handleFileOpen () {
  const { canceled, filePaths } = await dialog.showOpenDialog({})
  if (!canceled) {
    return filePaths[0]
  }
}
