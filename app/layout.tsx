import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-jakarta' });

export const metadata: Metadata = {
  title: 'Involtklima | Klimatizačné služby a montáž',
  description: 'Profesionálne klimatizačné riešenia, montáž a servis pre domácnosti aj firmy. Involtklima – váš spoľahlivý partner v chladení.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sk">
      <body className={`${outfit.variable} font-sans antialiased text-[#1a2b49] bg-white`} suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
