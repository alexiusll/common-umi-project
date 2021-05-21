# 通用脚手架 v1.01

创建方式: 

```bash
$ yarn create @umijs/umi-app
# 或 npx @umijs/create-umi-app
```

## 常用指令：

安装依赖:

```bash
$ yarn
```

开启dev服务器:

```bash
$ yarn start
$ yarn start:dev
$ yarn start:prod
```

分析构建文件体积:

```bash
$ yarn analyze
```

构建项目:

```bash
$ yarn build
$ yarn build:dev
$ yarn build:prod
```

查看dva列表

```bash
$ yarn dvalist
```

生成openapi

```bash
$ yarn openapi
```

## vscode 插件

### 需要使用的vscode插件有:

- ESLint
- koroFileHeader 
- Prettier - Code formatter

### 可选插件

- Chinese (Simplified) Language Pack for Visual Studio Code  (中文插件)
- GitLens — Git supercharged
- One Dark Pro
- vscode-icons


## vscode 配置文件参考:

```json
{
  "workbench.colorTheme": "One Dark Pro",
  "workbench.iconTheme": "vscode-icons",
  "terminal.integrated.shell.windows": "C:\\WINDOWS\\System32\\cmd.exe",
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
  "fileheader.customMade": {
    // 头部注释
    "Author": "linkenzone", // 文件编辑者
    "Date": "Do not edit", // 文件创建时间
    "Descripttion": "Do not edit" // 文件描述
  },
  "fileheader.cursorMode": {
    // 函数注释
    "description": "",
    "param": "",
    "return": ""
  },
}
```

