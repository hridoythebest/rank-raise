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
    description: "Pioneering digital transformation with cutting-edge AI and machine learning technologies for unprecedented growth."
  },
  {
    icon: <Target className="w-8 h-8 text-primary" />,
    title: "Data-Driven Strategy",
    description: "Leveraging advanced analytics and real-time insights to maximize your digital presence and achieve measurable success."
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Expert Team",
    description: "A collective of industry veterans and innovative minds working together to elevate your brand and drive sustainable growth."
  },
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: "Rapid Results",
    description: "Delivering measurable improvements and sustainable growth through agile methodologies and proven strategies."
  }
];

const stats = [
  { value: "98%", label: "Client Satisfaction" },
  { value: "500+", label: "Projects Completed" },
  { value: "150%", label: "Average ROI" },
  { value: "24/7", label: "Support Available" }
];

const values = [
  {
    title: "Innovation",
    description: "Constantly pushing boundaries and embracing new technologies to stay ahead."
  },
  {
    title: "Integrity",
    description: "Building trust through transparent practices and honest communication."
  },
  {
    title: "Excellence",
    description: "Delivering exceptional quality in every project we undertake."
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
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          We are a next-generation digital agency combining AI-powered strategies 
          with human creativity to deliver exceptional results. Our mission is to empower 
          businesses with innovative digital solutions that drive growth and success.
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
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-center mb-8">Our Impact in Numbers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
              className="text-center p-4"
            >
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-center mb-8">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
              className="text-center p-6 rounded-xl border bg-card"
            >
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>
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
