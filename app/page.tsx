'use client';

import { motion } from 'framer-motion';
import { Brain, Cpu, Globe2, Code2, Search, Share2, Smartphone, LineChart, PenTool, Mail, Video, Megaphone } from 'lucide-react';
import Link from 'next/link';
import { TestimonialSlider } from "@/components/TestimonialSlider";

const glowVariants = {
  initial: { opacity: 0.5 },
  animate: { 
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
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
    slug: "seo"
  },
  {
    icon: <Share2 className="w-8 h-8" />,
    title: "Social Media Marketing",
    description: "Engage your audience and build brand awareness with strategic social media campaigns.",
    slug: "social-media-marketing"
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "App Store Optimization",
    description: "Increase app visibility and downloads with proven ASO techniques.",
    slug: "app-store-optimization"
  },
  {
    icon: <LineChart className="w-8 h-8" />,
    title: "Performance Marketing",
    description: "Drive measurable results with data-driven performance marketing strategies.",
    slug: "performance-marketing"
  },
  {
    icon: <PenTool className="w-8 h-8" />,
    title: "Content Writing",
    description: "Create engaging content that resonates with your target audience and drives action.",
    slug: "content-writing"
  },
  {
    icon: <Mail className="w-8 h-8" />,
    title: "Email Marketing",
    description: "Build lasting relationships with your audience through strategic email campaigns.",
    slug: "email-marketing"
  },
  {
    icon: <Video className="w-8 h-8" />,
    title: "Video Marketing",
    description: "Tell your story and engage your audience with compelling video content.",
    slug: "video-marketing"
  },
  {
    icon: <Megaphone className="w-8 h-8" />,
    title: "Influencer Marketing",
    description: "Leverage the power of influencers to reach and engage your target audience.",
    slug: "influencer-marketing"
  }
];

const stats = [
  { value: 95, label: "Client Satisfaction", suffix: "%" },
  { value: 250, label: "Projects Completed", suffix: "+" },
  { value: 15, label: "Team Members", suffix: "" },
  { value: 5, label: "Years Experience", suffix: "+" }
];

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CTO",
    company: "TechVision Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    content: "The cyberpunk design and modern solutions transformed our digital presence completely.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "CEO",
    company: "Future Systems",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    content: "Their AI-powered approach brought incredible results to our business.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Zhang",
    role: "Director",
    company: "NeoTech",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    content: "The most innovative team we've worked with. Simply outstanding!",
    rating: 5
  }
];

const features = [
  {
    title: "Real-time Analytics",
    description: "Monitor your performance with our advanced analytics dashboard"
  },
  {
    title: "AI-Powered Insights",
    description: "Get intelligent recommendations based on your data"
  },
  {
    title: "Secure Platform",
    description: "Enterprise-grade security for your peace of mind"
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock assistance from our expert team"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          className="absolute inset-0 bg-grid-white/10"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
        
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 gradient-text"
          >
            Future-Forward
            <br />
            Digital Solutions
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Transforming ideas into reality with cutting-edge technology
            and innovative solutions
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity relative group overflow-hidden"
            >
              <span className="relative z-10">Get Started</span>
              <motion.div
                variants={glowVariants}
                initial="initial"
                animate="animate"
                className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0"
              />
            </Link>
            <Link
              href="/about"
              className="px-8 py-3 rounded-full border border-primary/50 text-primary font-medium hover:bg-primary/10 transition-colors"
            >
              Learn More
            </Link>
          </motion.div>
        </div>

        {/* Animated Background Elements */}
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-1/2 -right-1/2 w-full h-full border border-primary/20 rounded-full"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-1/2 -left-1/2 w-full h-full border border-secondary/20 rounded-full"
        />
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-screen-xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text"
          >
            Our Services
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="cyberpunk-card p-6 rounded-lg group cursor-pointer"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:neon-text transition-all">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-screen-xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="text-center"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-4xl md:text-5xl font-bold gradient-text mb-2"
                >
                  {stat.value}{stat.suffix}
                </motion.div>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="max-w-screen-xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text"
          >
            Powerful Features
          </motion.h2>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="relative group"
              >
                <div className="cyberpunk-card p-6 rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-screen-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Hear from businesses we've helped transform
            </p>
          </motion.div>

          <TestimonialSlider />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-screen-lg mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            Ready to Transform Your Digital Future?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join us in shaping the future of technology and innovation.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity relative group overflow-hidden"
          >
            <span className="relative z-10">Get Started Today</span>
            <motion.div
              variants={glowVariants}
              initial="initial"
              animate="animate"
              className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0"
            />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}