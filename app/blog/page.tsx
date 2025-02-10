'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const posts = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with Next.js',
    description: 'Learn how to build modern web applications with Next.js',
    date: 'February 9, 2024',
    readTime: '5 min read',
    category: 'Development'
  },
  {
    slug: 'seo-best-practices-2024',
    title: 'SEO Best Practices for 2024',
    description: 'A comprehensive guide to modern SEO strategies and techniques',
    date: 'February 10, 2024',
    readTime: '10 min read',
    category: 'SEO'
  },
  {
    slug: 'social-media-trends',
    title: 'Social Media Marketing Trends That Will Dominate 2024',
    description: 'Stay ahead of the curve with emerging social media trends',
    date: 'February 10, 2024',
    readTime: '8 min read',
    category: 'Social Media'
  },
  {
    slug: 'app-store-optimization-guide',
    title: 'The Ultimate Guide to App Store Optimization (ASO)',
    description: 'Master ASO to boost your app\'s visibility and downloads',
    date: 'February 10, 2024',
    readTime: '12 min read',
    category: 'ASO'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <section className="relative py-20 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          className="absolute inset-0 bg-grid-white/10"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
        
        <div className="relative z-10 max-w-screen-xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-center gradient-text mb-6"
          >
            Our Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-center text-muted-foreground max-w-2xl mx-auto"
          >
            Insights and guides on SEO, social media, and digital marketing
          </motion.p>
        </div>
      </section>

      <section className="py-20 px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {posts.map((post) => (
            <motion.div
              key={post.slug}
              variants={itemVariants}
              className="group"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="cyberpunk-card p-8 rounded-lg h-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className="inline-block px-3 py-1 rounded-full text-xs bg-primary/10 text-primary mb-4">
                          {post.category}
                        </span>
                        <h2 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                          {post.title}
                        </h2>
                        <p className="text-muted-foreground mb-4">
                          {post.description}
                        </p>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span>{post.date}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <div className="p-2 rounded-full bg-primary/10 text-primary group-hover:neon-text transition-all">
                        <ArrowUpRight className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}
