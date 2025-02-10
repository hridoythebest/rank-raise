'use client';

import { motion } from 'framer-motion';
import { Smartphone, TrendingUp, BarChart2, Search, Link, Edit } from 'lucide-react';
import Image from 'next/image';

export default function AppStoreServicePage() {
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
            App Store Optimization
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-center text-muted-foreground max-w-2xl mx-auto"
          >
            Maximize your app's visibility and downloads with expert ASO strategies
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
           App Store Optimization Services
         </motion.h2>
         <motion.p
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.4 }}
           className="text-xl text-muted-foreground"
         >
           Maximize your app's visibility and downloads with our expert ASO strategies
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
           Our ASO Approach
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
               title: "Keyword Optimization",
               description: "Target the right keywords to improve app discoverability",
               icon: <Search className="w-8 h-8" />
             },
             {
               title: "App Store Listing",
               description: "Craft compelling app titles, descriptions, and metadata",
               icon: <Edit className="w-8 h-8" />
             },
             {
               title: "Visual Assets",
               description: "Create eye-catching screenshots and preview videos",
               icon: <Image className="w-8 h-8" />
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
             "Increased app visibility",
             "Higher conversion rates",
             "Improved app store rankings",
             "Better user acquisition",
             "Competitive advantage",
             "Increased organic downloads"
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
           <h3 className="text-2xl font-semibold mb-4">Ready to Boost Your App's Performance?</h3>
           <p className="text-muted-foreground mb-6">
             Get in touch with us today to start your ASO journey
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
