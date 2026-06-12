'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkCls = scrolled || isOpen ? 'text-[#1a2b49]' : 'text-white';
  const activeLinkCls = 'border-b-2 border-[#2196f3]';

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled || isOpen ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'} px-6 md:px-12`}>
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 relative z-50" onClick={() => setIsOpen(false)}>
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
            <circle cx="22" cy="22" r="21" stroke="#2196f3" strokeWidth="2"/>
            <path d="M11 17 C14.5 13.5 18 13.5 22 17 C26 20.5 29.5 20.5 33 17" stroke="#2196f3" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
            <path d="M11 22 C14.5 18.5 18 18.5 22 22 C26 25.5 29.5 25.5 33 22" stroke="#2196f3" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
            <path d="M11 27 C14.5 23.5 18 23.5 22 27 C26 30.5 29.5 30.5 33 27" stroke="#2196f3" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
          </svg>
          <span className={`font-bold text-2xl tracking-tight uppercase ${linkCls} transition-colors duration-300`}>Involtklima</span>
        </Link>

        {/* Desktop Links */}
        <ul className={`hidden lg:flex items-center gap-8 font-semibold text-sm tracking-wide uppercase ${linkCls} transition-colors duration-300`}>
          <li>
            <Link href="/" className={`pb-1 ${activeLinkCls}`}>Home</Link>
          </li>
          <li className="relative group cursor-pointer flex items-center gap-1 hover:text-[#2196f3] transition-colors">
            About
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </li>
          <li className="relative group cursor-pointer flex items-center gap-1 hover:text-[#2196f3] transition-colors">
            Services
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </li>
          <li className="relative group cursor-pointer flex items-center gap-1 hover:text-[#2196f3] transition-colors">
            Blog
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </li>
          <li>
            <Link href="/contact" className="hover:text-[#2196f3] transition-colors">Contact</Link>
          </li>
        </ul>

        {/* Right: hamburger + spinning phone */}
        <div className="flex items-center gap-5 relative z-50">
          {/* Spinning gear phone */}
          <div className="hidden md:flex items-center gap-3">
            <div className="w-11 h-11 flex items-center justify-center relative">
              <svg viewBox="0 0 44 44" className="w-11 h-11 absolute animate-[spin_8s_linear_infinite]" fill="none">
                <circle cx="22" cy="22" r="20" stroke="currentColor" strokeWidth="1" strokeDasharray="5 4" className={`${linkCls} opacity-40 transition-colors duration-300`}/>
                <path d="M22 2v3M22 39v3M2 22h3M39 22h3" stroke="currentColor" strokeWidth="1" className={`${linkCls} opacity-40 transition-colors duration-300`}/>
              </svg>
              <svg viewBox="0 0 24 24" className={`w-5 h-5 fill-none stroke-current ${linkCls} transition-colors duration-300`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <span className={`font-bold text-base tracking-tight ${linkCls} transition-colors duration-300`}>+123 456 789 10</span>
          </div>

          {/* Hamburger */}
          <button
            type="button"
            className={`flex flex-col justify-center items-center gap-[5px] w-8 h-8 ${linkCls} transition-colors duration-300`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col pt-28 px-8 h-screen w-screen">
          <ul className="flex flex-col gap-7 text-[#1a2b49] font-bold text-2xl uppercase tracking-tight">
            <li><Link href="/" onClick={() => setIsOpen(false)} className="border-b-2 border-[#2196f3] inline-block pb-1">Home</Link></li>
            <li><Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-[#2196f3] transition-colors">About</Link></li>
            <li><Link href="/services" onClick={() => setIsOpen(false)} className="hover:text-[#2196f3] transition-colors">Services</Link></li>
            <li><Link href="/blog" onClick={() => setIsOpen(false)} className="hover:text-[#2196f3] transition-colors">Blog</Link></li>
            <li><Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-[#2196f3] transition-colors">Contact</Link></li>
          </ul>
          <div className="mt-10 flex items-center gap-3">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-[#1a2b49]" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <span className="font-bold text-lg text-[#1a2b49]">+123 456 789 10</span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
