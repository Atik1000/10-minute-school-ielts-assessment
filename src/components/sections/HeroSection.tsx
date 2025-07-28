"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { HeroSectionProps } from '@/types';
import Button from '@/components/ui/Button';
import { MdPlayCircle, MdStar, MdPeople, MdAccessTime } from 'react-icons/md';

const HeroSection: React.FC<HeroSectionProps> = ({ title, description, media }) => {
  const stats = [
    { icon: MdStar, value: '4.8', label: 'Rating' },
    { icon: MdPeople, value: '50K+', label: 'Students' },
    { icon: MdAccessTime, value: '100+', label: 'Hours' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50" />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary-500 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary-100 text-primary-800 border border-primary-200">
                🎯 Master IELTS with Expert Guidance
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              dangerouslySetInnerHTML={{ __html: title }}
            />

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-600 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: description }}
            />

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-wrap gap-6"
            >
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <stat.icon className="w-5 h-5 text-primary-600" />
                  <div>
                    <div className="font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="text-lg px-8 py-4">
                Start Learning Now
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                <MdPlayCircle className="w-5 h-5 mr-2" />
                Watch Preview
              </Button>
            </motion.div>
          </motion.div>

          {/* Media/Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            {media && media.length > 0 && (
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={media[0].thumbnail_url || media[0].url}
                    alt={media[0].title || 'IELTS Course Preview'}
                    className="w-full h-auto object-cover"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors duration-300">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg"
                    >
                      <MdPlayCircle className="w-10 h-10 text-primary-600" />
                    </motion.button>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 bg-white rounded-lg p-4 shadow-large"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-600">9.0</div>
                    <div className="text-xs text-gray-600">Target Band</div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -left-4 bg-white rounded-lg p-4 shadow-large"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary-600">100%</div>
                    <div className="text-xs text-gray-600">Success Rate</div>
                  </div>
                </motion.div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 