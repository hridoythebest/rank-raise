'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { LineChart, TrendingUp, Users } from 'lucide-react';

const caseStudies = [
  {
    title: "E-commerce Growth Story",
    company: "Fashion Retailer",
    metrics: [
      {
        icon: <TrendingUp className="w-5 h-5" />,
        label: "Organic Traffic",
        value: "+185%",
        duration: "in 6 months"
      },
      {
        icon: <Users className="w-5 h-5" />,
        label: "Conversion Rate",
        value: "+75%",
        duration: "year-over-year"
      },
      {
        icon: <LineChart className="w-5 h-5" />,
        label: "Revenue Growth",
        value: "+120%",
        duration: "from SEO"
      }
    ],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=400&fit=crop"
  },
  {
    title: "Local Business Success",
    company: "Restaurant Chain",
    metrics: [
      {
        icon: <TrendingUp className="w-5 h-5" />,
        label: "Local Rankings",
        value: "Top 3",
        duration: "for key terms"
      },
      {
        icon: <Users className="w-5 h-5" />,
        label: "Store Visits",
        value: "+95%",
        duration: "increase"
      },
      {
        icon: <LineChart className="w-5 h-5" />,
        label: "Online Orders",
        value: "+150%",
        duration: "growth"
      }
    ],
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=400&fit=crop"
  }
];

export function CaseStudies() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-screen-xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center gradient-text mb-12"
        >
          Success Stories
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="cyberpunk-card overflow-hidden rounded-lg"
            >
              <div className="relative h-48">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{study.title}</h3>
                <p className="text-muted-foreground mb-6">{study.company}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {study.metrics.map((metric) => (
                    <div key={metric.label} className="text-center">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary mb-2">
                        {metric.icon}
                      </div>
                      <div className="font-bold text-2xl text-primary">
                        {metric.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {metric.label}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {metric.duration}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
