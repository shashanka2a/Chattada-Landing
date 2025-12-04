import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight, Heart, Shield, Users, Fingerprint, ArrowUpRight, Moon, Sun, Star, X, Check, Search, MessageCircle, Globe } from 'lucide-react';

// --- Translations ---
const translations = {
  en: {
    navbar_cta: "Get App",
    hero_badge: "Private Community Matchmaking",
    hero_title_line1: "Lineage",
    hero_title_line2: "Meets",
    hero_title_line3: "Love.",
    hero_desc: "The only ID-verified platform for the Chattada Srivaishnava community.",
    hero_cta: "Find Your Match",
    marquee_text: "TRUSTED & VERIFIED",
    why_title: "Why a Dedicated App?",
    why_subtitle: "For decades, our community has relied on fragmented WhatsApp groups, offline sessions, and word-of-mouth. It's time for an upgrade.",
    old_way_title: "The Old Way",
    old_way_1: "Unverified profiles circulating in WhatsApp groups.",
    old_way_2: "Awkward offline bio-data exchanges.",
    old_way_3: "Zero privacy control over photos.",
    new_way_title: "The Sangam Way",
    new_way_1: "100% ID Verified Community Members.",
    new_way_2: "Smart filters for Gothram & Profession.",
    new_way_3: "Blurred photos until you match.",
    bento_card1_title: "Modern Discovery",
    bento_card1_desc: "Swipe through profiles with detailed Gothram info. Private, secure, and respectful interface designed for serious intent.",
    bento_card2_title: "Lineage Tree",
    bento_card2_desc: "View 3 generations of ancestry before connecting.",
    bento_card3_title: "ID Verified",
    bento_card3_desc: "100% manual profile vetting by community admins.",
    bento_card3_badge: "Secure",
    bento_card4_badge: "Success Stories",
    bento_card4_title: "500+ Families United.",
    bento_card4_cta: "Read Stories",
    how_title: "How it Works",
    how_subtitle: "Three simple steps to find your partner.",
    step1_title: "Register & Verify",
    step1_desc: "Sign up and upload your ID. Our admins verify your details for authenticity.",
    step2_title: "Browse & Filter",
    step2_desc: "Filter by Gothram, Profession, and Age. View detailed profiles securely.",
    step3_title: "Connect Securely",
    step3_desc: "Send interest requests. Chat only when both sides agree.",
    footer_links_story: "Our Story",
    footer_links_guidelines: "Guidelines",
    footer_rights: "© 2025 Chattada Sangam"
  },
  te: {
    navbar_cta: "యాప్ పొందండి",
    hero_badge: "చాత్తాద శ్రీవైష్ణవ కుటుంబాల కోసం",
    hero_title_line1: "వంశ గౌరవం",
    hero_title_line2: "మరియు",
    hero_title_line3: "ప్రేమ బంధం.",
    hero_desc: "చాత్తాద శ్రీవైష్ణవ సంఘం కోసం ధృవీకరించబడిన ఏకైక మ్యాట్రిమోనీ వేదిక.",
    hero_cta: "మీ జోడిని కనుగొనండి",
    marquee_text: "నమ్మకమైన & ధృవీకరించబడిన",
    why_title: "మనకంటూ ఒక ప్రత్యేక యాప్ ఎందుకు?",
    why_subtitle: "దశాబ్దాలుగా మన సంబంధాలు వాట్సాప్ గ్రూపులు మరియు మాటల ద్వారానే కుదురుతున్నాయి. ఇప్పుడు మారాల్సిన సమయం వచ్చింది.",
    old_way_title: "పాత పద్ధతి",
    old_way_1: "వాట్సాప్ గ్రూపుల్లో అపరిచిత ప్రొఫైల్స్.",
    old_way_2: "ఇబ్బందికరమైన బయో-డేటా మార్పిడి.",
    old_way_3: "ఫోటోలకు ప్రైవసీ రక్షణ లేకపోవడం.",
    new_way_title: "సంఘం పద్ధతి",
    new_way_1: "100% ID ధృవీకరించబడిన సభ్యులు.",
    new_way_2: "గోత్రం & వృత్తి ఆధారిత స్మార్ట్ ఫిల్టర్లు.",
    new_way_3: "మ్యాచ్ అయ్యే వరకు ఫోటోలు కనిపించవు.",
    bento_card1_title: "ఆధునిక అన్వేషణ",
    bento_card1_desc: "గోత్ర వివరాలతో ప్రొఫైల్స్‌ను చూడండి. గోప్యత మరియు మర్యాదతో కూడిన ఇంటర్ఫేస్.",
    bento_card2_title: "వంశ వృక్షం",
    bento_card2_desc: "కనెక్ట్ అవ్వడానికి ముందే 3 తరాల వివరాలు చూడండి.",
    bento_card3_title: "గుర్తింపు ధృవీకరణ",
    bento_card3_desc: "ప్రతి ప్రొఫైల్ మా అడ్మిన్ల ద్వారా క్షుణ్ణంగా పరిశీలించబడుతుంది.",
    bento_card3_badge: "సురక్షితం",
    bento_card4_badge: "విజయ గాథలు",
    bento_card4_title: "500+ కుటుంబాలు ఏకమయ్యాయి.",
    bento_card4_cta: "కథనాలు చదవండి",
    how_title: "ఇది ఎలా పనిచేస్తుంది?",
    how_subtitle: "మీ భాగస్వామిని కనుగొనడానికి 3 సులభమైన దశలు.",
    step1_title: "నమోదు & ధృవీకరణ",
    step1_desc: "సైన్ అప్ చేసి ID అప్‌లోడ్ చేయండి. మీ వివరాలను మా అడ్మిన్లు సరిచూస్తారు.",
    step2_title: "వెతకండి & ఎంచుకోండి",
    step2_desc: "గోత్రం, వృత్తి మరియు వయస్సు ఆధారంగా వెతకండి.",
    step3_title: "సురక్షితంగా మాట్లాడండి",
    step3_desc: "ఆసక్తిని పంపండి. ఇద్దరూ అంగీకరించినప్పుడే చాట్ చేయండి.",
    footer_links_story: "మా కథ",
    footer_links_guidelines: "నియమాలు",
    footer_rights: "© 2025 చాత్తాద సంగమం"
  }
};

// --- Components ---

const Navbar = ({ isDarkMode, toggleTheme, lang, toggleLang, t }) => (
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
        >
          {lang === 'en' ? 'తె' : 'EN'}
        </button>

        {/* Theme Toggle */}
        <button 
          onClick={toggleTheme}
          className={`p-3 rounded-full transition-colors duration-300 ${isDarkMode ? 'hover:bg-white/10 text-white' : 'hover:bg-gray-100 text-black'}`}
        >
          {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <button className="bg-black text-white px-6 py-3 rounded-full text-sm font-bold hover:scale-105 transition-transform duration-300 whitespace-nowrap">
          {t.navbar_cta}
        </button>
      </div>
    </div>
  </nav>
);

const Hero = ({ isDarkMode, t }) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [300, 900], [1, 0]);

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
  );
};

const SocialMarquee = ({ isDarkMode, t }) => {
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

const WhySection = ({ isDarkMode, t }) => {
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

const BentoGrid = ({ isDarkMode, t }) => {
  // Separate standard layout styles from colors
  const cardLayout = "relative rounded-[2.5rem] overflow-hidden transition-all duration-500";
  
  // Standard card colors (White in light mode, Dark Grey in dark mode)
  const standardCardColors = isDarkMode 
      ? 'bg-[#121212] border border-white/5' 
      : 'bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]';
  
  // Special "Success Stories" card colors (Black/Dark in light mode, Gold in dark mode)
  const successCardColors = isDarkMode
      ? 'bg-[#D4AF37] text-black border-transparent'
      : 'bg-[#111] text-white border-transparent';

  return (
    <section className={`py-20 px-4 md:px-6 transition-colors duration-500 ${isDarkMode ? 'bg-black' : 'bg-[#FAFAFA]'}`}>
       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Modern Discovery */}
          <div className={`${cardLayout} ${standardCardColors} md:col-span-2 p-10 flex flex-col md:flex-row items-center gap-10`}>
            {/* Text Side (Left) */}
            <div className="flex-1 text-left z-10">
               <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${isDarkMode ? 'bg-[#2a2a2a] text-[#D4AF37]' : 'bg-[#FFF9E5] text-[#D4AF37]'}`}>
                  <Heart fill="currentColor" size={24} />
               </div>
               <h3 className={`text-3xl md:text-4xl font-serif mb-4 ${isDarkMode ? 'text-white' : 'text-[#111]'}`}>{t.bento_card1_title}</h3>
               <p className={`text-base md:text-lg leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                 {t.bento_card1_desc}
               </p>
            </div>
            
            {/* Visual Side (Right - Phone Card Mockup) */}
            <div className="flex-1 w-full max-w-sm relative mt-4 md:mt-0">
               {/* The Card */}
               <div className={`relative w-full aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl ${isDarkMode ? 'bg-[#1a1a1a]' : 'bg-white'}`}>
                  {/* Profile Image */}
                  <img 
                    src="https://images.unsplash.com/photo-1616002411355-49593fd89721?q=80&w=2574&auto=format&fit=crop" 
                    className="w-full h-[75%] object-cover" 
                    alt="Profile" 
                  />
                  
                  {/* Profile Info Overlay */}
                  <div className="absolute top-[55%] left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent pt-12">
                     <p className="text-white font-serif text-2xl">Priya, 24</p>
                     <p className="text-white/80 text-sm">Srivatsa Gothram</p>
                  </div>

                  {/* Actions (Bottom) */}
                  <div className={`h-[25%] flex items-center justify-center gap-4 px-6 ${isDarkMode ? 'bg-[#1a1a1a]' : 'bg-white'}`}>
                     <button className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-red-500 hover:bg-red-100 transition-colors">
                        <X size={20} />
                     </button>
                     <button className="flex-1 h-12 rounded-full bg-[#111] text-white font-bold text-sm hover:bg-black transition-colors">
                        Connect
                     </button>
                  </div>
               </div>
               
               {/* Decorative Blur behind card */}
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

             {/* Tree Diagram */}
             <div className="relative h-40 w-full mt-auto flex items-end justify-center">
                <svg width="200" height="120" viewBox="0 0 200 120" className="overflow-visible">
                   {/* Lines */}
                   <path d="M100 120 L100 60 L40 10" stroke={isDarkMode ? "#333" : "#e0e0e0"} strokeWidth="2" fill="none" />
                   <path d="M100 60 L160 10" stroke={isDarkMode ? "#333" : "#e0e0e0"} strokeWidth="2" fill="none" />
                   
                   {/* Nodes */}
                   <circle cx="100" cy="120" r="8" fill="#D4AF37" /> {/* Self */}
                   <circle cx="100" cy="60" r="6" fill={isDarkMode ? "#444" : "#d1d1d1"} /> {/* Parents */}
                   <circle cx="40" cy="10" r="6" fill={isDarkMode ? "#444" : "#d1d1d1"} /> {/* Grandparents 1 */}
                   <circle cx="160" cy="10" r="6" fill={isDarkMode ? "#444" : "#d1d1d1"} /> {/* Grandparents 2 */}
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

           {/* Card 4: Community - Updated with explicit colors */}
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
              
              {/* Abstract Decor */}
              <div className="absolute right-0 top-0 h-full w-1/2 opacity-10 pointer-events-none">
                 <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M50 0 L100 0 L100 100 L0 100 Z" fill="currentColor" />
                 </svg>
              </div>
           </div>
       </div>
    </section>
  );
};

const HowItWorks = ({ isDarkMode, t }) => {
  const steps = [
    { title: t.step1_title, desc: t.step1_desc, icon: Shield },
    { title: t.step2_title, desc: t.step2_desc, icon: Search },
    { title: t.step3_title, desc: t.step3_desc, icon: MessageCircle },
  ];

  return (
    <section className={`py-32 px-6 transition-colors duration-500 ${isDarkMode ? 'bg-black' : 'bg-[#FAFAFA]'}`}>
      <div className="max-w-6xl mx-auto">
         <div className="text-center mb-24">
            <h2 className={`text-5xl md:text-7xl font-serif mb-6 ${isDarkMode ? 'text-white' : 'text-[#111]'}`}>{t.how_title}</h2>
            <p className={`text-xl ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{t.how_subtitle}</p>
         </div>

         <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connecting Line (Desktop) */}
            <div className={`hidden md:block absolute top-12 left-[16%] right-[16%] h-[2px] z-0 ${isDarkMode ? 'bg-white/10' : 'bg-black/5'}`} />

            {steps.map((step, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.2 }}
                 className="relative z-10 flex flex-col items-center text-center"
               >
                  <div className={`w-24 h-24 rounded-[2rem] flex items-center justify-center mb-8 border transition-all duration-300 hover:scale-105 ${isDarkMode ? 'bg-[#1a1a1a] border-white/10 text-[#D4AF37] shadow-xl shadow-black/50' : 'bg-white border-gray-100 text-[#111] shadow-2xl shadow-gray-200'}`}>
                     <step.icon size={32} />
                  </div>
                  <h3 className={`text-2xl font-serif mb-3 ${isDarkMode ? 'text-white' : 'text-[#111]'}`}>{step.title}</h3>
                  <p className={`text-sm leading-relaxed max-w-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{step.desc}</p>
               </motion.div>
            ))}
         </div>
      </div>
    </section>
  )
}

const Footer = ({ isDarkMode, t }) => (
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
);

export default function ChattadaApp() {
  const [isDarkMode, setIsDarkMode] = useState(false); 
  const [lang, setLang] = useState('en');

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const toggleLang = () => setLang(prev => prev === 'en' ? 'te' : 'en');
  
  const t = translations[lang];

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
  );
}
