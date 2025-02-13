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
    color: "from-blue-500 to-cyan-500",
    slug: "seo"
  },
  {
    icon: <Share2 className="w-8 h-8" />,
    title: "Social Media Marketing",
    description: "Engage your audience and build brand awareness with strategic social media campaigns.",
    features: ["Content Strategy", "Community Management", "Paid Advertising", "Analytics"],
    color: "from-purple-500 to-pink-500",
    slug: "social-media-marketing"
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "App Store Optimization",
    description: "Increase app visibility and downloads with proven ASO techniques.",
    features: ["Keyword Optimization", "Visual Assets", "Ratings & Reviews", "Competition Analysis"],
    color: "from-green-500 to-emerald-500",
    slug: "app-store-optimization"
  },
  {
    icon: <LineChart className="w-8 h-8" />,
    title: "Performance Marketing",
    description: "Drive measurable results with data-driven performance marketing strategies.",
    features: ["PPC Campaigns", "Conversion Optimization", "A/B Testing", "ROI Tracking"],
    color: "from-orange-500 to-red-500",
    slug: "performance-marketing"
  },
  {
    icon: <PenTool className="w-8 h-8" />,
    title: "Content Writing",
    description: "Create engaging content that resonates with your target audience and drives action.",
    features: ["Blog Posts", "Website Copy", "Product Descriptions", "Email Content"],
    color: "from-indigo-500 to-blue-500",
    slug: "content-writing"
  },
  {
    icon: <Mail className="w-8 h-8" />,
    title: "Email Marketing",
    description: "Build lasting relationships with your audience through strategic email campaigns.",
    features: ["Campaign Strategy", "List Management", "Automation", "Analytics"],
    color: "from-yellow-500 to-orange-500",
    slug: "email-marketing"
  },
  {
    icon: <Video className="w-8 h-8" />,
    title: "Video Marketing",
    description: "Tell your story and engage your audience with compelling video content.",
    features: ["Video Production", "Content Strategy", "Distribution", "Analytics"],
    color: "from-pink-500 to-rose-500",
    slug: "video-marketing"
  },
  {
    icon: <Megaphone className="w-8 h-8" />,
    title: "Influencer Marketing",
    description: "Leverage the power of influencers to reach and engage your target audience.",
    features: ["Influencer Selection", "Campaign Management", "Content Creation", "ROI Tracking"],
    color: "from-teal-500 to-cyan-500",
    slug: "influencer-marketing"
  },
  {
    icon: <ShoppingCart className="w-8 h-8" />,
    title: "Ecommerce Marketing",
    description: "Drive sales and grow your online store with comprehensive ecommerce strategies.",
    features: ["Product Marketing", "Shopping Ads", "Email Campaigns", "Analytics"],
    color: "from-violet-500 to-purple-500",
    slug: "ecommerce-marketing"
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
            <Link href={`/services/${service.slug}`} key={index}>
              <motion.div
                variants={itemVariants}
                className={`p-6 rounded-lg bg-gradient-to-br ${service.color} border-2 border-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer transform hover:-translate-y-1`}
              >
                <div className="text-white mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-white/80 mb-4">
                  {service.description}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="bg-white/10 rounded px-2 py-1 text-sm text-white"
                    >
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            </Link>
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