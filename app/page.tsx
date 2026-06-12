'use client';
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Facebook, PhoneCall, Mail, Wrench, MapPin, Headphones, ShieldCheck, Thermometer, CheckCircle2 } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay },
});

const SectionDivider = () => (
  <div className="w-full h-px bg-gradient-to-r from-transparent via-[#2196f3]/40 to-transparent" />
);

const CardWave = () => (
  <div className="absolute bottom-0 left-0 w-full h-10 text-[#f0f9ff]">
    <svg viewBox="0 0 100 25" preserveAspectRatio="none" className="w-full h-full fill-current">
      <path d="M0,15 C30,30 70,0 100,15 L100,25 L0,25 Z" />
    </svg>
  </div>
);

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen font-sans">

      {/* ── 1. HERO ── */}
      <section className="relative w-full h-[100vh] min-h-[700px] flex items-center justify-center pt-24 overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0">
          <Image src="/hero.jpg" fill alt="Klimatizácia Involtklima" className="object-cover object-[25%_center] md:object-center" style={{animation:'zoomInOut 10s ease-in-out infinite'}} priority />
          <div className="absolute inset-0 bg-[#0c1a2e]/55" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto text-white -translate-y-16 md:-translate-y-10">
          <motion.h1 {...fadeUp(0)} className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white" style={{ fontFamily: 'var(--font-kodchasan), sans-serif' }}>
            Zostaňte v chlade – energeticky úsporné chladenie
          </motion.h1>
          <motion.p {...fadeUp(0.1)} className="text-lg md:text-xl font-normal mb-10 text-gray-200">
            Zvýšte svoj komfort s modernou klimatizáciou na mieru.
          </motion.p>
          <motion.div {...fadeUp(0.2)}>
            <Link
              href="/services"
              className="btn-airvana px-10 py-4 text-base"
            >
              Zistiť viac
            </Link>
          </motion.div>
        </div>

        {/* Slider dots */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex gap-3 items-center">
          <div className="w-4 h-4 rounded-full border-2 border-white flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-white" />
          </div>
          <div className="w-3 h-3 rounded-full bg-white/50" />
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 w-full z-20 translate-y-[2px]">
          <svg viewBox="0 0 1440 120" className="w-full h-auto fill-white block" preserveAspectRatio="none">
            <path d="M0,50 Q360,-30 720,50 T1440,50 V120 H0 Z" />
          </svg>
        </div>
      </section>

      {/* ── 2. FEATURES ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2 {...fadeUp(0)} className="text-4xl md:text-5xl font-bold text-[#1a2b49] mb-4">
            Dokonalá klimatizácia pre váš komfort
          </motion.h2>
          <motion.p {...fadeUp(0.05)} className="text-gray-500 mb-14 max-w-2xl mx-auto text-base">
            Efektívne chladiace riešenia šité na mieru pre maximálny komfort a úsporu energie.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Card 1 */}
            <motion.div {...fadeUp(0.1)} className="feat-card">
              <div className="feat-icon">
                <svg className="w-14 h-14 stroke-current" viewBox="0 0 56 56" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="6" y="14" width="44" height="18" rx="3"/>
                  <line x1="10" y1="20" x2="46" y2="20"/>
                  <line x1="10" y1="25" x2="40" y2="25"/>
                  <line x1="44" y1="25" x2="46" y2="25"/>
                  <line x1="18" y1="32" x2="18" y2="40"/>
                  <line x1="28" y1="32" x2="28" y2="43"/>
                  <line x1="38" y1="32" x2="38" y2="40"/>
                  <circle cx="18" cy="41" r="1.5" fill="currentColor" stroke="none"/>
                  <circle cx="28" cy="44" r="1.5" fill="currentColor" stroke="none"/>
                  <circle cx="38" cy="41" r="1.5" fill="currentColor" stroke="none"/>
                </svg>
              </div>
              <p className="feat-title">Odborné poradenstvo</p>
              <p className="feat-desc">Poradíme vám, ako vybrať správny chladiaci systém pre váš priestor a potreby.</p>
              <div className="absolute bottom-0 left-0 w-full h-10" style={{color:'white'}}>
                <svg viewBox="0 0 100 25" preserveAspectRatio="none" style={{width:'100%',height:'100%',fill:'white'}}><path d="M0,15 C30,30 70,0 100,15 L100,25 L0,25 Z"/></svg>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div {...fadeUp(0.15)} className="feat-card">
              <div className="feat-icon">
                <svg className="w-14 h-14 stroke-current" viewBox="0 0 56 56" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="6" y="16" width="44" height="16" rx="3"/>
                  <line x1="10" y1="22" x2="46" y2="22"/>
                  <line x1="10" y1="27" x2="20" y2="27"/>
                  <line x1="36" y1="27" x2="46" y2="27"/>
                  <path d="M12 32 Q12 38 8 42"/>
                  <path d="M20 32 Q20 38 16 44"/>
                  <path d="M28 32 Q28 40 28 45"/>
                  <path d="M36 32 Q36 38 40 44"/>
                  <path d="M44 32 Q44 38 48 42"/>
                </svg>
              </div>
              <p className="feat-title">Montáž na mieru</p>
              <p className="feat-desc">Navrhneme a namontujeme klimatizáciu prispôsobenú vašim požiadavkám.</p>
              <div className="absolute bottom-0 left-0 w-full h-10">
                <svg viewBox="0 0 100 25" preserveAspectRatio="none" style={{width:'100%',height:'100%',fill:'white'}}><path d="M0,15 C30,30 70,0 100,15 L100,25 L0,25 Z"/></svg>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div {...fadeUp(0.2)} className="feat-card">
              <div className="feat-icon">
                <svg className="w-14 h-14 stroke-current" viewBox="0 0 56 56" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="8" y="10" width="40" height="36" rx="3"/>
                  <circle cx="28" cy="28" r="10"/>
                  <circle cx="28" cy="28" r="4"/>
                  <line x1="28" y1="18" x2="28" y2="24"/>
                  <line x1="28" y1="32" x2="28" y2="38"/>
                  <line x1="18" y1="28" x2="24" y2="28"/>
                  <line x1="32" y1="28" x2="38" y2="28"/>
                  <line x1="21.5" y1="21.5" x2="25.2" y2="25.2"/>
                  <line x1="30.8" y1="30.8" x2="34.5" y2="34.5"/>
                  <line x1="34.5" y1="21.5" x2="30.8" y2="25.2"/>
                  <line x1="25.2" y1="30.8" x2="21.5" y2="34.5"/>
                  <line x1="12" y1="13" x2="16" y2="13"/>
                  <line x1="12" y1="16" x2="16" y2="16"/>
                </svg>
              </div>
              <p className="feat-title">Inteligentné chladenie</p>
              <p className="feat-desc">Využívajte najnovšie energeticky úsporné technológie s plnou automatizáciou.</p>
              <div className="absolute bottom-0 left-0 w-full h-10">
                <svg viewBox="0 0 100 25" preserveAspectRatio="none" style={{width:'100%',height:'100%',fill:'white'}}><path d="M0,15 C30,30 70,0 100,15 L100,25 L0,25 Z"/></svg>
              </div>
            </motion.div>

            {/* Card 4 */}
            <motion.div {...fadeUp(0.25)} className="feat-card">
              <div className="feat-icon">
                <svg className="w-14 h-14 stroke-current" viewBox="0 0 56 56" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="8" y="36" width="40" height="10" rx="2"/>
                  <path d="M18 36 L18 28 Q18 22 14 22 Q10 22 10 26 Q10 30 14 30 L18 30"/>
                  <path d="M38 36 L38 26 L34 22 L42 22 L42 26 L38 26"/>
                  <path d="M26 36 L26 24 Q26 18 28 18 Q30 18 30 24 L30 36"/>
                </svg>
              </div>
              <p className="feat-title">Pravidelný servis</p>
              <p className="feat-desc">Zaistíme dlhodobú spoľahlivosť zariadenia pravidelnými prehliadkami a servisom.</p>
              <div className="absolute bottom-0 left-0 w-full h-10">
                <svg viewBox="0 0 100 25" preserveAspectRatio="none" style={{width:'100%',height:'100%',fill:'white'}}><path d="M0,15 C30,30 70,0 100,15 L100,25 L0,25 Z"/></svg>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── 3. ABOUT ── */}
      <section className="py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(33,150,243,0.15)] h-[500px] w-full"
          >
            <Image src="/cooling.jpg" fill alt="Cooling Solutions" className="object-cover" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a2b49] mb-6 leading-tight">
              Klimatizačné riešenia pre váš dokonalý komfort
            </h2>
            <p className="text-gray-500 mb-5 text-base leading-relaxed">
              V Involtklima veríme, že klimatizácia nie je len o teplote&mdash;ide o vytváranie príjemného, energeticky úsporného a zdravého prostredia. S modernou HVAC technológiou a profesionálnym prístupom ponúkame špičkové riešenia klimatizácie pre domácnosti aj firmy.
            </p>
            <p className="text-gray-500 mb-10 text-base leading-relaxed">
              Náš tím skúsených odborníkov sa stará o to, aby každá inštalácia spĺňala vaše požiadavky. Či hľadáte elegantnú nástennú jednotku pre domov alebo pokročilý systém klimatizácie pre vašu firmu, Involtklima garantuje presnosť, spoľahlivosť a trvalo udržateľné riešenia.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mb-10">
              <div className="flex items-center gap-4 p-2 w-full">
                <div className="icon-box-glow w-16 h-16">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 fill-none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="5" width="20" height="14" rx="2"/>
                    <line x1="2" y1="10" x2="22" y2="10"/>
                    <path d="M6 14h4"/>
                  </svg>
                </div>
                <div>
                  <h4 className="about-card-title font-bold text-base text-[#2196f3] mb-0.5 transition-colors duration-400">Energeticky úsporné technológie</h4>
                  <p className="about-card-desc text-sm text-gray-500 transition-colors duration-400">Efektívne chladenie s nižšími nákladmi na energie.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-2 w-full">
                <div className="icon-box-glow w-16 h-16">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 fill-none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="about-card-title font-bold text-base text-[#2196f3] mb-0.5 transition-colors duration-400">Odborná montáž a servis</h4>
                  <p className="about-card-desc text-sm text-gray-500 transition-colors duration-400">Spoľahlivé HVAC služby pre dlhodobý výkon.</p>
                </div>
              </div>
            </div>

            <Link href="/about" className="btn-airvana px-10 py-4 text-base">
              Zistiť viac
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── 4. SERVICES ── */}
      <section className="py-20 bg-[#f0f9ff]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">

            {[
              {
                img: '/smart.jpg',
                icon: <svg className="w-7 h-7 stroke-[#2196f3]" viewBox="0 0 24 24" fill="none" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a4 4 0 0 1 4 4v2H8V6a4 4 0 0 1 4-4z"/><rect x="4" y="8" width="16" height="10" rx="2"/><line x1="8" y1="13" x2="10" y2="13"/><line x1="14" y1="13" x2="16" y2="13"/></svg>,
                title: 'Inteligentná klimatizácia',
                desc: 'Automatická regulácia teploty pre maximálny komfort.',
                btn: 'Zistiť viac',
              },
              {
                img: '/clean.jpg',
                icon: <svg className="w-7 h-7 stroke-[#2196f3]" viewBox="0 0 24 24" fill="none" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8 12c1-2 3-3 4-3s3 1 4 3"/><path d="M12 9v3"/></svg>,
                title: 'Kvalita vzduchu',
                desc: 'Pokročilá filtrácia pre čistejší a zdravší vzduch.',
                btn: 'Vylepšiť vzduch',
              },
              {
                img: '/install.jpg',
                icon: <svg className="w-7 h-7 stroke-[#2196f3]" viewBox="0 0 24 24" fill="none" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="10" rx="2"/><path d="M6 11h4M16 11h2"/><path d="M6 17v3M18 17v3"/></svg>,
                title: 'Inštalácia klimatizácie',
                desc: 'Odborná inštalácia pre maximálne chladenie a účinnosť.',
                btn: 'Získať cenovú ponuku',
              },
              {
                img: '/green.jpg',
                icon: <svg className="w-7 h-7 stroke-[#2196f3]" viewBox="0 0 24 24" fill="none" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22V12M12 12C12 7 17 3 22 3c0 5-3 9-10 9zM12 12C12 7 7 3 2 3c0 5 3 9 10 9z"/></svg>,
                title: 'Ekologické riešenia',
                desc: 'Znížte náklady na energie s ekologickou klimatizáciou.',
                btn: 'Ísť eco',
              },
            ].map((s, i) => (
              <motion.div key={i} {...fadeUp(i * 0.08)} className="glow-card group relative flex flex-col">
                {/* Image inset */}
                <div className="m-2 rounded-xl overflow-hidden h-52 relative">
                  <Image src={s.img} fill alt={s.title} className="object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                {/* Floating icon badge */}
                <div className="absolute left-1/2 -translate-x-1/2 w-[72px] h-[72px] bg-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(33,150,243,0.3)] border border-[rgba(33,150,243,0.15)] z-10" style={{ top: 'calc(0.5rem + 208px - 36px)' }}>
                  {s.icon}
                </div>
                <div className="pt-12 pb-8 px-6 text-center flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3 text-[#1a2b49]">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">{s.desc}</p>
                  <button className="btn-airvana px-5 py-2.5 text-sm">
                    {s.btn}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Slider dots */}
          <div className="flex justify-center mt-10 gap-2.5 items-center">
            {[0,1,2,3,4,5,6,7].map((_, i) => (
              <div key={i} className={`rounded-full transition-all ${i === 2 ? 'w-4 h-4 border-2 border-[#2196f3] flex items-center justify-center' : 'w-2.5 h-2.5 bg-blue-200'}`}>
                {i === 2 && <div className="w-2 h-2 rounded-full bg-[#2196f3]" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. BRANDS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <motion.h2 {...fadeUp(0)} className="text-3xl md:text-4xl font-bold text-[#1a2b49] mb-3">
            Overené značky pre špičkové chladenie
          </motion.h2>
          <motion.p {...fadeUp(0.05)} className="text-gray-500 text-base mb-6">
            Spolupracujeme s top značkami pre spoľahlivé a úsporné klimatizačné riešenia.
          </motion.p>
          <SectionDivider />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-10">
            {[
              { name: 'SAMSUNG', style: 'font-black text-[#1a2b49] text-xl tracking-wider' },
              { name: 'DAIKIN', style: 'font-black text-[#0060af] text-xl tracking-widest' },
              { name: 'SIEMENS', style: 'font-bold text-[#009999] text-xl tracking-wide' },
              { name: 'SINCLAIR', style: 'font-black text-[#1a2b49] text-xl tracking-wide' },
              { name: 'MIDEA', style: 'font-black text-[#e60012] text-xl tracking-widest' },
            ].map((brand, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.07)}
                className="glow-card py-8 px-4 flex items-center justify-center"
              >
                <span className={brand.style}>{brand.name}</span>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 6. BLOG ── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <motion.div {...fadeUp(0)} className="text-center mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2b49] mb-3">
              Buďte informovaní s odbornými radami
            </h2>
            <p className="text-gray-500 text-base">
              Prečítajte si najnovšie trendy a tipy z oblasti klimatizácie a regulácie klímy.
            </p>
          </motion.div>
          <SectionDivider />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-12">
            {[
              { title: 'Ekologická klimatizácia', date: '15. januára 2025', img: 'https://picsum.photos/seed/bl1/500/300', desc: 'Udržateľné chladiace riešenia sa stávajú prioritou, keďže rastú ceny energií aj environmentálne požiadavky.' },
              { title: 'Energetické triedy HVAC', date: '13. januára 2025', img: 'https://picsum.photos/seed/bl2/500/300', desc: 'Pochopenie energetických tried pomáha domácnostiam vybrať si najúspornejší klimatizačný systém.' },
              { title: 'Kedy volať servis?', date: '12. januára 2025', img: 'https://picsum.photos/seed/bl3/500/300', desc: 'Včasné rozpoznanie varovných signálov môže predísť nákladným poruchám a predĺžiť životnosť zariadenia.' },
              { title: 'Tipy na leto', date: '10. januára 2025', img: 'https://picsum.photos/seed/bl4/500/300', desc: 'Ako efektívne využívať klimatizáciu v lete, aby ste maximalizovali komfort a minimalizovali náklady.' },
            ].map((post, i) => (
              <motion.div key={i} {...fadeUp(i * 0.08)} className="glow-card group flex flex-col">
                <div className="m-2 rounded-xl overflow-hidden h-48 relative">
                  <Image src={post.img} fill alt={post.title} className="object-cover group-hover:scale-105 transition-transform duration-700" unoptimized />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-bold text-lg mb-2 text-[#2196f3] hover:text-[#1565c0] cursor-pointer transition-colors">{post.title}</h3>
                  <p className="text-xs text-gray-400 font-medium mb-3">{post.date}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{post.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. PRE-FOOTER: Logo + Social + 8 Contact Cards ── */}
      <section className="pt-20 pb-0 bg-white border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6">

          {/* Logo + Social */}
          <div className="flex flex-col items-center mb-12">
            <div className="mb-6">
              <Image src="/logo.png" alt="Involtklima" width={280} height={77} className="object-contain h-20 w-auto" />
            </div>
            <div className="flex items-center gap-3">
              <a href="#" aria-label="Facebook" className="w-11 h-11 rounded-full border border-[rgba(33,150,243,0.3)] bg-white flex items-center justify-center text-[#1a2b49] hover:border-[#2196f3] hover:text-[#2196f3] transition-colors shadow-[0_3px_12px_rgba(33,150,243,0.08)]">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* 8 Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 pb-0">
            {[
              { Icon: PhoneCall,    label: 'Zavolajte nám kedykoľvek — radi poradíme.', value: '+421 910 954 262' },
              { Icon: Mail,         label: 'Všeobecné otázky a informácie.', value: 'info@involt.sk' },
              { Icon: Wrench,       label: 'Servisné požiadavky a objednávky.', value: 'involt@involt.sk' },
              { Icon: MapPin,       label: 'Navštívte nás osobne pre konzultáciu.', value: 'Kozárovce 763, 93522 Kozárovce' },
              { Icon: Headphones,   label: 'Kontaktná osoba pre všetky záležitosti.', value: 'Martin Hlavatý' },
              { Icon: ShieldCheck,  label: 'Fakturačné meno spoločnosti.', value: 'Involt s. r. o.' },
              { Icon: Thermometer,  label: 'Identifikačné číslo organizácie.', value: 'IČO: 56457227' },
              { Icon: CheckCircle2, label: 'Daňové identifikačné číslo.', value: 'DIČ: 2122313644' },
            ].map(({ Icon, label, value }, i) => (
              <motion.div key={i} {...fadeUp(i * 0.05)} className="glow-card p-8 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-white border-2 border-[rgba(33,150,243,0.2)] flex items-center justify-center shadow-[0_0_15px_rgba(33,150,243,0.15)] mb-5">
                  <Icon className="w-5 h-5 text-[#1a2b49] stroke-[1.5]" />
                </div>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">{label}</p>
                <p className="font-bold text-base text-[#2196f3]">{value}</p>
                <CardWave />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
