'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function ServiceContent({ content }: { content: string }) {
  // Extract FAQs from content
  const faqs = extractFAQs(content);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      {/* Main Content */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="prose prose-lg dark:prose-invert max-w-none
          prose-headings:text-gray-900 dark:prose-headings:text-white
          prose-h2:text-4xl prose-h2:md:text-5xl prose-h2:font-black prose-h2:mt-20 prose-h2:mb-12 
          prose-h2:bg-gradient-to-r prose-h2:from-primary prose-h2:to-primary/80 
          prose-h2:text-transparent prose-h2:bg-clip-text prose-h2:pb-4
          prose-h2:transition-all prose-h2:duration-300
          hover:prose-h2:from-primary/80 hover:prose-h2:to-primary
          prose-h3:text-2xl prose-h3:md:text-3xl prose-h3:font-bold prose-h3:mt-12 prose-h3:mb-6 
          prose-h3:text-gray-800 dark:prose-h3:text-gray-100
          prose-h3:transition-all prose-h3:duration-300
          hover:prose-h3:text-primary dark:hover:prose-h3:text-primary
          prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-p:leading-relaxed
          prose-ul:text-gray-600 dark:prose-ul:text-gray-300
          prose-li:marker:text-primary prose-li:mb-3
          prose-strong:text-primary dark:prose-strong:text-primary/90 prose-strong:font-semibold
          prose-a:text-primary hover:prose-a:text-primary/80
          prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-6 prose-blockquote:italic
          prose-hr:border-gray-200 dark:prose-hr:border-gray-700
          [&>h2+p]:text-xl [&>h2+p]:md:text-2xl [&>h2+p]:text-gray-600 dark:[&>h2+p]:text-gray-300 [&>h2+p]:leading-relaxed
          [&>h3+ul]:mt-6 [&>h3+ul]:grid [&>h3+ul]:grid-cols-1 md:[&>h3+ul]:grid-cols-2 [&>h3+ul]:gap-6
          [&>h3+ul>li]:bg-white dark:[&>h3+ul>li]:bg-gray-800 
          [&>h3+ul>li]:p-6 [&>h3+ul>li]:rounded-xl [&>h3+ul>li]:shadow-lg
          [&>h3+ul>li]:transform [&>h3+ul>li]:transition-all [&>h3+ul>li]:duration-300
          [&>h3+ul>li:hover]:scale-105 [&>h3+ul>li:hover]:shadow-xl
          [&>h3+ul>li:hover]:bg-gray-50 dark:[&>h3+ul>li:hover]:bg-gray-700
          [&>h2]:scroll-mt-20 [&>h3]:scroll-mt-20
          [&>h2]:relative [&>h2]:inline-block
          [&>h2:after]:content-[''] [&>h2:after]:absolute [&>h2:after]:-bottom-4 
          [&>h2:after]:left-0 [&>h2:after]:w-full [&>h2:after]:h-1.5 
          [&>h2:after]:bg-gradient-to-r [&>h2:after]:from-primary [&>h2:after]:to-transparent
          [&>h2:after]:transition-all [&>h2:after]:duration-300
          [&>h2:hover:after]:from-primary/80 [&>h2:hover:after]:to-primary"
        dangerouslySetInnerHTML={{ __html: removeFAQs(content) }}
      />

      {/* FAQs Section */}
      {faqs.length > 0 && (
        <motion.div
          className="mt-20 md:mt-32"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid gap-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-6 h-6 text-primary transition-transform duration-300 ${
                      openFAQ === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 dark:text-gray-300">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

function extractFAQs(content: string): FAQItem[] {
  const faqs: FAQItem[] = [];
  const faqSection = content.split('## Frequently Asked Questions')[1];
  
  if (!faqSection) return faqs;

  const faqMatches = faqSection.match(/### (.*?)\n(.*?)(?=###|$)/gs);
  
  if (faqMatches) {
    faqMatches.forEach(match => {
      const [, question, answer] = match.match(/### (.*?)\n(.*?)$/s) || [];
      if (question && answer) {
        faqs.push({
          question: question.trim(),
          answer: answer.trim()
        });
      }
    });
  }

  return faqs;
}

function removeFAQs(content: string): string {
  return content.split('## Frequently Asked Questions')[0];
}
