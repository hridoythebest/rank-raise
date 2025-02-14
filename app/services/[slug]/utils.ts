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
    { slug: 'seo' },
    { slug: 'social-media-marketing' },
    { slug: 'app-store-optimization' },
    { slug: 'performance-marketing' },
    { slug: 'content-writing' },
    { slug: 'email-marketing' },
    { slug: 'video-marketing' },
    { slug: 'influencer-marketing' },
    { slug: 'ecommerce-marketing' },
    { slug: 'digital-ads' },
    { slug: 'review-management' },
    { slug: 'development' }
  ];
}

export async function getServiceContent(slug: string): Promise<ServiceContent | null> {
  try {
    const filePath = path.join(process.cwd(), 'app/services', slug, 'content.md');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);

    return {
      content: content,
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
