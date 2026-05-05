import type { Metadata } from "next";
import './globals.css';

import { inter } from '@/app/lib/fonts';
import NavBar from '@/app/ui/navbar';
import { Analytics } from '@vercel/analytics/next';

import Footer from './ui/footer';

export const metadata: Metadata = {
  title: {
    template: "%s | Solomon Hackett Portfolio",
    default: "Solomon Hackett Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <body>
        <NavBar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
