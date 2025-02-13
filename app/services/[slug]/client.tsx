'use client';

import ServiceContent from './ServiceContent';
import { ArrowRight, CheckCircle, Target, TrendingUp, Users } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

interface ServicePageClientProps {
  params: { slug: string };
  content: string;
  metadata: {
    title: string;
    description: string;
  };
}

export default function ServicePageClient({ params, content, metadata }: ServicePageClientProps) {
  const title = metadata.title || params.slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent dark:from-primary/20 dark:via-primary/10 dark:to-transparent">
        <div className="container mx-auto px-4">
          <motion.div 
            className="py-16 md:py-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative mb-16">
              <motion.h1 
                className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80 text-center leading-tight"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {title}
              </motion.h1>
              <motion.div 
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1.5 bg-gradient-to-r from-primary to-primary/50"
                initial={{ width: 0 }}
                animate={{ width: "8rem" }}
                transition={{ duration: 0.5, delay: 0.4 }}
              />
            </div>
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {metadata.description || `Transform your business with our professional ${title.toLowerCase()} services. 
              We deliver measurable results through data-driven strategies and industry expertise.`}
            </motion.p>
            <motion.div 
              className="flex justify-center gap-4 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link 
                href="#contact"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 transform hover:translate-y-[-2px] transition-all hover:shadow-lg"
              >
                Get Started <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="#benefits"
                className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white px-8 py-4 rounded-xl font-semibold transform hover:translate-y-[-2px] transition-all hover:shadow-lg"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-20 md:py-32 bg-white dark:bg-gray-900" id="benefits">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-primary/80 mb-6">
              Why Choose Our {title} Services?
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-primary/50 via-primary to-primary/50 mx-auto"/>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              variants={fadeInUp}
            >
              <Target className="w-16 h-16 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Strategic Approach</h3>
              <p className="text-gray-600 dark:text-gray-300">Data-driven strategies tailored to your business goals and target audience.</p>
            </motion.div>
            <motion.div 
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              variants={fadeInUp}
            >
              <TrendingUp className="w-16 h-16 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Measurable Results</h3>
              <p className="text-gray-600 dark:text-gray-300">Clear metrics and regular reporting to track your ROI and campaign success.</p>
            </motion.div>
            <motion.div 
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              variants={fadeInUp}
            >
              <Users className="w-16 h-16 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Expert Team</h3>
              <p className="text-gray-600 dark:text-gray-300">Dedicated specialists with years of experience in delivering results.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto">
          <ServiceContent content={content} />
        </div>
      </div>

      {/* CTA Section */}
      <motion.div 
        className="bg-gradient-to-r from-primary to-primary/90" 
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 py-20 md:py-32">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="relative inline-block mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Ready to Grow Your Business?
              </h2>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1.5 bg-white/30"/>
            </div>
            <p className="text-xl text-white/90 mb-12">
              Get in touch with us today to discuss how our {title.toLowerCase()} services can help you achieve your business goals.
            </p>
            <Link
              href="/contact"
              className="bg-white text-primary hover:bg-gray-100 px-10 py-5 rounded-xl font-bold inline-flex items-center gap-2 transform hover:translate-y-[-2px] transition-all hover:shadow-lg text-lg"
            >
              Contact Us <ArrowRight className="w-6 h-6" />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
