"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { title: "HOME", href: "/" },
  { title: "Governance", href: "/governance" },
  { title: "Administration", href: "/administration" },
  { title: "IQAC", href: "/iqac" },
  { title: "Library", href: "http://library.ru.ac.bd" },
  { title: "Academic", href: "/academic" },
  { title: "Facilities", href: "/facilities" },
  { title: "Publications", href: "/publications" },
  { title: "Online Services", href: "/online-services" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile menu state
  const dropdownRef = useRef<HTMLDivElement>(null);
  // Add scroll event listener to toggle navbar styling
  useEffect(() => {
    const handleScroll = () => {
      // If the user scrolls down more than 50px, trigger the scrolled state
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
      className={`left-0 w-full z-[999] transition-all duration-300 ease-in-out ${
        isScrolled
          ? "fixed top-0 bg-[rgba(0,0,0,0.7)] shadow-lg h-[44px]" // Scrolled state: Solid Blue, Fixed, with shadow
          : "absolute top-0 h-[70px] pt-3 bg-transparent" // Top state: Transparent, Absolute
      }`}
    >
      <div className="container mx-auto flex h-full items-center justify-between max-w-[1140px]">
        {/* Logo Section */}
        <div className="flex items-center gap-2 h-full">
          <Link href="/" className="flex items-center">
            {/* 
              WRAPPER TRICK: We animate the width and height of this div. 
              The Image uses 'fill' to perfectly conform to this shrinking div.
            */}
            <div
              className={`relative transition-all duration-250 ease-in-out ${
                isScrolled ? "w-[200px] h-[30px]" : "w-[250px] h-[40px]"
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

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-4 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className={`font-roboto font-semibold text-white transition-all ease-in duration-250 hover:text-gray-300 uppercase whitespace-nowrap drop-shadow-md ${
                isScrolled ? "text-[12px]" : "text-[13px]"
              }`}
            >
              {link.title}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation Drawer */}
        <div className="lg:hidden flex items-center h-full" ref={dropdownRef}>
          {/* Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="shrink-0 flex items-center justify-center p-1.5 hover:bg-black/20 rounded-md transition-colors text-white"
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
            className={`absolute top-full left-0 right-0 mt-2 bg-blue-50 shadow-[0px_8px_30px_rgba(0,0,0,0.12)] overflow-hidden transition-all duration-300 ease-in-out origin-top ${
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
                  onClick={() => setIsMobileMenuOpen(false)} // Closes automatically when link is clicked
                  className="text-[20px] font-roboto font-bold text-[#333333] hover:text-[#002147] hover:bg-gray-300 px-6 py-3.5 uppercase text-center transition-all"
                >
                  {link.title}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
