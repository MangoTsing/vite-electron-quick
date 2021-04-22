import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
import ElementUI from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import './theme/index.css'
import router from './router'

// vite 使用 esm 编译 import, electron 及 node.js 内置模块用 require 形式
const electron = require("electron")
const ipc = electron.ipcRenderer

ipc.send('store:set', { key: 'foo.bar', value: '👩' })
ipc.invoke('store:get', 'foo').then((res:string) => {
    console.log(res)
})
ipc.send('store:delete', 'foo')
ipc.invoke('store:get', 'foo').then((res:string) => {
    console.log(res)
})

const app = createApp(App)

app.use(router)
app.use(ElementUI)
app.mount('#app')
