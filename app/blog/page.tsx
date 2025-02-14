'use client';

import { motion } from 'framer-motion';
import { blogPosts } from './data';
import Image from 'next/image';
import Link from 'next/link';
import { CalendarDays, Clock, User, Tag } from 'lucide-react';

export default function Blog() {
  return (
    <main className="min-h-screen py-20">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Digital Marketing Insights
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our latest articles on SEO, content marketing, social media strategies,
            and more to boost your online presence.
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="cyberpunk-card group"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="relative aspect-video w-full mb-4 rounded-t-lg overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Tag className="w-4 h-4 text-primary" />
                    <span className="text-primary">{post.category}</span>
                  </div>

                  <h2 className="text-2xl font-bold mb-4 gradient-text line-clamp-2">
                    {post.title}
                  </h2>

                  <p className="text-muted-foreground mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CalendarDays className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
}
