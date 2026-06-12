import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-6">
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500 font-medium">
          &copy; {new Date().getFullYear()} Involtklima. Všetky práva vyhradené.
        </p>
        <div className="flex items-center gap-6 text-sm font-medium text-gray-500">
          <Link href="/" className="hover:text-[#2196f3] transition-colors">Domov</Link>
          <Link href="/services" className="hover:text-[#2196f3] transition-colors">Služby</Link>
          <Link href="/about" className="hover:text-[#2196f3] transition-colors">O nás</Link>
          <Link href="/contact" className="hover:text-[#2196f3] transition-colors">Kontakt</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
