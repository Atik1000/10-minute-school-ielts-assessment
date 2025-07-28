"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FeaturesSectionProps } from '@/types';
import Card from '@/components/ui/Card';
import { MdCheckCircle, MdStar, MdAccessTime, MdSchool, MdSupport, MdDevices } from 'react-icons/md';

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ features }) => {
  // Default features if none provided
  const defaultFeatures = [
    {
      id: 1,
      title: "Comprehensive Content",
      description: "Complete coverage of all IELTS modules with detailed explanations and strategies.",
      icon: "MdSchool",
      benefits: ["All 4 modules covered", "Structured learning path", "Expert strategies"]
    },
    {
      id: 2,
      title: "Practice Tests",
      description: "Realistic mock tests that simulate actual IELTS exam conditions.",
      icon: "MdCheckCircle",
      benefits: ["Full-length tests", "Timed practice", "Performance tracking"]
    },
    {
      id: 3,
      title: "Expert Support",
      description: "Get help from certified IELTS instructors whenever you need assistance.",
      icon: "MdSupport",
      benefits: ["24/7 support", "Expert guidance", "Personal feedback"]
    },
    {
      id: 4,
      title: "Flexible Learning",
      description: "Study at your own pace with lifetime access to all course materials.",
      icon: "MdDevices",
      benefits: ["Lifetime access", "Mobile friendly", "Self-paced learning"]
    },
    {
      id: 5,
      title: "Progress Tracking",
      description: "Monitor your improvement with detailed analytics and performance reports.",
      icon: "MdStar",
      benefits: ["Detailed analytics", "Progress reports", "Weakness identification"]
    },
    {
      id: 6,
      title: "Study Materials",
      description: "Access to comprehensive study materials, templates, and resources.",
      icon: "MdAccessTime",
      benefits: ["Downloadable materials", "Templates", "Resource library"]
    }
  ];

  const displayFeatures = features && features.length > 0 ? features : defaultFeatures;

  const getIcon = (iconName: string) => {
    const icons: { [key: string]: React.ComponentType<any> } = {
      MdCheckCircle,
      MdStar,
      MdAccessTime,
      MdSchool,
      MdSupport,
      MdDevices
    };
    return icons[iconName] || MdCheckCircle;
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our IELTS Course?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the features that make our course the preferred choice for IELTS preparation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayFeatures.map((feature, index) => {
            const IconComponent = getIcon(feature.icon);
            
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full hover" variant="default">
                  {/* Icon */}
                  <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6 mx-auto">
                    <IconComponent className="w-8 h-8 text-primary-600" />
                  </div>

                  {/* Content */}
                  <div className="text-center space-y-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Benefits */}
                    {feature.benefits && feature.benefits.length > 0 && (
                      <div className="pt-4">
                        <ul className="space-y-2">
                          {feature.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                              <MdCheckCircle className="w-4 h-4 text-success-500 mr-2 flex-shrink-0" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your IELTS Journey?
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Join thousands of successful students who have achieved their target band scores with our comprehensive course.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200">
                Enroll Now
              </button>
              <button className="border border-white/30 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection; 