'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, BarChart2, Users, Globe, TrendingUp, Award } from 'lucide-react';
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

const caseStudies = [
  {
    title: "E-commerce Revenue Growth",
    client: "TechGear Pro",
    description: "Increased online sales by 150% through targeted SEO and social media campaigns.",
    metrics: [
      { label: "Revenue Increase", value: "150%" },
      { label: "Organic Traffic", value: "+200%" },
      { label: "Conversion Rate", value: "4.5%" }
    ],
    tags: ["E-commerce", "SEO", "Social Media"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "App Store Optimization Success",
    client: "HealthFit App",
    description: "Achieved 500K+ downloads through strategic ASO and performance marketing.",
    metrics: [
      { label: "Downloads", value: "500K+" },
      { label: "Rating", value: "4.8/5" },
      { label: "Retention", value: "45%" }
    ],
    tags: ["Mobile", "ASO", "Marketing"],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Global Brand Expansion",
    client: "FutureWear",
    description: "Expanded digital presence to 15 new markets with localized SEO strategies.",
    metrics: [
      { label: "Markets", value: "15+" },
      { label: "Traffic Growth", value: "300%" },
      { label: "ROI", value: "250%" }
    ],
    tags: ["Global SEO", "Branding", "Strategy"],
    color: "from-green-500 to-emerald-500"
  }
];

const highlights = [
  {
    icon: <BarChart2 className="w-8 h-8" />,
    title: "Data-Driven Results",
    description: "Our strategies are backed by comprehensive data analysis and testing."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Client Success",
    description: "We've helped hundreds of businesses achieve their digital goals."
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Global Reach",
    description: "Our solutions work across different markets and cultures."
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Industry Recognition",
    description: "Award-winning strategies that deliver measurable impact."
  }
];

export default function CaseStudiesPage() {
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
            Success Stories
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-center text-muted-foreground max-w-2xl mx-auto"
          >
            Discover how we've helped businesses transform their digital presence
            and achieve exceptional results
          </motion.p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {caseStudies.map((study) => (
            <motion.div
              key={study.title}
              variants={itemVariants}
              className="group"
            >
              <div className="cyberpunk-card p-8 rounded-lg h-full relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${study.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{study.client}</p>
                    </div>
                    <div className="p-2 rounded-full bg-primary/10 text-primary group-hover:neon-text transition-all">
                      <ArrowUpRight className="w-6 h-6" />
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6">
                    {study.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {study.metrics.map((metric) => (
                      <div key={metric.label} className="text-center">
                        <div className="text-xl font-bold text-primary mb-1">
                          {metric.value}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Highlights Section */}
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
            Why Choose Us
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {highlights.map((highlight) => (
              <motion.div
                key={highlight.title}
                variants={itemVariants}
                className="group"
              >
                <div className="cyberpunk-card p-6 rounded-lg text-center h-full">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:neon-text transition-all">
                      {highlight.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {highlight.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {highlight.description}
                  </p>
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
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our growing list of satisfied clients and transform your digital presence.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity relative group overflow-hidden"
          >
            <span className="relative z-10">Start Your Journey</span>
            <motion.div
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0"
            />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}