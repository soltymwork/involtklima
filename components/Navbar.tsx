'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled || isOpen ? 'bg-white text-dark shadow-md py-4' : 'bg-transparent text-white py-6'} px-6 md:px-12`}>
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 relative z-50" onClick={() => setIsOpen(false)}>
          <svg width="40" height="40" viewBox="0 0 100 100" className="flex-shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="100" height="100" rx="20" className="fill-[#35bdfa]" />
            <path d="M20 40H60A15 15 0 0 1 60 70H40" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M20 55H75" stroke="white" strokeWidth="8" strokeLinecap="round" />
            <path d="M20 70H50" stroke="white" strokeWidth="8" strokeLinecap="round" />
          </svg>
          <span className="font-sans font-bold text-3xl tracking-tight uppercase">Involtklima</span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-10 font-bold text-sm tracking-wide uppercase relative z-50">
          <li>
            <Link href="/" className="pb-1 border-b-2 border-primary">Home</Link>
          </li>
          <li className="relative group cursor-pointer">
            <div className="flex items-center gap-1 transition-colors hover:text-primary">
              About 
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </li>
          <li className="relative group cursor-pointer">
            <div className="flex items-center gap-1 transition-colors hover:text-primary">
              Services
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </li>
          <li className="relative group cursor-pointer">
            <div className="flex items-center gap-1 transition-colors hover:text-primary">
              Blog
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </li>
          <li>
            <Link href="/contact" className="transition-colors hover:text-primary">Contact</Link>
          </li>
        </ul>

        {/* Right Actions */}
        <div className="flex items-center gap-6 relative z-50">
          <div className="hidden md:flex items-center gap-3">
            <div className="w-12 h-12 flex items-center justify-center relative">
              <svg viewBox="0 0 24 24" className="w-10 h-10 absolute animate-[spin_8s_linear_infinite]" fill="none">
                <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="opacity-50" />
                <path d="M12 2v2M12 20v2M2 12h2M20 12h2" stroke="currentColor" strokeWidth="1" />
              </svg>
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                 <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <span className="font-sans font-bold text-lg tracking-tight">+123 456 789 10</span>
          </div>
          
          <button type="button" className="lg:hidden p-2 rounded-md hover:bg-gray-100/20 transition-colors pointer-events-auto" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className={`w-8 h-8 ${scrolled || isOpen ? 'text-[#122137]' : 'text-white'}`} /> : <Menu className={`w-8 h-8 ${scrolled ? 'text-[#122137]' : 'text-white'}`} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col pt-32 px-6 h-screen w-screen border-t border-gray-100">
          <ul className="flex flex-col gap-8 text-dark font-bold text-3xl uppercase tracking-tight">
            <li><Link href="/" onClick={() => setIsOpen(false)} className="border-b-4 border-primary inline-block pb-2">Home</Link></li>
            <li><Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">About</Link></li>
            <li><Link href="/services" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">Services</Link></li>
            <li><Link href="/blog" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">Blog</Link></li>
            <li><Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
