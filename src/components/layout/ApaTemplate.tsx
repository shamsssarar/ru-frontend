"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Plus, Minus, ArrowLeft } from "lucide-react";
import type { ApaDetail } from "@/data/apaDetailsData";

export default function ApaTemplate({ data }: { data: ApaDetail }) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="w-full min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      {/* 1. Spacer to prevent Main Navbar overlap */}
      <div className="h-[70px] bg-[#002147] w-full shrink-0"></div>

      {/* 2. Hero Section */}
      <section className="relative w-full h-[250px] md:h-[350px] bg-[#002147] flex items-center justify-center overflow-hidden">
        {/* Working Background Image */}
        <div className="absolute inset-0 opacity-30 z-0">
          <Image
            src="https://www.ru.ac.bd/wp-content/uploads/2022/08/admin-building.jpg" // Official RU image
            alt="Rajshahi University Administration"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Title */}
        <div className="relative z-10 text-center px-4 max-w-[900px]">
          <h1 className="text-3xl md:text-4xl font-bold text-white uppercase drop-shadow-lg leading-snug">
            {data.titleEn}
          </h1>
        </div>

        {/* Fixed Back Button */}
        <div className="absolute bottom-6 right-6 md:right-12 z-20">
          <Link
            href="/"
            className="flex items-center gap-2 bg-[#3322A0] hover:bg-[#4331c9] text-white px-6 py-2.5 font-bold uppercase transition-colors rounded-sm shadow-md"
          >
            <ArrowLeft className="w-5 h-5" /> Back
          </Link>
        </div>
      </section>

      {/* 3. Main Content Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-[1140px]">
          {/* Bengali Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-[#008000] dark:text-[#6EC1E4] mb-8 border-b-2 border-gray-200 dark:border-slate-800 pb-4 inline-block">
            {data.titleBn}
          </h2>

          {/* Accordions */}
          <div className="flex flex-col border border-[#dddddd] dark:border-slate-700 bg-[#f9f9f9] dark:bg-slate-950 rounded-sm">
            {data.accordions.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="border-b border-[#dddddd] dark:border-slate-700 last:border-b-0"
                >
                  {/* Accordion Header */}
                  <button
                    onClick={() => toggleAccordion(index)}
                    className={`w-full flex items-center gap-3 px-6 py-4 text-left transition-colors ${
                      isOpen
                        ? "text-[#008000] dark:text-[#6EC1E4]"
                        : "text-[#333333] dark:text-slate-300 hover:text-[#008000] dark:hover:text-[#6EC1E4]"
                    }`}
                  >
                    <span className="shrink-0 text-gray-400 dark:text-slate-500">
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </span>
                    <span className="font-semibold text-[15px]">
                      {item.title}
                    </span>
                  </button>

                  {/* Accordion Content (Iframe) */}
                  {isOpen && (
                    <div className="p-4 bg-white dark:bg-slate-900 border-t border-[#dddddd] dark:border-slate-700">
                      <div className="w-full bg-gray-100 dark:bg-slate-800 rounded-sm overflow-hidden h-[500px]">
                        <iframe
                          src={item.pdfUrl}
                          width="100%"
                          height="100%"
                          className="border-0"
                          title={item.title}
                        />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
