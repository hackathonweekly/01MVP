import Link from 'next/link';
import Image from 'next/image';
import { Github } from 'lucide-react';
import { Container } from '@/components/ui/container';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const links = [
    {
      title: "手册",
      items: [
        { text: "开始指南", href: "/docs/introduction" },
        { text: "规划阶段", href: "/docs/planning" },
        { text: "构建阶段", href: "/docs/building" },
        { text: "验证阶段", href: "/docs/validation" },
        { text: "发布阶段", href: "/docs/launching" },
      ]
    },
    {
      title: "资源",
      items: [
        { text: "案例研究", href: "/docs/case-studies" },
        { text: "实操教程", href: "/docs/case-studies/practical-tutorials" },
        { text: "资源库", href: "/docs/resources" },
        { text: "贡献指南", href: "/docs/contribute" },
      ]
    },
    {
      title: "社区",
      items: [
        { text: "GitHub", href: "https://github.com/HackathonWeekly" },
        { text: "官网", href: "https://hackathonweekly.com" },
        { text: "微信公众号", href: "#" },
        { text: "社群", href: "#" },
      ]
    },
  ];

  return (
    <footer className="w-full py-16 px-4 bg-gray-50 dark:bg-gray-950 relative overflow-hidden">
      {/* Background design elements - simplified */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Main horizontal line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-300 dark:via-indigo-700 to-transparent opacity-50" />
        
        {/* Minimal vertical lines */}
        <div className="absolute left-1/4 top-0 w-[2px] h-20 bg-gradient-to-b from-transparent via-blue-300 dark:via-blue-700 to-transparent opacity-50" />
        <div className="absolute right-1/4 top-0 w-[2px] h-20 bg-gradient-to-b from-transparent via-blue-300 dark:via-blue-700 to-transparent opacity-50" />
        
        {/* Single diagonal line */}
        <div className="absolute top-0 left-0 w-[250px] h-[3px] bg-gradient-to-r from-transparent to-amber-300 dark:to-amber-700 opacity-40 transform rotate-45 origin-top-left" />
        
        {/* One geometric shape for balance */}
        <div className="absolute bottom-20 right-20 w-24 h-24 border-4 border-indigo-200 dark:border-indigo-700 opacity-30 transform -rotate-12" />
      </div>
      
      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-12 mb-16">
          <div>
            <Link href="/" className="flex items-center mb-6">
              <Image 
                src="/logo.svg" 
                alt="01MVP Logo" 
                width={80} 
                height={24}
                className="dark:invert"
              />
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              帮助创造者从0到1，实现最小可行产品，并找到前100个用户
            </p>
            <a 
              href="https://github.com/HackathonWeekly" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white inline-flex items-center transition-colors"
            >
              <Github className="h-5 w-5 mr-2" />
              GitHub
            </a>
          </div>
          
          {links.map(group => (
            <div key={group.title}>
              <h3 className="font-bold mb-4 text-gray-900 dark:text-white">{group.title}</h3>
              <ul className="space-y-3">
                {group.items.map(link => (
                  <li key={link.text}>
                    <Link 
                      href={link.href}
                      className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 text-center text-gray-600 dark:text-gray-400">
          <p className="mb-2">
            <a href="https://01mvp.com" className="hover:text-black dark:hover:text-white transition-colors">01MVP.com</a> © {currentYear} 
            {' '}由{' '}
            <a href="https://hackathonweekly.com" className="hover:text-black dark:hover:text-white transition-colors">周周黑客松</a> 社区支持
          </p>
          <p className="text-sm">
            本站域名: <a href="https://01mvp.com" className="hover:text-black dark:hover:text-white transition-colors">https://01mvp.com</a>
          </p>
        </div>
      </Container>
    </footer>
  );
} 