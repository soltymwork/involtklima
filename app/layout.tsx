import type { Metadata } from 'next';
import { Outfit, Kodchasan } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });
const kodchasan = Kodchasan({ subsets: ['latin'], weight: ['400', '600', '700'], variable: '--font-kodchasan' });

export const metadata: Metadata = {
  title: 'Involtklima | Klimatizačné služby a montáž',
  description: 'Profesionálne klimatizačné riešenia, montáž a servis pre domácnosti aj firmy. Involtklima – váš spoľahlivý partner v chladení.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sk">
      <body className={`${outfit.variable} ${kodchasan.variable} font-sans antialiased text-[#1a2b49] bg-white overflow-x-clip`} style={{ fontFamily: 'var(--font-outfit), Outfit, sans-serif' }} suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <div className="fixed bottom-5 right-5 z-[9999] bg-[#1a2b49] text-white text-xs font-semibold px-4 py-2.5 rounded-full shadow-lg opacity-80 pointer-events-none select-none tracking-wide">
          Vizuálny návrh
        </div>
      </body>
    </html>
  );
}
