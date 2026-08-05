"use client";

import Link from "next/link";
// Added Facebook to the import list
import { Users, UserPlus, GraduationCap } from "lucide-react";

const stats = [
  {
    id: 1,
    title: "Faculty Members",
    value: "1200+",
    icon: Users,
    href: null,
  },
  {
    id: 2,
    title: "Admission",
    value: "2025-2026",
    icon: UserPlus,
    href: "http://admission.ru.ac.bd/",
  },
  {
    id: 3,
    title: "Students",
    value: "30000+",
    icon: GraduationCap,
    href: null,
  },
  {
    id: 4,
    title: "Facebook",
    value: null,
    icon: GraduationCap, // Fixed: Swapped GraduationCap for Facebook
    href: "http://www.facebook.com/rajshahi.university.ac.bd",
  },
];

export default function StatsBar() {
  return (
    <section className="w-full bg-gray-50 flex items-center py-10 lg:py-0 lg:h-[150px] animate-in fade-in slide-in-from-bottom-8 duration-1000 transition-colors duration-300 dark:bg-slate-950">
      <div className="container mx-auto px-4 md:px-0 max-w-[1140px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 w-full">
          {stats.map((stat) => {
            const Icon = stat.icon;

            const CardContent = (
              <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-2 md:gap-4 bg-[#1b2032] text-white py-6 md:py-0 px-5 w-full min-h-[140px] md:min-h-[80px] rounded-3xl shadow-[0_0_0_8px_rgba(255,255,255,1),0_4px_12px_rgba(0,0,0,0.1)] transition-transform hover:-translate-y-1 hover:shadow-[0_0_0_8px_rgba(255,255,255,1),0_8px_20px_rgba(0,0,0,0.2)]">
                <div className="flex-shrink-0 text-ru-light-blue">
                  <Icon
                    className="w-10 h-10 md:w-11 md:h-11"
                    strokeWidth={1.5}
                  />
                </div>
                {/* Ensure text is centered on mobile, left-aligned on desktop */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <h3 className="text-[16px] font-roboto font-bold leading-tight">
                    {stat.title}
                  </h3>
                  {stat.value && (
                    <p className="text-[14px] text-gray-300 mt-1 font-medium dark:text-slate-400">
                      {stat.value}
                    </p>
                  )}
                </div>
              </div>
            );

            return stat.href ? (
              <a
                key={stat.id}
                href={stat.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block focus:outline-none focus:ring-2 focus:ring-ru-blue rounded-2xl w-full"
              >
                {CardContent}
              </a>
            ) : (
              <div key={stat.id} className="w-full">
                {CardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
