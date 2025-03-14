'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Github, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';

export function CommunityJoin() {
  return (
    <section className="w-full py-20 px-4 bg-white dark:bg-black relative overflow-hidden">
      {/* Background design elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gray-200 dark:bg-gray-800" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gray-200 dark:bg-gray-800" />
        <div className="absolute top-1/2 left-0 w-1/4 h-[1px] bg-gray-200 dark:bg-gray-800 transform -rotate-45" />
        <div className="absolute top-1/2 right-0 w-1/4 h-[1px] bg-gray-200 dark:bg-gray-800 transform rotate-45" />
        <div className="absolute top-16 right-16 w-24 h-24 border border-gray-200 dark:border-gray-800 rounded-full opacity-20" />
        <div className="absolute bottom-16 left-16 w-32 h-32 border border-gray-200 dark:border-gray-800 opacity-20 transform rotate-12" />
      </div>
      
      <Container className="relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 p-2 mb-4">
            <Users className="h-6 w-6 text-gray-900 dark:text-gray-100" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">加入创造者社区</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto">
            周周黑客松社区致力于帮助创造者落地产品创意。一起学习、分享，在创造中成长
          </p>
          
          <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-800 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                <Image 
                  src="/hackathonweekly/wechat_official_qr.jpg" 
                  alt="WeChat Group QR Code" 
                  width={160} 
                  height={160}
                  className="rounded mb-2"
                />
                <p className="text-gray-800 dark:text-gray-200 font-medium text-sm">扫码关注公众号</p>
              </div>
              
              <div className="max-w-md text-left">
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  社区为创造者提供创意碰撞、导师指导、产品展示与用户测试等资源，帮助你快速将创意变成现实
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Button asChild variant="outline" className="border-gray-300 dark:border-gray-700">
                    <a href="https://github.com/HackathonWeekly" target="_blank" rel="noopener noreferrer" className="font-medium">
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="border-gray-300 dark:border-gray-700">
                    <a href="https://hackathonweekly.com" target="_blank" rel="noopener noreferrer" className="font-medium">
                      <ArrowRight className="mr-2 h-4 w-4" /> 访问官网
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button asChild size="lg" className="bg-black hover:bg-gray-800 text-white dark:bg-white dark:text-black dark:hover:bg-gray-200 shadow-lg">
              <Link href="/docs" className="font-semibold px-8 py-6 text-lg">
                开启创造之旅 <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}