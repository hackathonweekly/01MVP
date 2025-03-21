import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <Image 
          src="/icon.svg" 
          width={24} 
          height={24} 
          alt="01MVP Logo" 
        />
        01MVP
      </>
    ),
  },
  links: [
    {
      text: 'MVP参考手册',
      url: '/docs/guide',
      active: 'nested-url',
    },
    {
      text: '动手实践教程',
      url: '/docs/cases',
      active: 'nested-url',
    },
    {
      text: 'AI工具',
      url: '/docs/tools',
      active: 'nested-url',
    },
  ],
};
