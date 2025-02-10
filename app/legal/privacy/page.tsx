'use client';

import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-center text-muted-foreground max-w-2xl mx-auto"
          >
            How we protect and handle your data
          </motion.p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-screen-md mx-auto prose prose-invert">
          <h2>Introduction</h2>
          <p>
            This Privacy Policy explains how we collect, use, and protect your personal information.
          </p>
          
          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
              <p className="text-muted-foreground">
                We may collect the following types of information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Personal identification information (Name, email address, phone number)</li>
                <li>Technical data (IP address, browser type, operating system)</li>
                <li>Usage data (pages visited, time spent, click patterns)</li>
                <li>Cookies and tracking technologies</li>
              </ul>
            </section>
          
            <section>
              <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
              <p className="text-muted-foreground">
                Your information is used for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Providing and improving our services</li>
                <li>Personalizing your experience</li>
                <li>Communicating with you</li>
                <li>Analyzing website usage</li>
                <li>Marketing and promotional purposes</li>
              </ul>
            </section>
          
            <section>
              <h2 className="text-2xl font-semibold mb-4">Data Protection</h2>
              <p className="text-muted-foreground">
                We implement various security measures to protect your personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Encryption of sensitive data</li>
                <li>Regular security audits</li>
                <li>Access control measures</li>
                <li>Data backup systems</li>
              </ul>
            </section>
          
            <section>
              <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
              <p className="text-muted-foreground">
                You have the following rights regarding your personal data:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Right to access your personal information</li>
                <li>Right to request correction of inaccurate data</li>
                <li>Right to request deletion of your data</li>
                <li>Right to object to processing of your data</li>
                <li>Right to data portability</li>
              </ul>
            </section>
          
            <section>
              <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
              <p className="text-muted-foreground">
                We may use third-party services that collect, monitor, and analyze information, such as:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Analytics providers</li>
                <li>Payment processors</li>
                <li>Marketing platforms</li>
                <li>Customer support tools</li>
              </ul>
            </section>
          
            <section>
              <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
              <p className="text-muted-foreground">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
              </p>
            </section>
          
            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us at privacy@rankraise.com.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
