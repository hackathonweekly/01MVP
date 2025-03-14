import type { Metadata } from 'next';
import { HeroSection } from './components/HeroSection';
import { HandbookOverview } from './components/HandbookOverview';
import { ContentStructure } from './components/ContentStructure';
import { CommunityIntro } from './components/CommunityIntro';
import { TargetAudienceAndFAQ } from './components/TargetAudienceAndFAQ';
import { CommunityJoin } from './components/CommunityJoin';
import { Footer } from './components/Footer';

export const metadata: Metadata = {
  title: '01MVP - 从0到1，让创意快速变成产品',
  description: '通过 AI 驱动的工具和创造者社区，帮助你用最短时间打造最小可行产品，并快速找到前100个用户',
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <HeroSection />
      <HandbookOverview />
      <ContentStructure />
      <CommunityIntro />
      <TargetAudienceAndFAQ />
      <CommunityJoin />
      <Footer />
    </div>
  );
}
