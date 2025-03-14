'use client';
import Link from 'next/link';
import { Layers, CheckSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { Card } from '@/components/ui/card';

export function ContentStructure() {
  const contentSections = [
    {
      title: "开始指南",
      path: "/docs/introduction",
      description: "项目概述与基础设置"
    },
    {
      title: "规划阶段",
      path: "/docs/planning",
      description: "MVP概念与市场验证"
    },
    {
      title: "构建阶段",
      path: "/docs/building",
      description: "开发资源与工具"
    },
    {
      title: "验证阶段",
      path: "/docs/validation",
      description: "用户反馈与MVP扩展"
    },
    {
      title: "发布阶段",
      path: "/docs/launching",
      description: "部署与用户获取"
    },
    {
      title: "案例研究",
      path: "/docs/case-studies",
      description: "成功案例与失败教训"
    }
  ];

  const caseSections = [
    {
      title: "成功案例",
      path: "/docs/case-studies/success-stories",
      description: "已成功上线的MVP案例分析"
    },
    {
      title: "失败博物馆",
      path: "/docs/case-studies/failure-museum",
      description: "从失败中学习的宝贵经验"
    },
    {
      title: "实操教程",
      path: "/docs/case-studies/practical-tutorials",
      description: "手把手教你创建MVP的实战指南"
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
    <section className="w-full py-20 px-4 bg-white dark:bg-black border-y border-gray-200 dark:border-gray-800">
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 p-2 mb-4">
            <Layers className="h-6 w-6 text-black dark:text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">手册内容结构</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            本手册包含以下主要内容，你可以根据自己的需求和阶段随时查阅相关章节
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {contentSections.map((section, index) => (
            <motion.div key={section.title} variants={item}>
              <Link 
                href={section.path}
                className="block h-full"
              >
                <Card className="h-full transition-all hover:shadow-md hover:border-gray-400 dark:hover:border-gray-600">
                  <div className="p-6 flex items-start">
                    <div className="mr-4 mt-1 bg-gray-100 dark:bg-gray-800 rounded-md p-2 text-black dark:text-white">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{section.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{section.description}</p>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 p-2 mb-4">
              <CheckSquare className="h-6 w-6 text-black dark:text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">实操案例</h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              在案例研究部分，我们提供了三类重要的学习资源
            </p>
          </motion.div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {caseSections.map((section) => (
              <motion.div key={section.title} variants={item}>
                <Link 
                  href={section.path}
                  className="block h-full"
                >
                  <Card className="h-full transition-all hover:shadow-md hover:border-gray-400 dark:hover:border-gray-600">
                    <div className="p-6">
                      <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{section.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{section.description}</p>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
} 