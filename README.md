# vite-electron-quick
Simple Vite Vue3 and Electron 10.x quick template.

## quick install

```

npx create-vite-electron <project_name>

```

## run

- yarn

- yarn dev

- yarn build

## 原因
- vite 处于 beta 状态，目前还没有适合的脚手架与 electron 10.x 版本搭配使用
- 业务上原本使用的 electron-vue 框架，由于使用的 electron 以及 webpack 版本较低，升级很麻烦。于是计划使用新的方案探索可能性。
- 使用 electron 的业务，是为数不多可以不考虑兼容性的业务，能够在业务中使用最新的框架是不可多得的机会。

## 关于 css 预处理
- 类似 vue-loader 的使用方式，另目前 vite 的 beta9.+ 版本可以使用配置项

## 关于 electron-store
- 在使用 electron 10.x 版本以上时，会出现 `app is not defined` 问题，需要在创建窗口时增加如下配置：

## 使用 element-plus tips

- 因为是一个比较常见的框架，目前测试时发现 element-plus 框架和 vite 本身不能很好兼容，会导致热更新渲染失效的问题
- 不排除其他第三方框架会与 vite 造成同样问题，存在使用风险

```
webPreferences: {
    enableRemoteModule: true,
},
```

---

![](https://tva1.sinaimg.cn/large/007S8ZIlly1gisdbjqpeij30h60kgwfb.jpg)

