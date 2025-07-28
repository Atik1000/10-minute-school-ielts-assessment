"use client";

import React from 'react';
import { cn } from '@/utils/cn';
import { BadgeProps } from '@/types';
import { motion } from 'framer-motion';

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-200';
  
  const variants = {
    primary: 'bg-primary-100 text-primary-800 border border-primary-200',
    secondary: 'bg-secondary-100 text-secondary-800 border border-secondary-200',
    success: 'bg-success-100 text-success-800 border border-success-200',
    warning: 'bg-yellow-100 text-yellow-800 border border-yellow-200',
    error: 'bg-red-100 text-red-800 border border-red-200',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base',
  };

  const classes = cn(
    baseClasses,
    variants[variant],
    sizes[size],
    className
  );

  return (
    <motion.span
      className={classes}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {children}
    </motion.span>
  );
};

export default Badge; 