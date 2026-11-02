# 我的第一个仓库 · 个人主页

> 第10周课堂样例项目：用 Trae 生成 → 用 Git 管理 → 用 GitHub Pages 发布

## 功能清单

- 顶部个人介绍横幅
- 个人信息卡片（姓名 / 班级 / 学号）
- 课程清单表格（由 JavaScript 渲染）
- 点赞按钮交互
- 页面加载时间显示

## 技术栈

- Vite 5
- 原生 HTML + CSS + JavaScript（无框架，方便看懂）

## 本地运行

```bash
npm install
npm run dev
```

浏览器打开终端里显示的地址（通常是 http://localhost:5173）。

## 打包

```bash
npm run build
```

产物在 `dist` 目录。

## 部署到 GitHub Pages

```bash
npm install gh-pages --save-dev
npm run deploy
```

然后到 GitHub 仓库 → Settings → Pages：
Source 选 **Deploy from a branch**，分支选 **gh-pages**，目录选 **/(root)**，保存。
等 1–3 分钟即可拿到公网链接。

## 开发说明

本项目为前端静态原型，没有后端和数据库。
第 11 周会在本仓库基础上继续迭代，接入数据库做全栈 CRUD。
