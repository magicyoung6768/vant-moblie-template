# vant-mobile-template

基于 Vue 3 + Vant 4 构建的移动端项目模板，集成了常用的开发工具和最佳实践，并内置了 [VueUse](https://vueuse.org/) 组件的使用示例。

## 技术栈

- **框架**: Vue 3.5
- **UI 库**: Vant 4.9
- **构建工具**: Vite 8.3
- **路由**: Vue Router 4.6
- **状态管理**: Pinia 4.1 + pinia-plugin-persistedstate
- **组合式工具**: VueUse 15（`@vueuse/core` + `@vueuse/components`）
- **类型检查**: TypeScript 7.0 + vue-tsc
- **CSS 预处理器**: Sass
- **代码规范**: oxlint + Prettier
- **测试**: Vitest 5 + @vue/test-utils + jsdom
- **工具库**: lodash, mitt, crypto-js

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

### Lint with [oxlint](https://oxc.rs/)

```sh
pnpm lint
```

### Format with [Prettier](https://prettier.io/)

```sh
pnpm format
```

### Unit Test with [Vitest](https://vitest.dev/)

```sh
pnpm test        # 监听模式
pnpm test:run    # 单次运行
pnpm test:coverage
```

### Serve Production Build

```sh
pnpm serve
```
