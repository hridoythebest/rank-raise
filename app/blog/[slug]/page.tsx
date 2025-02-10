import { readFileSync } from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const postPath = path.join(
    process.cwd(),
    'app/blog',
    params.slug,
    'content.md'
  );
  
  const source = readFileSync(postPath, 'utf8');
  
  const { content } = await compileMDX({
    source,
    options: { parseFrontmatter: true }
  });

  return (
    <article className="prose max-w-screen-xl mx-auto py-12">
      {content}
    </article>
  );
}
