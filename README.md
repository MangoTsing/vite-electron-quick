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

## change log

#### 201029
- fix build bug
- if build slowly, you can use electron mirror

#### 201026
- vite update, update `vite.config.ts` file
- add third lib `element-plus` import globally
- please note when using **NODE MODULE**, may need to change `vite.config.ts -> optimizeDeps.allowNodeBuiltins`

## 原因

- vite 处于 beta 状态，目前还没有适合的脚手架与 electron 10.x 版本搭配使用
- 业务上原本使用的 electron-vue 框架，由于使用的 electron 以及 webpack 版本较低，升级很麻烦。于是计划使用新的方案探索可能性。
- 使用 electron 的业务，是为数不多可以不考虑兼容性的业务，能够在业务中使用最新的框架是不可多得的机会。

## 关于 css 预处理

- 类似 vue-loader 的使用方式，另目前 vite 的 beta9.+ 版本可以使用配置项

## 关于 electron-store

- 在使用 electron 10.x 版本以上时，会出现 `app is not defined` 问题，需要在创建窗口时增加如下配置：

```
webPreferences: {
    enableRemoteModule: true,
},
```

## 使用 element-plus tips

- vite 请升级到 1.0.0 rc.5 以上版本，否则会造成热更新异常等问题
- **第三方库都可能会与 vite 以及 electron 框架本身造成冲突，请谨慎选择。**

---

![](https://tva1.sinaimg.cn/large/007S8ZIlly1gisdbjqpeij30h60kgwfb.jpg)

