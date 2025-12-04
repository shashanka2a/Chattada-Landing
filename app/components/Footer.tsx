interface FooterProps {
  isDarkMode: boolean
  t: typeof import('./translations').translations.en
}

export default function Footer({ isDarkMode, t }: FooterProps) {
  return (
    <footer className={`pt-32 pb-12 px-6 border-t transition-colors duration-500 ${isDarkMode ? 'bg-black border-white/10' : 'bg-[#FAFAFA] border-black/5'}`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div>
          <h2 className={`text-[12vw] leading-none font-serif select-none pointer-events-none transition-colors duration-500 ${isDarkMode ? 'text-[#1a1a1a]' : 'text-gray-200'}`}>
            SANGAM
          </h2>
        </div>
        <div className="flex flex-col gap-4 text-right pt-4">
          <a href="#" className={`text-base font-medium hover:text-[#D4AF37] transition-colors ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{t.footer_links_story}</a>
          <a href="#" className={`text-base font-medium hover:text-[#D4AF37] transition-colors ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{t.footer_links_guidelines}</a>
          <p className="text-[#D4AF37] mt-8 text-xs font-bold uppercase tracking-widest">{t.footer_rights}</p>
        </div>
      </div>
    </footer>
  )
}

