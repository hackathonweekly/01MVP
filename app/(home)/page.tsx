import type { Metadata } from 'next';
import { HeroSection } from './components/HeroSection';
import { HandbookOverview } from './components/HandbookOverview';
import { ContentStructure } from './components/ContentStructure';
import { TargetAudienceAndFAQ } from './components/TargetAudienceAndFAQ';
import { CommunityJoin } from './components/CommunityJoin';
import { Footer } from './components/Footer';

export const metadata: Metadata = {
  title: '01MVP - 从0到1，让创意快速变成产品',
  description: '帮助创造者从0到1实现最小可行产品（MVP），并快速找到他们的前100个用户',
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <HeroSection />
      <HandbookOverview />
      <ContentStructure />
      <TargetAudienceAndFAQ />
      <CommunityJoin />
      <Footer />
    </div>
  );
}
