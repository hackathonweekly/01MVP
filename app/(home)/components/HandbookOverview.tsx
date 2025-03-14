'use client';
import Link from 'next/link';
import { BookOpen, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { Card, CardContent } from '@/components/ui/card';

export function HandbookOverview() {
  const features = [
    {
      id: "no-reinvent",
      title: "不重复造轮子，收录&连接最佳内容",
      description: "在合适的地方链接到其他高质量的文档"
    },
    {
      id: "reference",
      title: "随手可查的参考手册",
      description: "我们鼓励你在产品创造的每一步中，随时翻阅相关章节"
    },
    {
      id: "practical",
      title: "注重实操经验",
      description: "创业理论很多书籍已经讲得很好了，我们更侧重于分享实践中的具体经验"
    }
  ];

  const aiFeatures = [
    {
      id: "learning",
      title: "学习的门槛",
      description: "ChatGPT等AI助手大大降低了技术学习的难度"
    },
    {
      id: "development",
      title: "开发的门槛",
      description: "你可以利用AI技术，一人之力，完成一个产品的开发"
    }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="w-full py-20 px-4 bg-gray-50 dark:bg-gray-950">
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 p-2 mb-4">
            <BookOpen className="h-6 w-6 text-black dark:text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">01MVP 手册介绍</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            帮助创造者从0到1实现<strong>最小可行产品</strong>（MVP），并快速找到他们的<strong>前100个</strong>用户
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">我们的不同</h3>
                <ul className="space-y-6">
                  {features.map((feature) => (
                    <motion.li key={feature.id} variants={item} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-black dark:text-white mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{feature.title}</p>
                        <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">最好的时代</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  这是一个最好的时代，你能做的事情远远超出了你的想象。利用现代工具和AI技术，一个人就能完成产品开发，这在以前是无法想象的。
                </p>
                
                <p className="font-medium mb-4 text-gray-900 dark:text-white">AI技术至少降低了:</p>
                <ul className="space-y-6">
                  {aiFeatures.map((feature) => (
                    <motion.li key={feature.id} variants={item} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-black dark:text-white mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{feature.title}</p>
                        <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Link 
            href="/docs" 
            className="text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 font-medium inline-flex items-center border-b-2 border-gray-200 dark:border-gray-700 pb-1 transition-all hover:border-black dark:hover:border-white"
          >
            查看完整手册内容 <span className="ml-1">→</span>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}