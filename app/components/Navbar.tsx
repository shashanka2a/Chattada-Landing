'use client'

import { Moon, Sun } from 'lucide-react'

interface NavbarProps {
  isDarkMode: boolean
  toggleTheme: () => void
  lang: 'en' | 'te'
  toggleLang: () => void
  t: typeof import('./translations').translations.en
}

export default function Navbar({ isDarkMode, toggleTheme, lang, toggleLang, t }: NavbarProps) {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-xl px-4">
      <div className={`
        backdrop-blur-xl border rounded-full px-2 py-2 flex justify-between items-center shadow-lg transition-all duration-300
        ${isDarkMode ? 'bg-[#1a1a1a]/90 border-white/10' : 'bg-white/90 border-black/5'}
      `}>
        <div className="pl-6 text-lg font-serif font-bold tracking-wide transition-colors duration-300">
          <span className={isDarkMode ? 'text-white' : 'text-black'}>CHATTADA</span>
        </div>
        
        <div className="flex items-center gap-2">
          {/* Language Toggle */}
          <button 
            onClick={toggleLang}
            className={`flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-300 text-xs font-bold ${isDarkMode ? 'hover:bg-white/10 text-white' : 'hover:bg-gray-100 text-black'}`}
            aria-label="Toggle language"
          >
            {lang === 'en' ? 'తె' : 'EN'}
          </button>

          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className={`p-3 rounded-full transition-colors duration-300 ${isDarkMode ? 'hover:bg-white/10 text-white' : 'hover:bg-gray-100 text-black'}`}
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button className="bg-black text-white px-6 py-3 rounded-full text-sm font-bold hover:scale-105 transition-transform duration-300 whitespace-nowrap">
            {t.navbar_cta}
          </button>
        </div>
      </div>
    </nav>
  )
}




