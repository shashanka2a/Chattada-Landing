'use client'

import { motion } from 'framer-motion'
import { Shield, Search, MessageCircle } from 'lucide-react'

interface HowItWorksProps {
  isDarkMode: boolean
  t: typeof import('./translations').translations.en
}

export default function HowItWorks({ isDarkMode, t }: HowItWorksProps) {
  const steps = [
    { title: t.step1_title, desc: t.step1_desc, icon: Shield },
    { title: t.step2_title, desc: t.step2_desc, icon: Search },
    { title: t.step3_title, desc: t.step3_desc, icon: MessageCircle },
  ]

  return (
    <section className={`py-32 px-6 transition-colors duration-500 ${isDarkMode ? 'bg-black' : 'bg-[#FAFAFA]'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24">
          <h2 className={`text-5xl md:text-7xl font-serif mb-6 ${isDarkMode ? 'text-white' : 'text-[#111]'}`}>{t.how_title}</h2>
          <p className={`text-xl ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{t.how_subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          <div className={`hidden md:block absolute top-12 left-[16%] right-[16%] h-[2px] z-0 ${isDarkMode ? 'bg-white/10' : 'bg-black/5'}`} />

          {steps.map((step, i) => {
            const IconComponent = step.icon
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className={`w-24 h-24 rounded-[2rem] flex items-center justify-center mb-8 border transition-all duration-300 hover:scale-105 ${isDarkMode ? 'bg-[#1a1a1a] border-white/10 text-[#D4AF37] shadow-xl shadow-black/50' : 'bg-white border-gray-100 text-[#111] shadow-2xl shadow-gray-200'}`}>
                  <IconComponent size={32} />
                </div>
                <h3 className={`text-2xl font-serif mb-3 ${isDarkMode ? 'text-white' : 'text-[#111]'}`}>{step.title}</h3>
                <p className={`text-sm leading-relaxed max-w-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{step.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}


