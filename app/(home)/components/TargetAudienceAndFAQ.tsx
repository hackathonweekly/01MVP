import { Target, HelpCircle } from 'lucide-react';

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

  return (
    <section className="w-full py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        {/* Target Audience */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30 p-2 mb-4">
              <Target className="h-6 w-6 text-purple-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">适合人群</h2>
            <p className="text-lg text-fd-muted-foreground max-w-2xl mx-auto">
              01MVP手册专为以下人群设计，帮助各种背景的创造者快速实现产品创意
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {audiences.map(audience => (
              <div 
                key={audience.title}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700"
              >
                <h3 className="text-xl font-bold mb-2">{audience.title}</h3>
                <p className="text-fd-muted-foreground">{audience.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div>
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30 p-2 mb-4">
              <HelpCircle className="h-6 w-6 text-purple-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">常见问题</h2>
            <p className="text-lg text-fd-muted-foreground max-w-2xl mx-auto">
              关于01MVP手册和MVP开发过程的一些常见问题解答
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map(faq => (
              <div 
                key={faq.question}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700"
              >
                <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
                <p className="text-fd-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 