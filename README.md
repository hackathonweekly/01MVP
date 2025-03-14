# 01MVP - 从0到1，创造你的MVP

![01MVP Logo](/public/icon.svg)

[01MVP.com](https://01mvp.com) 是周周黑客松社区旗下的产品知识库，致力于帮助创造者从0到1实现**最小可行产品**（MVP），并快速找到他们的**前100个**用户。

> 🚧 本网站基于 [Fumadocs](https://fumadocs.vercel.app) 文档框架构建，目前仍在开发中，部分内容由 AI 生成。

## 项目简介

01MVP 是一个开源知识库，为创业者、开发者和产品爱好者提供从 0 到 1 构建产品的实用指南。我们注重实操经验，不重复造轮子，收录并连接最佳内容，成为随手可查的产品开发参考手册。

## 内容结构

本知识库包含以下主要内容:

- **开始指南** - 项目概述与基础设置
- **规划阶段** - MVP概念与市场验证
- **构建阶段** - 开发资源与工具
- **验证阶段** - 用户反馈与MVP扩展
- **发布阶段** - 部署与用户获取
- **案例研究** - 成功案例与失败教训
- **资源库** - 补充资源与工具
- **贡献指南** - 如何为知识库做出贡献

## 技术栈

本文档网站使用以下技术构建：

- [Next.js](https://nextjs.org/) - React 框架
- [Fumadocs](https://fumadocs.vercel.app) - 文档框架，提供了高性能的文档站点构建能力
  - 支持 MDX 内容编写
  - 提供内置搜索功能
  - 响应式设计，适配各种设备
  - 优化的性能和页面加载速度
- [Tailwind CSS](https://tailwindcss.com/) - CSS 框架

## 本地开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看结果。

### Fumadocs 开发

本站使用 Fumadocs 进行文档管理，主要文件和目录结构：

- `content/docs/` - MDX 文档内容
- `app/docs/` - 文档页面路由
- `lib/source.ts` - Fumadocs 内容源配置
- `app/layout.tsx` - 全局布局，包含 Banner 等组件

如需了解更多关于 Fumadocs 的内容，请访问 [Fumadocs 官方文档](https://fumadocs.vercel.app)。

## 参与贡献

01MVP 是一个开源知识库，我们欢迎创业者、开发者和产品爱好者分享自己的经验和案例。如果你有：

- MVP开发经验想要分享
- 发现内容错误需要修正
- 希望添加新的案例研究或资源

请通过以下方式参与贡献:

- 阅读我们的贡献指南了解如何提交内容
- GitHub: 提交Issue或PR
- 电子邮件: contact@hackathonweekly.com
- 社区交流: 加入我们的Discord

## 许可证

该项目采用 [LICENSE](LICENSE) 文件中指定的许可证。

## 联系我们

- 网站: [01MVP.com](https://01mvp.com)
- 邮箱: contact@hackathonweekly.com

**01MVP: 帮助创造者从0到1，实现梦想的第一步**
