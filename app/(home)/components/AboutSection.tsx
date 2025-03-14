import Image from 'next/image';

export function AboutSection() {
  return (
    <section className="w-full bg-gray-50 dark:bg-gray-900 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <Image 
              src="/hackathonweekly/purple-logo.png" 
              alt="HackathonWeekly Logo" 
              width={300} 
              height={300}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">关于周周黑客松</h2>
            <p className="text-fd-muted-foreground mb-4">
              HackathonWeekly周周黑客松是一个AI产品创造者社区，致力于帮助创造者从0到1实现最小可行产品（MVP），快速找到他们的前100个用户，一起享受创造的乐趣。
            </p>
            <p className="text-fd-muted-foreground mb-4">
              我们的社区成员分布于深圳、杭州、广州、北京、上海和清迈等城市，共同打造有价值、有意义、有趣的产品。
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 mt-6">
              <p className="text-lg font-medium italic">
                "花1周时间，创造1个最小可行产品，解决1个生活痛点，也许就是下1个改变世界的起点。"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 