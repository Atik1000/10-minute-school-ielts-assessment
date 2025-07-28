"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/types';
import Card from '@/components/ui/Card';
import { MdStar, MdCheckCircle } from 'react-icons/md';

interface ExclusiveFeaturesSectionProps {
  section: Section;
}

const ExclusiveFeaturesSection: React.FC<ExclusiveFeaturesSectionProps> = ({ section }) => {
  if (!section || !section.content || section.content.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {section.name || 'Course Exclusive Features'}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the unique features that set our IELTS course apart from others.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8" variant="glass">
            <div className="space-y-8">
              {section.content.map((item, index) => (
                <motion.div
                  key={item.id || index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border-b border-gray-200 last:border-b-0 pb-8 last:pb-0"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                        <MdStar className="w-6 h-6 text-primary-600" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {item.title}
                      </h3>
                      
                      {item.description && (
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {item.description}
                        </p>
                      )}

                      {item.points && item.points.length > 0 && (
                        <div className="space-y-2">
                          {item.points.map((point, pointIndex) => (
                            <div key={pointIndex} className="flex items-start space-x-3">
                              <MdCheckCircle className="w-5 h-5 text-success-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{point}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {item.features && item.features.length > 0 && (
                        <div className="mt-4">
                          <div className="flex flex-wrap gap-2">
                            {item.features.map((feature, featureIndex) => (
                              <span
                                key={featureIndex}
                                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExclusiveFeaturesSection; 