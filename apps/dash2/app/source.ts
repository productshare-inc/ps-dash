import { map } from '@/.map';
import { createMDXSource } from 'fumadocs-mdx';
import { loader } from 'fumadocs-core/source';

export const { getPage, getPages, pageTree } = loader({
  baseUrl: '/docs',
  rootDir: 'docs',
  source: createMDXSource(map),

  structure: {
    // existing structure configurations...
    'section': {
      index: 'Section Overview',
      // Add any subsections here if needed
    }
  }
  
});

