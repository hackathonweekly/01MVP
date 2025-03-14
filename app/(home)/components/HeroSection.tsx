import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';

export function HeroSection() {
  return (
    <section className="w-full py-24 lg:py-32 px-4 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 relative overflow-hidden">
      {/* Geometric background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gray-100 dark:bg-gray-800 rounded-full opacity-20 transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gray-200 dark:bg-gray-700 rounded-full opacity-20 transform translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-1/3 right-0 w-40 h-40 border-2 border-gray-300 dark:border-gray-600 rounded-md opacity-20 transform rotate-12" />
        <div className="absolute bottom-1/4 left-12 w-24 h-24 border-2 border-gray-300 dark:border-gray-600 opacity-20 transform -rotate-12" />
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[1px] bg-gray-200 dark:bg-gray-700 opacity-30 transform -rotate-45" />
        <div className="absolute top-1/3 left-1/2 w-[300px] h-[1px] bg-gray-200 dark:bg-gray-700 opacity-30 transform rotate-45" />
      </div>
      
      <Container className="relative z-10">
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
              从 <span className="text-black dark:text-white bg-gray-100 dark:bg-gray-800 px-2 rounded">0</span> 到 <span className="text-black dark:text-white bg-gray-100 dark:bg-gray-800 px-2 rounded">1</span><br />
              <span className="bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-300 dark:to-white bg-clip-text text-transparent">梦想照进现实的跃迁</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto">
              从构思到落地，我们致力于帮助创造者用最短时间打造<strong>最小可行产品</strong>，并快速找到<strong>前100个用户</strong>
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-black hover:bg-gray-800 text-white dark:bg-white dark:text-black dark:hover:bg-gray-200 shadow-lg">
              <Link href="/docs" className="font-semibold px-8 py-6 text-lg">
                开始创造之旅 <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-3 gap-3 max-w-lg mx-auto">
            <div className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg shadow-sm" />
            <div className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-lg shadow-sm" />
            <div className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg shadow-sm" />
          </div>
        </div>
      </Container>
    </section>
  );
} 