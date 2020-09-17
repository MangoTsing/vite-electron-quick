# vite-electron-quick
基于 vite vue3 & electron 10.x 版本的快速启动模版

## 原因
- vite, vue3 处于 beta 状态，目前还没有适合的脚手架与 electron 10.x 版本搭配使用
- 业务上原本使用的 electron-vue 框架，由于使用的 electron 以及 webpack 版本较低，升级很麻烦。于是计划使用新的方案探索可能性。
- 使用 electron 的业务，是为数不多可以不考虑兼容性的业务，能够在业务中使用最新的框架是不可多得的机会。

## 冲
- yarn dev

## 关于 css 预处理
- 类似 vue-loader 的使用方式，另目前 vite 的 beta9.+ 版本可以使用配置项

## 关于 electron-store
- 在使用 electron 10.x 版本以上时，会出现 `app is not defined` 问题，需要在创建窗口时增加如下配置：

```
webPreferences: {
    enableRemoteModule: true,
},
```

---

![](https://tva1.sinaimg.cn/large/007S8ZIlly1gisdbjqpeij30h60kgwfb.jpg)

