# Huayun · 个人主页

> 第 10 周课堂样例项目：**用 Trae 生成 → 用 Git 管理 → 用 GitHub Pages 发布**

一个基于 Vite 5 的纯前端静态个人主页，没有任何后端和数据库依赖。页面结构简洁、代码量小，适合作为学习前端工程化和 Git 协作的入门样例。

---

## ✨ 功能亮点

- 🎨 **响应式布局** —— 蓝色渐变横幅 + 卡片式内容区，在手机和桌面端都能正常显示
- 📋 **个人信息展示** —— 姓名 / 班级 / 学号，直接改 JS 里的配置即可
- 📊 **动态课程清单** —— 课程数据写在 JS 数组里，页面加载后自动渲染成表格
- 👍 **点赞按钮交互** —— 点一下数字 +1，最简单的事件处理示例
- ⏰ **实时时间显示** —— 每次刷新页面都会更新构建时间

---

## 🛠 技术栈

| 类别 | 技术 | 说明 |
|------|------|------|
| 构建工具 | Vite 5 | 极速冷启动、热更新 |
| 前端 | 原生 HTML + CSS + JavaScript | 无框架依赖，代码直白易懂 |
| 部署 | gh-pages | 自动把 `dist` 目录推到 GitHub Pages |
| 版本管理 | Git + GitHub | 标准的 add → commit → push 流程 |

---

## 📁 项目结构

```
demo-project/
├── index.html          # 页面入口（定义 DOM 骨架）
├── package.json        # 依赖和脚本配置
├── vite.config.js      # Vite 配置（base: './' 适配 GitHub Pages 子路径）
├── src/
│   ├── main.js         # 全部页面逻辑（标题、信息、课程表、按钮）
│   └── style.css       # 全部样式（CSS 变量 + 卡片布局）
└── .gitignore          # 忽略 node_modules、dist 等
```

---

## 🚀 快速开始

### 环境要求

- Node.js ≥ 18
- npm（随 Node 自带即可）

### 本地运行

```bash
# 1. 安装依赖
npm install

# 2. 启动开发服务器（带热更新）
npm run dev
```

浏览器打开终端里显示的地址，一般是 <http://localhost:5173>。改完代码保存，页面会自动刷新。

### 生产打包

```bash
npm run build
```

产物会输出到 `dist/` 目录，是一套可直接部署的静态文件。可以用以下命令本地预览打包结果：

```bash
npm run preview
```

### 一键部署到 GitHub Pages

项目已经内置了部署脚本，直接执行：

```bash
npm run deploy
```

这会把 `dist/` 的内容推送到 `gh-pages` 分支。然后到 GitHub 仓库的 **Settings → Pages**：

1. **Source** 选 `Deploy from a branch`
2. **Branch** 选 `gh-pages`，目录选 `/(root)`
3. 保存，等 1–3 分钟即可获得公网访问链接

---

## 📝 开发说明

### 为什么用原生 HTML/CSS/JS 而不是 Vue/React？

因为课堂样例需要**让每个人都能看懂代码**。原生代码没有编译步骤，打开就能跑、就能改，方便同学们在课堂上跟着一步步调试。第 11 周会在本仓库基础上接入后端和数据库，做全栈 CRUD 实战。

### 为什么 vite.config.js 里 base 是 `'./'` 而不是 `'/'`？

GitHub Pages 的访问路径是 `https://<用户名>.github.io/<仓库名>/`，不是根路径 `/`。如果用 `'/'` 打包，部署后所有静态资源（CSS、JS）都会请求 `/src/main.js`，自然会 404。写 `'./'` 让打包出的资源路径全部变成相对路径，部署到任意子路径下都能正常工作。

---

## 📄 License

MIT — 本项目为教学用途，欢迎自由修改和分发。
