'use client';

import { motion } from 'framer-motion';
import { Share2, Users, BarChart2, Target, Link, PenTool } from 'lucide-react';

export default function SocialMediaServicePage() {
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
            Social Media Marketing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-center text-muted-foreground max-w-2xl mx-auto"
          >
            Engage your audience and build your brand across all major platforms
          </motion.p>
        </div>
      </section>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-12"
      >
        <section>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold gradient-text mb-6"
          >
            Social Media Marketing Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-muted-foreground"
          >
            Transform your social media presence with our comprehensive marketing strategies
          </motion.p>
        </section>
      
        <section>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-2xl font-semibold mb-4"
          >
            Our Approach
          </motion.h3>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {[
              {
                title: "Strategy Development",
                description: "Custom social media strategies tailored to your business goals",
                icon: <Target className="w-8 h-8" />
              },
              {
                title: "Content Creation",
                description: "Engaging content designed to maximize reach and engagement",
                icon: <PenTool className="w-8 h-8" />
              },
              {
                title: "Community Management",
                description: "Building and nurturing your online community",
                icon: <Users className="w-8 h-8" />
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="cyberpunk-card p-6 rounded-lg"
              >
                <div className="p-3 rounded-full bg-primary/10 text-primary w-fit mb-4">
                  {item.icon}
                </div>
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>
      
        <section>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-2xl font-semibold mb-4"
          >
            Key Benefits
          </motion.h3>
          <motion.ul
            className="grid grid-cols-1 md:grid-cols-2 gap-4 list-disc pl-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {[
              "Increased brand awareness",
              "Higher engagement rates",
              "Improved customer relationships",
              "Better ROI on marketing efforts",
              "Real-time performance tracking",
              "Competitive advantage"
            ].map((benefit, index) => (
              <motion.li
                key={benefit}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
                className="text-muted-foreground"
              >
                {benefit}
              </motion.li>
            ))}
          </motion.ul>
        </section>
      
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h3 className="text-2xl font-semibold mb-4">Ready to Transform Your Social Media?</h3>
            <p className="text-muted-foreground mb-6">
              Get in touch with us today to start your social media marketing journey
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-11 px-8"
            >
              Get Started
            </Link>
          </motion.div>
        </section>
      </motion.div>
    </main>
  );
}
