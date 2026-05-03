import type { Metadata } from "next";
import "./globals.css";

import { inter } from "@/app/lib/fonts";
import NavBar from "@/app/ui/navbar";

import Footer from "./ui/footer";

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
    <html lang="en" className={`h-full ${inter.className}`}>
      <body className="flex flex-col items-center bg-background dark:bg-dark-background min-h-full">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
