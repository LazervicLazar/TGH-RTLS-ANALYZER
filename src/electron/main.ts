import { app, BrowserWindow } from "electron";
import path from "path";
import { isDev } from "./util.js";
import { get } from "http";
import { getPreloadPath } from "./pathResolver.js";

app.on("ready", () => {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: getPreloadPath(),
      nodeIntegration: true,
      contextIsolation: false,
      webSecurity: false,
      allowRunningInsecureContent: true,
    },
  });
  if (isDev()) {
    mainWindow.loadURL("http://localhost:5000");
  } else {
    mainWindow.loadFile(path.join(app.getAppPath(), "/dist-react/index.html"));
  }
});
