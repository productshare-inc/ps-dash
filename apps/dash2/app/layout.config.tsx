import { type DocsLayoutProps } from 'fumadocs-ui/layout';
import { type HomeLayoutProps } from 'fumadocs-ui/home-layout';
import { pageTree } from '@/app/source';
import { BookIcon, CircleHelp, LayoutTemplate, NotepadTextDashedIcon } from 'lucide-react';
import { ClipboardIcon } from '@radix-ui/react-icons';

// shared configuration
export const baseOptions: HomeLayoutProps = {
  nav: {
    title: 'Getting Started',
  },
  links: [
    {
      icon: <CircleHelp />,
      text: 'How to use?',
      url: '/docs/',
      active: 'nested-url',
    },
    {
      icon: <BookIcon />,
      text: 'Templates',
      url: '/docs/ez-tmp1',
      active: 'nested-url',
    },
    {
      icon: <LayoutTemplate />,
      text: 'Sections',
      url: '/docs/sections/bento-grid',
      active: 'nested-url',
    },
  ],
};

// docs layout configuration
export const docsOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: pageTree,
  
};
