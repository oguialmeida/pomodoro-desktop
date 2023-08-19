// O módulo app controla elementos de ciclo de vida da sua aplicação
// O módulo BrowserWindow cria e gerencia as janelas da aplicação 
const { app, BrowserWindow } = require('electron')
const path = require('path')

// Carrega o arquivo html em uma nova instancia do BrowserWindow
const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    win.loadFile('./src/index.html')
}

// A criação das janelas só podem ser criadas após o módulo app disparar o ready (por isso o uso da promise)
app.whenReady().then(() => {
    createWindow()

    // Para caso esteja aberto sem janela ele abra alguma
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

// Fechar a janela direitinho no mac
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})