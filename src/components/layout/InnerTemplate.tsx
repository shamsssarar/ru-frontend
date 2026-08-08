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
        <div className="relative z-10 text-center px-4">
          <h1 className="text-white text-[24px] md:text-[36px] font-bold capitalize tracking-wide leading-tight">
            {pageTitle}
          </h1>
        </div>
      </section>

      {/* 2. THE MAIN CONTENT AREA */}
      <section className="w-full bg-gray-50 py-10 md:py-16 transition-colors duration-300 dark:bg-slate-950">
        <div className="container mx-auto px-4 md:px-0 max-w-[1140px]">
          {/* Main Page Title (Uppercase & Centered) */}
          <h2 className="text-center text-[24px] md:text-[36px] font-bold text-black uppercase mb-8 md:mb-10 tracking-wider dark:text-slate-200">
            {pageTitle}
          </h2>

          {/* 
            The Main White Wrapper 
            Notice the red top border (border-t-[#d32f2f]) exactly like your screenshots!
          */}
          <div className="bg-white dark:bg-slate-900 border-t-[3px] border-t-[#d32f2f] rounded-b-[15px] shadow-[0_0_15px_rgba(0,0,0,0.08)] p-4 md:p-10 transition-colors duration-300">
            {/* 
              The Responsive Grid: 
              Changed to grid-cols-2 on mobile, adjusting gaps for smaller screens 
            */}
            <div className="grid grid-cols-2 gap-3 md:gap-8">
              {items.map((item, index) => (
                <div
                  key={item.id}
                  // Full width spans 2 columns entirely, standard items span 1 (which means 2 per row)
                  className={item.fullWidth ? "col-span-2" : "col-span-1"}
                >
                  <Link
                    href={item.link}
                    // flex-col on mobile (stacked), flex-row on md (side-by-side)
                    className="group flex flex-col md:flex-row items-center bg-white dark:bg-slate-900 border border-[#e3e3e3] dark:border-slate-700 rounded-[5px] p-[10px] min-h-[140px] md:min-h-[118px] overflow-hidden transition-all duration-[400ms] ease-in-out hover:-translate-y-2 hover:shadow-[0_8px_20px_rgba(0,0,0,0.5)] hover:border-gray-300 dark:hover:bg-slate-800 animate-in fade-in slide-in-from-bottom-4 h-full"
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animationFillMode: "both",
                    }}
                  >
                    {/* Card Image */}
                    {/* w-full on mobile to allow natural stacking, fixed width on md */}
                    <div className="relative w-full md:w-[140px] h-[80px] shrink-0 bg-white dark:bg-slate-900 rounded-[3px] overflow-hidden transition-colors duration-300 mb-2 md:mb-0">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-contain transition-transform duration-[400ms] ease-in-out group-hover:scale-110"
                      />
                    </div>

                    {/* Card Text */}
                    {/* Center text on mobile, left-align on md */}
                    <div className="flex flex-col justify-center items-center md:items-start px-1 sm:px-2 md:px-6 flex-1 w-full text-center md:text-left">
                      <h3 className="text-[14px] sm:text-[14px] md:text-[16px] font-roboto font-bold text-[#333333] dark:text-slate-200 leading-[1.3] md:leading-[21px] group-hover:text-[#0055A5] dark:group-hover:text-blue-300 transition-colors duration-[400ms]">
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
