'use client';
import { Target, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { Card } from '@/components/ui/card';

export function TargetAudienceAndFAQ() {
  const audiences = [
    {
      title: "创业者",
      description: "希望快速验证产品创意，寻找市场契合点的早期创业者"
    },
    {
      title: "独立开发者",
      description: "想要独立开发并发布自己产品的技术人员"
    },
    {
      title: "产品经理",
      description: "需要了解如何从0到1打造最小可行产品的产品经理"
    },
    {
      title: "内容创作者",
      description: "想要开发自己数字产品的内容创作者"
    }
  ];

  const faqs = [
    {
      question: "我没有技术背景，能学会制作MVP吗？",
      answer: "完全可以！本手册专门为各种背景的创造者设计，包含多种无代码和低代码工具的指南，以及如何利用AI辅助开发的方法。"
    },
    {
      question: "制作一个MVP需要多长时间？",
      answer: "这取决于产品的复杂度，但我们鼓励以1周为目标，快速构建最简版本并获取反馈，然后迭代改进。"
    },
    {
      question: "如何找到我的前100个用户？",
      answer: "手册中的'发布阶段'章节详细介绍了如何通过社交媒体、社区分享、产品展示平台等多种渠道获取早期用户的策略。"
    },
    {
      question: "我可以为手册做贡献吗？",
      answer: "当然！01MVP是一个开源知识库，我们欢迎创业者、开发者和产品爱好者分享自己的经验和案例。详情请查看'贡献指南'。"
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
    <section className="w-full py-20 px-4 bg-gray-50 dark:bg-gray-950 relative">
      {/* Background design elements */}
      <div className="absolute top-0 left-1/3 right-1/3 h-px bg-gray-300 dark:bg-gray-700" />
      <div className="absolute bottom-0 left-1/3 right-1/3 h-px bg-gray-300 dark:bg-gray-700" />
      <div className="absolute left-0 top-1/3 bottom-1/3 w-px bg-gray-300 dark:bg-gray-700" />
      <div className="absolute right-0 top-1/3 bottom-1/3 w-px bg-gray-300 dark:bg-gray-700" />
      <div className="absolute top-12 right-12 w-24 h-24 border-2 border-gray-200 dark:border-gray-800 rounded-full opacity-20" />
      <div className="absolute bottom-12 left-12 w-16 h-16 border-2 border-gray-200 dark:border-gray-800 rounded-full opacity-20" />
      
      <Container className="relative z-10">
        {/* Target Audience */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 p-2 mb-4">
              <Target className="h-6 w-6 text-gray-800 dark:text-gray-200" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">适合谁使用？</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              我们的手册为各类创造者提供工具与指南，帮助他们将想法变为现实
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {audiences.map((audience, index) => (
              <motion.div key={audience.title} variants={itemVariants}>
                <Card className="h-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">
                  <div className="p-6">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gray-100 dark:bg-gray-800 mb-4 mx-auto">
                      <span className="text-lg font-bold text-gray-800 dark:text-gray-200">{index + 1}</span>
                    </div>
                    <h3 className="font-semibold text-lg text-center text-gray-900 dark:text-white mb-2">{audience.title}</h3>
                    <p className="text-sm text-center text-gray-600 dark:text-gray-400">{audience.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* FAQs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 p-2 mb-4">
              <HelpCircle className="h-6 w-6 text-gray-800 dark:text-gray-200" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">常见问题</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              关于创建MVP及获取用户的常见疑问解答
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {faqs.map((faq) => (
              <motion.div key={faq.question} variants={itemVariants}>
                <Card className="h-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">
                  <div className="p-6">
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">{faq.question}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
} 