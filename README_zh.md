[中文](./README_zh.md)|[English](./README.md)

# vren vue 2 大屏项目模板

项目介绍：这是一个基于vue 2、element-ui、echarts、echarts-gl、scss 编写的大屏项目模板，用于快速搭建大屏项目。本模板已经完全移除冗余业务功能模块，只保留了项目的核心功能模板，您在下载项目后可以根据项目需求进行定制化开发。

>  如果您喜欢的话，麻烦给我的项目点一个Star，谢谢

## 目录结构
```
├── .gitignore
├── .prettierignore
├── .prettierrc
├── README.md
├── babel.config.js
├── jsconfig.json
├── node_modules/
├── package-lock.json
├── package.json
├── postcss.config.js
├── public
├── src/
│   ├── App.vue
│   ├── api
│   ├── assets
│   ├── components
│   ├── layout
│   ├── main.js
│   ├── router
│   ├── store
│   ├── styles
│   ├── utils
│   ├── va.js
│   └── views
└── vue.config.js
```

本模板使用 pxtorem 进行单位转换，在项目`postcss.config.js`中默认配置为 rootValue: 192，设计稿宽度的 1/10，1920px/10 = 192。

本模板已配置 element-ui 组件库，使用 scss 进行样式编写，默认配置了 element-ui 的主题变量，可在项目`src/styles/element-variables.scss`中修改。

本模板提供基础的router和store，在`src/utils/http.js`中已经配置了全局的 axios 实例，并且已经安装了 echarts 图表库和 echarts-gl 3D 图表库，可根据项目需求进行删减。

本模板提供了三个通用组件，分别是：

-   `src/components/SpecialFonts`：特殊字体组件，用于页面中需要使用特殊字体的地方。
-   `src/components/sTable`：表格组件，用于页面中需要使用表格的地方。
-   `src/components/vaIcon`：图标组件，用于页面中需要使用图标的地方。


## 调试

```
// 安装依赖
npm install

// 运行项目
npm run local

// 打包
npm run build
```


### git commit msg 规范

git commit 时必须填写符合规范的 msg 信息，格式为“提交类型: 本次提交的详细说明”，如`git commit -m 'feat: 增加某业务删除功能'`。

-   feat: 增加新功能
-   fix: bug 修复
-   docs: 文档修改
-   style: 修改代码格式
-   refactor: 代码优化或重构
-   perf: 优化性能
-   test: 改善测试用例
-   build: 改变构建流程，如新增依赖库、工具
-   chore: 非 src 和 test 的修改
-   revert: 回滚代码
