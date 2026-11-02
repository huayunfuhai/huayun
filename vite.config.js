import { defineConfig } from 'vite'

export default defineConfig({
  // GitHub Pages 会把网站放在 https://<用户名>.github.io/<仓库名>/ 下
  // base 写成 './' 打包出来的资源路径才是相对的，部署后不会报 404
  base: './',
})
