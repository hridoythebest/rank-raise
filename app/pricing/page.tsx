'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import Link from 'next/link';

interface Package {
  name: string;
  price: string;
  description: string;
  features: string[];
  timeframe: string;
  popular?: boolean;
}

interface ServicePricing {
  service: string;
  description: string;
  packages: Package[];
}

const pricingData: ServicePricing[] = [
  {
    service: "SEO Optimization",
    description: "Boost your search rankings and organic traffic",
    packages: [
      {
        name: "Silver",
        price: "$799/month",
        description: "Essential SEO package for small businesses",
        timeframe: "3-6 months",
        features: [
          "5 Target Keywords",
          "Monthly Content (2 Articles)",
          "Basic On-Page SEO",
          "Technical SEO Audit",
          "Google Business Profile Optimization",
          "Monthly Reporting"
        ]
      },
      {
        name: "Gold",
        price: "$1,499/month",
        description: "Advanced SEO for growing businesses",
        timeframe: "6-12 months",
        popular: true,
        features: [
          "15 Target Keywords",
          "Monthly Content (4 Articles)",
          "Advanced On-Page SEO",
          "Technical SEO Implementation",
          "Link Building (5/month)",
          "Competitor Analysis",
          "Weekly Progress Updates",
          "Priority Support"
        ]
      },
      {
        name: "Platinum",
        price: "$2,999/month",
        description: "Enterprise SEO solution for maximum impact",
        timeframe: "12+ months",
        features: [
          "30+ Target Keywords",
          "Monthly Content (8 Articles)",
          "Enterprise On-Page SEO",
          "Advanced Technical SEO",
          "Link Building (15/month)",
          "Content Strategy",
          "International SEO",
          "Dedicated Account Manager",
          "24/7 Priority Support"
        ]
      }
    ]
  },
  {
    service: "Digital Advertising",
    description: "Drive targeted traffic with multi-platform advertising",
    packages: [
      {
        name: "Silver",
        price: "$999/month",
        description: "Single platform advertising package",
        timeframe: "3 months minimum",
        features: [
          "1 Ad Platform",
          "$1,500 Ad Spend Management",
          "2 Ad Campaigns",
          "Basic Audience Targeting",
          "Monthly Reporting",
          "Basic A/B Testing"
        ]
      },
      {
        name: "Gold",
        price: "$1,999/month",
        description: "Multi-platform advertising solution",
        timeframe: "6 months minimum",
        popular: true,
        features: [
          "3 Ad Platforms",
          "$5,000 Ad Spend Management",
          "5 Ad Campaigns",
          "Advanced Audience Targeting",
          "Custom Landing Pages",
          "Retargeting Campaigns",
          "Weekly Optimization",
          "Dedicated Support"
        ]
      },
      {
        name: "Platinum",
        price: "$3,999/month",
        description: "Enterprise advertising management",
        timeframe: "12 months minimum",
        features: [
          "All Ad Platforms",
          "$15,000+ Ad Spend Management",
          "Unlimited Campaigns",
          "Custom Audience Creation",
          "Dynamic Retargeting",
          "Conversion Optimization",
          "Creative Design Services",
          "24/7 Campaign Monitoring",
          "Dedicated Account Manager"
        ]
      }
    ]
  },
  {
    service: "Development",
    description: "Custom website and app development solutions",
    packages: [
      {
        name: "Silver",
        price: "From $5,999",
        description: "Basic website development package",
        timeframe: "4-6 weeks",
        features: [
          "5-Page Website",
          "Mobile Responsive Design",
          "Basic SEO Setup",
          "Contact Form",
          "Social Media Integration",
          "3 Months Support",
          "Basic Analytics"
        ]
      },
      {
        name: "Gold",
        price: "From $12,999",
        description: "Advanced website or basic app development",
        timeframe: "8-12 weeks",
        popular: true,
        features: [
          "10-Page Website or Basic App",
          "Custom Design",
          "E-commerce Integration",
          "CMS Implementation",
          "Advanced SEO Setup",
          "Payment Gateway",
          "6 Months Support",
          "Advanced Analytics"
        ]
      },
      {
        name: "Platinum",
        price: "From $24,999",
        description: "Enterprise development solution",
        timeframe: "12-16 weeks",
        features: [
          "Unlimited Pages",
          "Custom Web App or Mobile App",
          "Advanced Features & Integration",
          "Custom Backend Development",
          "API Development",
          "High-Performance Setup",
          "12 Months Support",
          "Premium Analytics Suite",
          "Dedicated Project Manager"
        ]
      }
    ]
  },
  {
    service: "Review Management",
    description: "Build and maintain your online reputation",
    packages: [
      {
        name: "Silver",
        price: "$499/month",
        description: "Essential review management for small businesses",
        timeframe: "3 months minimum",
        features: [
          "2 Platforms (Google & Yelp)",
          "Review Monitoring",
          "Response Templates",
          "Basic Reporting",
          "Monthly Review Summary",
          "Email Support"
        ]
      },
      {
        name: "Gold",
        price: "$999/month",
        description: "Comprehensive review management solution",
        timeframe: "6 months minimum",
        popular: true,
        features: [
          "5 Platforms",
          "24/7 Review Monitoring",
          "Custom Response Strategy",
          "Review Generation",
          "Competitor Monitoring",
          "Weekly Reports",
          "Priority Support",
          "Crisis Management"
        ]
      },
      {
        name: "Platinum",
        price: "$1,999/month",
        description: "Enterprise reputation management",
        timeframe: "12 months minimum",
        features: [
          "All Major Platforms",
          "Real-time Monitoring",
          "Custom Review Strategy",
          "Review Generation Campaign",
          "Sentiment Analysis",
          "Competitor Tracking",
          "Dedicated Manager",
          "24/7 Support",
          "Monthly Strategy Calls"
        ]
      }
    ]
  },
  {
    service: "Social Media Marketing",
    description: "Engage your audience across social platforms",
    packages: [
      {
        name: "Silver",
        price: "$799/month",
        description: "Basic social media management",
        timeframe: "3 months minimum",
        features: [
          "2 Social Platforms",
          "12 Posts per Month",
          "Basic Content Creation",
          "Community Management",
          "Monthly Analytics",
          "Basic Strategy"
        ]
      },
      {
        name: "Gold",
        price: "$1,499/month",
        description: "Advanced social media management",
        timeframe: "6 months minimum",
        popular: true,
        features: [
          "4 Social Platforms",
          "24 Posts per Month",
          "Custom Graphics",
          "Story Creation",
          "Community Management",
          "Engagement Strategy",
          "Weekly Reports",
          "Content Calendar"
        ]
      },
      {
        name: "Platinum",
        price: "$2,999/month",
        description: "Premium social media management",
        timeframe: "12 months minimum",
        features: [
          "All Major Platforms",
          "Daily Posts",
          "Custom Graphics & Video",
          "Influencer Outreach",
          "Ad Management",
          "Strategy Calls",
          "Real-time Analytics",
          "Dedicated Manager",
          "24/7 Support"
        ]
      }
    ]
  },
  {
    service: "Email Marketing",
    description: "Engage and convert with strategic email campaigns",
    packages: [
      {
        name: "Silver",
        price: "$599/month",
        description: "Essential email marketing package",
        timeframe: "3 months minimum",
        features: [
          "2 Email Campaigns/Month",
          "Basic Template Design",
          "List Management",
          "Basic Segmentation",
          "Monthly Reports",
          "Basic Automation"
        ]
      },
      {
        name: "Gold",
        price: "$1,199/month",
        description: "Advanced email marketing solution",
        timeframe: "6 months minimum",
        popular: true,
        features: [
          "4 Email Campaigns/Month",
          "Custom Template Design",
          "Advanced Segmentation",
          "A/B Testing",
          "Automation Workflows",
          "Lead Scoring",
          "Weekly Reports",
          "Priority Support"
        ]
      },
      {
        name: "Platinum",
        price: "$2,499/month",
        description: "Enterprise email marketing",
        timeframe: "12 months minimum",
        features: [
          "Unlimited Campaigns",
          "Premium Design",
          "Dynamic Content",
          "Advanced Automation",
          "Predictive Analytics",
          "CRM Integration",
          "Strategy Calls",
          "Dedicated Manager",
          "24/7 Support"
        ]
      }
    ]
  },
  {
    service: "Content Writing",
    description: "Engaging content that converts",
    packages: [
      {
        name: "Silver",
        price: "$599/month",
        description: "Basic content writing package",
        timeframe: "3 months minimum",
        features: [
          "4 Blog Posts/Month",
          "500 Words per Post",
          "Basic SEO Optimization",
          "1 Round of Revisions",
          "Content Calendar",
          "Monthly Reports"
        ]
      },
      {
        name: "Gold",
        price: "$1,199/month",
        description: "Comprehensive content solution",
        timeframe: "6 months minimum",
        popular: true,
        features: [
          "8 Blog Posts/Month",
          "1000 Words per Post",
          "Advanced SEO Optimization",
          "2 Rounds of Revisions",
          "Content Strategy",
          "Social Media Copies",
          "Weekly Reports",
          "Priority Support"
        ]
      },
      {
        name: "Platinum",
        price: "$2,499/month",
        description: "Premium content marketing",
        timeframe: "12 months minimum",
        features: [
          "16 Blog Posts/Month",
          "1500+ Words per Post",
          "Premium SEO Optimization",
          "Unlimited Revisions",
          "Custom Strategy",
          "All Content Types",
          "Dedicated Editor",
          "24/7 Support",
          "Monthly Strategy Calls"
        ]
      }
    ]
  },
  {
    service: "App Store Optimization",
    description: "Boost your app's visibility and downloads",
    packages: [
      {
        name: "Silver",
        price: "$699/month",
        description: "Basic ASO package",
        timeframe: "3 months minimum",
        features: [
          "1 App Store",
          "Keyword Research",
          "Basic Optimization",
          "Monthly Updates",
          "Performance Tracking",
          "Basic Reporting"
        ]
      },
      {
        name: "Gold",
        price: "$1,399/month",
        description: "Advanced ASO solution",
        timeframe: "6 months minimum",
        popular: true,
        features: [
          "2 App Stores",
          "Advanced Keyword Research",
          "Competitor Analysis",
          "Weekly Updates",
          "Screenshot Optimization",
          "Review Management",
          "A/B Testing",
          "Priority Support"
        ]
      },
      {
        name: "Platinum",
        price: "$2,799/month",
        description: "Premium ASO management",
        timeframe: "12 months minimum",
        features: [
          "All App Stores",
          "Global ASO Strategy",
          "Localization",
          "Custom Graphics",
          "Video Production",
          "Review Generation",
          "Conversion Optimization",
          "Dedicated Manager",
          "24/7 Support"
        ]
      }
    ]
  },
  {
    service: "Video Marketing",
    description: "Engage your audience with compelling video content",
    packages: [
      {
        name: "Silver",
        price: "$999/month",
        description: "Basic video marketing package",
        timeframe: "3 months minimum",
        features: [
          "2 Videos/Month",
          "30-60 Seconds Each",
          "Basic Editing",
          "Thumbnail Design",
          "Platform Optimization",
          "Monthly Analytics"
        ]
      },
      {
        name: "Gold",
        price: "$1,999/month",
        description: "Advanced video marketing",
        timeframe: "6 months minimum",
        popular: true,
        features: [
          "4 Videos/Month",
          "Up to 2 Minutes Each",
          "Professional Editing",
          "Custom Graphics",
          "Multi-platform Strategy",
          "Engagement Optimization",
          "Weekly Reports",
          "Priority Support"
        ]
      },
      {
        name: "Platinum",
        price: "$3,999/month",
        description: "Premium video production & marketing",
        timeframe: "12 months minimum",
        features: [
          "8 Videos/Month",
          "Custom Length",
          "Premium Production",
          "Animation & Effects",
          "Full Strategy",
          "Distribution Plan",
          "Performance Analysis",
          "Dedicated Producer",
          "24/7 Support"
        ]
      }
    ]
  }
];

export default function PricingPage() {
  const [openService, setOpenService] = useState(pricingData[0].service);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/80 text-transparent bg-clip-text">
            Transparent Pricing for Every Service
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Choose the perfect plan for your business needs. All plans include our expert support and guidance.
          </p>
        </motion.div>

        <div className="space-y-6">
          {pricingData.map((service, index) => (
            <motion.div
              key={service.service}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenService(openService === service.service ? "" : service.service)}
                className="w-full px-6 py-4 flex items-center justify-between bg-gradient-to-r from-primary/10 to-transparent hover:from-primary/20 transition-all duration-300"
              >
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{service.service}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">{service.description}</p>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-600 dark:text-gray-400 transition-transform duration-300 ${
                    openService === service.service ? "transform rotate-180" : ""
                  }`}
                />
              </button>

              {openService === service.service && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 py-4"
                >
                  <div className="grid md:grid-cols-3 gap-6">
                    {service.packages.map((pkg) => (
                      <div
                        key={pkg.name}
                        className={`relative p-6 rounded-lg ${
                          pkg.popular
                            ? "bg-primary/10 border-2 border-primary"
                            : "bg-gray-50 dark:bg-gray-700/50 border-2 border-transparent"
                        }`}
                      >
                        {pkg.popular && (
                          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                            <span className="bg-primary text-white text-sm font-semibold py-1 px-3 rounded-full">
                              Most Popular
                            </span>
                          </div>
                        )}
                        <h4 className="text-xl font-semibold mb-2">{pkg.name}</h4>
                        <div className="text-3xl font-bold mb-2">{pkg.price}</div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">{pkg.description}</p>
                        <div className="mb-4">
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            Estimated Timeline: {pkg.timeframe}
                          </span>
                        </div>
                        <ul className="space-y-3 mb-6">
                          {pkg.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Link
                          href="/contact"
                          className={`block text-center py-2 px-4 rounded-lg transition-colors duration-300 ${
                            pkg.popular
                              ? "bg-primary text-white hover:bg-primary/90"
                              : "bg-gray-900 dark:bg-gray-600 text-white hover:bg-gray-800 dark:hover:bg-gray-500"
                          }`}
                        >
                          Get Started
                        </Link>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
