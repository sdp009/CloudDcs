const { app, BrowserWindow } = require('electron')
let win;
function createWindow () {
  // Create the browser window.
  let {width, height} = require('electron').screen.getPrimaryDisplay().size;
  win = new BrowserWindow({width: width, height: height});

  win.loadURL(`file://${__dirname}/dist/index.html`)
  //// uncomment below to open the DevTools.
  // win.webContents.openDevTools()
  // Event when the window is closed.
  win.on('closed', function () {
    win = null
  })
}

//ipc request for manager names and ip
/*ipc.on(‘get-managers’, function(event, arg) {
  console.log(arg);
  //do child process or other data manipulation and name it manData
  event.sender.send(‘managersData’, manData);
});*/

// Create window on electron intialization
app.on('ready', createWindow)
// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS specific close process
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
app.on('activate', function () {
  // macOS specific close process
  if (win === null) {
    createWindow()
  }
})
