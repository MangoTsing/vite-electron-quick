/**
 * electron 主文件
 */
import { join } from 'path'
import { app, BrowserWindow } from 'electron'
import is_dev from 'electron-is-dev'
import dotenv from 'dotenv'

dotenv.config({ path: join(__dirname, '../../.env') })

let win = null

function createWin() {
  // 创建浏览器窗口
  win = new BrowserWindow({
    width: 330,
    height: 700,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
    },
  })

  const URL = is_dev
    ? `http://localhost:${process.env.PORT}` // vite 启动的服务器地址
    : `file://${join(__dirname, '../../dist/render/index.html')}` // vite 构建后的静态文件地址

  win.loadURL(URL)
}

app.whenReady().then(createWin)
