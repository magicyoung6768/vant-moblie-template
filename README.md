# vant-mobile-template

基于 Vue 3 + Vant 4 构建的移动端项目模板，集成了常用的开发工具和最佳实践。

## 技术栈

- **框架**: Vue 3 
- **UI 库**: Vant 4 
- **构建工具**: Vite 7.0.0
- **路由**: Vue Router 4.6.0
- **状态管理**: Pinia 3.0.0 + pinia-plugin-persistedstate
- **类型检查**: TypeScript 5.4.0
- **CSS 预处理器**: Sass  
- **代码规范**: ESLint + Prettier
- **响应式设计**: lib-flexible + postcss-pxtorem
- **网络请求**: Axios
- **工具库**: lodash, mitt, crypto-js
- **调试工具**: vconsole

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Type-Check

```sh
pnpm type-check
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```

### Format with Prettier

```sh
pnpm format
```

### Serve Production Build

```sh
pnpm serve
```
