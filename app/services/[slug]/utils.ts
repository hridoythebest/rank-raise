import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export interface ServiceContent {
  content: string;
  metadata: {
    title: string;
    description: string;
  };
}

export async function generateStaticParams() {
  return [
    { slug: 'seo-optimization' },
    { slug: 'social-media-marketing' },
    { slug: 'app-store-optimization' },
    { slug: 'performance-marketing' },
    { slug: 'content-writing' },
    { slug: 'email-marketing' },
    { slug: 'video-marketing' },
    { slug: 'influencer-marketing' },
    { slug: 'ecommerce-marketing' }
  ];
}

export async function getServiceContent(slug: string): Promise<ServiceContent | null> {
  try {
    const filePath = path.join(process.cwd(), 'app/services', slug, 'content.md');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);
    const processedContent = await remark()
      .use(html, { sanitize: false }) // Allow HTML in markdown
      .process(content);

    return {
      content: processedContent.toString(),
      metadata: {
        title: data.title || '',
        description: data.description || ''
      }
    };
  } catch (error) {
    console.error('Error reading service content:', error);
    return null;
  }
}
