'use client'

import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SocialMarquee from './components/SocialMarquee'
import WhySection from './components/WhySection'
import BentoGrid from './components/BentoGrid'
import HowItWorks from './components/HowItWorks'
import Footer from './components/Footer'
import { translations } from './components/translations'

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [lang, setLang] = useState<'en' | 'te'>('en')

  const toggleTheme = () => setIsDarkMode(!isDarkMode)
  const toggleLang = () => setLang(prev => prev === 'en' ? 'te' : 'en')
  
  const t = translations[lang]

  return (
    <div className={`min-h-screen transition-colors duration-500 selection:bg-[#D4AF37] selection:text-white ${isDarkMode ? 'bg-black' : 'bg-[#FAFAFA]'}`}>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} lang={lang} toggleLang={toggleLang} t={t} />
      <Hero isDarkMode={isDarkMode} t={t} />
      <SocialMarquee isDarkMode={isDarkMode} t={t} />
      <WhySection isDarkMode={isDarkMode} t={t} />
      <BentoGrid isDarkMode={isDarkMode} t={t} />
      <HowItWorks isDarkMode={isDarkMode} t={t} />
      <Footer isDarkMode={isDarkMode} t={t} />
    </div>
  )
}


