export function StatsSection() {
  return (
    <section className="w-full bg-gray-50 dark:bg-gray-900 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm text-center">
            <p className="text-4xl font-bold text-purple-600 mb-2">5,000+</p>
            <p className="text-fd-muted-foreground">社区成员</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm text-center">
            <p className="text-4xl font-bold text-purple-600 mb-2">100+</p>
            <p className="text-fd-muted-foreground">线下活动</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm text-center">
            <p className="text-4xl font-bold text-purple-600 mb-2">200+</p>
            <p className="text-fd-muted-foreground">实操教程</p>
          </div>
        </div>
      </div>
    </section>
  );
} 