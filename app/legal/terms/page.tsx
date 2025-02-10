'use client';

import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

export default function TermsPage() {
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
            Terms of Service
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-center text-muted-foreground max-w-2xl mx-auto"
          >
            Please read these terms carefully before using our services
          </motion.p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-screen-md mx-auto prose prose-invert">
          <h2>Agreement to Terms</h2>
          <p>
            By accessing our services, you agree to be bound by these terms of service.
          </p>
          
          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing or using our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not use our services.
              </p>
            </section>
          
            <section>
              <h2 className="text-2xl font-semibold mb-4">User Responsibilities</h2>
              <p className="text-muted-foreground">
                As a user of our services, you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account</li>
                <li>Use our services only for lawful purposes</li>
                <li>Not engage in any activity that may disrupt our services</li>
              </ul>
            </section>
          
            <section>
              <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
              <p className="text-muted-foreground">
                All content and materials available on our services, including but not limited to text, graphics, logos, and software, are protected by intellectual property laws.
              </p>
            </section>
          
            <section>
              <h2 className="text-2xl font-semibold mb-4">Prohibited Activities</h2>
              <p className="text-muted-foreground">
                You may not:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Reverse engineer or attempt to extract source code</li>
                <li>Use our services for any illegal or unauthorized purpose</li>
                <li>Transmit viruses or malicious code</li>
                <li>Attempt to gain unauthorized access to our systems</li>
              </ul>
            </section>
          
            <section>
              <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground">
                We shall not be liable for any indirect, incidental, or consequential damages arising from your use of our services.
              </p>
            </section>
                    
        </div>
        </div>
      </section>
    </main>
  );
}
