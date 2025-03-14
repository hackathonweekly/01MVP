import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '01MVP - Build your first MVP fast',
  description: '01MVP 帮助你快速构建和验证最小可行产品',
};

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">欢迎使用 01MVP</h1>
      <p className="text-fd-muted-foreground">
        请访问{' '}
        <Link
          href="/docs"
          className="text-fd-foreground font-semibold underline"
        >
          文档页面
        </Link>{' '}
        了解如何使用 01MVP 构建您的第一个最小可行产品。
      </p>
    </main>
  );
}
