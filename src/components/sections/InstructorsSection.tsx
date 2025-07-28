"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { InstructorsSectionProps } from '@/types';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { MdStar, MdSchool, MdWork, MdPeople } from 'react-icons/md';

const InstructorsSection: React.FC<InstructorsSectionProps> = ({ instructors }) => {
  if (!instructors || instructors.length === 0) {
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
            Meet Your Expert Instructors
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Learn from industry experts with years of experience in IELTS preparation and proven track records.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructors.map((instructor, index) => (
            <motion.div
              key={instructor.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 text-center hover" variant="glass">
                {/* Instructor Image */}
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary-100 shadow-lg">
                    <img
                      src={instructor.image_url}
                      alt={instructor.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = '/placeholder-avatar.jpg';
                      }}
                    />
                  </div>
                  
                  {/* Rating Badge */}
                  {instructor.rating && (
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <Badge variant="success" size="sm">
                        <MdStar className="w-3 h-3 mr-1" />
                        {instructor.rating}
                      </Badge>
                    </div>
                  )}
                </div>

                {/* Instructor Info */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-gray-900">
                    {instructor.name}
                  </h3>
                  <p className="text-primary-600 font-medium">
                    {instructor.title}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {instructor.bio}
                  </p>

                  {/* Stats */}
                  <div className="flex justify-center space-x-4 pt-3">
                    {instructor.experience_years && (
                      <div className="flex items-center space-x-1 text-sm text-gray-600">
                        <MdWork className="w-4 h-4" />
                        <span>{instructor.experience_years}+ years</span>
                      </div>
                    )}
                    {instructor.student_count && (
                      <div className="flex items-center space-x-1 text-sm text-gray-600">
                        <MdPeople className="w-4 h-4" />
                        <span>{instructor.student_count}+ students</span>
                      </div>
                    )}
                  </div>

                  {/* Expertise */}
                  {instructor.expertise && instructor.expertise.length > 0 && (
                    <div className="pt-4">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center justify-center">
                        <MdSchool className="w-4 h-4 mr-1" />
                        Expertise
                      </h4>
                      <div className="flex flex-wrap justify-center gap-2">
                        {instructor.expertise.slice(0, 3).map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="primary" size="sm">
                            {skill}
                          </Badge>
                        ))}
                        {instructor.expertise.length > 3 && (
                          <Badge variant="secondary" size="sm">
                            +{instructor.expertise.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructorsSection; 