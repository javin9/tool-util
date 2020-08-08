## tool-util
### 前言
本技术方案从真实项目中抽离出核心代码，进一步开源，如果有不妥或者更好的修改意见，欢迎提issue

### 特点
- 用到的技术栈Lerna+Typescript+Jest+Eslint+docsify
- 构建时，根据依赖关系，自动决定打包顺序出，并采用多输入，多输出的方式，输出umd，es两种模块，支持类似`lodash`的按需加载
- tsconfig区分开发环境和生产环境。目的是开发环境，依赖本地ts资源，快速定位问题。
- 自动化测试
- 代码规范

### npm包
- @tool/core 基础工具
- @tool/common 依赖@tool/core的业务工具
- @tool/log  依赖@tool/core的打点工具
- @tool/style Less工具函数

### 开始
```bash
npm i
lerna bootsrap
```

### 测试
```bash
npm run lint
```

### 构建
``` bash
npm run build
```

### 发布
```bash
lerna publish
```

### 文档预览
```bash
npm run docs:dev
//http://localhost:3000
```

### TODO
- 引入vue-cli 写页面，测试

### 未完待续