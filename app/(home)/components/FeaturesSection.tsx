export function FeaturesSection() {
  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          为什么选择 <span className="text-purple-600">01MVP</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm">
            <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full w-fit mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600"><title>Documentation icon</title><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
            </div>
            <h3 className="text-xl font-bold mb-2">精选知识库</h3>
            <p className="text-fd-muted-foreground">不重复造轮子，收录并连接创业领域的最佳内容，构建随手可查的参考手册</p>
          </div>
          <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm">
            <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full w-fit mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600"><title>AI icon</title><circle cx="12" cy="12" r="10"/><path d="M16 12h-6.5a2 2 0 1 0 0 4H14a2 2 0 1 1 0 4H8"/><path d="M12 6v2"/><path d="M12 16v2"/></svg>
            </div>
            <h3 className="text-xl font-bold mb-2">AI 驱动开发</h3>
            <p className="text-fd-muted-foreground">借助 AI 技术降低学习和开发门槛，加速创意实现，让个人也能打造完整产品</p>
          </div>
          <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm">
            <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full w-fit mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600"><title>Community icon</title><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
            </div>
            <h3 className="text-xl font-bold mb-2">活跃社区</h3>
            <p className="text-fd-muted-foreground">加入5000+创造者社区，分享经验，获取反馈，一起享受创造的乐趣</p>
          </div>
        </div>
      </div>
    </section>
  );
} 