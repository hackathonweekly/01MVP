import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';

export function HeroSection() {
  const cities = ["深圳", "北京", "上海", "杭州", "广州"];
  
  return (
    <section className="w-full py-24 lg:py-32 px-4 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
      <Container>
        <div className="flex flex-col items-center max-w-4xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Image 
                src="/logo.svg" 
                alt="01MVP Logo" 
                width={200} 
                height={60} 
                className="dark:invert" 
              />
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
              从 0 到 1<br />让创意快速变成产品
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto">
              通过 AI 驱动的工具和创造者社区，帮助你用最短时间打造最小可行产品，并快速找到前100个用户
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-black hover:bg-gray-800 text-white dark:bg-white dark:text-black dark:hover:bg-gray-200">
              <Link href="/docs" className="font-semibold px-8 py-6 text-lg">
                开始学习 <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-center max-w-4xl mx-auto">
            {cities.map((city) => (
              <div key={city} className="bg-gray-50 dark:bg-gray-900 rounded-md py-2 text-sm shadow-sm">
                {city}
              </div>
            ))}
          </div>
          
          <p className="mt-8 text-gray-600 dark:text-gray-400">
            <span className="font-semibold text-black dark:text-white">6335</span> 位创造者正在启航
          </p>
        </div>
      </Container>
    </section>
  );
} 