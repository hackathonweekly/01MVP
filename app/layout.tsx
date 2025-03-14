import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Banner } from 'fumadocs-ui/components/banner';

const inter = Inter({
  subsets: ['latin'],
});

// 配置网站元数据
export const metadata: Metadata = {
  title: {
    default: '01MVP',
    template: '%s | 01MVP',
  },
  description: '01MVP - Building your first MVP fast',
  keywords: ['01MVP', 'MVP', 'development', 'startup'],
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  manifest: '/manifest.json',
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <Banner id="site-under-construction" variant="rainbow">
          🚧 网站正在建设中，部分内容由 AI 生成，如有错误，请见谅 🚧
        </Banner>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
