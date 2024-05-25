import { app, BrowserWindow, HandlerDetails, ipcMain, screen, shell } from 'electron';
import path from 'path';
import { getExternalDisplay } from './lib/display';

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const externalDisplay = getExternalDisplay()
  let x = 5, y = 5, width = 80, height = 200
  if (externalDisplay) {
    x += externalDisplay.bounds.x
    y += externalDisplay.bounds.y
    width = externalDisplay.bounds.width - 10
    height = externalDisplay.bounds.height - 10
  }
  const mainWindow = new BrowserWindow({
    x: x,
    y: y,
    width: width,
    height: height,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
    frame: false,
    resizable: false,
    maximizable: false,
    transparent: true,
    skipTaskbar: true,
  });
  mainWindow.setAlwaysOnTop(false, "modal-panel", 0)
  // mainWindow.setIgnoreMouseEvents(true, { forward: true })
  mainWindow.setSize(width, height)

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
  
    // set ignore mouse events by alpha.
    mainWindow.setIgnoreMouseEvents(!buffer[3]);
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


// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

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


