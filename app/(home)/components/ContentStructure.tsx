'use client';
import Link from 'next/link';
import { Layers, CheckSquare, FileText, Lightbulb, Wrench, UserCheck, Rocket, Library } from 'lucide-react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { Card } from '@/components/ui/card';

export function ContentStructure() {
  const contentSections = [
    {
      title: "开始指南",
      path: "/docs/introduction",
      description: "项目概述与基础设置",
      icon: <FileText className="h-5 w-5" />
    },
    {
      title: "规划阶段",
      path: "/docs/planning",
      description: "MVP概念与市场验证",
      icon: <Lightbulb className="h-5 w-5" />
    },
    {
      title: "构建阶段",
      path: "/docs/building",
      description: "开发资源与工具",
      icon: <Wrench className="h-5 w-5" />
    },
    {
      title: "验证阶段",
      path: "/docs/validation",
      description: "用户反馈与MVP扩展",
      icon: <UserCheck className="h-5 w-5" />
    },
    {
      title: "发布阶段",
      path: "/docs/launching",
      description: "部署与用户获取",
      icon: <Rocket className="h-5 w-5" />
    },
    {
      title: "案例研究",
      path: "/docs/case-studies",
      description: "成功案例与失败教训",
      icon: <Library className="h-5 w-5" />
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
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="w-full py-20 px-4 bg-white dark:bg-black relative overflow-hidden">
      {/* Background design elements - simplified */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Main large blurred circle */}
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-teal-50 via-emerald-100 to-transparent dark:from-teal-950 dark:via-emerald-900 dark:to-transparent rounded-full opacity-40 transform translate-x-1/2 blur-xl" />
        
        {/* Key horizontal and vertical lines */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-300 dark:via-indigo-700 to-transparent opacity-50" />
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-300 dark:via-indigo-700 to-transparent opacity-50" />
        
        {/* Primary diagonal line */}
        <div className="absolute top-1/2 left-1/2 w-[700px] h-[3px] bg-gradient-to-r from-transparent via-emerald-300 dark:via-emerald-700 to-transparent opacity-60 transform -rotate-45" />
        
        {/* A few strategic geometric shapes */}
        <div className="absolute left-10 top-1/3 w-16 h-16 border-4 border-indigo-200 dark:border-indigo-700 rounded-sm opacity-50 transform rotate-45" />
        <div className="absolute right-20 bottom-1/4 w-20 h-20 bg-gradient-to-br from-amber-100 to-amber-200 dark:from-amber-900 dark:to-amber-800 opacity-40 transform rotate-12 shadow-lg" />
        
        {/* Limited colorful circles */}
        <div className="absolute top-1/4 right-1/3 w-8 h-8 bg-gradient-to-br from-blue-200 to-blue-300 dark:from-blue-700 dark:to-blue-600 rounded-full opacity-60 shadow-lg" />
        <div className="absolute bottom-1/4 left-1/3 w-8 h-8 bg-gradient-to-br from-amber-200 to-amber-300 dark:from-amber-700 dark:to-amber-600 rounded-full opacity-60 shadow-lg" />
      </div>
      
      <Container className="relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 p-2 mb-4">
            <Layers className="h-6 w-6 text-gray-900 dark:text-gray-100" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">手册内容结构</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            我们设计了一套从零到一的系统课程，覆盖MVP开发的每个阶段
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {contentSections.map((section) => (
            <motion.div key={section.title} variants={itemVariants}>
              <Link href={section.path}>
                <Card className="h-full p-6 border border-gray-200 dark:border-gray-800 bg-white hover:bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-850 shadow-sm transition-colors duration-200 flex items-start">
                  <div className="mr-4 p-2 rounded-md bg-gray-100 dark:bg-gray-800">
                    {section.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{section.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{section.description}</p>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-10"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">实战案例</h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            在案例研究部分，我们提供了三类重要的学习资源
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {caseSections.map((section, idx) => (
            <motion.div key={section.title} variants={itemVariants}>
              <Link href={section.path}>
                <Card className="h-full p-6 border border-gray-200 dark:border-gray-800 bg-white hover:bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-850 shadow-sm transition-colors duration-200">
                  <div className="flex justify-between items-center mb-4">
                    <span className="inline-flex w-8 h-8 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white font-semibold text-sm">
                      {idx + 1}
                    </span>
                    <CheckSquare className="h-5 w-5 text-gray-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{section.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{section.description}</p>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
} 