import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { BackToTop } from '@/components/back-to-top';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FutureRank - Next Generation SEO & Digital Marketing Agency',
  description: 'Transform your digital presence with our cutting-edge SEO, SMM, ASO, and digital marketing solutions. Powered by advanced AI and data-driven strategies.',
  keywords: 'SEO agency, digital marketing, social media marketing, app store optimization, video SEO, content writing, lead generation',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <div className="relative min-h-screen">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]" />
            <Navbar />
            <main className="relative max-w-screen-xl mx-auto">{children}</main>
            <BackToTop />
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}