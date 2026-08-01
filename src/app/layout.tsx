import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FooterWrapper from "@/components/layout/FooterWrapper";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "University of Rajshahi",
  description: "Official Webpage of Rajshahi University",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable,
      )}
    >
      <body
        className={`${inter.className} min-h-screen bg-background font-sans antialiased flex flex-col`}
      >
        {/* The Navbar will appear on every single page */}
        <Navbar />

        {/* The 'children' represents the content of whatever page route you are on */}
        <main className="flex-1 w-full">{children}</main>
        <FooterWrapper />
      </body>
    </html>
  );
}
