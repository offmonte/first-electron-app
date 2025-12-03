const { app, BrowserWindow, nativeTheme } = require('electron')

const createWindow = () => {
  nativeTheme.themeSource = 'system' // Can be 'dark' or 'light'
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: './src/public/img/folha-de-carvalho.png',
    resizable: false,
    autoHideMenuBar: true,
    //titleBarStyle: 'hidden'
  })

  win.loadFile('./src/views/index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})