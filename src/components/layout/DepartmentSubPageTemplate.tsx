"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import {
  BookOpen,
  Calendar,
  ChevronRight,
  Download,
  ArrowRight,
} from "lucide-react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { ReactNode } from "react";
import DepartmentFooter, { FooterColumn } from "./DepartmentFooter";
import DepartmentNavbar from "@/components/layout/DepartmentNavbar";

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

interface DepartmentSubPageProps {
  deptSlug: string;
  pageTitle: string;
  officialName: string;
  officialTitle: string;
  officialSubtitle: string;
  officialImage: string;
  profileLink: string;
  messageContent: ReactNode;
  notices: Notice[];
  events: Event[];
  sliderImages: string[];
  departmentName: string;
  footerColumns: FooterColumn[];
}

export default function DepartmentSubPageTemplate({
  deptSlug,
  pageTitle,
  officialName,
  officialTitle,
  officialSubtitle,
  officialImage,
  profileLink,
  messageContent,
  notices,
  events,
  sliderImages,
  departmentName,
  footerColumns,
}: DepartmentSubPageProps) {
  // Embla Carousel Logic matched from HeroSlider
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const plugin = React.useRef(
    Autoplay({ delay: 6000, stopOnInteraction: true }),
  );

  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const elementorBoxedClass =
    "bg-white border-t-[3px] border-t-[#575757] rounded-[3px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)] p-[20px] md:p-[40px] relative w-full max-w-[1140px] mx-auto";

  return (
    <div className="flex flex-col w-full font-roboto min-h-screen">
      {/* 1. Hero Slider (Replaced with embla-carousel) */}
      <section className="relative w-full h-[350px] md:h-[500px] overflow-hidden bg-black">
        <Carousel
          setApi={setApi}
          plugins={[plugin.current]}
          className="w-full h-full"
          opts={{ loop: true }}
        >
          <CarouselContent className="h-full ml-0">
            {sliderImages.map((src, index) => (
              <CarouselItem key={index} className="relative w-full h-full pl-0">
                <div className="relative w-full h-[350px] md:h-[500px] overflow-hidden">
                  <Image
                    src={src}
                    alt={`Slide ${index + 1}`}
                    fill
                    className={`object-cover ${
                      current === index ? "animate-slow-zoom" : "scale-100"
                    }`}
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Arrows positioned on the edges (hidden on mobile like original) */}
          {sliderImages.length > 1 && (
            <>
              <CarouselPrevious className="left-4 md:left-8 bg-transparent border-none text-white hover:bg-black/75 h-12 w-12 hidden md:flex" />
              <CarouselNext className="right-4 md:right-8 bg-transparent border-none text-white hover:bg-black/75 h-12 w-12 hidden md:flex" />
            </>
          )}
        </Carousel>
      </section>

      {/* INSERT THE NEW NAVBAR HERE */}
      <DepartmentNavbar deptSlug={deptSlug} />

      {/* 2. Message Content Area */}
      <section className="w-full bg-[#f1f1f1] py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-0 max-w-[1140px]">
          <div className={elementorBoxedClass}>
            <div className="mb-8 md:mb-10">
              <h2 className="text-[22px] md:text-[28px] font-bold text-[#337ab7]">
                {pageTitle}
              </h2>
            </div>

            <div className="flex flex-col md:flex-row mb-10 gap-6 items-start md:items-center">
              <div className="flex flex-row items-center gap-6 flex-grow">
                <div className="w-[120px] md:w-[160px] h-[160px] md:h-[200px] relative shrink-0">
                  <Image
                    src={officialImage}
                    alt={officialName}
                    fill
                    className="object-cover shadow-[0px_4px_10px_rgba(0,0,0,0.2)] rounded-sm"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-[18px] md:text-[22px] font-bold text-[#333333] mb-1">
                    {officialName}
                  </h3>
                  <h4 className="text-[16px] md:text-[18px] font-bold text-[#555555]">
                    {officialTitle}
                  </h4>
                  <h6 className="text-[14px] md:text-[15px] text-gray-500 mt-1 font-normal">
                    {officialSubtitle}
                  </h6>
                </div>
              </div>

              <div className="flex items-center justify-end w-full md:w-auto">
                <Link
                  href={profileLink}
                  className="inline-flex items-center gap-2 bg-[#002147] hover:bg-[#001530] text-white px-8 py-3 text-[14px] font-medium rounded-sm transition-colors shadow-md uppercase"
                >
                  <BookOpen className="w-4 h-4" />
                  View Profile
                </Link>
              </div>
            </div>

            <div className="prose max-w-none text-[#333333] text-[16px] leading-[24px] text-justify font-medium mb-4">
              {messageContent}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Events and Notices Side-by-Side Area */}
      <section className="w-full bg-[#f1f1f1] pb-16">
        <div className="container mx-auto px-4 md:px-0 max-w-[1140px]">
          <div className="flex flex-col lg:flex-row gap-8 items-stretch">
            {/* Left Column: Events */}
            <div className="w-full lg:w-1/2 bg-white shadow-[0px_0px_10px_0px_rgba(0,0,0,0.15)] rounded-[3px] p-6 md:p-10 flex flex-col border-t-[3px] border-t-[#575757]">
              <h3 className="text-[22px] md:text-[26px] font-bold text-[#6EC1E4] mb-8">
                Latest Events
              </h3>

              <div className="flex flex-col gap-4 mb-6 flex-grow">
                {events.map((event) => (
                  <div
                    key={event.id}
                    className="flex flex-col bg-white border border-gray-200 rounded-sm overflow-hidden transition-shadow hover:shadow-md"
                  >
                    <div className="w-full h-[180px] relative">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4 flex flex-col justify-center">
                      <div className="flex items-center gap-2 text-[#7A7A7A] text-[13px] font-medium mb-2">
                        <Calendar className="w-4 h-4" />
                        <span>{event.date}</span>
                      </div>
                      <h3 className="text-[16px] md:text-[18px] font-bold text-[#333333] hover:text-[#337ab7] transition-colors line-clamp-2 mb-3">
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

              <div className="flex justify-end mt-auto">
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 bg-[#002147] hover:bg-[#001530] text-white text-[12px] font-bold uppercase px-6 py-2.5 rounded-sm transition-colors shadow-md"
                >
                  <ArrowRight className="w-4 h-4" /> ALL EVENTS
                </Link>
              </div>
            </div>

            {/* Right Column: Notices */}
            <div className="w-full lg:w-1/2 bg-white shadow-[0px_0px_10px_0px_rgba(0,0,0,0.15)] rounded-[3px] p-6 md:p-10 flex flex-col border-t-[3px] border-t-[#575757]">
              <h3 className="text-[22px] md:text-[26px] font-bold text-[#6EC1E4] mb-8">
                Latest Notices
              </h3>

              <div className="flex flex-col gap-3 mb-6 flex-grow">
                {notices.map((notice) => (
                  <div
                    key={notice.id}
                    className="flex items-stretch bg-[#002147] text-white rounded-sm overflow-hidden shadow-sm hover:-translate-y-[2px] transition-transform"
                  >
                    <div className="flex flex-col items-center justify-center border-r border-white/20 px-4 py-3 min-w-[80px]">
                      <span className="text-[20px] font-bold leading-none">
                        {notice.day}
                      </span>
                      <span className="text-[12px] uppercase font-medium mt-1 tracking-wider">
                        {notice.month}
                      </span>
                    </div>
                    <div className="flex-1 flex items-center px-4 py-3">
                      <Link
                        href={notice.link}
                        className="text-[14px] font-medium hover:text-gray-300 transition-colors line-clamp-2 leading-[22px]"
                      >
                        {notice.title}
                      </Link>
                    </div>
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

              <div className="flex justify-end mt-auto">
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 bg-[#002147] hover:bg-[#001530] text-white text-[12px] font-bold uppercase px-6 py-2.5 rounded-sm transition-colors shadow-md"
                >
                  <ArrowRight className="w-4 h-4" /> ALL NOTICES
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Custom Department Footer */}
      <DepartmentFooter
        departmentName={departmentName}
        columns={footerColumns}
      />
    </div>
  );
}
