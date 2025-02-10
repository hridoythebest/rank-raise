'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

export default function BlogPost() {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch('/api/blog/getting-started-with-nextjs');
        const data = await response.json();
        setContent(data.content);
      } catch (error) {
        console.error('Failed to fetch blog content:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

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
          {loading ? (
            <div className="flex justify-center">
              <div className="animate-pulse w-full">
                <div className="h-4 bg-primary/10 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-primary/10 rounded w-full mb-4"></div>
                <div className="h-4 bg-primary/10 rounded w-2/3"></div>
              </div>
            </div>
          ) : (
            <div 
              className="prose prose-invert max-w-none prose-h2:gradient-text prose-h2:font-bold prose-a:text-primary hover:prose-a:text-primary/80"
            >
              <ReactMarkdown>{content}</ReactMarkdown>
            </div>
          )}
        </div>
      </motion.article>
    </motion.div>
  );
}
