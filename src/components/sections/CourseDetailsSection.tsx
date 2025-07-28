"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CourseDetailsProps } from '@/types';
import Card from '@/components/ui/Card';
import { MdAccessTime, MdSchool, MdAssignment, MdVideoLibrary, MdQuiz, MdDownload } from 'react-icons/md';

const CourseDetailsSection: React.FC<CourseDetailsProps> = ({ content }) => {
  // Default course details if none provided
  const defaultContent = [
    {
      id: 1,
      title: "Course Duration",
      description: "Lifetime access to all course materials with self-paced learning",
      points: ["100+ hours of content", "Lifetime access", "Self-paced learning", "Mobile friendly"]
    },
    {
      id: 2,
      title: "Course Structure",
      description: "Comprehensive coverage of all IELTS modules with structured learning path",
      points: ["4 main modules", "Progressive difficulty", "Practice tests", "Performance tracking"]
    },
    {
      id: 3,
      title: "Study Materials",
      description: "Access to comprehensive study materials and resources",
      points: ["Video lessons", "Practice exercises", "Downloadable materials", "Templates"]
    },
    {
      id: 4,
      title: "Assessment & Progress",
      description: "Regular assessments and detailed progress tracking",
      points: ["Mock tests", "Progress reports", "Weakness analysis", "Performance analytics"]
    }
  ];

  const displayContent = content && content.length > 0 ? content : defaultContent;

  const getIcon = (index: number) => {
    const icons = [MdAccessTime, MdSchool, MdAssignment, MdVideoLibrary];
    return icons[index % icons.length];
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Course Details
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get detailed information about our IELTS course structure, content, and learning approach.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {displayContent.map((item, index) => {
            const IconComponent = getIcon(index);
            
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full hover" variant="default">
                  {/* Header */}
                  <div className="flex items-center mb-6">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mr-4">
                      <IconComponent className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                    </div>
                  </div>

                  {/* Description */}
                  {item.description && (
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {item.description}
                    </p>
                  )}

                  {/* Points */}
                  {item.points && item.points.length > 0 && (
                    <div className="space-y-3">
                      {item.points.map((point, pointIndex) => (
                        <motion.div
                          key={pointIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: pointIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center space-x-3"
                        >
                          <div className="flex-shrink-0">
                            <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                          </div>
                          <span className="text-gray-700">{point}</span>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Image if available */}
                  {item.image_url && (
                    <div className="mt-6">
                      <img
                        src={item.image_url}
                        alt={item.title}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                  )}
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Course Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-large border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Course Statistics
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mx-auto mb-4">
                  <MdVideoLibrary className="w-8 h-8 text-primary-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">100+</div>
                <div className="text-gray-600">Video Lessons</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-secondary-100 rounded-full mx-auto mb-4">
                  <MdQuiz className="w-8 h-8 text-secondary-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
                <div className="text-gray-600">Practice Tests</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-success-100 rounded-full mx-auto mb-4">
                  <MdAssignment className="w-8 h-8 text-success-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">200+</div>
                <div className="text-gray-600">Exercises</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-warning-100 rounded-full mx-auto mb-4">
                  <MdDownload className="w-8 h-8 text-warning-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">25+</div>
                <div className="text-gray-600">Resources</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your IELTS Preparation?
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Join our comprehensive course and take the first step towards achieving your target IELTS band score.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200">
                Enroll Now
              </button>
              <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors duration-200">
                Download Syllabus
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CourseDetailsSection; 