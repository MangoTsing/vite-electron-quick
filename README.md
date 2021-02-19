# vite-electron-quick
👻 A fast Simple Vite2 Vue3 and Electron 11.x template.

⚡️ If you want to **fast** create a `Vite 2 + Vue 3 + Electron 11.x` project:

🚀 Why not use this?

## quick install

```

npx create-vite-electron <project_name>

yarn create vite-electron <project_name>

```

## run

- yarn

- yarn dev

- yarn build

## change log

#### 210219
- resolve #6
- change vite config file (alias => resolve.alias)
- current version: 
    - vite 2.0.1
    - electron 11.2.3

#### 210113
- fix Vite2 config bugs
- vue-router next use `hash mode` instead of `history mode`

#### 210108
- use Vite2
- use Electron 11.x

#### 201029
- fix build bug
- if build slowly, you can use electron mirror

#### 201026
- vite update, update `vite.config.ts` file
- add third lib `element-plus` import globally
- please note when using **NODE MODULE**, may need to change `vite.config.ts -> optimizeDeps.allowNodeBuiltins`

## 原因

- **vite 的快速发展以及更新，让其他能与之配合的项目各显神通，为什么不来试一试呢？**
- vite 处于 beta 状态，目前还没有适合的脚手架与 electron 11.x 版本搭配使用
- 业务上原本使用的 electron-vue 框架，由于使用的 electron 以及 webpack 版本较低，升级很麻烦。于是计划使用新的方案探索可能性。
- 使用 electron 的业务，是为数不多可以不考虑兼容性的业务，能够在业务中使用最新的框架是不可多得的机会。

## 使用 3rd lib tips

- **第三方库都可能会与 vite 以及 electron 框架本身造成冲突，请谨慎选择。**
