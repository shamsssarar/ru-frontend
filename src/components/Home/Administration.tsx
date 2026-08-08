"use client";

import Image from "next/image";
import Link from "next/link";

const adminData = [
  {
    id: 1,
    name: "Dr. Md. Abdul Alim",
    title: "Pro-Vice Chancellor (Administration)",
    image:
      "https://www.ru.ac.bd/wp-content/uploads/2026/05/Dr.-Md.-Abdul-Alim-225x300.jpg",
    link: "administration/pro-vc-administration/",
  },
  {
    id: 2,
    name: "Dr. Mamunur Rashid",
    title: "Pro-Vice Chancellor (Academic)",
    image:
      "https://www.ru.ac.bd/wp-content/uploads/2026/06/Dr.-Mamunur-Rashid-3-243x300.jpg",
    link: "administration/pro-vc-academic/",
  },
  {
    id: 3,
    name: "Prof (Retd) Md. Matiar Rahman-",
    title: "Treasurer",
    image:
      "https://www.ru.ac.bd/wp-content/uploads/2025/07/Md.-Matiar-Rahman-247x300.png",
    link: "administration/treasurer/",
  },
];

export default function Administration() {
  return (
    <section className="w-full bg-gray-50 dark:bg-slate-950 pb-16 animate-in fade-in duration-[2000ms] transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-0 max-w-[1140px]">
        {/* 
          INDUSTRY STANDARD LAYOUT: 
          Instead of Grid, we use Flexbox with wrap and justify-center.
          This mathematically guarantees 2 per row on mobile, seamlessly centers the 3rd odd item, 
          and aligns 3 per row on desktop without writing custom span hacks.
        */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 w-full mx-auto">
          {adminData.map((admin) => (
            <div
              key={admin.id}
              /* 
                WIDTH CALCULATIONS:
                Mobile: 50% width minus half the gap (gap-4/6 = 0.5rem to 0.75rem compensation)
                Desktop: 33.33% width minus the gap
              */
              className="group flex flex-col w-[calc(50%-0.5rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(33.333%-1.333rem)] bg-white dark:bg-slate-900 rounded-2xl border border-gray-200/60 dark:border-slate-800 shadow-[0_0_8px_rgba(0,0,0,0.5)] hover:shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* 
                IMAGE BLOCK:
                Flush to the edges. Uses a locked aspect ratio (4/5) to ensure all photos 
                are perfectly uniform regardless of the original image dimensions.
              */}
              <div className="relative w-full aspect-[4/5] md:aspect-4/4 bg-gray-100 dark:bg-slate-800 overflow-hidden">
                <Image
                  src={admin.image}
                  alt={admin.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>

              {/* 
                TEXT BLOCK:
                Fluid height (flex-grow), standardized corporate padding, and crisp typography.
              */}
              <div className="flex flex-col flex-grow items-center justify-center text-center p-4 md:p-6 bg-white dark:bg-slate-900">
                <Link
                  href={admin.link}
                  className="text-[#002147] dark:text-[#6EC1E4] hover:text-blue-600 dark:hover:text-sky-400 font-bold text-[14px] md:text-[17px] leading-tight mb-2 transition-colors"
                >
                  {admin.name}
                </Link>
                <p className="text-gray-500 dark:text-slate-400 text-[10px] md:text-[12px] font-semibold uppercase tracking-wider leading-snug">
                  {admin.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
