"use client";

import React from 'react';
import { cn } from '@/utils/cn';
import { CardProps } from '@/types';
import { motion } from 'framer-motion';

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default',
  hover = false,
  ...props
}) => {
  const baseClasses = 'rounded-xl transition-all duration-300';
  
  const variants = {
    default: 'bg-white border border-gray-200 shadow-soft hover:shadow-medium',
    glass: 'bg-white/80 backdrop-blur-md border border-white/20 shadow-glass',
    gradient: 'bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-medium',
  };

  const hoverClasses = hover ? 'hover:shadow-large hover:-translate-y-1' : '';

  const classes = cn(
    baseClasses,
    variants[variant],
    hoverClasses,
    className
  );

  return (
    <motion.div
      className={classes}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : undefined}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card; 