import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export function ContentStructureSection() {
  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          内容结构
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
              产品开发阶段
            </h3>
            <ul className="space-y-3 text-fd-muted-foreground">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <Link href="/docs/planning" className="hover:text-purple-600">规划阶段</Link> - MVP概念与市场验证
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <Link href="/docs/building" className="hover:text-purple-600">构建阶段</Link> - 开发资源与工具
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <Link href="/docs/validation" className="hover:text-purple-600">验证阶段</Link> - 用户反馈与MVP扩展
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <Link href="/docs/launching" className="hover:text-purple-600">发布阶段</Link> - 部署与用户获取
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
              实操案例
            </h3>
            <ul className="space-y-3 text-fd-muted-foreground">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <Link href="/docs/case-studies/success-stories" className="hover:text-purple-600">成功案例</Link> - 已成功上线的MVP案例分析
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <Link href="/docs/case-studies/failure-museum" className="hover:text-purple-600">失败博物馆</Link> - 从失败中学习的宝贵经验
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <Link href="/docs/case-studies/practical-tutorials" className="hover:text-purple-600">实操教程</Link> - 手把手教你创建MVP
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <Link href="/docs/resources" className="hover:text-purple-600">资源库</Link> - 补充资源与工具
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
} 