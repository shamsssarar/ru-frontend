"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, ChevronRight } from "lucide-react";
import { eventsData } from "./data";

export default function AllEventsPage() {
  return (
    <div className="flex flex-col w-full font-roboto min-h-screen bg-[#f1f1f1] text-slate-950 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-50">
      {/* 1. Hero Banner Section */}
      <section className="relative w-full h-[250px] md:h-[350px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://www.ru.ac.bd/wp-content/uploads/2022/02/admin-building.jpg"
          alt="Administration Building"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-4 mt-8">
          <h1 className="text-white text-[28px] md:text-[40px] font-bold tracking-wide drop-shadow-md uppercase">
            Events
          </h1>
        </div>
      </section>

      {/* 2. Main Content Area */}
      <section className="w-full py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-0 max-w-[1140px]">
          <div className="bg-white rounded-[3px] shadow-[0px_0px_15px_0px_rgba(0,0,0,0.08)] p-6 md:p-12 border-t-[3px] border-t-[#d32f2f] min-h-[500px] transition-colors duration-300 dark:bg-slate-950 dark:border-t-slate-700">
            {/* Header Title */}
            <div className="mb-8 md:mb-10">
              <h2 className="text-[24px] md:text-[28px] font-bold text-[#337ab7] uppercase dark:text-cyan-300">
                LATEST EVENTS
              </h2>
            </div>

            {/* Events List */}
            <div className="flex flex-col gap-6 md:gap-8">
              {eventsData.map((event) => (
                <div
                  key={event.id}
                  className="flex flex-col md:flex-row bg-white border border-gray-200 rounded-sm overflow-hidden transition-shadow hover:shadow-lg group dark:bg-slate-950 dark:border-slate-800"
                >
                  {/* Event Image (Left Side on Desktop) */}
                  <div className="w-full md:w-[400px] h-[220px] md:h-auto shrink-0 relative overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Event Details (Right Side on Desktop) */}
                  <div className="flex flex-col justify-center p-6 md:p-8 flex-1">
                    {/* Date */}
                    <div className="flex items-center gap-2 text-gray-500 text-[14px] font-medium mb-3 dark:text-slate-400">
                      <Calendar className="w-4 h-4 text-gray-400 dark:text-slate-400" />
                      <span>{event.date}</span>
                    </div>

                    {/* Title */}
                    <Link href={`/events/${event.id}`} className="block mb-6">
                      <h3 className="text-[20px] md:text-[24px] font-bold text-[#333333] dark:text-slate-100 group-hover:text-[#337ab7] dark:group-hover:text-[#6EC1E4] transition-colors leading-snug">
                        {event.title}
                      </h3>
                    </Link>

                    {/* Read More Link */}
                    <div className="mt-auto">
                      <Link
                        href={`/events/${event.id}`}
                        className="inline-flex items-center gap-1 text-[#333333] dark:text-slate-100 hover:text-[#337ab7] dark:hover:text-[#6EC1E4] font-bold text-[13px] uppercase tracking-wider transition-colors"
                      >
                        READ MORE <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
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
