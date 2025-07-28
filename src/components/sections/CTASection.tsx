"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CTASectionProps } from '@/types';
import Button from '@/components/ui/Button';
import { MdCheck, MdStar, MdPeople, MdAccessTime } from 'react-icons/md';

const CTASection: React.FC<CTASectionProps> = ({ cta_text, courseData }) => {
  const price = cta_text.price || 1000;
  const currency = cta_text.currency || 'BDT';
  
  const benefits = [
    "Lifetime access to all course materials",
    "Expert instructor support",
    "Practice tests and assessments",
    "Mobile-friendly learning platform",
    "Certificate of completion",
    "30-day money-back guarantee"
  ];

  const stats = [
    { icon: MdStar, value: '4.8', label: 'Student Rating' },
    { icon: MdPeople, value: '50K+', label: 'Enrolled Students' },
    { icon: MdAccessTime, value: '100+', label: 'Hours of Content' },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary-500 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-white"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/20 backdrop-blur-sm border border-white/30">
                  🎯 Most Popular Choice
                </span>
              </motion.div>

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
              >
                {cta_text.primary || 'Ready to Master IELTS?'}
              </motion.h2>

              {/* Description */}
              {cta_text.secondary && (
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-xl text-primary-100 mb-8 leading-relaxed"
                >
                  {cta_text.secondary}
                </motion.p>
              )}

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-wrap gap-6 mb-8"
              >
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <stat.icon className="w-5 h-5 text-primary-200" />
                    <div>
                      <div className="font-bold text-white">{stat.value}</div>
                      <div className="text-sm text-primary-200">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-3 mb-8"
              >
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <MdCheck className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-primary-100">{benefit}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Pricing Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
                {/* Price */}
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <span className="text-4xl font-bold text-white">
                      {new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: currency,
                        minimumFractionDigits: 0,
                      }).format(price)}
                    </span>
                    <span className="text-primary-200 text-lg">/lifetime</span>
                  </div>
                  
                  {/* Original Price */}
                  <div className="text-primary-200 line-through text-lg">
                    {new Intl.NumberFormat('en-US', {
                      style: 'currency',
                      currency: currency,
                      minimumFractionDigits: 0,
                    }).format(price * 1.5)}
                  </div>
                  
                  {/* Discount Badge */}
                  <div className="inline-block bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium mt-2">
                    33% OFF
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-4">
                  <Button 
                    size="lg" 
                    className="w-full bg-white text-primary-600 hover:bg-gray-100 text-lg py-4"
                  >
                    {cta_text.button_text || 'Enroll Now'}
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full border-white/30 text-white hover:bg-white/10 text-lg py-4"
                  >
                    <MdAccessTime className="w-5 h-5 mr-2" />
                    Start Free Trial
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="mt-8 pt-6 border-t border-white/20">
                  <div className="flex items-center justify-center space-x-4 text-sm text-primary-200">
                    <div className="flex items-center space-x-1">
                      <MdCheck className="w-4 h-4 text-green-400" />
                      <span>30-Day Guarantee</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MdCheck className="w-4 h-4 text-green-400" />
                      <span>Secure Payment</span>
                    </div>
                  </div>
                </div>

                {/* Limited Time Offer */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="mt-6 p-4 bg-yellow-500/20 backdrop-blur-sm rounded-lg border border-yellow-400/30"
                >
                  <div className="text-center">
                    <div className="text-yellow-300 font-semibold mb-1">
                      ⏰ Limited Time Offer
                    </div>
                    <div className="text-yellow-200 text-sm">
                      This special pricing ends soon!
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection; 