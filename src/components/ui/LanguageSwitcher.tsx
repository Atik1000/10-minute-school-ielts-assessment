"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { LanguageSwitcherProps } from '@/types';
import { SUPPORTED_LANGUAGES } from '@/utils/constants';
import { useRouter } from 'next/navigation';

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  currentLang,
  slug,
}) => {
  const router = useRouter();

  const handleLanguageChange = (newLang: string) => {
    if (newLang !== currentLang) {
      const newPath = `/${newLang}/product/${slug}`;
      router.push(newPath);
    }
  };

  const languages = [
    { code: SUPPORTED_LANGUAGES.EN, name: 'English', flag: '🇺🇸' },
    { code: SUPPORTED_LANGUAGES.BN, name: 'বাংলা', flag: '🇧🇩' },
  ];

  return (
    <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-lg p-1 border border-gray-200 shadow-soft">
      {languages.map((lang) => (
        <motion.button
          key={lang.code}
          onClick={() => handleLanguageChange(lang.code)}
          className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
            currentLang === lang.code
              ? 'bg-primary-100 text-primary-700 shadow-sm'
              : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-base">{lang.flag}</span>
          <span className="hidden sm:inline">{lang.name}</span>
        </motion.button>
      ))}
    </div>
  );
};

export default LanguageSwitcher; 