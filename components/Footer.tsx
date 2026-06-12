import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#f0f9ff]/20 py-12 flex flex-col items-center overflow-hidden">
      <div className="flex items-center gap-4 mb-16 relative z-10">
        <a href="#" className="w-12 h-12 rounded-full border-2 border-sky-200 text-[#122137] bg-white flex items-center justify-center hover:border-primary hover:text-primary transition-colors shadow-[0_5px_15px_rgba(0,153,255,0.1)]">
          <Facebook className="w-5 h-5" />
        </a>
        <a href="#" className="w-12 h-12 rounded-full border-2 border-sky-200 text-[#122137] bg-white flex items-center justify-center hover:border-primary hover:text-primary transition-colors shadow-[0_5px_15px_rgba(0,153,255,0.1)]">
          <Instagram className="w-5 h-5" />
        </a>
        <a href="#" className="w-12 h-12 rounded-full border-2 border-sky-200 text-[#122137] bg-white flex items-center justify-center hover:border-primary hover:text-primary transition-colors shadow-[0_5px_15px_rgba(0,153,255,0.1)]">
          <Twitter className="w-5 h-5" />
        </a>
        <a href="#" className="w-12 h-12 rounded-full border-2 border-sky-200 text-[#122137] bg-white flex items-center justify-center hover:border-primary hover:text-primary transition-colors shadow-[0_5px_15px_rgba(0,153,255,0.1)]">
          <Youtube className="w-5 h-5" />
        </a>
      </div>
      
      <div className="w-full relative flex justify-center items-center">
        <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-[#0099ff]/50 to-transparent" />
        <p className="text-[#122137] text-sm font-medium bg-[#fcfdfe] px-4 relative z-10">
          &copy; {new Date().getFullYear()} Involtklima - All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
