"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface FooterColumn {
  title: string;
  links: { text: string; url: string }[];
}

interface DepartmentFooterProps {
  departmentName: string;
  columns: FooterColumn[];
}

export default function DepartmentFooter({ departmentName, columns }: DepartmentFooterProps) {
  return (
    <footer className="w-full bg-[#040919] text-white pt-12 pb-6 font-roboto">
      <div className="container mx-auto px-4 md:px-0 max-w-[1140px]">
        
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns.length || 4} gap-8 mb-12`}>
          {columns.map((col, index) => (
            <div key={index} className="flex flex-col">
              <h3 className="text-[18px] md:text-[20px] font-bold mb-4 pb-3 border-b border-gray-700/60">
                {col.title}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link, i) => (
                  <li key={i} className="flex items-center text-left group">
                    <ChevronRight className="w-3.5 h-3.5 mr-2 text-gray-400 shrink-0 mt-0.5 group-hover:text-[#e83e8c] transition-colors" />
                    <Link href={link.url} className="text-[14px] text-gray-300 hover:text-[#e83e8c] transition-colors leading-snug">
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800/80 pt-6 flex justify-center text-center">
          <p className="text-[14px] text-gray-400 font-medium">
            All rights reserved &copy; {new Date().getFullYear()}, {departmentName}. Powered by ICT Center, RU.
          </p>
        </div>
      </div>
    </footer>
  );
}