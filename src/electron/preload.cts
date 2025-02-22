const electron = require("electron");

electron.contextBridge.exposeInMainWorld("electron", {
  subscribeStatistics: (callback: (statistics: any) => void) => callback({}),
  // Write what you want to pass here
});
