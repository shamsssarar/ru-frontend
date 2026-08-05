"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { footerData } from "@/data/footerData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#040919] text-white pt-12 pb-6 font-roboto transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-0 max-w-[1140px]">
        {/* TOP: 4-Column Link Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {footerData.map((column, index) => (
            <div key={index} className="flex flex-col">
              <h3 className="text-[18px] md:text-[20px] font-bold mb-4 pb-3 border-b border-gray-700/60 text-white dark:border-slate-700">
                {column.title}
              </h3>

              <ul className="flex flex-col gap-2.5">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="flex items-center">
                    <ChevronRight className="w-3.5 h-3.5 mr-2 text-gray-400 dark:text-slate-400 shrink-0" />

                    <Link
                      href={link.href}
                      target={link.isExternal ? "_blank" : "_self"}
                      rel={link.isExternal ? "noopener noreferrer" : undefined}
                      className="text-[14px] text-gray-300 dark:text-slate-400 hover:text-[#e83e8c] dark:hover:text-[#e83e8c] transition-colors duration-200"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800/80 pt-6 flex justify-center text-center dark:border-slate-700">
          <p className="text-[14px] text-gray-400 font-medium dark:text-slate-400">
            All rights reserved &copy; {currentYear}, University of Rajshahi.
            Powered by ICT Center, RU.
          </p>
        </div>
      </div>
    </footer>
  );
}
