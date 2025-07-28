"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChecklistSectionProps } from '@/types';
import Card from '@/components/ui/Card';
import { MdCheckCircle, MdRadioButtonUnchecked, MdStar } from 'react-icons/md';

const ChecklistSection: React.FC<ChecklistSectionProps> = ({ checklist }) => {
  const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set());

  // Default checklist if none provided
  const defaultChecklist = [
    {
      id: 1,
      title: "Complete IELTS Reading Module",
      description: "Master reading strategies and comprehension techniques",
      icon: "📖",
      completed: false
    },
    {
      id: 2,
      title: "Excel in Writing Tasks",
      description: "Learn to write coherent essays and reports",
      icon: "✍️",
      completed: false
    },
    {
      id: 3,
      title: "Improve Listening Skills",
      description: "Enhance listening comprehension for various accents",
      icon: "🎧",
      completed: false
    },
    {
      id: 4,
      title: "Perfect Speaking Skills",
      description: "Develop fluency and confidence in speaking",
      icon: "🗣️",
      completed: false
    },
    {
      id: 5,
      title: "Take Practice Tests",
      description: "Complete full-length mock tests under exam conditions",
      icon: "📝",
      completed: false
    },
    {
      id: 6,
      title: "Review Performance",
      description: "Analyze your progress and identify areas for improvement",
      icon: "📊",
      completed: false
    }
  ];

  const displayChecklist = checklist && checklist.length > 0 ? checklist : defaultChecklist;

  const handleToggleItem = (itemId: number) => {
    const newCheckedItems = new Set(checkedItems);
    if (newCheckedItems.has(itemId)) {
      newCheckedItems.delete(itemId);
    } else {
      newCheckedItems.add(itemId);
    }
    setCheckedItems(newCheckedItems);
  };

  const completedCount = checkedItems.size;
  const totalCount = displayChecklist.length;
  const progressPercentage = (completedCount / totalCount) * 100;

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
            Your Learning Checklist
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Track your progress through our comprehensive IELTS course with this interactive checklist.
          </p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <Card className="p-6" variant="glass">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Course Progress</h3>
              <span className="text-sm text-gray-600">
                {completedCount} of {totalCount} completed
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
              <motion.div
                className="bg-gradient-to-r from-primary-500 to-primary-600 h-3 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${progressPercentage}%` }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
              />
            </div>
            <div className="text-right">
              <span className="text-sm font-medium text-primary-600">
                {Math.round(progressPercentage)}% Complete
              </span>
            </div>
          </Card>
        </motion.div>

        {/* Checklist Items */}
        <div className="grid md:grid-cols-2 gap-6">
          {displayChecklist.map((item, index) => {
            const isChecked = checkedItems.has(item.id);
            
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card 
                  className={`p-6 cursor-pointer transition-all duration-300 hover ${
                    isChecked ? 'border-primary-200 bg-primary-50' : ''
                  }`}
                  variant="default"
                  onClick={() => handleToggleItem(item.id)}
                >
                  <div className="flex items-start space-x-4">
                    {/* Checkbox */}
                    <div className="flex-shrink-0 mt-1">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center justify-center w-6 h-6"
                      >
                        {isChecked ? (
                          <MdCheckCircle className="w-6 h-6 text-success-500" />
                        ) : (
                          <MdRadioButtonUnchecked className="w-6 h-6 text-gray-400" />
                        )}
                      </motion.button>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-2xl">{item.icon}</span>
                        <h3 className={`font-semibold text-lg ${
                          isChecked ? 'text-success-700 line-through' : 'text-gray-900'
                        }`}>
                          {item.title}
                        </h3>
                      </div>
                      
                      {item.description && (
                        <p className={`text-sm leading-relaxed ${
                          isChecked ? 'text-success-600' : 'text-gray-600'
                        }`}>
                          {item.description}
                        </p>
                      )}

                      {/* Completion Animation */}
                      {isChecked && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="flex items-center space-x-1 mt-2"
                        >
                          <MdStar className="w-4 h-4 text-yellow-500" />
                          <span className="text-xs text-success-600 font-medium">
                            Completed!
                          </span>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Completion Message */}
        {completedCount === totalCount && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-12 text-center"
          >
            <Card className="p-8 bg-gradient-to-r from-success-50 to-primary-50 border-success-200">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <MdCheckCircle className="w-8 h-8 text-success-500" />
                <h3 className="text-2xl font-bold text-success-700">
                  Congratulations!
                </h3>
              </div>
              <p className="text-success-600 mb-6">
                You've completed all the learning objectives. You're now ready to take the IELTS exam with confidence!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-success-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-success-700 transition-colors duration-200">
                  Take Final Assessment
                </button>
                <button className="border border-success-600 text-success-600 px-6 py-3 rounded-lg font-medium hover:bg-success-50 transition-colors duration-200">
                  Download Certificate
                </button>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Motivational Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Stay Motivated!
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Every completed item brings you one step closer to your target IELTS band score. Keep going!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200">
                Continue Learning
              </button>
              <button className="border border-white/30 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors duration-200">
                Get Support
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ChecklistSection; 