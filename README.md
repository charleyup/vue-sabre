# vue-sabre
> 一套符合厦门梅沙科技设计、开发规范的轻量级移动端vue插件库，旨在统一团队内部开发规范，提高开发效率。

## 目录结构
```
├── build                      # webpack配置
│   ├── webpack.common.js      # 通用配置
│   ├── webpack.components.js  # 单组件打包配置
│   ├── webpack.demo.js        # 示例打包配置
│   └── webpack.lib.js         # lib打包配置
├── dist                       # 打包构建输出目录
│   ├── packages               # 单组件输出目录
│   ├── vue-sabre.css          # 全局样式
│   └── vue-sabre.js           # 插件库lib
├── examples                   # 示例、本地调试项目
│   ├── assets
│   ├── views
│   ├── App.vue
│   ├── index.html
│   ├── main.js
│   └── router.js
├── scripts
│   ├── __template__           # 文件模板
│   ├── createPackage.js       # 创建插件模板脚本
│   └── util.js                # 工具函数
├── src
│   ├── assets                 # 静态资源
│   ├── packages               # 插件源码
│   ├── utils                  # 工具函数
│   ├── config.json            # 已添加的插件库
│   └── index.js               # 全局打包入口文件
├── README.md
├── package.json
├── yarn-error.log
└── yarn.lock
```


## 常用命令
```bash
# 新增插件
yarn cp

# 开发调试
yarn dev

# 文档预览
yarn doc:dev

# 全局打包
yarn build:lib

# 组件打包
yarn build:cpt

# 打包示例项目
yarn build:demo
```

## 开发规范
### 分支规范
- 开发新插件分支命名：`feat/button/licl`
- 修复插件bug分支命名：`fix/button/licl`

### 编码规范
- [Vue风格指南](https://cn.vuejs.org/v2/style-guide/)
- [BEM-CSS规范](https://en.bem.info/methodology/css/)
