"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

// Grouping the footer data to map over cleanly
const footerData = [
  {
    title: "Quick Links",
    links: [
      "Vision and Mission",
      "Web Mail",
      "ICT Center",
      "Public Relations",
      "Student Insurance",
      "RU 50 Years Master Plan",
      "Office of The International Affairs",
      "RU Alumni",
    ],
  },
  {
    title: "Additional Links",
    links: [
      "APA",
      "NOC",
      "CCDC",
      "SHEPP",
      "Smart ID Card Cell, RU",
      "Central Library",
      "Exam Controller",
      "Registered Graduate Application",
    ],
  },
  {
    title: "Important Links",
    links: [
      "Notices",
      "Events",
      "Conferences",
      "Guest House Booking",
      "Arun HPCC",
      "Form Download",
      "Convocation",
      "Recruitment at RU",
      "Tender Notice",
    ],
  },
  {
    title: "Footer Menu",
    links: [
      "Privacy Policy",
      "Sitemap",
      "RU Contacts App",
      "BdREN vSession Login",
      "BdREN vSession tutorial",
      "M.Phil/Ph.D/Special Courses",
      "International Students",
      "Contact",
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear(); // Using dynamic year, though you specified 2026

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
                      href="#"
                      className="text-[14px] text-gray-300 dark:text-slate-400 hover:text-[#e83e8c] transition-colors duration-200"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800/80 pt-6 flex justify-center text-center dark:border-slate-700">
          <p className="text-[14px] text-gray-400 font-medium dark:text-slate-400">
            All rights reserved &copy; 2026, University of Rajshahi. Powered by
            ICT Center, RU.
          </p>
        </div>
      </div>
    </footer>
  );
}
