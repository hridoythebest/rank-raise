'use client';

import { motion } from 'framer-motion';
import { Rocket, Target, Users, Zap } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const features = [
  {
    icon: <Rocket className="w-8 h-8 text-primary" />,
    title: "Future-Forward Solutions",
    description: "Pioneering digital transformation with cutting-edge AI and machine learning technologies."
  },
  {
    icon: <Target className="w-8 h-8 text-primary" />,
    title: "Data-Driven Strategy",
    description: "Leveraging advanced analytics and real-time insights to maximize your digital presence."
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Expert Team",
    description: "A collective of industry veterans and innovative minds working together to elevate your brand."
  },
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: "Rapid Results",
    description: "Delivering measurable improvements and sustainable growth through agile methodologies."
  }
];

export default function AboutPage() {
  return (
    <div className="max-w-screen-xl mx-auto py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent mb-6">
          Transforming Digital Presence
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          We are a next-generation digital agency combining AI-powered strategies 
          with human creativity to deliver exceptional results.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
      >
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
            className="p-6 rounded-xl border bg-card hover:bg-accent transition-colors group"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-center"
      >
        <div className="inline-block">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Digital Future?</h2>
          <a
            href="/contact"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            Get Started Today
          </a>
        </div>
      </motion.div>
    </div>
  );
}
