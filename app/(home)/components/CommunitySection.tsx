import Image from 'next/image';
import { ArrowRight, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CommunitySection() {
  return (
    <section className="w-full bg-gradient-to-r from-purple-600 to-blue-500 py-16 px-4 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">加入我们的社区</h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto">
          我们希望成为全球最具活力与温暖的AI产品创造者社区，通过AI加速创意实现，助力千万创作者打造有价值、有意义、有趣的产品。
        </p>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <div className="bg-white p-4 rounded-lg">
            <Image 
              src="/hackathonweekly/wechat_official_qr.jpg" 
              alt="WeChat QR Code" 
              width={150} 
              height={150}
              className="rounded"
            />
            <p className="text-gray-800 mt-2 font-medium">扫码关注微信公众号</p>
          </div>
          <div className="space-y-4">
            <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100 w-64">
              <a href="https://github.com/HackathonWeekly" target="_blank" rel="noopener noreferrer" className="font-semibold">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </a>
            </Button>
            <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100 w-64">
              <a href="https://discord.gg/01mvp" target="_blank" rel="noopener noreferrer" className="font-semibold">
                <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Discord icon</title><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>
                Discord
              </a>
            </Button>
            <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100 w-64">
              <a href="https://hackathonweekly.com" target="_blank" rel="noopener noreferrer" className="font-semibold">
                <ArrowRight className="mr-2 h-4 w-4" /> 访问官网
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
