import { ipcMain, BrowserWindow } from "electron";

function registerIpcMainEvents() {

  function getFocusedWindow() {
    return BrowserWindow.getFocusedWindow();
  }

  function handleMinimize() {
    getFocusedWindow()?.minimize();
  }

  function handleMaximize() {
    const window = getFocusedWindow();
    if (window?.isMaximized()) {
      window.unmaximize();
    } else {
      window?.maximize();
    }
  }

  function handleClose() {
    getFocusedWindow()?.close();
  }

  ipcMain.on("window:minimize", handleMinimize);
  ipcMain.on("window:toggle-maximize", handleMaximize)
  ipcMain.on("window:close", handleClose);
}

export function registerIpcMainHandlers() {

}

export function registerIpcMainListeners() {
  registerIpcMainEvents();
  registerIpcMainHandlers();
}