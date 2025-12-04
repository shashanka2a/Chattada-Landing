'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

interface WhySectionProps {
  isDarkMode: boolean
  t: typeof import('./translations').translations.en
}

export default function WhySection({ isDarkMode, t }: WhySectionProps) {
  return (
    <section className={`py-32 px-6 transition-colors duration-500 ${isDarkMode ? 'bg-black' : 'bg-[#FAFAFA]'}`}>
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className={`text-4xl md:text-6xl font-serif mb-6 ${isDarkMode ? 'text-white' : 'text-[#111]'}`}>
            {t.why_title}
          </h2>
          <p className={`text-xl max-w-2xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {t.why_subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className={`p-10 rounded-[2.5rem] border ${isDarkMode ? 'bg-[#121212] border-white/5' : 'bg-white border-gray-100 shadow-sm'}`}>
            <h3 className={`text-2xl font-serif mb-4 ${isDarkMode ? 'text-white' : 'text-[#111]'}`}>{t.old_way_title}</h3>
            <ul className={`space-y-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1 min-w-[12px]">✕</span>
                <span>{t.old_way_1}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1 min-w-[12px]">✕</span>
                <span>{t.old_way_2}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1 min-w-[12px]">✕</span>
                <span>{t.old_way_3}</span>
              </li>
            </ul>
          </div>
          
          <div className={`p-10 rounded-[2.5rem] border relative overflow-hidden ${isDarkMode ? 'bg-[#1a1a1a] border-[#D4AF37]/20' : 'bg-[#FFF9E5] border-[#D4AF37]/10'}`}>
            <h3 className={`text-2xl font-serif mb-4 ${isDarkMode ? 'text-white' : 'text-[#111]'}`}>{t.new_way_title}</h3>
            <ul className={`space-y-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
              <li className="flex items-start gap-3">
                <Check className="text-[#D4AF37] mt-1 min-w-[18px]" size={18} />
                <span>{t.new_way_1}</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-[#D4AF37] mt-1 min-w-[18px]" size={18} />
                <span>{t.new_way_2}</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-[#D4AF37] mt-1 min-w-[18px]" size={18} />
                <span>{t.new_way_3}</span>
              </li>
            </ul>
            {/* Decor */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}




