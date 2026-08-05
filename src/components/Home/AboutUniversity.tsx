"use client";

import Link from "next/link";

export default function AboutUniversity() {
  return (
    <section className="w-full bg-gray-50 dark:bg-slate-950 flex items-center justify-center pb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-0 max-w-[1140px]">
        {/* 
          APPLIED COMPUTED STYLES:
          - Shadow: shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)]
          - Padding: lg:p-[66px] (scaled down slightly on mobile to prevent breaking)
          - Height: min-h-[211px] to match the exact 211px height requirement
          - Flex layout: flex flex-wrap items-center content-center
        */}
        <div className="bg-white dark:bg-slate-900 w-full min-h-[380px] lg:min-h-[211px]
         rounded-[30px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)] flex flex-wrap items-center content-center p-[30px] lg:p-[66px] transition-colors duration-300">
          {/* 
            APPLIED COMPUTED TYPOGRAPHY:
            - Color: text-[#333333] (rgb(51, 51, 51))
            - Size: text-[14px]
            - Weight: font-normal (400)
            - Line Height: leading-[21px]
            - Alignment: text-left
          */}
          <p className="text-[14px] font-roboto font-normal text-[#7A7A7A] dark:text-slate-400 leading-[21px] text-left w-full transition-colors duration-300">
            The University of Rajshahi is one of the largest universities in the
            country and the largest with the highest seat of learning in the
            northern region of Bangladesh. After its foundation on July 6, 1953,
            the university has been providing higher education and research. The
            university is located on a 753-acre campus on the green premises of
            Motihar, which is very close to the mighty river Padma and seven km
            east of the Rajshahi City Center.{" "}
            <Link
              href="https://www.ru.ac.bd/elementor-9316/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0055A5] hover:text-[#003d7a] transition-colors font-bold whitespace-nowrap underline-offset-4 hover:underline ml-1"
            >
              Read More
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
