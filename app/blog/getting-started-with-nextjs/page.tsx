'use client';

import { readFileSync } from 'fs';
import path from 'path';
import { motion } from 'framer-motion';

const BlogPost = () => {
  const filePath = path.join(process.cwd(), 'app', 'blog', 'getting-started-with-nextjs', 'content.md');
  const content = readFileSync(filePath, 'utf-8');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-screen-xl mx-auto py-12 px-4"
    >
      <motion.article
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2 }}
        className="prose prose-invert max-w-none"
      >
        <div className="cyberpunk-card p-8 rounded-lg">
          <h1 className="gradient-text text-4xl md:text-5xl font-bold mb-8">
            Getting Started with Next.js
          </h1>
          <div 
            className="prose prose-invert max-w-none prose-h2:gradient-text prose-h2:font-bold prose-a:text-primary hover:prose-a:text-primary/80"
            dangerouslySetInnerHTML={{ __html: content }} 
          />
        </div>
      </motion.article>
    </motion.div>
  );
};

export default BlogPost;
