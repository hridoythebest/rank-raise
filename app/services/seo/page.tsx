'use client';

import { motion } from 'framer-motion';
import { Search, BarChart2, Settings, Globe2, Zap, LineChart, Target, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { CaseStudies } from './components/CaseStudies';
import { SEOAuditForm } from './components/SEOAuditForm';
import { SEOStats } from './components/SEOStats';

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

const features = [
  {
    icon: <Search className="w-6 h-6" />,
    title: "Keyword Research & Analysis",
    description: "Identify high-value keywords that drive targeted traffic to your website."
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "Technical SEO",
    description: "Optimize your website's structure, speed, and technical elements for better rankings."
  },
  {
    icon: <Globe2 className="w-6 h-6" />,
    title: "On-Page Optimization",
    description: "Enhance your content and meta elements to improve search visibility."
  },
  {
    icon: <LineChart className="w-6 h-6" />,
    title: "Performance Tracking",
    description: "Monitor rankings, traffic, and conversions with detailed analytics."
  }
];

const benefits = [
  "Increased organic search visibility",
  "Higher quality website traffic",
  "Better conversion rates",
  "Improved user experience",
  "Long-term sustainable results",
  "Competitive advantage",
  "Enhanced brand credibility",
  "Cost-effective marketing"
];

const processSteps = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "SEO Audit",
    description: "Comprehensive analysis of your website's current SEO performance."
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: "Strategy Development",
    description: "Custom SEO strategy based on your goals and target audience."
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "Implementation",
    description: "Execute optimization techniques and content improvements."
  },
  {
    icon: <BarChart2 className="w-6 h-6" />,
    title: "Monitoring & Optimization",
    description: "Track progress and continuously refine the strategy."
  }
];

export default function SEOServicePage() {
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
            SEO Optimization Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-center text-muted-foreground max-w-2xl mx-auto"
          >
            Drive more organic traffic and improve your search rankings with our data-driven SEO strategies
          </motion.p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-screen-xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center gradient-text mb-12"
          >
            Comprehensive SEO Solutions
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="group"
              >
                <div className="cyberpunk-card p-6 rounded-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="p-3 rounded-full bg-primary/10 text-primary w-fit mb-4 group-hover:neon-text transition-all">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
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
            Benefits of Our SEO Services
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {benefits.map((benefit) => (
              <motion.div
                key={benefit}
                variants={itemVariants}
                className="flex items-center space-x-2 text-muted-foreground"
              >
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span>{benefit}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="max-w-screen-xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center gradient-text mb-12"
          >
            Our SEO Process
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
                <div className="cyberpunk-card p-6 rounded-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="p-3 rounded-full bg-primary/10 text-primary w-fit mb-4 group-hover:neon-text transition-all">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-primary" />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <SEOStats />
      <CaseStudies />
      <SEOAuditForm />

      {/* CTA Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="max-w-screen-xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold gradient-text mb-6"
          >
            Ready to Improve Your Search Rankings?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Get in touch with us today to start your SEO journey and boost your online visibility.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-11 px-8"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
