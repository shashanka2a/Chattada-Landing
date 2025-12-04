'use client'

import { motion } from 'framer-motion'
import { Shield } from 'lucide-react'

interface SocialMarqueeProps {
  isDarkMode: boolean
  t: typeof import('./translations').translations.en
}

export default function SocialMarquee({ isDarkMode, t }: SocialMarqueeProps) {
  return (
    <div className={`py-8 border-y overflow-hidden relative transition-colors duration-500 ${isDarkMode ? 'bg-[#121212] border-white/5' : 'bg-white border-black/5'}`}>
      {/* Gradient Fade */}
      <div className={`absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r ${isDarkMode ? 'from-[#121212] to-transparent' : 'from-white to-transparent'}`} />
      <div className={`absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l ${isDarkMode ? 'from-[#121212] to-transparent' : 'from-white to-transparent'}`} />
      
      <motion.div 
        className="flex whitespace-nowrap gap-20"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
      >
        {[...Array(8)].map((_, i) => (
          <div key={i} className={`flex items-center gap-3 opacity-30 transition-all duration-300 ${isDarkMode ? 'grayscale' : 'grayscale-0'}`}>
            <Shield size={20} className={isDarkMode ? 'text-white' : 'text-black'} />
            <span className={`text-lg font-bold tracking-widest ${isDarkMode ? 'text-white' : 'text-black'}`}>{t.marquee_text}</span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}




