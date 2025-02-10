'use client';

import { motion } from 'framer-motion';
import { Smartphone, TrendingUp, Search } from 'lucide-react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';

export default function BlogPost() {
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
            The Ultimate Guide to App Store Optimization (ASO)
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-center text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            Master ASO to boost your app's visibility and downloads
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center space-x-4 text-sm text-muted-foreground"
          >
            <span>Published: February 10, 2024</span>
            <span>•</span>
            <span>12 min read</span>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4">
        <article className="max-w-screen-md mx-auto prose prose-invert">
          {/* Content will be rendered here */}
        </article>
      </section>
    </main>
  );
}
