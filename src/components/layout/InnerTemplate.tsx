"use client";

import Image from "next/image";
import Link from "next/link";

// We define exactly what data each card in the grid needs
export interface PageGridItem {
  id: string | number;
  title: string;
  image: string;
  link: string;
  fullWidth?: boolean; // Useful for the "Vice-Chancellor" card which spans full width
}

interface InnerPageTemplateProps {
  pageTitle: string;
  bannerImage: string;
  items: PageGridItem[];
}

export default function InnerPageTemplate({
  pageTitle,
  bannerImage,
  items,
}: InnerPageTemplateProps) {
  return (
    <div className="flex flex-col w-full font-roboto">
      {/* 1. THE HERO BANNER */}
      <section className="relative w-full h-[250px] md:h-[350px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src={bannerImage}
          alt={pageTitle}
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay (matches the 'banner-bg-transparent' from original HTML) */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Banner Title */}
        <div className="relative z-10 text-center">
          <h1 className="text-white text-[28px] md:text-[36px] font-bold capitalize tracking-wide">
            {pageTitle}
          </h1>
        </div>
      </section>

      {/* 2. THE MAIN CONTENT AREA */}
      <section className="w-full bg-gray-50 py-12 md:py-16 transition-colors duration-300 dark:bg-slate-950">
        <div className="container mx-auto px-4 md:px-0 max-w-[1140px]">
          {/* Main Page Title (Uppercase & Centered) */}
          <h2 className="text-center text-[28px] md:text-[36px] font-bold text-black uppercase mb-10 tracking-wider dark:text-slate-200">
            {pageTitle}
          </h2>

          {/* 
            The Main White Wrapper 
            Notice the red top border (border-t-[#d32f2f]) exactly like your screenshots!
          */}
          <div className="bg-white dark:bg-slate-900 border-t-[3px] border-t-[#d32f2f] rounded-b-[15px] shadow-[0_0_15px_rgba(0,0,0,0.08)] p-6 md:p-10 transition-colors duration-300">
            {/* The Responsive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {items.map((item, index) => (
                <div
                  key={item.id}
                  // If fullWidth is true, it spans both columns on desktop
                  className={item.fullWidth ? "md:col-span-2" : "md:col-span-1"}
                >
                  <Link
                    href={item.link}
                    className="group flex items-center bg-white dark:bg-slate-900 border border-[#e3e3e3] dark:border-slate-700 rounded-[5px] p-[10px] min-h-[118px] overflow-hidden transition-all duration-[400ms] ease-in-out hover:-translate-y-2 hover:shadow-[0_8px_20px_rgba(0,0,0,0.5)] hover:border-gray-300 dark:hover:bg-slate-800 animate-in fade-in slide-in-from-bottom-4"
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animationFillMode: "both",
                    }}
                  >
                    {/* Card Image */}
                    {/* Removed the right border to match the uniform p-[10px] wrapping layout */}
                    <div className="relative w-[110px] md:w-[140px] h-[80px] shrink-0 bg-white dark:bg-slate-900 rounded-[3px] overflow-hidden transition-colors duration-300">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-contain transition-transform duration-[400ms] ease-in-out group-hover:scale-110"
                      />
                    </div>

                    {/* Card Text */}
                    {/* 
                      APPLIED COMPUTED TYPOGRAPHY:
                      - Color: text-[#333333] (rgb(51,51,51))
                      - Font size/weight: text-[14px] font-normal
                      - Line height: leading-[21px]
                    */}
                    <div className="flex items-center px-4 md:px-6 flex-1">
                      <h3 className="text-[14px] md:text-[16px] font-roboto font-normal text-[#333333] dark:text-slate-200 leading-[21px] group-hover:text-[#0055A5] dark:group-hover:text-blue-300 transition-colors duration-[400ms]">
                        {item.title}
                      </h3>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
