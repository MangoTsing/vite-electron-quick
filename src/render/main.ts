import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
// vite 使用 esm 编译 import, electron 及 node.js 内置模块用 require 形式
const electron = require('electron')
const Store = require('electron-store')

const store = new Store()

store.set('unicorn', '🦄');
console.log(store.get('unicorn'));
//=> '🦄'

// Use dot-notation to access nested properties
store.set('foo.bar', true);
console.log(store.get('foo'));
//=> {bar: true}

console.log('ipcRenderer:', electron.ipcRenderer)
// console.log('Store', store)

createApp(App as any).mount('#app')
