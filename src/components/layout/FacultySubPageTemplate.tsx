"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, ChevronRight, Download, ArrowRight } from "lucide-react";
import FacultyFooter, { FooterColumn } from "./FacultyFooter";
import { ReactNode } from "react";

interface Notice {
  id: string | number;
  day: string;
  month: string;
  title: string;
  link: string;
}

interface Event {
  id: string | number;
  date: string;
  title: string;
  image: string;
  link: string;
}

interface Department {
  name: string;
  link: string;
}

interface FacultySubPageProps {
  facultyName: string;
  bannerImage: string;
  deanName: string;
  deanImage: string;
  deanMessage: ReactNode;
  deanProfileLink: string;
  notices: Notice[];
  events: Event[];
  departments: Department[];
  footerColumns: FooterColumn[];
}

export default function FacultySubPageTemplate({
  facultyName,
  bannerImage,
  deanName,
  deanImage,
  deanMessage,
  deanProfileLink,
  notices,
  events,
  departments,
  footerColumns,
}: FacultySubPageProps) {
  const elementorBoxedClass =
    "bg-white border-t-[3px] border-t-[#d32f2f] rounded-[3px] shadow-[0px_0px_15px_0px_rgba(0,0,0,0.08)] p-[20px] md:p-[40px] w-full";

  return (
    <div className="flex flex-col w-full font-roboto min-h-screen bg-[#f9f9f9]">
      {/* 1. Hero Banner */}
      <section className="relative w-full h-[300px] md:h-[450px] flex items-center justify-center overflow-hidden">
        <Image
          src={bannerImage}
          alt={facultyName}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 container mx-auto px-4 md:px-0 max-w-[1140px] flex flex-col justify-center h-full text-right items-end">
          <h1 className="text-white text-[24px] md:text-[32px] font-bold mb-2 drop-shadow-md">
            Rajshahi University Administration Building
          </h1>
          <p className="text-white text-[16px] md:text-[18px] mb-6 drop-shadow-md">
            Administration Building
          </p>
          <Link
            href="#"
            className="bg-[#4b4e94] hover:bg-[#3b3e7a] text-white px-8 py-3 rounded-sm font-bold text-[14px] transition-colors shadow-lg"
          >
            READ MORE
          </Link>
        </div>
      </section>

      {/* 2. Main Content Area */}
      <section className="w-full py-12 md:py-16 bg-[#f9f9f9]">
        <div className="container mx-auto px-4 md:px-0 max-w-[1140px]">
          {/* Two Distinct Side-by-Side Sections */}
          <div className="flex flex-col lg:flex-row gap-8 items-stretch mb-16">
            {/* ========================================= */}
            {/* LEFT CARD: Message from Dean              */}
            {/* ========================================= */}
            <div className="w-full lg:w-1/2 bg-white shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)] rounded-sm p-8 md:p-10 flex flex-col">
              <h3 className="text-[24px] md:text-[28px] font-bold text-[#337ab7] mb-8">
                Message from Dean
              </h3>

              {/* Dean Image with specific shadow */}
              <div className="flex flex-col items-center mb-8">
                <figure className="w-[250px] md:w-[280px] bg-white p-2 shadow-[0px_2px_1px_rgba(1,1,1,0.5)] rounded-sm mb-4">
                  <div className="relative w-full h-[320px] md:h-[350px]">
                    <Image
                      src={deanImage}
                      alt={deanName}
                      fill
                      className="object-cover"
                    />
                  </div>
                </figure>
                <figcaption className="text-[15px] md:text-[16px] text-center text-[#333333] uppercase mt-2">
                  {deanName}
                </figcaption>
              </div>

              {/* 
                Dean Message Text 
                APPLIED COMPUTED STYLES:
                - font-size: 16px
                - line-height: 24px (tighter gap)
                - color: rgb(0,0,0)
                - text-align: justify
                - font-weight: medium/bold as requested
              */}
              <div className="text-black text-[16px] leading-[24px] text-justify font-medium mb-8 flex-grow">
                {deanMessage}
              </div>

              {/* Read More Button (Right Aligned at bottom) */}
              <div className="flex justify-end mt-auto">
                <Link
                  href={deanProfileLink}
                  className="bg-[#002147] hover:bg-[#001530] text-white px-8 py-2.5 rounded-sm font-medium transition-colors shadow-md text-[14px]"
                >
                  Read More
                </Link>
              </div>
            </div>

            {/* ========================================= */}
            {/* RIGHT CARD: Latest Notices                */}
            {/* ========================================= */}
            <div className="w-full lg:w-1/2 bg-white shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)] rounded-sm p-8 md:p-10 flex flex-col">
              <h3 className="text-[24px] md:text-[28px] font-bold text-[#6EC1E4] mb-8">
                Latest Notices
              </h3>

              <div className="flex flex-col gap-3 mb-8 flex-grow">
                {notices.map((notice) => (
                  <div
                    key={notice.id}
                    className="flex items-stretch bg-[#002147] text-white rounded-sm overflow-hidden shadow-sm hover:-translate-y-[2px] transition-transform"
                  >
                    {/* Date Block */}
                    <div className="flex flex-col items-center justify-center border-r border-white/20 px-4 py-3 min-w-[80px]">
                      <span className="text-[20px] font-bold leading-none">
                        {notice.day}
                      </span>
                      <span className="text-[12px] uppercase font-medium mt-1 tracking-wider">
                        {notice.month}
                      </span>
                    </div>
                    {/* Title Block */}
                    <div className="flex-1 flex items-center px-4 py-3">
                      <Link
                        href={notice.link}
                        className="text-[14px] font-medium hover:text-gray-300 transition-colors line-clamp-2 leading-[22px]"
                      >
                        {notice.title}
                      </Link>
                    </div>
                    {/* Download Icon */}
                    <div className="flex items-center justify-center px-4 border-l border-white/20">
                      <Link
                        href={notice.link}
                        className="text-white hover:text-[#6EC1E4] transition-colors"
                      >
                        <Download className="w-4.5 h-4.5" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {/* All Notices Button (Right Aligned at bottom) */}
              <div className="flex justify-end mt-auto">
                <Link
                  href="/academic/faculties/arts/notices"
                  className="inline-flex items-center bg-[#002147] hover:bg-[#001530] text-white text-[14px] font-medium px-8 py-2.5 rounded-sm transition-colors shadow-md"
                >
                  All Notices
                </Link>
              </div>
            </div>
          </div>

          {/* ========================================= */}
          {/* DEPARTMENTS SECTION                       */}
          {/* ========================================= */}
          <div className="mt-16 mb-16">
            <h2 className="text-[28px] md:text-[36px] font-bold text-[#337ab7] text-center mb-10">
              Department
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {departments.map((dept, idx) => (
                <div
                  key={idx}
                  className="bg-white shadow-[0px_0px_10px_0px_rgba(0,0,0,0.2)] rounded-sm p-6 md:p-8 flex justify-center items-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)] hover:scale-[1.03]"
                >
                  <Link
                    href={dept.link}
                    className="bg-[#002147] hover:bg-[#001530] text-white px-6 py-3 w-full text-center text-[15px] font-bold rounded-sm transition-colors shadow-sm line-clamp-1"
                  >
                    {dept.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* ========================================= */}
          {/* LATEST EVENTS SECTION                     */}
          {/* ========================================= */}
          <div className="bg-white p-8 md:p-12 shadow-[0px_0px_15px_0px_rgba(0,0,0,0.05)] rounded-sm">
            <h2 className="text-[26px] md:text-[32px] font-bold text-[#6EC1E4] mb-8">
              Latest Events
            </h2>

            {events.length > 0 ? (
              <div className="flex flex-col gap-4 mb-8">
                {events.map((event) => (
                  <div
                    key={event.id}
                    className="flex flex-col sm:flex-row bg-gray-50 border border-gray-200 rounded-sm overflow-hidden transition-shadow hover:shadow-md"
                  >
                    <div className="w-full sm:w-[250px] h-[160px] relative shrink-0">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 flex flex-col justify-center flex-1">
                      <div className="flex items-center gap-2 text-[#7A7A7A] text-[13px] font-medium mb-2">
                        <Calendar className="w-4 h-4" />
                        <span>{event.date}</span>
                      </div>
                      <h3 className="text-[18px] font-bold text-[#333333] hover:text-blue-600 transition-colors line-clamp-2 mb-3">
                        <Link href={event.link}>{event.title}</Link>
                      </h3>
                      <Link
                        href={event.link}
                        className="inline-flex items-center gap-1 text-[#333333] hover:text-[#6EC1E4] font-bold text-[13px] uppercase"
                      >
                        READ MORE <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 mb-8 italic">
                No events currently scheduled.
              </p>
            )}

            <div className="flex justify-end">
              <Link
                href="/academic/faculties/arts/events"
                className="inline-flex items-center bg-[#002147] hover:bg-[#001530] text-white text-[14px] font-medium px-8 py-2.5 rounded-sm transition-colors shadow-md"
              >
                All Events
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FacultyFooter facultyName={facultyName} columns={footerColumns} />
    </div>
  );
}
