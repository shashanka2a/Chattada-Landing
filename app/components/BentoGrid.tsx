'use client'

import Image from 'next/image'
import { Heart, Users, Fingerprint, Shield, Star, ArrowUpRight, X } from 'lucide-react'

interface BentoGridProps {
  isDarkMode: boolean
  t: typeof import('./translations').translations.en
}

export default function BentoGrid({ isDarkMode, t }: BentoGridProps) {
  const cardLayout = "relative rounded-[2.5rem] overflow-hidden transition-all duration-500"
  
  const standardCardColors = isDarkMode 
    ? 'bg-[#121212] border border-white/5' 
    : 'bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]'
  
  const successCardColors = isDarkMode
    ? 'bg-[#D4AF37] text-black border-transparent'
    : 'bg-[#111] text-white border-transparent'

  return (
    <section className={`py-20 px-4 md:px-6 transition-colors duration-500 ${isDarkMode ? 'bg-black' : 'bg-[#FAFAFA]'}`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1: Modern Discovery */}
        <div className={`${cardLayout} ${standardCardColors} md:col-span-2 p-10 flex flex-col md:flex-row items-center gap-10`}>
          <div className="flex-1 text-left z-10">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${isDarkMode ? 'bg-[#2a2a2a] text-[#D4AF37]' : 'bg-[#FFF9E5] text-[#D4AF37]'}`}>
              <Heart fill="currentColor" size={24} />
            </div>
            <h3 className={`text-3xl md:text-4xl font-serif mb-4 ${isDarkMode ? 'text-white' : 'text-[#111]'}`}>{t.bento_card1_title}</h3>
            <p className={`text-base md:text-lg leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              {t.bento_card1_desc}
            </p>
          </div>
          
          <div className="flex-1 w-full max-w-sm relative mt-4 md:mt-0">
            <div className={`relative w-full aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl ${isDarkMode ? 'bg-[#1a1a1a]' : 'bg-white'}`}>
              <div className="relative w-full h-[75%]">
                <Image 
                  src="https://images.unsplash.com/photo-1616002411355-49593fd89721?q=80&w=2574&auto=format&fit=crop" 
                  alt="Profile" 
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="absolute top-[55%] left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent pt-12">
                <p className="text-white font-serif text-2xl">Priya, 24</p>
                <p className="text-white/80 text-sm">Srivatsa Gothram</p>
              </div>

              <div className={`h-[25%] flex items-center justify-center gap-4 px-6 ${isDarkMode ? 'bg-[#1a1a1a]' : 'bg-white'}`}>
                <button className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-red-500 hover:bg-red-100 transition-colors">
                  <X size={20} />
                </button>
                <button className="flex-1 h-12 rounded-full bg-[#111] text-white font-bold text-sm hover:bg-black transition-colors">
                  Connect
                </button>
              </div>
            </div>
            
            <div className="absolute top-10 inset-x-4 bottom-0 bg-black/20 blur-xl -z-10 rounded-full" />
          </div>
        </div>

        {/* Card 2: Lineage Tree */}
        <div className={`${cardLayout} ${standardCardColors} p-10 flex flex-col justify-between h-[500px] md:h-auto`}>
          <div className="text-left">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${isDarkMode ? 'bg-[#2a2a2a] text-white' : 'bg-gray-100 text-black'}`}>
              <Users size={24} />
            </div>
            <h3 className={`text-3xl font-serif mb-3 ${isDarkMode ? 'text-white' : 'text-[#111]'}`}>{t.bento_card2_title}</h3>
            <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              {t.bento_card2_desc}
            </p>
          </div>

          <div className="relative h-40 w-full mt-auto flex items-end justify-center">
            <svg width="200" height="120" viewBox="0 0 200 120" className="overflow-visible">
              <path d="M100 120 L100 60 L40 10" stroke={isDarkMode ? "#333" : "#e0e0e0"} strokeWidth="2" fill="none" />
              <path d="M100 60 L160 10" stroke={isDarkMode ? "#333" : "#e0e0e0"} strokeWidth="2" fill="none" />
              
              <circle cx="100" cy="120" r="8" fill="#D4AF37" />
              <circle cx="100" cy="60" r="6" fill={isDarkMode ? "#444" : "#d1d1d1"} />
              <circle cx="40" cy="10" r="6" fill={isDarkMode ? "#444" : "#d1d1d1"} />
              <circle cx="160" cy="10" r="6" fill={isDarkMode ? "#444" : "#d1d1d1"} />
            </svg>
          </div>
        </div>

        {/* Card 3: Verification */}
        <div className={`${cardLayout} ${standardCardColors} p-10 flex flex-col justify-between min-h-[400px]`}>
          <div>
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${isDarkMode ? 'bg-green-900/20 text-green-500' : 'bg-green-50 text-green-600'}`}>
              <Fingerprint size={24} />
            </div>
            <h3 className={`text-3xl font-serif mb-4 ${isDarkMode ? 'text-white' : 'text-[#111]'}`}>{t.bento_card3_title}</h3>
            <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              {t.bento_card3_desc}
            </p>
          </div>
          <div className="mt-8 flex items-center gap-2 text-green-600 font-medium bg-green-50/50 w-fit px-4 py-1.5 rounded-full border border-green-500/20 text-sm">
            <Shield size={14} /> <span>{t.bento_card3_badge}</span>
          </div>
        </div>

        {/* Card 4: Community */}
        <div className={`${cardLayout} ${successCardColors} md:col-span-2 p-10 flex flex-col justify-center items-start`}>
          <div className="relative z-10 max-w-lg">
            <div className="flex items-center gap-2 mb-4">
              <Star fill="currentColor" size={16} className={isDarkMode ? 'text-black' : 'text-[#D4AF37]'} />
              <span className="font-bold tracking-widest uppercase text-xs opacity-70">{t.bento_card4_badge}</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-serif font-medium mb-6">{t.bento_card4_title}</h3>
            <button className={`px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-transform hover:scale-105 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
              {t.bento_card4_cta} <ArrowUpRight size={20} />
            </button>
          </div>
          
          <div className="absolute right-0 top-0 h-full w-1/2 opacity-10 pointer-events-none">
            <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M50 0 L100 0 L100 100 L0 100 Z" fill="currentColor" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

