/**
 * @module preload
 */

import { ipcRenderer } from "electron";

export function closeWindow() {
  ipcRenderer.send("window:close");
}

export function minimizeWindow() {
  ipcRenderer.send("window:minimize");
}

export function toggleMaximizeWindow() {
  ipcRenderer.send("window:toggle-maximize");
}
