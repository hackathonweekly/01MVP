import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CommunityJoin() {
  return (
    <section className="w-full py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">加入我们的社区</h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto">
          来周周黑客松，让想法落地！一起交流学习，分享产品创造的乐趣
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="bg-white p-6 rounded-lg text-center">
            <Image 
              src="/hackathonweekly/wecom_group_qr.jpg" 
              alt="WeChat Group QR Code" 
              width={200} 
              height={200}
              className="rounded mb-4"
            />
            <p className="text-gray-800 font-medium">扫码加入微信社群</p>
          </div>
          
          <div className="space-y-6 text-left">
            <div>
              <h3 className="text-2xl font-bold mb-2">参与社区活动</h3>
              <p className="text-white/90 mb-4">
                每周社区都会组织线上/线下活动，包括创意碰撞、技术分享、产品展示等
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-2">获取更多社区资源</h3>
              <p className="text-white/90 mb-4">
                加入社区后，你可以获得创业导师指导、产品测试资源、合作伙伴等支持
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                <a href="https://github.com/HackathonWeekly" target="_blank" rel="noopener noreferrer" className="font-semibold">
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </a>
              </Button>
              <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                <a href="https://hackathonweekly.com" target="_blank" rel="noopener noreferrer" className="font-semibold">
                  <ArrowRight className="mr-2 h-4 w-4" /> 访问官网
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-6 text-lg">
            <Link href="/docs" className="font-semibold">
              开始学习 <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
} 