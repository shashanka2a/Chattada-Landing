'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

interface HeroProps {
  isDarkMode: boolean
  t: typeof import('./translations').translations.en
}

export default function Hero({ isDarkMode, t }: HeroProps) {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [300, 900], [1, 0])

  return (
    <section className={`relative min-h-[90vh] w-full flex flex-col items-center justify-center overflow-hidden px-6 pt-32 transition-colors duration-500 ${isDarkMode ? 'bg-[#050505]' : 'bg-[#FAFAFA]'}`}>
      
      {/* Background Decor */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] blur-[120px] rounded-full pointer-events-none transition-opacity duration-1000 ${isDarkMode ? 'bg-[#D4AF37]/10 opacity-100' : 'bg-[#FFD700]/10 opacity-60'}`} />

      {/* Main Content */}
      <motion.div 
        style={{ y: y1, opacity }}
        className="relative z-10 text-center max-w-5xl mx-auto flex flex-col items-center"
      >
        <div className={`mb-8 flex items-center gap-3 px-4 py-2 rounded-full border ${isDarkMode ? 'border-white/10 bg-white/5' : 'border-black/5 bg-white'}`}>
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
          </span>
          <span className={`text-[11px] font-bold uppercase tracking-widest ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>{t.hero_badge}</span>
        </div>

        <h1 className={`text-6xl md:text-[6rem] lg:text-[7rem] font-serif font-medium leading-[1.1] md:leading-[0.9] tracking-tight mb-8 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-[#111]'}`}>
          {t.hero_title_line1} <br className="md:hidden" /> 
          <span className="italic text-[#D4AF37] px-2">{t.hero_title_line2}</span> 
          <br className="md:hidden" /> {t.hero_title_line3}
        </h1>

        <p className={`text-lg md:text-2xl max-w-2xl mx-auto mb-12 leading-relaxed font-light ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          {t.hero_desc}
        </p>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`group relative px-10 py-5 rounded-full font-bold text-lg shadow-xl transition-all duration-300 ${isDarkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-[#222]'}`}
        >
          <span className="flex items-center gap-2">
            {t.hero_cta} <ChevronRight size={18} />
          </span>
        </motion.button>
      </motion.div>
    </section>
  )
}




