"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

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
  return (
    <header className="absolute top-0 left-0 z-[999] w-full bg-transparent">
      <div className="container mx-auto flex h-[61px] items-center justify-between px-4 md:px-0 max-w-[1140px] mt-2">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo/ru-logo.png"
              alt="University of Rajshahi Logo"
              width={255}
              height={39}
              className="object-cover "
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-3 xl:gap-5 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="text-[12px] xl:text-[13px] font-roboto font-semibold text-white transition-colors hover:text-gray-200 uppercase whitespace-nowrap drop-shadow-md"
            >
              {link.title}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation Drawer */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger className="shrink-0 flex items-center justify-center p-2 hover:bg-black/10 rounded-md">
              <Menu className="h-6 w-6 text-white" />
              <span className="sr-only">Toggle navigation menu</span>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="flex flex-col gap-6 pt-12 w-[300px] bg-white"
            >
              <div className="mb-4">
                <Image
                  src="/logo/ru-logo.png"
                  alt="University of Rajshahi Logo"
                  width={200}
                  height={50}
                  className="object-contain h-10 w-auto"
                />
              </div>
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="text-[14px] font-roboto font-medium text-[#333333] hover:text-ru-blue uppercase border-b pb-2"
                  >
                    {link.title}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
