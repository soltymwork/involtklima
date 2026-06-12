import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Wrench, ShieldCheck, Thermometer, Wind, CheckCircle2, PhoneCall, Mail, MapPin, Headphones } from "lucide-react";

const CardWave = ({ className }: { className?: string }) => (
  <div className={`absolute bottom-0 left-0 w-full h-12 transition-colors duration-300 ${className}`}>
    <svg viewBox="0 0 100 25" preserveAspectRatio="none" className="w-full h-full fill-current">
      <path d="M0,15 C30,30 70,0 100,15 L100,25 L0,25 Z" />
    </svg>
  </div>
);

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen font-sans">
      {/* 1. Hero Section */}
      <section className="relative w-full h-[100vh] min-h-[700px] flex items-center justify-center pt-24 overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.jpg"
            fill
            alt="Hero Air Conditioning"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#0c1a2e]/60" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Stay Cool, Live Better<br />
            Energy-Efficient Cooling
          </h1>
          <p className="text-lg md:text-2xl font-medium mb-10 text-gray-200 lg:px-24">
            Upgrade your comfort with advanced cooling.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-[#0099ff] hover:bg-[#00ccff] transition-colors px-8 py-4 rounded font-bold text-white text-lg tracking-wide uppercase shadow-[0_0_20px_rgba(0,153,255,0.4)]"
          >
            Discover More
          </Link>
        </div>

        {/* Big Wavy Divider at bottom of hero */}
        <div className="absolute bottom-0 left-0 w-full z-20 translate-y-1">
          <svg viewBox="0 0 1440 80" className="w-full h-auto fill-white">
            <path d="M0,40 Q360,-40 720,40 T1440,40 V80 H0 Z" />
          </svg>
        </div>
      </section>

      {/* 2. Seamless Climate Control (Features) - White Cards with wavy bottom */}
      <section className="py-24 bg-white relative z-20 pb-0">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#122137] mb-4 tracking-tight">Seamless Climate Control for Your Comfort</h2>
          <p className="text-lg text-gray-600 mb-16 max-w-3xl mx-auto">
            Effortless cooling solutions tailored for ultimate comfort and efficiency.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Feature 1 */}
            <div className="bg-white hover:bg-[#0099ff] rounded-xl shadow-[0_0_40px_rgba(0,180,255,0.15)] hover:shadow-[0_0_40px_rgba(0,180,255,0.4)] px-8 pt-12 pb-16 relative overflow-hidden group border-none flex flex-col items-center transition-all duration-300 hover:-translate-y-2">
              <div className="mb-6 flex items-center justify-center relative z-10 text-black group-hover:text-white transition-colors duration-300">
                <svg className="w-14 h-14 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="6" width="18" height="8" rx="2" />
                  <path d="M7 14v4M17 14v4M12 14v6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#122137] group-hover:text-white transition-colors duration-300 relative z-10">Professional Consultation</h3>
              <p className="text-gray-500 group-hover:text-white/90 font-medium relative z-10 text-sm transition-colors duration-300">Get expert advice to choose the right cooling system for your space and needs.</p>
              <CardWave className="text-[#e6fafe] group-hover:text-white" />
            </div>

            {/* Feature 2 */}
            <div className="bg-white hover:bg-[#0099ff] rounded-xl shadow-[0_0_40px_rgba(0,180,255,0.15)] hover:shadow-[0_0_40px_rgba(0,180,255,0.4)] px-8 pt-12 pb-16 relative overflow-hidden group border-none flex flex-col items-center transition-all duration-300 hover:-translate-y-2">
              <div className="mb-6 flex items-center justify-center relative z-10 text-black group-hover:text-white transition-colors duration-300">
                <svg className="w-14 h-14 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="8" width="18" height="8" rx="2" />
                    <line x1="7" y1="12" x2="11" y2="12" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#122137] group-hover:text-white transition-colors duration-300 relative z-10">Customized Installation</h3>
              <p className="text-gray-500 group-hover:text-white/90 font-medium relative z-10 text-sm transition-colors duration-300">We design and install tailored air conditioning systems performance.</p>
              <CardWave className="text-[#e6fafe] group-hover:text-white" />
            </div>

            {/* Feature 3 */}
            <div className="bg-white hover:bg-[#0099ff] rounded-xl shadow-[0_0_40px_rgba(0,180,255,0.15)] hover:shadow-[0_0_40px_rgba(0,180,255,0.4)] px-8 pt-12 pb-16 relative overflow-hidden group border-none flex flex-col items-center transition-all duration-300 hover:-translate-y-2">
              <div className="mb-6 flex items-center justify-center relative z-10 text-black group-hover:text-white transition-colors duration-300">
                 <svg className="w-14 h-14 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="16" rx="2" />
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 8v8M8 12h8" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#122137] group-hover:text-white transition-colors duration-300 relative z-10">Smart Cooling Technology</h3>
              <p className="text-gray-500 group-hover:text-white/90 font-medium relative z-10 text-sm transition-colors duration-300">Enjoy the latest energy-efficient innovations with seamless automation.</p>
              <CardWave className="text-[#e6fafe] group-hover:text-white" />
            </div>

            {/* Feature 4 */}
            <div className="bg-white hover:bg-[#0099ff] rounded-xl shadow-[0_0_40px_rgba(0,180,255,0.15)] hover:shadow-[0_0_40px_rgba(0,180,255,0.4)] px-8 pt-12 pb-16 relative overflow-hidden group border-none flex flex-col items-center transition-all duration-300 hover:-translate-y-2">
              <div className="mb-6 flex items-center justify-center relative z-10 text-black group-hover:text-white transition-colors duration-300">
                 <svg className="w-14 h-14 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="6" width="16" height="10" rx="2" />
                  <path d="M7 16v3M17 16v3" />
                  <circle cx="12" cy="11" r="2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#122137] group-hover:text-white transition-colors duration-300 relative z-10">Ongoing Maintenance</h3>
              <p className="text-gray-500 group-hover:text-white/90 font-medium relative z-10 text-sm transition-colors duration-300">Ensure long-lasting performance with regular check-ups and expert servicing.</p>
              <CardWave className="text-[#e6fafe] group-hover:text-white" />
            </div>

          </div>
        </div>
      </section>

      {/* 3. About section (Cooling Solutions) */}
      <section className="py-32 relative bg-white">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative z-10 order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-bold text-[#122137] mb-6 leading-tight tracking-tight">Cooling Solutions for Ultimate Comfort</h2>
            <p className="text-[#122137]/80 mb-6 text-lg font-medium leading-relaxed">
              At Involtklima, we believe that air conditioning is more than just temperature control&mdash;it&apos;s about creating a comfortable, energy-efficient, and healthy environment. With cutting-edge HVAC technology and modern design, we offer superior climate control solutions for both residential and commercial spaces. Our commitment to excellence ensures that every installation delivers long-lasting performance, whisper-quiet operation, and optimal air quality.
            </p>
            <p className="text-[#122137]/80 mb-12 text-lg font-medium leading-relaxed">
              Our team of highly skilled professionals takes pride in providing personalized cooling solutions tailored to your unique needs. Whether you&apos;re looking for a sleek, wall-mounted AC unit for your home or an advanced climate control system for your business, Involtklima guarantees precision, reliability, and sustainability. Experience the future of air conditioning with state-of-the-art technology that keeps you cool, comfortable, and energy-efficient all year round.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <div className="flex items-center gap-5 p-5 rounded-2xl shadow-[0_0_30px_rgba(0,180,255,0.08)] bg-white w-full border border-sky-50 relative overflow-hidden group">
                <div className="w-16 h-16 shrink-0 bg-[#e6fafe] rounded-2xl flex items-center justify-center text-[#0099ff] shadow-[0_0_20px_rgba(0,180,255,0.2)] group-hover:scale-105 transition-transform">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 stroke-current fill-none stroke-2">
                    <rect x="2" y="5" width="20" height="14" rx="2" />
                    <line x1="2" y1="10" x2="22" y2="10" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1 text-[#122137]">Energy-Efficient Technology</h4>
                  <p className="text-sm font-medium text-gray-500">Enjoy efficient cooling with lower energy costs.</p>
                </div>
              </div>
              <div className="flex items-center gap-5 p-5 rounded-2xl shadow-[0_0_30px_rgba(0,180,255,0.08)] bg-white w-full border border-sky-50 relative overflow-hidden group">
                <div className="w-16 h-16 shrink-0 bg-[#e6fafe] rounded-2xl flex items-center justify-center text-[#0099ff] shadow-[0_0_20px_rgba(0,180,255,0.2)] group-hover:scale-105 transition-transform">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 stroke-current fill-none stroke-2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v4" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1 text-[#122137]">Expert Installation & Maintenance</h4>
                  <p className="text-sm font-medium text-gray-500">Reliable HVAC services for lasting performance and comfort.</p>
                </div>
              </div>
            </div>

            <Link
              href="/about"
              className="inline-block bg-[#0099ff] hover:bg-[#00ccff] transition-colors px-10 py-5 rounded font-bold text-white text-lg"
            >
              Discover More
            </Link>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px] md:h-[650px] w-full order-1 lg:order-2">
             <Image
                src="/cooling.jpg"
                fill
                alt="Cooling Solutions"
                className="object-cover relative z-10"
             />
             {/* Add a subtle blue glow behind the actual image by using container inset shadow */}
             <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,153,255,0.3)] z-20 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* 4. Services Slider (4 Photo Cards) */}
      <section className="py-20 relative bg-[#f1fbfe]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="bg-white rounded-xl overflow-hidden flex flex-col relative shadow-[0_0_35px_rgba(0,180,255,0.15)] group transition-all hover:-translate-y-1">
              <div className="h-[220px] relative w-full overflow-hidden">
                <Image src="https://picsum.photos/seed/hvac1/500/300" fill alt="HVAC Maintenance" className="object-cover transition-transform duration-700 group-hover:scale-105" unoptimized />
              </div>
              <div className="bg-gradient-to-b from-white via-white to-blue-50/50 p-8 pt-16 flex-grow text-center relative z-10 pb-20">
                <div className="absolute -top-[40px] left-1/2 -translate-x-1/2 w-[80px] h-[80px] bg-white rounded-full flex items-center justify-center shadow-[0_0_25px_rgba(0,180,255,0.4)] z-20">
                  <svg className="w-8 h-8 stroke-black" viewBox="0 0 24 24" fill="none" strokeWidth="1.2">
                    <rect x="3" y="10" width="18" height="8" rx="2" />
                    <path d="M12 4v4M8 6h8" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#122137]">HVAC Maintenance</h3>
                <p className="text-[#122137]/80 font-medium text-sm leading-relaxed mb-6">Regular servicing to ensure peak performance and longevity.</p>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[80%] pb-12 z-20 transition-transform group-hover:-translate-y-2">
                  <button className="bg-white text-[#122137] rounded font-bold px-6 py-3 w-full shadow-[0_0_20px_rgba(0,180,255,0.3)] hover:bg-[#0099ff] hover:text-white hover:shadow-[0_0_25px_rgba(0,180,255,0.6)] transition-all">
                    Book Service
                  </button>
                </div>
                <CardWave className="text-[#f1fbfe] h-8" />
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden flex flex-col relative shadow-[0_0_35px_rgba(0,180,255,0.15)] group transition-all hover:-translate-y-1">
              <div className="h-[220px] relative w-full overflow-hidden">
                <Image src="https://picsum.photos/seed/smartac/500/300" fill alt="Smart Climate Control" className="object-cover transition-transform duration-700 group-hover:scale-105" unoptimized />
              </div>
              <div className="bg-gradient-to-b from-white via-white to-blue-50/50 p-8 pt-16 flex-grow text-center relative z-10 pb-20">
                <div className="absolute -top-[40px] left-1/2 -translate-x-1/2 w-[80px] h-[80px] bg-white rounded-full flex items-center justify-center shadow-[0_0_25px_rgba(0,180,255,0.4)] z-20">
                  <Thermometer className="w-8 h-8 stroke-black" strokeWidth={1.2} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#122137]">Smart Climate Control</h3>
                <p className="text-[#122137]/80 font-medium text-sm leading-relaxed mb-6">Automated temperature control for ultimate comfort.</p>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[80%] pb-12 z-20 transition-transform group-hover:-translate-y-2">
                  <button className="bg-white text-[#122137] rounded font-bold px-6 py-3 w-full shadow-[0_0_20px_rgba(0,180,255,0.3)] hover:bg-[#0099ff] hover:text-white hover:shadow-[0_0_25px_rgba(0,180,255,0.6)] transition-all">
                    Discover More
                  </button>
                </div>
                <CardWave className="text-[#f1fbfe] h-8" />
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden flex flex-col relative shadow-[0_0_35px_rgba(0,180,255,0.15)] group transition-all hover:-translate-y-1">
              <div className="h-[220px] relative w-full overflow-hidden">
                <Image src="https://picsum.photos/seed/airq/500/300" fill alt="Air Quality" className="object-cover transition-transform duration-700 group-hover:scale-105" unoptimized />
              </div>
              <div className="bg-gradient-to-b from-white via-white to-blue-50/50 p-8 pt-16 flex-grow text-center relative z-10 pb-20">
                <div className="absolute -top-[40px] left-1/2 -translate-x-1/2 w-[80px] h-[80px] bg-white rounded-full flex items-center justify-center shadow-[0_0_25px_rgba(0,180,255,0.4)] z-20">
                   <svg className="w-8 h-8 stroke-black" viewBox="0 0 24 24" fill="none" strokeWidth="1.2">
                    <rect x="3" y="6" width="18" height="8" rx="2" />
                    <path d="M7 14v4M17 14v4M12 14v6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#122137]">Air Quality</h3>
                <p className="text-[#122137]/80 font-medium text-sm leading-relaxed mb-6">Advanced filtration for fresher and healthier air.</p>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[80%] pb-12 z-20 transition-transform group-hover:-translate-y-2">
                  <button className="bg-white text-[#122137] rounded font-bold px-6 py-3 w-full shadow-[0_0_20px_rgba(0,180,255,0.3)] hover:bg-[#0099ff] hover:text-white hover:shadow-[0_0_25px_rgba(0,180,255,0.6)] transition-all">
                    Enhance Air
                  </button>
                </div>
                <CardWave className="text-[#f1fbfe] h-8" />
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden flex flex-col relative shadow-[0_0_35px_rgba(0,180,255,0.15)] group transition-all hover:-translate-y-1">
              <div className="h-[220px] relative w-full overflow-hidden">
                <Image src="https://picsum.photos/seed/commerc/500/300" fill alt="Commercial Cooling" className="object-cover transition-transform duration-700 group-hover:scale-105" unoptimized />
              </div>
              <div className="bg-gradient-to-b from-white via-white to-blue-50/50 p-8 pt-16 flex-grow text-center relative z-10 pb-20">
                <div className="absolute -top-[40px] left-1/2 -translate-x-1/2 w-[80px] h-[80px] bg-white rounded-full flex items-center justify-center shadow-[0_0_25px_rgba(0,180,255,0.4)] z-20">
                  <svg className="w-8 h-8 stroke-black" viewBox="0 0 24 24" fill="none" strokeWidth="1.2">
                    <rect x="3" y="8" width="18" height="8" rx="2" />
                    <line x1="7" y1="12" x2="11" y2="12" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#122137]">Commercial Cooling</h3>
                <p className="text-[#122137]/80 font-medium text-sm leading-relaxed mb-6">Scalable solutions tailored for business environments.</p>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[80%] pb-12 z-20 transition-transform group-hover:-translate-y-2">
                  <button className="bg-white text-[#122137] rounded font-bold px-6 py-3 w-full shadow-[0_0_20px_rgba(0,180,255,0.3)] hover:bg-[#0099ff] hover:text-white hover:shadow-[0_0_25px_rgba(0,180,255,0.6)] transition-all">
                    Get a Quote
                  </button>
                </div>
                <CardWave className="text-[#f1fbfe] h-8" />
              </div>
            </div>

          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-12 gap-3 items-center">
            <div className="w-3 h-3 rounded-full bg-blue-200"></div>
            <div className="w-5 h-5 rounded-full border-2 border-[#0099ff] flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-[#0099ff]" />
            </div>
            <div className="w-3 h-3 rounded-full bg-blue-200"></div>
            <div className="w-3 h-3 rounded-full bg-blue-200"></div>
            <div className="w-3 h-3 rounded-full bg-blue-200"></div>
            <div className="w-3 h-3 rounded-full bg-blue-200"></div>
          </div>
        </div>
      </section>

      {/* 6. Blog Insights */}
      <section className="py-24 bg-[#f1fbfe] relative">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {[
              {
                title: 'Eco-Friendly Cooling',
                date: 'January 15, 2025',
                img: 'https://picsum.photos/seed/bl1/500/300',
                desc: 'Sustainable cooling solutions are becoming a priority as energy costs rise and environmental concerns [...]'
              },
              {
                title: 'HVAC Energy Ratings',
                date: 'January 13, 2025',
                img: 'https://picsum.photos/seed/bl2/500/300',
                desc: 'Understanding energy ratings helps homeowners choose the most efficient cooling systems. The Seasonal Energy [...]'
              },
              {
                title: 'AC Needs Repair',
                date: 'January 12, 2025',
                img: 'https://picsum.photos/seed/bl3/500/300',
                desc: 'Recognizing early warning signs of AC issues can prevent expensive breakdowns. If your system [...]'
              },
              {
                title: 'Summer AC Tips',
                date: 'January 10, 2025',
                img: 'https://picsum.photos/seed/bl4/500/300',
                desc: 'Keeping cool during the summer requires strategic AC usage to maximize comfort while reducing [...]'
              }
            ].map((post, i) => (
              <div key={i} className="bg-white flex flex-col rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,153,255,0.15)] group relative">
                <div className="absolute inset-0 shadow-[0_0_30px_rgba(0,153,255,0.3)] opacity-0 group-hover:opacity-100 transition-opacity z-0 border border-[#0099ff] rounded-xl pointer-events-none" />
                <div className="relative h-56 w-full overflow-hidden z-10 m-2 rounded-lg">
                   <Image src={post.img} fill alt={post.title} className="object-cover group-hover:scale-105 transition-transform duration-700" unoptimized />
                </div>
                <div className="p-8 text-center flex-grow flex flex-col z-10">
                  <h3 className="font-bold text-xl mb-4 text-[#122137]">{post.title}</h3>
                  <div className="text-sm font-medium text-gray-500 mb-6">{post.date}</div>
                  <p className="text-[#122137]/80 font-medium text-sm leading-relaxed">{post.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Footer Contact Cards (Grid of 8) */}
      <section className="py-24 bg-white relative z-10 border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
             {[
               { icon: PhoneCall, label: 'Reach out for expert support and assistance anytime.', value: '+123 456 78 90 01' },
               { icon: Mail, label: 'Have questions? Email us for prompt responses.', value: 'example@example.com' },
               { icon: Wrench, label: 'Get professional help for troubleshooting and maintenance.', value: 'example2@example.com' },
               { icon: MapPin, label: 'Stop by for in-person consultations and expert guidance.', value: 'New Jersey, USA' },
               { icon: Headphones, label: 'Collaborate with us for mutual growth and success.', value: 'example3@example.com' },
               { icon: ShieldCheck, label: 'Explore eco-friendly HVAC systems tailored for efficiency.', value: 'Sustainable Cooling' },
               { icon: Thermometer, label: 'Expert installation ensuring top performance and durability.', value: 'Seamless Setup' },
               { icon: CheckCircle2, label: 'Upgrade to intelligent climate control solutions for comfort.', value: 'Advanced Automation' },
             ].map((card, i) => (
               <div key={i} className="bg-white p-10 rounded-xl flex flex-col items-center text-center relative overflow-hidden group shadow-[0_0_30px_rgba(0,180,255,0.1)] hover:shadow-[0_0_35px_rgba(0,180,255,0.25)] transition-shadow">
                 <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center ring-[3px] ring-sky-100 shadow-[0_0_20px_rgba(0,180,255,0.3)] mb-6 relative z-10">
                    <card.icon className="w-6 h-6 text-[#122137] stroke-[1.5]" />
                 </div>
                 <p className="text-[#122137]/80 font-medium text-sm mb-6 flex-grow relative z-10 p-2">{card.label}</p>
                 <p className="font-bold text-lg text-[#122137] relative z-10">{card.value}</p>
                 <CardWave className="text-[#f1fbfe] opacity-80" />
               </div>
             ))}
          </div>
        </div>
      </section>

    </div>
  );
}
