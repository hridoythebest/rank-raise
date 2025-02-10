'use client';

import { motion } from 'framer-motion';
import {
  Brain,
  Cpu,
  Globe2,
  Code2,
  BarChart2,
  Search,
  Share2,
  Smartphone,
  Zap,
  LineChart,
  Target,
  Users,
  PenTool,
  Mail,
  Video,
  Megaphone,
  ShoppingCart,
  Layers
} from 'lucide-react';
import Link from 'next/link';

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

const services = [
  {
    icon: <Search className="w-8 h-8" />,
    title: "SEO Optimization",
    description: "Boost your search rankings with data-driven SEO strategies and AI-powered optimization.",
    features: ["Keyword Research", "Technical SEO", "Content Optimization", "Link Building"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: <Share2 className="w-8 h-8" />,
    title: "Social Media Marketing",
    description: "Engage your audience across all major social platforms with targeted campaigns.",
    features: ["Content Strategy", "Community Management", "Paid Advertising", "Analytics"],
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "App Store Optimization",
    description: "Maximize your app's visibility and downloads with expert ASO techniques.",
    features: ["Keyword Optimization", "Conversion Rate", "A/B Testing", "Competition Analysis"],
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: <LineChart className="w-8 h-8" />,
    title: "Performance Marketing",
    description: "Drive measurable results with data-driven performance marketing strategies.",
    features: ["PPC Campaigns", "Conversion Tracking", "ROI Analysis", "Retargeting"],
    color: "from-orange-500 to-red-500"
  },
  {
    icon: <PenTool className="w-8 h-8" />,
    title: "Content Writing",
    description: "Create engaging, SEO-optimized content that resonates with your target audience.",
    features: ["Blog Posts", "Website Copy", "Product Descriptions", "Technical Writing"],
    color: "from-indigo-500 to-blue-500"
  },
  {
    icon: <Mail className="w-8 h-8" />,
    title: "Email Marketing",
    description: "Build and nurture customer relationships with targeted email campaigns.",
    features: ["Campaign Strategy", "List Management", "A/B Testing", "Analytics & Reporting"],
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: <Video className="w-8 h-8" />,
    title: "Video Marketing",
    description: "Create compelling video content that drives engagement and conversions.",
    features: ["Video Production", "YouTube SEO", "Social Video", "Video Analytics"],
    color: "from-red-500 to-pink-500"
  },
  {
    icon: <Megaphone className="w-8 h-8" />,
    title: "Influencer Marketing",
    description: "Partner with relevant influencers to expand your brand reach and credibility.",
    features: ["Influencer Selection", "Campaign Management", "Performance Tracking", "ROI Analysis"],
    color: "from-teal-500 to-green-500"
  },
  {
    icon: <ShoppingCart className="w-8 h-8" />,
    title: "E-commerce Marketing",
    description: "Optimize your online store for maximum conversions and sales growth.",
    features: ["Store Optimization", "Product Marketing", "Shopping Ads", "Conversion Rate"],
    color: "from-violet-500 to-purple-500"
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: "Brand Strategy",
    description: "Develop a strong brand identity that sets you apart from competitors.",
    features: ["Brand Identity", "Voice & Messaging", "Visual Design", "Brand Guidelines"],
    color: "from-pink-500 to-rose-500"
  }
];

const processSteps = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Strategy Development",
    description: "We analyze your needs and create a custom digital strategy."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Implementation",
    description: "Our team executes the strategy with precision and care."
  },
  {
    icon: <BarChart2 className="w-6 h-6" />,
    title: "Monitoring",
    description: "We track performance and make data-driven adjustments."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Growth & Scale",
    description: "Scale your success with continuous optimization."
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
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
            Digital Marketing Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-center text-muted-foreground max-w-2xl mx-auto mb-12"
          >
            Transform your digital presence with our cutting-edge services
            powered by AI and data-driven strategies
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group"
            >
              <div className="cyberpunk-card p-8 rounded-lg h-full relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className="p-3 rounded-full bg-primary/10 text-primary w-fit mb-6 group-hover:neon-text transition-all">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <Zap className="w-4 h-4 mr-2 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          className="absolute inset-0 bg-grid-white/10"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
        
        <div className="relative z-10 max-w-screen-xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center gradient-text mb-12"
          >
            Our Process
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                variants={itemVariants}
                className="relative group"
              >
                <div className="cyberpunk-card p-6 rounded-lg text-center h-full">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:neon-text transition-all">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                  {index < processSteps.length - 1 && (
                    <motion.div
                      className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-primary/50"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-screen-lg mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            Ready to Transform Your Digital Strategy?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's work together to achieve your digital marketing goals.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            Get Started Today
          </Link>
        </motion.div>
      </section>
    </main>
  );
}