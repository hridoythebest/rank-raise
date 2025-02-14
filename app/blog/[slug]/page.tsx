'use client';

import { motion } from 'framer-motion';
import { getBlogPost } from '../data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { CalendarDays, Clock, User, Tag } from 'lucide-react';
import Link from 'next/link';
import { marked } from 'marked';

marked.setOptions({
  breaks: true,
  gfm: true
});

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  // Convert markdown to HTML with proper formatting
  const htmlContent = marked.parse(post.content);

  return (
    <main className="min-h-screen py-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-screen-xl mx-auto px-4"
      >
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <div className="relative aspect-video w-full mb-8 rounded-lg overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
            </div>

            <div className="flex items-center gap-2 mb-6">
              <Tag className="w-4 h-4 text-primary" />
              <span className="text-primary">{post.category}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap gap-6 text-muted-foreground mb-8">
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

            <p className="text-xl text-muted-foreground border-l-4 border-primary pl-4">
              {post.excerpt}
            </p>
          </motion.div>

          {/* Content */}
          <motion.article
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="cyberpunk-card p-8 rounded-lg mb-12"
          >
            <div 
              className="prose prose-invert max-w-none prose-headings:gradient-text prose-h1:text-4xl prose-h2:text-2xl prose-headings:font-bold prose-a:text-primary hover:prose-a:text-primary/80 prose-ul:list-disc prose-ol:list-decimal prose-strong:text-primary prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground prose-li:marker:text-primary"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
          </motion.article>

          {/* Navigation */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex justify-between items-center"
          >
            <Link
              href="/blog"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            >
              ← Back to Blog
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}
