'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Users, Globe2, Star } from 'lucide-react';

const stats = [
  {
    icon: <TrendingUp className="w-6 h-6" />,
    value: "250%",
    label: "Average Traffic Increase",
    description: "For our clients within 6 months"
  },
  {
    icon: <Users className="w-6 h-6" />,
    value: "10K+",
    label: "Keywords Ranked",
    description: "Across various industries"
  },
  {
    icon: <Globe2 className="w-6 h-6" />,
    value: "98%",
    label: "Client Retention",
    description: "Long-term partnerships"
  },
  {
    icon: <Star className="w-6 h-6" />,
    value: "4.9/5",
    label: "Client Satisfaction",
    description: "Based on 100+ reviews"
  }
];

export function SEOStats() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-screen-xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center gradient-text mb-12"
        >
          Our Impact in Numbers
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="cyberpunk-card p-6 text-center group hover:border-primary transition-colors"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold mb-2 gradient-text">
                {stat.value}
              </div>
              <div className="font-medium mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
