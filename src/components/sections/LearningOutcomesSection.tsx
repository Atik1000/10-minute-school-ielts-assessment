"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { LearningOutcomesProps } from '@/types';
import Card from '@/components/ui/Card';
import { MdCheckCircle, MdTrendingUp, MdSchool, MdLanguage, MdHeadphones, MdEdit } from 'react-icons/md';

const LearningOutcomesSection: React.FC<LearningOutcomesProps> = ({ outcomes }) => {
  // Default learning outcomes if none provided
  const defaultOutcomes = [
    {
      id: 1,
      title: "Master IELTS Reading",
      description: "Develop advanced reading strategies and comprehension skills",
      category: "Reading"
    },
    {
      id: 2,
      title: "Excel in IELTS Writing",
      description: "Learn to write coherent essays and reports with proper structure",
      category: "Writing"
    },
    {
      id: 3,
      title: "Improve Listening Skills",
      description: "Enhance listening comprehension for various accents and contexts",
      category: "Listening"
    },
    {
      id: 4,
      title: "Perfect Speaking Skills",
      description: "Develop fluency and confidence in speaking with proper pronunciation",
      category: "Speaking"
    },
    {
      id: 5,
      title: "Understand Test Format",
      description: "Familiarize yourself with all IELTS test formats and question types",
      category: "General"
    },
    {
      id: 6,
      title: "Time Management",
      description: "Learn effective time management strategies for each module",
      category: "Strategy"
    }
  ];

  const displayOutcomes = outcomes && outcomes.length > 0 ? outcomes : defaultOutcomes;

  // Group outcomes by category
  const groupedOutcomes = displayOutcomes.reduce((acc, outcome) => {
    const category = outcome.category || 'General';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(outcome);
    return acc;
  }, {} as { [key: string]: typeof displayOutcomes });

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: React.ComponentType<any> } = {
      Reading: MdSchool,
      Writing: MdEdit,
      Listening: MdHeadphones,
      Speaking: MdLanguage,
      Strategy: MdTrendingUp,
      General: MdCheckCircle
    };
    return icons[category] || MdCheckCircle;
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Reading: 'primary',
      Writing: 'secondary',
      Listening: 'success',
      Speaking: 'warning',
      Strategy: 'primary',
      General: 'secondary'
    };
    return colors[category] || 'primary';
  };

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
            What You Will Learn
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our comprehensive curriculum covers all aspects of the IELTS exam to help you achieve your target band score.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {Object.entries(groupedOutcomes).map(([category, categoryOutcomes], categoryIndex) => {
            const IconComponent = getCategoryIcon(category);
            const categoryColor = getCategoryColor(category);
            
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full hover" variant="default">
                  {/* Category Header */}
                  <div className="flex items-center mb-6">
                    <div className={`flex items-center justify-center w-12 h-12 bg-${categoryColor}-100 rounded-lg mr-4`}>
                      <IconComponent className={`w-6 h-6 text-${categoryColor}-600`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{category}</h3>
                      <p className="text-sm text-gray-600">{categoryOutcomes.length} learning objectives</p>
                    </div>
                  </div>

                  {/* Learning Outcomes */}
                  <div className="space-y-4">
                    {categoryOutcomes.map((outcome, outcomeIndex) => (
                      <motion.div
                        key={outcome.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: outcomeIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-3"
                      >
                        <div className="flex-shrink-0 mt-1">
                          <MdCheckCircle className="w-5 h-5 text-success-500" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">
                            {outcome.title}
                          </h4>
                          {outcome.description && (
                            <p className="text-sm text-gray-600 leading-relaxed">
                              {outcome.description}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Progress Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-gray-50 to-primary-50 rounded-2xl p-8 border border-primary-100">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  {displayOutcomes.length}+
                </div>
                <div className="text-gray-600">Learning Objectives</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary-600 mb-2">
                  100+
                </div>
                <div className="text-gray-600">Practice Exercises</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-success-600 mb-2">
                  50+
                </div>
                <div className="text-gray-600">Video Lessons</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LearningOutcomesSection; 