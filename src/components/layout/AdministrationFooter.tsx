"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface AdministrationFooterProps {
  entityName: string; // e.g., "Office of the Vice-Chancellor"
}

// Custom quick links for easy cross-navigation between officials
const quickLinks = [
  { text: "Vice-Chancellor", url: "/administration/vc" },
  { text: "Pro Vice-Chancellor (Administration)", url: "/administration/pro-vc-admin" },
  { text: "Pro Vice-Chancellor (Academic)", url: "/administration/pro-vc-academic" },
  { text: "Treasurer", url: "/administration/treasurer" },
  { text: "Registrar", url: "/administration/registrar" },
  { text: "Other Offices", url: "/administration/other-offices" },
];

const additionalLinks = [
  { text: "Download", url: "#" },
  { text: "Notices", url: "#" },
  { text: "Contact", url: "#" },
];

const importantLinks = [
  { text: "University Grants Commission (UGC)", url: "#" },
  { text: "Bangladesh Research and Education Network (BdREN)", url: "#" },
  { text: "BdREN ZOOM", url: "#" },
  { text: "Google Classroom", url: "#" },
  { text: "Google Meet – Online Video Meetings", url: "#" },
  { text: "Plagiarism Detection Software | iThenticate", url: "#" },
];

export default function AdministrationFooter({ entityName }: AdministrationFooterProps) {
  return (
    <footer className="w-full bg-[#040919] text-white pt-12 pb-6 font-roboto">
      <div className="container mx-auto px-4 md:px-0 max-w-[1140px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Col 1: Footer Menu */}
          <div className="flex flex-col">
            <h3 className="text-[18px] md:text-[20px] font-bold mb-4 pb-3 border-b border-gray-700/60">Footer Menu</h3>
            <ul className="flex flex-col gap-2.5">
              {["List of former VCs", "Activities"].map((link, i) => (
                <li key={i} className="flex items-center">
                  <ChevronRight className="w-3.5 h-3.5 mr-2 text-gray-400 shrink-0" />
                  <Link href="#" className="text-[14px] text-gray-300 hover:text-[#e83e8c] transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Quick Links (Navigates between Admin Routes) */}
          <div className="flex flex-col">
            <h3 className="text-[18px] md:text-[20px] font-bold mb-4 pb-3 border-b border-gray-700/60">Quick Links</h3>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link, i) => (
                <li key={i} className="flex items-center">
                  <ChevronRight className="w-3.5 h-3.5 mr-2 text-gray-400 shrink-0" />
                  <Link href={link.url} className="text-[14px] text-gray-300 hover:text-[#e83e8c] transition-colors">{link.text}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Additional Links */}
          <div className="flex flex-col">
            <h3 className="text-[18px] md:text-[20px] font-bold mb-4 pb-3 border-b border-gray-700/60">Additional Links</h3>
            <ul className="flex flex-col gap-2.5">
              {additionalLinks.map((link, i) => (
                <li key={i} className="flex items-center">
                  <ChevronRight className="w-3.5 h-3.5 mr-2 text-gray-400 shrink-0" />
                  <Link href={link.url} className="text-[14px] text-gray-300 hover:text-[#e83e8c] transition-colors">{link.text}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Important Links */}
          <div className="flex flex-col">
            <h3 className="text-[18px] md:text-[20px] font-bold mb-4 pb-3 border-b border-gray-700/60">Important Links</h3>
            <ul className="flex flex-col gap-2.5">
              {importantLinks.map((link, i) => (
                <li key={i} className="flex items-center text-left">
                  <ChevronRight className="w-3.5 h-3.5 mr-2 text-gray-400 shrink-0 mt-1" />
                  <Link href={link.url} className="text-[14px] text-gray-300 hover:text-[#e83e8c] transition-colors leading-snug">{link.text}</Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800/80 pt-6 flex justify-center text-center">
          <p className="text-[14px] text-gray-400 font-medium">
            All rights reserved &copy; 2026, {entityName}. Powered by ICT Center, RU.
          </p>
        </div>
      </div>
    </footer>
  );
}