'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, Language } from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.zh;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('zh');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Try to detect language from browser
    const timer = setTimeout(() => {
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith('ja')) {
        setLanguage('ja');
      } else if (browserLang.startsWith('en')) {
        setLanguage('en');
      } else {
        setLanguage('zh');
      }
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  if (!mounted) {
    return <div className="min-h-screen bg-white dark:bg-[#0a0a0a]" />; // Prevent flash of wrong language
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
