"use client";

import Image from "next/image";
import Link from "next/link";
import { Download, ArrowRight, Calendar, ChevronRight } from "lucide-react";

// --- DATA ---
const notices = [
  {
    id: 1,
    date: "2024-07-30",
    title: "Result of 1st year Honours Final Examination 2023",
    link: "/notices/1",
  },
  {
    id: 2,
    date: "2024-07-28",
    title: "Admission Circular for PhD Program 2024-25",
    link: "/notices/2",
  },
  {
    id: 3,
    date: "2024-07-25",
    title: "Class Schedule for Summer Semester 2024",
    link: "/notices/3",
  },
  {
    id: 4,
    date: "2024-07-22",
    title: "Scholarship Opportunity for Undergraduate Students",
    link: "/notices/4",
  },
  {
    id: 5,
    date: "2024-07-20",
    title: "প্রফেসর গ্রেড-২ সংক্রান্ত বিজ্ঞপ্তি",
    link: "/notices/5",
  },
];

const events = [
  {
    id: 1,
    date: "29-07-2026",
    title:
      "রাবিতে ‘মিট দ্য অ্যাম্বাসেডর ২০২৬’ অনুষ্ঠানে ফরাসি রাষ্ট্রদূতের বক্তৃতা",
    image:
      "https://www.ru.ac.bd/wp-content/uploads/2026/07/RU-Pic1-29.07.2026-scaled.jpg",
    link: "https://www.ru.ac.bd/blog/",
  },
  {
    id: 2,
    date: "16-07-2026",
    title: "রাবিতে আন্তর্জাতিক সেমিনার অনুষ্ঠিত",
    image:
      "https://www.ru.ac.bd/wp-content/uploads/2026/07/RU-Pic1a-16.07.2026-scaled.jpg",
    link: "https://www.ru.ac.bd/blog/",
  },
  {
    id: 3,
    date: "13-07-2026",
    title: "রাবি উপাচার্যের সাথে কোইকা প্রতিনিধিদলের মতবিনিময়",
    image:
      "https://www.ru.ac.bd/wp-content/uploads/2026/07/RU-Pica-12.07.2026-scaled.jpg",
    link: "https://www.ru.ac.bd/blog/",
  },
];

export default function LatestNotices() {
  return (
    <section className="w-full bg-gray-50 flex justify-center pb-16 animate-in fade-in duration-[2000ms]">
      <div className="container mx-auto px-4 md:px-0 max-w-[1140px]">
        {/* MAIN WRAPPER */}
        <div className="bg-white border-t-[3px] border-t-[#575757] rounded-[25px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)] p-[20px] md:p-[50px] w-full min-h-[400px]">
          {/* ======================= */}
          {/* 1. LATEST NOTICES SECTION */}
          {/* ======================= */}
          <div className="mb-6">
            <h2 className="text-[24px] md:text-[28px] font-roboto font-bold text-[#6EC1E4] uppercase tracking-wide">
              LATEST NOTICES
            </h2>
            <div className="w-full h-[1px] bg-gray-300 mt-2 mb-6"></div>
          </div>

          <div className="flex flex-col gap-3">
            {notices.map((notice) => (
              <div
                key={notice.id}
                className="flex items-stretch bg-[#1b2032] text-white rounded-md overflow-hidden shadow-sm transition-transform hover:-translate-y-[2px]"
              >
                <div className="flex flex-col items-center justify-center bg-[#1b2032] border-r border-gray-600 px-4 md:px-6 py-3 min-w-[70px] md:min-w-[90px]">
                  <span className="text-[18px] md:text-[20px] font-bold leading-none">
                    {new Date(notice.date).getDate()}
                  </span>
                  <span className="text-[12px] md:text-[14px] font-medium mt-1">
                    {new Date(notice.date).toLocaleString('default', { month: 'short' }).toUpperCase()}
                  </span>
                </div>
                <div className="flex-1 flex items-center px-4 md:px-6 py-3">
                  <Link
                    href={notice.link}
                    className="text-[14px] md:text-[15px] font-roboto font-medium hover:text-gray-300 transition-colors line-clamp-2"
                  >
                    {notice.title}
                  </Link>
                </div>
                <div className="flex items-center justify-center px-4 md:px-6 border-l border-gray-600/30">
                  <Link
                    href={notice.link}
                    className="text-white hover:text-[#6EC1E4] transition-colors"
                  >
                    <Download className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end mt-6 mb-12">
            <Link
              href="/notices"
              className="inline-flex items-center gap-2 bg-[#1b2032] hover:bg-[#2c3452] text-white text-[13px] font-bold uppercase px-6 py-3 rounded-full transition-colors shadow-md"
            >
              <ArrowRight className="w-4 h-4" />
              ALL NOTICES
            </Link>
          </div>

          {/* ======================= */}
          {/* 2. EVENTS SECTION         */}
          {/* ======================= */}
          <div className="mb-6">
            <div className="w-full h-[1px] bg-gray-300 mb-6"></div>
            <h2 className="text-[24px] md:text-[28px] font-roboto font-bold text-[#6EC1E4] uppercase tracking-wide">
              EVENTS
            </h2>
            <div className="w-full h-[1px] bg-gray-300 mt-2 mb-6"></div>
          </div>

          <div className="flex flex-col gap-6">
            {events.map((event) => (
              <div
                key={event.id}
                className="flex flex-col md:flex-row bg-gray-50 border border-gray-200 rounded-md overflow-hidden transition-shadow hover:shadow-md"
              >
                {/* Event Image */}
                <div className="w-full md:w-[350px] shrink-0">
                  <Image
                    src={event.image}
                    alt={event.title}
                    width={400}
                    height={300}
                    className="w-full h-[200px] object-cover"
                  />
                </div>

                {/* Event Text */}
                <div className="flex flex-col justify-center p-6 md:p-8 flex-1">
                  <div className="flex items-center gap-2 text-[#7A7A7A] text-[14px] font-medium mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>

                  <Link href={event.link} className="group block mb-6">
                    <h3 className="text-[18px] md:text-[20px] font-roboto font-bold text-[#333333] group-hover:text-ru-blue transition-colors leading-tight">
                      {event.title}
                    </h3>
                  </Link>

                  <div>
                    <Link
                      href={event.link}
                      className="inline-flex items-center gap-1 text-[#333333] hover:text-[#6EC1E4] font-bold text-[13px] uppercase transition-colors"
                    >
                      READ MORE
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* All Events Button */}
          <div className="flex justify-end mt-8">
            <Link
              href="https://www.ru.ac.bd/events/"
              className="inline-flex items-center gap-2 bg-[#1b2032] hover:bg-[#2c3452] text-white text-[13px] font-bold uppercase px-6 py-3 rounded-full transition-colors shadow-md"
            >
              <ArrowRight className="w-4 h-4" />
              ALL EVENTS
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
