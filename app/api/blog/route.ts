import { readdirSync, statSync } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const blogDir = path.join(process.cwd(), 'app/blog');
    const posts = readdirSync(blogDir)
      .filter(item => {
        const fullPath = path.join(blogDir, item);
        return (
          statSync(fullPath).isDirectory() &&
          !item.startsWith('[') &&
          item !== 'api'
        );
      });

    return NextResponse.json({ posts });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json({ posts: [] });
  }
}
