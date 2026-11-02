import './style.css'

// ===== 1. 页面标题：把这里改成你自己的项目名字 =====
const SITE_TITLE = '我的第一个仓库'
document.getElementById('site-title').textContent = SITE_TITLE

// ===== 2. 个人信息：改成你自己的 =====
const profile = {
  name: '张三',
  className: '软件工程专升本 2 班',
  studentId: '20240000',
}

document.getElementById('info-name').textContent = profile.name
document.getElementById('info-class').textContent = profile.className
document.getElementById('info-id').textContent = profile.studentId

// ===== 3. 课程清单：数据在 JS 里，渲染到表格 =====
const courses = [
  { week: '第 8 周', title: '前端工程化入门 · Vite', done: true },
  { week: '第 9 周', title: '前端 ↔ 后端接口交互', done: true },
  { week: '第 10 周', title: 'Git & GitHub 入门', done: false },
  { week: '第 11 周', title: '全栈 CRUD 实战', done: false },
]

const tbody = document.getElementById('course-body')
courses.forEach((item) => {
  const tr = document.createElement('tr')
  tr.innerHTML = `
    <td>${item.week}</td>
    <td>${item.title}</td>
    <td>${item.done ? '<span class="tag done">已完成</span>' : '<span class="tag todo">进行中</span>'}</td>
  `
  tbody.appendChild(tr)
})

// ===== 4. 点赞按钮：一个最简单的交互 =====
let likeCount = 0
const likeBtn = document.getElementById('like-btn')
const likeText = document.getElementById('like-count')

likeBtn.addEventListener('click', () => {
  likeCount += 1
  likeText.textContent = likeCount
})

// ===== 5. 显示页面构建时间 =====
document.getElementById('build-time').textContent =
  '页面加载时间：' + new Date().toLocaleString('zh-CN')
