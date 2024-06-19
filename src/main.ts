import { app, BrowserWindow, HandlerDetails, screen, shell, ipcMain, IpcMainEvent, nativeImage, Tray, Menu } from 'electron';
import path from 'path';
import { getExternalDisplay } from './lib/display';
import { setInterval, setTimeout } from 'timers';


// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

let mainWindow: BrowserWindow
let tray

const createWindow = () => {
  const primaryDisplay = screen.getPrimaryDisplay()
  let x = 20, y = 20, width = primaryDisplay.bounds.width, height = primaryDisplay.bounds.height
  const externalDisplay = getExternalDisplay()
  if (externalDisplay) {
    x += externalDisplay.bounds.x
    y += externalDisplay.bounds.y
    width = externalDisplay.bounds.width - 40
    height = externalDisplay.bounds.height - 40
  }
  mainWindow = new BrowserWindow({
    x: x,
    y: y,
    width: width,
    height: height,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
    },
    resizable: false,
    frame: false, 
    transparent: true,
    skipTaskbar: true,
    autoHideMenuBar: true,
    alwaysOnTop: true,
  });
  mainWindow.setSize(width, height)
  mainWindow.setIgnoreMouseEvents(true)
  
  // and load the index.html of the app.
  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
  } else {
    mainWindow.loadFile(path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`));
  }

  // mouse event through transparency
  const updateIgnoreMouseEvents = async (x: number, y: number) => {
    // capture 1x1 image of mouse position.
    const image = await mainWindow.webContents.capturePage({
      x,
      y,
      width: 1,
      height: 1,
    });
  
    var buffer = image.getBitmap();
    
    const transparent = !buffer[3]
    mainWindow.setIgnoreMouseEvents(transparent);
    
  };
  const timer = setInterval(() => {
    if (!mainWindow) return
    const point = screen.getCursorScreenPoint();
    const [x, y] = mainWindow.getPosition();
    const [w, h] = mainWindow.getSize();
  
    if (point.x > x && point.x < x + w && point.y > y && point.y < y + h) {
      updateIgnoreMouseEvents(point.x - x, point.y - y);
    }
  }, 200);

  mainWindow.on('close', () => {
    clearInterval(timer)
  })

  // 拦截链接打开方式
  mainWindow.webContents.setWindowOpenHandler((details: HandlerDetails) => {
    const url = (details.url as string)
    shell.openExternal(url)
    return { action: "deny"}
  })

  // Open the DevTools.
  mainWindow.webContents.openDevTools({mode: 'detach'});
};
const createTray = () => {
  const trayIcon = nativeImage.createFromPath('src/static/icon.png')
  tray = new Tray(trayIcon)
  tray.setTitle('DeskIsle')
  let contextMenu = Menu.buildFromTemplate([
    {
      label: '置顶',
      click: () => {
        mainWindow.setAlwaysOnTop(true)
      }
    }, {
      label: '取消置顶',
      click: () => {
        mainWindow.setAlwaysOnTop(false)
      }
    }, {
      label: '刷新',
      click: () => {
        mainWindow.reload()
      }
    }, {
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


