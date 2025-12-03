const { app, BrowserWindow, nativeTheme, Menu, shell } = require('electron')

const createWindow = () => {
  nativeTheme.themeSource = 'system' // Can be 'dark' or 'light'
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: './src/public/img/folha-de-carvalho.png',
    resizable: false,
    //autoHideMenuBar: true,
    //titleBarStyle: 'hidden'
  })

  Menu.setApplicationMenu(Menu.buildFromTemplate(template))

  win.loadFile('./src/views/index.html')
}

const aboutWindow = () => {
  const about = new BrowserWindow({
    width:360,
    height:220,
    icon: './src/public/img/folha-de-carvalho.png',
    autoHideMenuBar: true,
    resizable: false,
  })

  about.loadFile('./src/views/sobre.html')
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

//menu template
const template = [
  {
    label: 'Arquivo',
    submenu: [
      {
        label: 'Sair',
        click: () => app.quit(),
        accelerator: 'Alt+F4'
      }
    ]
  },
  {
    label: 'Exibir',
    submenu: [
      {
        label: 'Recarregar',
        role: 'reload'
      },
      {
        label: 'Ferramentas do desenvolvedor',
        role: 'toggleDevTools'
      },
      {
        type: 'separator'
      },
      {
        label: 'Aumentar zoom',
        role: 'zoomIn'
      },
      {
        label: 'Reduzir zoom',
        role: 'zoomOut'
      },
      {
        label: 'Zoom padrão',
        role: 'resetZoom'
      }
    ]
  },
  {
    label: 'Ajuda',
    submenu: [
      {
        label: 'docs',
        click: () => shell.openExternal('https://www.electronjs.org/docs/latest/')
      },
      {
        type: 'separator'
      },
      {
        label: 'Sobre',
        click: () => aboutWindow()
      }
    ]
  
  },
]