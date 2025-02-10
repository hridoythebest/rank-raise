'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FileText, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function BlogPage() {
  const [posts, setPosts] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/blog')
      .then(res => res.json())
      .then(data => {
        setPosts(data.posts);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching blog posts:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
          Latest Insights
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Explore our collection of articles about digital transformation,
          AI-powered solutions, and future tech trends.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-6 md:grid-cols-2"
      >
        {loading ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center col-span-2 text-muted-foreground"
          >
            Loading blog posts...
          </motion.p>
        ) : posts.length > 0 ? (
          posts.map(post => (
            <motion.div
              key={post}
              variants={item}
              className="group"
            >
              <Link href={`/blog/${post}`}>
                <div className="cyberpunk-card p-6 rounded-lg relative overflow-hidden group-hover:neon-border transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {post.replace(/-/g, ' ')}
                      </h2>
                      <p className="text-muted-foreground">
                        Click to read more about {post.replace(/-/g, ' ')}
                      </p>
                    </div>
                    <ChevronRight className="w-6 h-6 text-primary opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))
        ) : (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center col-span-2 text-muted-foreground"
          >
            No blog posts found.
          </motion.p>
        )}
      </motion.div>
    </div>
  );
}
