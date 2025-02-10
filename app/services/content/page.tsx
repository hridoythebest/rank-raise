'use client';

import { motion } from 'framer-motion';
import { FileText, Edit, BarChart2, Globe, Share2, Mail, Languages } from 'lucide-react';

export default function ContentServicePage() {
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
            Content Writing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-center text-muted-foreground max-w-2xl mx-auto"
          >
            Create engaging, SEO-optimized content that resonates with your audience
          </motion.p>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-8 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Content Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Blog Writing",
                description: "High-quality, SEO-optimized blog posts tailored to your niche",
                icon: <FileText className="w-8 h-8" />
              },
              {
                title: "Content Strategy",
                description: "Comprehensive content plans to drive traffic and engagement",
                icon: <BarChart2 className="w-8 h-8" />
              },
              {
                title: "Website Copy",
                description: "Compelling website content that converts visitors into customers",
                icon: <Globe className="w-8 h-8" />
              },
              {
                title: "Social Media Content",
                description: "Engaging posts and stories for all major social platforms",
                icon: <Share2 className="w-8 h-8" />
              },
              {
                title: "Email Campaigns",
                description: "Effective email sequences that drive opens and clicks",
                icon: <Mail className="w-8 h-8" />
              },
              {
                title: "Content Localization",
                description: "Adapt your content for global audiences with cultural sensitivity",
                icon: <Languages className="w-8 h-8" />
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="text-blue-600 mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
