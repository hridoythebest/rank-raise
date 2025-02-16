'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, CheckCircle2, ArrowRight, Mail, Zap, Users, BarChart3, Rocket, Heart, TrendingUp, Target, Search, Settings, FileCode } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface ApproachStep {
  title: string;
  items: string[];
}

interface CampaignType {
  title: string;
  items: string[];
}

interface Benefit {
  title: string;
  items: string[];
}

interface SEOProcess {
  title: string;
  items: string[];
}

export default function ServiceContent({ content }: { content: string }) {
  const faqs = extractFAQs(content);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const approachSteps = extractApproachSteps(content);
  const campaignTypes = extractCampaignTypes(content);
  const benefits = extractBenefits(content);
  const introContent = extractIntroContent(content);
  const title = extractTitle(content);
  const seoProcess = extractSEOProcess(content);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mb-32 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600 mb-16">
          Why Choose Our {title}?
          <div className="mt-4 w-32 h-1.5 bg-blue-500 mx-auto" />
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.slice(0, 3).map((benefit, index) => {
            const icons = [
              <Target className="w-8 h-8 text-blue-400" />,
              <BarChart3 className="w-8 h-8 text-blue-400" />,
              <Users className="w-8 h-8 text-blue-400" />
            ];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="relative group"
              >
                <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl h-full
                  border border-gray-800 hover:border-blue-500/50
                  transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="mb-6 w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center
                    group-hover:bg-blue-500/20 transition-colors duration-300">
                    {icons[index]}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {benefit.items[0]}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* What We Offer Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mb-32"
      >
        <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80 mb-8 relative inline-block">
          What We Offer
          <div className="absolute -bottom-4 left-0 w-32 h-1.5 bg-gradient-to-r from-primary to-primary/50" />
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="prose prose-lg dark:prose-invert max-w-none mb-16"
          dangerouslySetInnerHTML={{ __html: introContent }}
        />

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const icons = [
              <TrendingUp key="1" className="w-8 h-8" />,
              <BarChart3 key="2" className="w-8 h-8" />,
              <Users key="3" className="w-8 h-8" />
            ];
            const gradients = [
              'from-blue-500 to-purple-500',
              'from-green-500 to-teal-500',
              'from-orange-500 to-red-500'
            ];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/50 rounded-2xl blur-sm opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                
                <div className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl 
                  transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${gradients[index % gradients.length]} 
                    flex items-center justify-center mb-6 text-white transform
                    group-hover:scale-110 transition-transform duration-300`}
                  >
                    {icons[index % icons.length]}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 
                    group-hover:text-transparent group-hover:bg-clip-text 
                    group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-primary/80
                    transition-all duration-300"
                  >
                    {benefit.title}
                  </h3>
                  
                  <ul className="space-y-4">
                    {benefit.items.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 + itemIndex * 0.05 }}
                        className="flex items-start gap-3 group/item"
                      >
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${gradients[index % gradients.length]} 
                          flex items-center justify-center flex-shrink-0 mt-1
                          group-hover/item:scale-110 transition-transform duration-300`}
                        >
                          <CheckCircle2 className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-600 dark:text-gray-300">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Our Approach Section */}
      {approachSteps.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-32"
        >
          <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80 mb-16">
            Our Approach
            <div className="mt-4 w-32 h-1.5 bg-gradient-to-r from-primary to-primary/50" />
          </h2>

          <div className="grid gap-8">
            {approachSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="relative"
              >
                {index < approachSteps.length - 1 && (
                  <div className="absolute left-6 top-16 w-1 h-[calc(100%+2rem)] bg-gradient-to-b from-primary/30 to-transparent -z-10" />
                )}

                <div className="flex items-start gap-8 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center shrink-0
                    group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-all duration-300">
                    <span className="text-primary font-bold">{index + 1}</span>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>
                    <div className="grid gap-3">
                      {step.items.map((item, itemIndex) => (
                        <motion.div
                          key={itemIndex}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 + index * 0.1 + itemIndex * 0.05 }}
                          className="flex items-center gap-3 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm
                            hover:shadow-md hover:scale-[1.02] transition-all duration-300"
                        >
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* SEO Process Section */}
      {seoProcess.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-32"
        >
          <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80 mb-16">
            Our SEO Process
            <div className="mt-4 w-32 h-1.5 bg-gradient-to-r from-primary to-primary/50" />
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {seoProcess.map((process, index) => {
              const icons = [Search, Settings, FileCode, BarChart];
              const Icon = icons[index % icons.length];
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl 
                    transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-6
                    group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-all duration-300">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary transition-colors duration-300">
                    {process.title}
                  </h3>
                  
                  <div className="space-y-3">
                    {process.items.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + index * 0.1 + itemIndex * 0.05 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary/60 group-hover:bg-primary transition-colors duration-300" />
                        <span className="text-gray-600 dark:text-gray-300">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      )}

      {/* Campaign Types Section */}
      {campaignTypes.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-32"
        >
          <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80 mb-16">
            Campaign Types
            <div className="mt-4 w-32 h-1.5 bg-gradient-to-r from-primary to-primary/50" />
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {campaignTypes.map((campaign, index) => {
              const icons = [Mail, Rocket, Users, Heart];
              const Icon = icons[index % icons.length];
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl 
                    transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-6
                    group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-all duration-300">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary transition-colors duration-300">
                    {campaign.title}
                  </h3>
                  
                  <div className="space-y-3">
                    {campaign.items.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + index * 0.1 + itemIndex * 0.05 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary/60 group-hover:bg-primary transition-colors duration-300" />
                        <span className="text-gray-600 dark:text-gray-300">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      )}

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
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
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
                    <div className="prose prose-lg dark:prose-invert"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

function extractFAQs(content: string): FAQItem[] {
  const faqs: FAQItem[] = [];
  const sections = content.split('\n');
  let inFAQSection = false;
  let currentQuestion = '';

  for (const line of sections) {
    const trimmedLine = line.trim();

    if (trimmedLine === '## Frequently Asked Questions') {
      inFAQSection = true;
      continue;
    }

    if (!inFAQSection) continue;

    if (trimmedLine.startsWith('### ')) {
      currentQuestion = trimmedLine.replace('### ', '').trim();
    } else if (currentQuestion && trimmedLine && !trimmedLine.startsWith('#')) {
      faqs.push({
        question: currentQuestion,
        answer: trimmedLine
      });
      currentQuestion = '';
    }
  }

  return faqs;
}

function extractApproachSteps(content: string): ApproachStep[] {
  const steps: ApproachStep[] = [];
  const sections = content.split('\n');
  let currentStep: ApproachStep | null = null;
  let inApproachSection = false;
  let stepNumber = 1;

  for (const line of sections) {
    const trimmedLine = line.trim();

    if (trimmedLine === '## Our Approach') {
      inApproachSection = true;
      continue;
    }

    if (!inApproachSection) continue;

    if (trimmedLine.startsWith('## ')) {
      break;
    }

    if (trimmedLine.startsWith(`${stepNumber}. **`)) {
      if (currentStep) {
        steps.push(currentStep);
      }
      const title = trimmedLine.replace(/^\d+\.\s*\*\*(.*?)\*\*$/, '$1').trim();
      currentStep = { title, items: [] };
      stepNumber++;
    } else if (trimmedLine.startsWith('   - ') && currentStep) {
      currentStep.items.push(trimmedLine.replace(/^\s*-\s*/, '').trim());
    }
  }

  if (currentStep) {
    steps.push(currentStep);
  }

  return steps;
}

function extractBenefits(content: string): Benefit[] {
  const benefits: Benefit[] = [];
  const sections = content.split('\n');
  let currentBenefit: Benefit | null = null;
  let inBenefitsSection = false;

  for (const line of sections) {
    const trimmedLine = line.trim();

    if (trimmedLine === '### Key Benefits') {
      inBenefitsSection = true;
      continue;
    }

    if (!inBenefitsSection) continue;

    if (trimmedLine.startsWith('## ')) {
      break;
    }

    if (trimmedLine.startsWith('- **')) {
      if (currentBenefit) {
        benefits.push(currentBenefit);
      }
      const title = trimmedLine.replace(/^-\s*\*\*(.*?)\*\*$/, '$1').trim();
      currentBenefit = { title, items: [] };
    } else if (trimmedLine.startsWith('  - ') && currentBenefit) {
      currentBenefit.items.push(trimmedLine.replace(/^\s*-\s*/, '').trim());
    }
  }

  if (currentBenefit) {
    benefits.push(currentBenefit);
  }

  return benefits;
}

function extractIntroContent(content: string): string {
  // Try frontmatter description first
  const descriptionMatch = content.match(/description:\s*['"](.+?)['"]/);
  if (descriptionMatch) {
    return descriptionMatch[1];
  }

  // Try What We Offer section
  const offerMatch = content.match(/## What We Offer\n\n([^#]*)/);
  if (offerMatch) {
    return offerMatch[1].trim();
  }

  // Try first paragraph after title as fallback
  const firstParaMatch = content.match(/(?:^|\n\n)([^#\n][^\n]+)/);
  return firstParaMatch ? firstParaMatch[1].trim() : '';
}

function extractTitle(content: string): string {
  // Try frontmatter format first
  const frontmatterMatch = content.match(/title:\s*['"](.+?)['"]/);
  if (frontmatterMatch) {
    return frontmatterMatch[1].replace(' Services', '');
  }

  // Try H1 format as fallback
  const h1Match = content.match(/^#\s+(.+?)(?:\n|$)/m);
  return h1Match ? h1Match[1].replace(' Services', '') : '';
}

function extractSEOProcess(content: string): SEOProcess[] {
  const processes: SEOProcess[] = [];
  const sections = content.split('\n');
  let currentProcess: SEOProcess | null = null;
  let inSEOSection = false;

  for (const line of sections) {
    const trimmedLine = line.trim();

    if (trimmedLine === '## Our SEO Process') {
      inSEOSection = true;
      continue;
    }

    if (!inSEOSection) continue;

    if (trimmedLine.startsWith('## ')) {
      break;
    }

    if (trimmedLine.startsWith('- **')) {
      if (currentProcess) {
        processes.push(currentProcess);
      }
      const title = trimmedLine.replace(/^-\s*\*\*(.*?)\*\*$/, '$1').trim();
      currentProcess = { title, items: [] };
    } else if (trimmedLine.startsWith('  - ') && currentProcess) {
      currentProcess.items.push(trimmedLine.replace(/^\s*-\s*/, '').trim());
    }
  }

  if (currentProcess) {
    processes.push(currentProcess);
  }

  return processes;
}

function extractCampaignTypes(content: string): CampaignType[] {
  const types: CampaignType[] = [];
  const sections = content.split('\n');
  let currentType: CampaignType | null = null;
  let inCampaignSection = false;

  for (const line of sections) {
    const trimmedLine = line.trim();

    if (trimmedLine === '### Campaign Types') {
      inCampaignSection = true;
      continue;
    }

    if (!inCampaignSection) continue;

    if (trimmedLine.startsWith('## ')) {
      break;
    }

    if (trimmedLine.startsWith('- **')) {
      if (currentType) {
        types.push(currentType);
      }
      const title = trimmedLine.replace(/^-\s*\*\*(.*?)\*\*$/, '$1').trim();
      currentType = { title, items: [] };
    } else if (trimmedLine.startsWith('  - ') && currentType) {
      currentType.items.push(trimmedLine.replace(/^\s*-\s*/, '').trim());
    }
  }

  if (currentType) {
    types.push(currentType);
  }

  return types;
}
