'use client';
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Facebook, Instagram, Twitter, Youtube, PhoneCall, Mail, Wrench, MapPin, Headphones, ShieldCheck, Thermometer, CheckCircle2 } from "lucide-react";

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
          <Image src="/hero.jpg" fill alt="Hero Air Conditioning" className="object-cover" priority />
          <div className="absolute inset-0 bg-[#0c1a2e]/55" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto text-white">
          <motion.h1 {...fadeUp(0)} className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Stay Cool, Live Better<br />Energy-Efficient Cooling
          </motion.h1>
          <motion.p {...fadeUp(0.1)} className="text-lg md:text-xl font-normal mb-10 text-gray-200">
            Upgrade your comfort with advanced cooling.
          </motion.p>
          <motion.div {...fadeUp(0.2)}>
            <Link
              href="/services"
              className="inline-block bg-[#2196f3] hover:bg-[#1976d2] transition-colors px-10 py-4 font-bold text-white text-base tracking-wide uppercase"
            >
              Discover More
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
        <div className="absolute bottom-0 left-0 w-full z-20 translate-y-1">
          <svg viewBox="0 0 1440 80" className="w-full h-auto fill-white">
            <path d="M0,40 Q360,-40 720,40 T1440,40 V80 H0 Z" />
          </svg>
        </div>
      </section>

      {/* ── 2. FEATURES ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2 {...fadeUp(0)} className="text-4xl md:text-5xl font-bold text-[#1a2b49] mb-4">
            Seamless Climate Control for Your Comfort
          </motion.h2>
          <motion.p {...fadeUp(0.05)} className="text-gray-500 mb-14 max-w-2xl mx-auto text-base">
            Effortless cooling solutions tailored for ultimate comfort and efficiency.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Card 1 */}
            <motion.div {...fadeUp(0.1)} className="rounded-2xl px-7 pt-10 pb-16 relative overflow-hidden flex flex-col items-center border border-[rgba(33,150,243,0.3)] shadow-[0_0_40px_rgba(33,150,243,0.15)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_50px_rgba(33,150,243,0.3)]" style={{background:'radial-gradient(ellipse at 0% 0%,rgba(33,150,243,0.13) 0%,transparent 55%),radial-gradient(ellipse at 100% 0%,rgba(33,150,243,0.13) 0%,transparent 55%),white'}}>
              <div className="mb-6 text-[#1a2b49]">
                {/* Indoor AC wall unit with drip marks */}
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
              <h3 className="text-lg font-bold mb-3 text-[#1a2b49]">Professional Consultation</h3>
              <p className="text-gray-500 text-sm leading-relaxed text-center">Get expert advice to choose the right cooling system for your space and needs.</p>
              <div className="absolute bottom-0 left-0 w-full h-10 text-white">
                <svg viewBox="0 0 100 25" preserveAspectRatio="none" className="w-full h-full fill-current"><path d="M0,15 C30,30 70,0 100,15 L100,25 L0,25 Z"/></svg>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div {...fadeUp(0.15)} className="rounded-2xl px-7 pt-10 pb-16 relative overflow-hidden flex flex-col items-center border border-[rgba(33,150,243,0.3)] shadow-[0_0_40px_rgba(33,150,243,0.15)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_50px_rgba(33,150,243,0.3)]" style={{background:'radial-gradient(ellipse at 0% 0%,rgba(33,150,243,0.13) 0%,transparent 55%),radial-gradient(ellipse at 100% 0%,rgba(33,150,243,0.13) 0%,transparent 55%),white'}}>
              <div className="mb-6 text-[#1a2b49]">
                {/* Split AC unit with air flow lines */}
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
              <h3 className="text-lg font-bold mb-3 text-[#1a2b49]">Customized Installation</h3>
              <p className="text-gray-500 text-sm leading-relaxed text-center">We design and install tailored air conditioning systems for optimal performance.</p>
              <div className="absolute bottom-0 left-0 w-full h-10 text-white">
                <svg viewBox="0 0 100 25" preserveAspectRatio="none" className="w-full h-full fill-current"><path d="M0,15 C30,30 70,0 100,15 L100,25 L0,25 Z"/></svg>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div {...fadeUp(0.2)} className="rounded-2xl px-7 pt-10 pb-16 relative overflow-hidden flex flex-col items-center border border-[rgba(33,150,243,0.3)] shadow-[0_0_40px_rgba(33,150,243,0.15)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_50px_rgba(33,150,243,0.3)]" style={{background:'radial-gradient(ellipse at 0% 0%,rgba(33,150,243,0.13) 0%,transparent 55%),radial-gradient(ellipse at 100% 0%,rgba(33,150,243,0.13) 0%,transparent 55%),white'}}>
              <div className="mb-6 text-[#1a2b49]">
                {/* Box/portable AC with circular fan */}
                <svg className="w-14 h-14 stroke-current" viewBox="0 0 56 56" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="8" y="10" width="40" height="36" rx="3"/>
                  <circle cx="28" cy="28" r="10"/>
                  <circle cx="28" cy="28" r="4"/>
                  <line x1="28" y1="18" x2="28" y2="24"/>
                  <line x1="28" y1="32" x2="28" y2="38"/>
                  <line x1="18" y1="28" x2="24" y2="28"/>
                  <line x1="32" y1="28" x2="38" y2="28"/>
                  <line x1="21" y1="21" x2="25.2" y2="25.2"/>
                  <line x1="30.8" y1="30.8" x2="35" y2="35"/>
                  <line x1="35" y1="21" x2="30.8" y2="25.2"/>
                  <line x1="25.2" y1="30.8" x2="21" y2="35"/>
                  <line x1="12" y1="13" x2="16" y2="13"/>
                  <line x1="12" y1="16" x2="16" y2="16"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3 text-[#1a2b49]">Smart Cooling Technology</h3>
              <p className="text-gray-500 text-sm leading-relaxed text-center">Enjoy the latest energy-efficient innovations with seamless automation.</p>
              <div className="absolute bottom-0 left-0 w-full h-10 text-white">
                <svg viewBox="0 0 100 25" preserveAspectRatio="none" className="w-full h-full fill-current"><path d="M0,15 C30,30 70,0 100,15 L100,25 L0,25 Z"/></svg>
              </div>
            </motion.div>

            {/* Card 4 */}
            <motion.div {...fadeUp(0.25)} className="rounded-2xl px-7 pt-10 pb-16 relative overflow-hidden flex flex-col items-center border border-[rgba(33,150,243,0.3)] shadow-[0_0_40px_rgba(33,150,243,0.15)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_50px_rgba(33,150,243,0.3)]" style={{background:'radial-gradient(ellipse at 0% 0%,rgba(33,150,243,0.13) 0%,transparent 55%),radial-gradient(ellipse at 100% 0%,rgba(33,150,243,0.13) 0%,transparent 55%),white'}}>
              <div className="mb-6 text-[#1a2b49]">
                {/* Tools + AC workbench */}
                <svg className="w-14 h-14 stroke-current" viewBox="0 0 56 56" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="8" y="36" width="40" height="10" rx="2"/>
                  <line x1="8" y1="36" x2="48" y2="36"/>
                  <path d="M18 36 L18 28 M18 28 Q18 22 14 22 Q10 22 10 26 Q10 30 14 30 L18 30"/>
                  <path d="M38 36 L38 26 L34 22 M34 22 L42 22 M42 22 L42 26 L38 26"/>
                  <path d="M26 36 L26 24 Q26 18 28 18 Q30 18 30 24 L30 36"/>
                  <line x1="14" y1="40" x2="14" y2="40"/>
                  <line x1="28" y1="40" x2="28" y2="40"/>
                  <line x1="42" y1="40" x2="42" y2="40"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3 text-[#1a2b49]">Ongoing Maintenance</h3>
              <p className="text-gray-500 text-sm leading-relaxed text-center">Ensure long-lasting performance with regular check-ups and expert servicing.</p>
              <div className="absolute bottom-0 left-0 w-full h-10 text-white">
                <svg viewBox="0 0 100 25" preserveAspectRatio="none" className="w-full h-full fill-current"><path d="M0,15 C30,30 70,0 100,15 L100,25 L0,25 Z"/></svg>
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
              Cooling Solutions for Ultimate Comfort
            </h2>
            <p className="text-gray-500 mb-5 text-base leading-relaxed">
              At Involtklima, we believe that air conditioning is more than just temperature control&mdash;it&apos;s about creating a comfortable, energy-efficient, and healthy environment. With cutting-edge HVAC technology and modern design, we offer superior climate control solutions for both residential and commercial spaces.
            </p>
            <p className="text-gray-500 mb-10 text-base leading-relaxed">
              Our team of highly skilled professionals takes pride in providing personalized cooling solutions tailored to your unique needs. Whether you&apos;re looking for a sleek, wall-mounted AC unit for your home or an advanced climate control system for your business, Involtklima guarantees precision, reliability, and sustainability.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mb-10">
              <div className="flex items-center gap-4 p-5 rounded-xl card-airvana w-full">
                <div className="w-14 h-14 shrink-0 bg-[#2196f3] rounded-xl flex items-center justify-center shadow-[0_5px_15px_rgba(33,150,243,0.4)]">
                  <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-white fill-none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="5" width="20" height="14" rx="2"/>
                    <line x1="2" y1="10" x2="22" y2="10"/>
                    <path d="M6 14h4"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-base text-[#2196f3] mb-0.5">Energy-Efficient Technology</h4>
                  <p className="text-sm text-gray-500">Enjoy efficient cooling with lower energy costs.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-5 rounded-xl card-airvana w-full">
                <div className="w-14 h-14 shrink-0 bg-[#2196f3] rounded-xl flex items-center justify-center shadow-[0_5px_15px_rgba(33,150,243,0.4)]">
                  <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-white fill-none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-base text-[#2196f3] mb-0.5">Expert Installation &amp; Maintenance</h4>
                  <p className="text-sm text-gray-500">Reliable HVAC services for lasting performance.</p>
                </div>
              </div>
            </div>

            <Link href="/about" className="inline-block bg-[#2196f3] hover:bg-[#1976d2] transition-colors px-10 py-4 font-bold text-white text-base uppercase tracking-wide">
              Discover More
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
                img: 'https://picsum.photos/seed/smartac/500/300',
                icon: <svg className="w-7 h-7 stroke-[#2196f3]" viewBox="0 0 24 24" fill="none" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a4 4 0 0 1 4 4v2H8V6a4 4 0 0 1 4-4z"/><rect x="4" y="8" width="16" height="10" rx="2"/><line x1="8" y1="13" x2="10" y2="13"/><line x1="14" y1="13" x2="16" y2="13"/></svg>,
                title: 'Smart Climate Control',
                desc: 'Automated temperature control for ultimate comfort.',
                btn: 'Discover More',
              },
              {
                img: 'https://picsum.photos/seed/airq/500/300',
                icon: <svg className="w-7 h-7 stroke-[#2196f3]" viewBox="0 0 24 24" fill="none" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8 12c1-2 3-3 4-3s3 1 4 3"/><path d="M12 9v3"/></svg>,
                title: 'Air Quality',
                desc: 'Advanced filtration for fresher and healthier air.',
                btn: 'Enhance Air',
              },
              {
                img: 'https://picsum.photos/seed/commerc/500/300',
                icon: <svg className="w-7 h-7 stroke-[#2196f3]" viewBox="0 0 24 24" fill="none" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="10" rx="2"/><path d="M6 11h4M16 11h2"/><path d="M6 17v3M18 17v3"/></svg>,
                title: 'Commercial Cooling',
                desc: 'Scalable solutions tailored for business environments.',
                btn: 'Get a Quote',
              },
              {
                img: 'https://picsum.photos/seed/eco1/500/300',
                icon: <svg className="w-7 h-7 stroke-[#2196f3]" viewBox="0 0 24 24" fill="none" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22V12M12 12C12 7 17 3 22 3c0 5-3 9-10 9zM12 12C12 7 7 3 2 3c0 5 3 9 10 9z"/></svg>,
                title: 'Energy-Efficient Solutions',
                desc: 'Reduce energy costs with eco-friendly cooling technology.',
                btn: 'Go Green',
              },
            ].map((s, i) => (
              <motion.div key={i} {...fadeUp(i * 0.08)} className="bg-white rounded-2xl overflow-hidden shadow-[0_5px_25px_rgba(33,150,243,0.1)] hover:shadow-[0_10px_40px_rgba(33,150,243,0.2)] transition-all duration-300 hover:-translate-y-1 group relative flex flex-col">
                {/* Image inset */}
                <div className="m-2 rounded-xl overflow-hidden h-52 relative">
                  <Image src={s.img} fill alt={s.title} className="object-cover group-hover:scale-105 transition-transform duration-700" unoptimized />
                </div>
                {/* Floating icon badge */}
                <div className="absolute left-1/2 -translate-x-1/2 w-[72px] h-[72px] bg-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(33,150,243,0.3)] border border-[rgba(33,150,243,0.15)] z-10" style={{ top: 'calc(0.5rem + 208px - 36px)' }}>
                  {s.icon}
                </div>
                <div className="pt-12 pb-8 px-6 text-center flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3 text-[#1a2b49]">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">{s.desc}</p>
                  <button className="border border-[rgba(33,150,243,0.35)] text-[#1a2b49] rounded font-semibold px-5 py-2.5 hover:bg-[#2196f3] hover:text-white hover:border-[#2196f3] transition-all text-sm">
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
            Trusted Brands for Superior Cooling
          </motion.h2>
          <motion.p {...fadeUp(0.05)} className="text-gray-500 text-base mb-6">
            Partnering with top brands for reliable and efficient cooling solutions.
          </motion.p>
          <SectionDivider />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mt-10">
            {[
              { name: 'SAMSUNG', style: 'font-black text-[#1a2b49] text-xl tracking-wider' },
              { name: 'DAIKIN', style: 'font-black text-[#0060af] text-xl tracking-widest' },
              { name: 'SIEMENS', style: 'font-bold text-[#009999] text-xl tracking-wide' },
              { name: 'FUJITSU', style: 'font-black text-[#1a2b49] text-xl tracking-widest' },
              { name: 'MITSUBISHI', style: 'font-black text-[#e60012] text-lg tracking-tight' },
              { name: 'BOSCH', style: 'font-black text-[#e20015] text-xl tracking-wider' },
            ].map((brand, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.07)}
                className="bg-white border border-gray-100 rounded-2xl shadow-[0_3px_20px_rgba(0,0,0,0.07)] hover:shadow-[0_5px_30px_rgba(33,150,243,0.15)] transition-all duration-300 hover:-translate-y-1 py-8 px-4 flex items-center justify-center"
              >
                <span className={brand.style}>{brand.name}</span>
              </motion.div>
            ))}
          </div>

          {/* Technician icon */}
          <motion.div {...fadeUp(0.1)} className="flex justify-center mt-10">
            <svg viewBox="0 0 80 80" className="w-20 h-20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="40" cy="18" r="10" stroke="#2196f3" strokeWidth="2.5"/>
              <path d="M20 70c0-11 9-20 20-20s20 9 20 20" stroke="#2196f3" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M50 42l8-8M48 50h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2H48" stroke="#2196f3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M48 38v12" stroke="#2196f3" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="56" cy="46" r="2" fill="#2196f3"/>
            </svg>
          </motion.div>
        </div>
      </section>

      {/* ── 6. BLOG ── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <motion.div {...fadeUp(0)} className="text-center mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2b49] mb-3">
              Stay Informed with Expert Insights
            </h2>
            <p className="text-gray-500 text-base">
              Explore the latest trends and tips in air conditioning and climate control.
            </p>
          </motion.div>
          <SectionDivider />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-12">
            {[
              { title: 'Eco-Friendly Cooling', date: 'January 15, 2025', img: 'https://picsum.photos/seed/bl1/500/300', desc: 'Sustainable cooling solutions are becoming a priority as energy costs rise and environmental concerns grow.' },
              { title: 'HVAC Energy Ratings', date: 'January 13, 2025', img: 'https://picsum.photos/seed/bl2/500/300', desc: 'Understanding energy ratings helps homeowners choose the most efficient cooling systems available today.' },
              { title: 'AC Needs Repair', date: 'January 12, 2025', img: 'https://picsum.photos/seed/bl3/500/300', desc: 'Recognizing early warning signs of AC issues can prevent expensive breakdowns and extend unit lifespan.' },
              { title: 'Summer AC Tips', date: 'January 10, 2025', img: 'https://picsum.photos/seed/bl4/500/300', desc: 'Keeping cool during the summer requires strategic AC usage to maximize comfort while reducing costs.' },
            ].map((post, i) => (
              <motion.div key={i} {...fadeUp(i * 0.08)} className="bg-white rounded-2xl overflow-hidden shadow-[0_5px_25px_rgba(33,150,243,0.08)] hover:shadow-[0_10px_35px_rgba(33,150,243,0.18)] transition-all duration-300 hover:-translate-y-1 group flex flex-col">
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
            <div className="flex items-center gap-3 mb-6">
              <svg width="48" height="48" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="22" cy="22" r="21" stroke="#2196f3" strokeWidth="2"/>
                <path d="M11 17 C14.5 13.5 18 13.5 22 17 C26 20.5 29.5 20.5 33 17" stroke="#2196f3" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
                <path d="M11 22 C14.5 18.5 18 18.5 22 22 C26 25.5 29.5 25.5 33 22" stroke="#2196f3" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
                <path d="M11 27 C14.5 23.5 18 23.5 22 27 C26 30.5 29.5 30.5 33 27" stroke="#2196f3" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
              </svg>
              <span className="font-bold text-2xl text-[#1a2b49] uppercase tracking-tight">Involtklima</span>
            </div>
            <div className="flex items-center gap-3">
              {[
                { Icon: Facebook, label: 'Facebook' },
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Twitter, label: 'Twitter' },
                { Icon: Youtube, label: 'YouTube' },
              ].map(({ Icon, label }) => (
                <a key={label} href="#" aria-label={label} className="w-11 h-11 rounded-full border border-[rgba(33,150,243,0.3)] bg-white flex items-center justify-center text-[#1a2b49] hover:border-[#2196f3] hover:text-[#2196f3] transition-colors shadow-[0_3px_12px_rgba(33,150,243,0.08)]">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* 8 Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 pb-0">
            {[
              { Icon: PhoneCall,    label: 'Reach out for expert support and assistance anytime.', value: '+123 456 78 90 01' },
              { Icon: Mail,         label: 'Have questions? Email us for prompt responses.', value: 'info@involtklima.sk' },
              { Icon: Wrench,       label: 'Get professional help for troubleshooting and maintenance.', value: 'servis@involtklima.sk' },
              { Icon: MapPin,       label: 'Stop by for in-person consultations and expert guidance.', value: 'Bratislava, Slovakia' },
              { Icon: Headphones,   label: 'Collaborate with us for mutual growth and success.', value: 'partner@involtklima.sk' },
              { Icon: ShieldCheck,  label: 'Explore eco-friendly HVAC systems tailored for efficiency.', value: 'Sustainable Cooling' },
              { Icon: Thermometer,  label: 'Expert installation ensuring top performance and durability.', value: 'Seamless Setup' },
              { Icon: CheckCircle2, label: 'Upgrade to intelligent climate control solutions for comfort.', value: 'Advanced Automation' },
            ].map(({ Icon, label, value }, i) => (
              <motion.div key={i} {...fadeUp(i * 0.05)} className="bg-white rounded-xl p-8 flex flex-col items-center text-center relative overflow-hidden shadow-[0_3px_20px_rgba(33,150,243,0.07)] hover:shadow-[0_8px_30px_rgba(33,150,243,0.18)] transition-all duration-300">
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
