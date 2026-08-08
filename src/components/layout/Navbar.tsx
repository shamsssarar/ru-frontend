"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ThemeToggle from "./ThemeToggle.tsxThemeToggle";

const navLinks = [
  { title: "HOME", href: "/" },
  { title: "Governance", href: "/governance" },
  { title: "Administration", href: "/administration" },
  { title: "IQAC", href: "/iqac" },
  { title: "Library", href: "http://library.ru.ac.bd" },
  { title: "Academic", href: "/academic" },
  { title: "Facilities", href: "/facilities" },
  { title: "Publications", href: "/publications" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`left-0 w-full z-[999] transition-all duration-300 ease-in-out px-4 lg:px-0 ${
        isScrolled
          ? "fixed top-0 bg-[rgba(0,0,0,0.7)] shadow-lg h-[44px]"
          : "absolute top-0 h-[70px] pt-3 bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-full items-center justify-between max-w-[1140px]">
        {/* 1. Logo Section - Standard Left Aligned */}
        <div className="flex items-center h-full">
          <Link href="/" className="flex items-center">
            <div
              className={`relative transition-all duration-250 ease-in-out ${
                isScrolled
                  ? "w-[220px] h-[35px] lg:w-[240px] lg:h-[38px]"
                  : "w-[280px] h-[48px] lg:w-[280px] lg:h-[45px]"
              }`}
            >
              <Image
                src="/logo/ru-logo.png"
                alt="University of Rajshahi Logo"
                fill
                className="object-contain left-0"
                priority
              />
            </div>
          </Link>
        </div>

        {/* 2. Right Side Elements Group */}
        <div className="flex items-center justify-end h-full gap-3 lg:gap-6 shrink-0">
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-4 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className={`font-roboto font-semibold text-white dark:text-slate-200 transition-colors duration-300 ease-in duration-250 hover:text-gray-300 uppercase whitespace-nowrap drop-shadow-md ${
                  isScrolled ? "text-[12px]" : "text-[13px]"
                }`}
              >
                {link.title}
              </Link>
            ))}
          </nav>

          {/* Theme Toggle (Visible Everywhere) */}
          <ThemeToggle />

          {/* Mobile Navigation Toggle (Visible on Mobile Only) */}
          <div className="lg:hidden flex items-center h-full" ref={dropdownRef}>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="shrink-0 flex items-center justify-center p-1.5 hover:bg-black/20 dark:hover:bg-slate-800 rounded-md transition-colors duration-300 text-white dark:text-slate-200"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X
                  className={`transition-all duration-300 ${isScrolled ? "h-5 w-5" : "h-6 w-6"}`}
                />
              ) : (
                <Menu
                  className={`transition-all duration-300 ${isScrolled ? "h-5 w-5" : "h-6 w-6"}`}
                />
              )}
            </button>

            {/* Floating Dropdown Card */}
            <div
              className={`absolute top-[100%] left-0 right-0 mt-2 bg-blue-50 dark:bg-slate-800 shadow-[0px_8px_30px_rgba(0,0,0,0.12)] overflow-hidden transition-all duration-300 ease-in-out origin-top rounded-b-md ${
                isMobileMenuOpen
                  ? "opacity-100 scale-y-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 scale-y-95 -translate-y-2 pointer-events-none"
              }`}
            >
              <nav className="flex flex-col py-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-[18px] font-roboto font-bold text-[#333333] dark:text-slate-200 hover:text-[#002147] dark:hover:text-[#6EC1E4] hover:bg-gray-200 dark:hover:bg-slate-800 px-6 py-3.5 uppercase text-center transition-colors duration-300"
                  >
                    {link.title}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
