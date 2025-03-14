import Image from 'next/image';
import { Users } from 'lucide-react';

export function CommunityIntro() {
  const stats = [
    { number: "5,000+", label: "社区成员" },
    { number: "100+", label: "线下活动" },
    { number: "200+", label: "实操教程" }
  ];

  const cities = ["深圳", "杭州", "广州", "北京", "上海", "清迈"];

  return (
    <section className="w-full py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30 p-2 mb-4">
            <Users className="h-6 w-6 text-purple-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">周周黑客松社区</h2>
          <p className="text-lg text-fd-muted-foreground max-w-2xl mx-auto">
            AI产品创造者社区，致力于帮助创造者从0到1实现最小可行产品（MVP），快速找到他们的前100个用户，一起享受创造的乐趣
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          <div className="md:w-1/2">
            <Image 
              src="/hackathonweekly/purple-logo.png" 
              alt="HackathonWeekly Logo" 
              width={400} 
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4">关于我们</h3>
            <p className="text-fd-muted-foreground mb-6">
              自社区创立以来，我们已有成员分布于{cities.map((city, i) => (
                <span key={city}>
                  {i === cities.length - 1 ? `和${city}` : i === cities.length - 2 ? `${city}` : `${city}、`}
                </span>
              ))}等城市，共同打造有价值、有意义、有趣的产品。
            </p>
            
            <div className="p-4 bg-purple-50 dark:bg-purple-900/10 rounded-lg border border-purple-100 dark:border-purple-800 mb-8">
              <p className="italic text-lg">
                "花1周时间，创造1个最小可行产品，解决1个生活痛点，也许就是下1个改变世界的起点。"
              </p>
            </div>
            
            <p className="text-fd-muted-foreground">
              我们希望成为全球最具活力与温暖的AI产品创造者社区，通过AI加速创意实现，助力千万创作者打造有价值、有意义、有趣的产品。
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map(stat => (
            <div key={stat.label} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 text-center">
              <p className="text-4xl font-bold text-purple-600 mb-2">{stat.number}</p>
              <p className="text-fd-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 