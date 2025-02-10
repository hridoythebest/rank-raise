import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params;
    const contentPath = path.join(process.cwd(), 'app/blog', slug, 'content.md');
    const content = fs.readFileSync(contentPath, 'utf8');

    return NextResponse.json({ content });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch blog content' },
      { status: 500 }
    );
  }
}
