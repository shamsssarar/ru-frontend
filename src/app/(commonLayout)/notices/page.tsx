"use client";

import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";
import { noticesData } from "./data";

export default function AllNoticesPage() {
  return (
    <div className="flex flex-col w-full font-roboto min-h-screen bg-[#f1f1f1] text-slate-950 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-50">
      {/* Hero Banner Section */}
      <section className="relative w-full h-[250px] md:h-[350px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://www.ru.ac.bd/wp-content/uploads/2022/02/admin-building.jpg"
          alt="Administration Building"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4 mt-8">
          <h1 className="text-white text-[28px] md:text-[40px] font-bold tracking-wide drop-shadow-md">
            Notices
          </h1>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="w-full py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-0 max-w-[1140px]">
          <div className="bg-white border-t-[3px] border-t-[#575757] rounded-[10px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.15)] p-[20px] md:p-[50px] w-full min-h-[400px] transition-colors duration-300 dark:bg-slate-950 dark:border-slate-800">
            {/* Header Title */}
            <div className="mb-6">
              <h2 className="text-[24px] md:text-[28px] font-roboto font-bold text-[#6EC1E4] uppercase tracking-wide dark:text-cyan-300">
                LATEST NOTICES
              </h2>
              <div className="w-full h-[1px] bg-gray-300 mt-2 mb-6 dark:bg-slate-700"></div>
            </div>

            {/* Notices List */}
            <div className="flex flex-col gap-3">
              {noticesData.map((notice) => (
                <div
                  key={notice.id}
                  className="flex items-stretch bg-[#1b2032] text-white rounded-md overflow-hidden shadow-sm transition-transform hover:-translate-y-[2px] dark:bg-slate-900"
                >
                  {/* Date Block */}
                  <div className="flex flex-col items-center justify-center bg-[#1b2032] border-r border-gray-600 px-4 md:px-6 py-3 min-w-[70px] md:min-w-[90px] shrink-0 dark:bg-slate-800 dark:border-slate-700">
                    <span className="text-[18px] md:text-[20px] font-bold leading-none text-white dark:text-slate-100">
                      {notice.day}
                    </span>
                    <span className="text-[12px] md:text-[14px] font-medium mt-1 uppercase text-white/80 dark:text-slate-300">
                      {notice.month}
                    </span>
                  </div>

                  {/* Title Block */}
                  <div className="flex-1 flex items-center px-4 md:px-6 py-3">
                    <Link
                      href={`/notices/${notice.id}`}
                      className="text-[14px] md:text-[15px] font-roboto font-medium text-white hover:text-gray-300 transition-colors line-clamp-2 dark:text-slate-100 dark:hover:text-slate-200"
                    >
                      {notice.title}
                    </Link>
                  </div>

                  {/* Download Icon Block */}
                  <div className="flex items-center justify-center px-4 md:px-6 border-l border-gray-600/30 shrink-0">
                    <Link
                      href={`/notices/${notice.id}`}
                      className="text-white hover:text-[#6EC1E4] transition-colors p-2 hover:bg-white/10 rounded-full"
                    >
                      <Download className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
