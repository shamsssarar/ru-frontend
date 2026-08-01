"use client";

import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  Calendar,
  ChevronRight,
  Download,
  ArrowRight,
} from "lucide-react";
import AdministrationFooter from "./AdministrationFooter";
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

interface AdministrationSubPageProps {
  pageTitle: string; // e.g., "Message from Vice-Chancellor"
  officialName: string;
  officialTitle: string;
  officialSubtitle: string;
  officialImage: string;
  profileLink: string;
  messageContent: ReactNode;
  notices: Notice[];
  events: Event[];
  footerEntityName: string; // e.g., "Office of the Vice-Chancellor"
}

export default function AdministrationSubPageTemplate({
  pageTitle,
  officialName,
  officialTitle,
  officialSubtitle,
  officialImage,
  profileLink,
  messageContent,
  notices,
  events,
  footerEntityName,
}: AdministrationSubPageProps) {
  // Reusable CSS from computed styles for main content containers
  const elementorBoxedClass =
    "bg-white border-t-[3px] border-t-[#575757] rounded-[3px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)] p-[10px] relative w-full max-w-[1140px] mx-auto";

  return (
    <div className="flex flex-col w-full font-roboto min-h-screen">
      {/* 1. Hero Banner (Kept same based on prior professional handling) */}
      <section className="relative w-full h-[300px] md:h-[450px] flex items-center justify-center overflow-hidden slider-header">
        <Image
          src="https://www.ru.ac.bd/vc/wp-content/uploads/sites/3/2022/02/admin-building.jpg"
          alt="Administration Building"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 banner-bg"></div>
        <div className="relative z-10 container mx-auto px-4 md:px-0 max-w-[1140px] flex flex-col justify-center h-full text-right items-end carousel-caption">
          <div className="banner-text">
            <h4 className="text-white text-[24px] md:text-[32px] font-bold mb-2 drop-shadow-md">
              Rajshahi University Administration Building
            </h4>
            <h6 className="text-white text-[16px] md:text-[18px] mb-6 drop-shadow-md font-normal">
              Administration Building
            </h6>
            <p>
              <Link
                href="#"
                className="bg-[#4b4e94] hover:bg-[#3b3e7a] text-white px-8 py-3 rounded-sm font-bold text-[14px] transition-colors shadow-lg btn slide_button"
              >
                READ MORE
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* 2. Message Content Area - Elementor Styled (image_21.png) */}
      <section className="w-full bg-[#f1f1f1] py-12 md:py-16 space vc-page content-area">
        <div className="container-full default-page-contaienr page_php">
          <div className={elementorBoxedClass}>
            {/* Elementor Inner Section 98f596e - Heading */}
            <div className="mb-8 md:mb-10 p-[10px]">
              <h2 className="text-[22px] md:text-[28px] font-bold text-[#337ab7] elementor-heading-title">
                {pageTitle}
              </h2>
            </div>

            {/* Elementor Inner Section 4853fdb - Profile area */}
            <div className="flex flex-col md:flex-row mb-10 gap-6 p-[10px] items-start md:items-center">
              {/* Left Side: Image + Details */}
              <div className="flex flex-row items-center gap-6 flex-grow elementor-widget-image-box">
                <div className="w-[120px] md:w-[150px] h-[160px] md:h-[200px] relative shrink-0 elementor-image-box-img">
                  <Image
                    src={officialImage}
                    alt={officialName}
                    fill
                    className="object-cover rounded-sm shadow-sm attachment-full size-full"
                  />
                </div>
                <div className="flex flex-col justify-center elementor-image-box-content">
                  <h3 className="text-[18px] md:text-[24px] font-bold text-[#333333] mb-1 elementor-image-box-title">
                    {officialName}
                  </h3>
                  <h4 className="text-[16px] md:text-[19px] font-bold text-[#555555]">
                    {officialTitle}
                  </h4>
                  <h6 className="text-[14px] md:text-[15px] text-gray-500 mt-1 font-normal">
                    {officialSubtitle}
                  </h6>
                </div>
              </div>

              {/* Right Side: View Profile Button - Zoom animated in designs */}
              <div className="flex items-center justify-end md:shrink-0 w-full md:w-auto elementor-widget-button animated zoomIn">
                <div className="elementor-button-wrapper">
                  <Link
                    href={profileLink}
                    className="inline-flex items-center gap-2 bg-[#002147] hover:bg-[#001530] text-white px-8 py-3 text-[14px] md:text-[15px] font-medium rounded-sm transition-colors shadow-sm uppercase elementor-button elementor-size-lg elementor-animation-hang"
                  >
                    <BookOpen className="w-4 h-4 elementor-button-icon" />
                    <span className="elementor-button-text">View Profile</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Elementor Inner Section 849b43f - Message Text */}
            <div className="prose max-w-none text-[#333333] text-[15px] leading-[1.8] text-justify mb-8 md:mb-10 p-[10px] elementor-widget-text-editor">
              {messageContent}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Events and Notices Area - Side-by-Side Elementor design (image_22.png) */}
      <section className="w-full bg-[#f1f1f1] py-16 space notices-events content-area">
        <div className="container-full default-page-contaienr page_php">
          {/* elementor-element-c67b93f - Boxed container same as message */}
          <div
            className={`${elementorBoxedClass} align-content-center flex-wrap flex`}
          >
            {/* elementor-column-gap-default provides the spacing */}
            <div className="w-full flex flex-col md:flex-row md:gap-10 p-[10px] elementor-container">
              {/* Left Column: Latest Events (f8de7ac) */}
              <div className="w-full md:w-1/2 flex flex-col mb-10 md:mb-0 elementor-inner-column">
                <div className="mb-6 elementor-widget-heading">
                  <h2 className="text-[22px] md:text-[26px] font-roboto font-bold text-[#6EC1E4] elementor-heading-title">
                    Latest Events
                  </h2>
                </div>

                {/* elementor-widget-shortcode -> ron_post_item design from image */}
                <div className="flex flex-col gap-4 mb-6 feature_posts front_page elementor-shortcode">
                  {events.map((event) => (
                    <div
                      key={event.id}
                      className="flex flex-col bg-white border border-gray-200 rounded-sm overflow-hidden transition-shadow hover:shadow-md ron_post_item ron_post_image"
                    >
                      {/* Image on top */}
                      <div className="w-full h-[180px] relative feature_postitem_image">
                        <Image
                          src={event.image}
                          alt={event.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      {/* Details on bottom */}
                      <div className="p-4 flex flex-col justify-center feature_postitem_textarea">
                        <div className="flex items-center gap-2 text-[#7A7A7A] text-[13px] font-medium mb-2 ron_postitem_date">
                          <Calendar className="w-4 h-4" />
                          <span>{event.date}</span>
                        </div>
                        <h3 className="text-[16px] md:text-[18px] font-bold text-[#333333] hover:text-blue-600 transition-colors line-clamp-2 mb-3 ron_postitem_title">
                          <Link href={event.link}>{event.title}</Link>
                        </h3>
                        <Link
                          href={event.link}
                          className="inline-flex items-center gap-1 text-[#333333] hover:text-[#6EC1E4] font-bold text-[13px] uppercase ron_postitem_readmore"
                        >
                          READ MORE <ChevronRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>

                {/* All Events Button 376601b */}
                <div className="flex justify-end mt-auto elementor-widget-button animated zoomIn">
                  <div className="elementor-button-wrapper">
                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 bg-[#1b2032] hover:bg-[#2c3452] text-white text-[12px] font-bold uppercase px-6 py-2.5 rounded-sm transition-colors elementor-button elementor-animation-hang"
                    >
                      <span className="elementor-button-icon">
                        <ArrowRight className="w-4 h-4" />
                      </span>
                      <span className="elementor-button-text">ALL EVENTS</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Column: Latest Notices (3e5d75f) */}
              <div className="w-full md:w-1/2 flex flex-col elementor-inner-column">
                <div className="mb-6 elementor-widget-heading">
                  <h2 className="text-[22px] md:text-[26px] font-roboto font-bold text-[#6EC1E4] elementor-heading-title">
                    Latest Notices
                  </h2>
                </div>

                {/* elementor-widget-shortcode -> ron_notices_item design from image */}
                <div className="flex flex-col gap-3 mb-6 notices_list front_page elementor-shortcode">
                  {notices.map((notice) => (
                    <div
                      key={notice.id}
                      className="flex items-stretch bg-[#1b2032] text-white rounded-sm overflow-hidden shadow-sm hover:-translate-y-[2px] transition-transform ron_notices_item"
                    >
                      {/* Date box - ron_notice_date from designs */}
                      <div className="flex flex-col items-center justify-center bg-[#1b2032] border-r border-gray-600 px-4 py-2 min-w-[70px] ron_notice_date">
                        <span className="text-[20px] font-bold leading-none ron_nday">
                          {notice.day}
                        </span>
                        <span className="text-[12px] uppercase font-medium mt-1 ron_nmonth">
                          {notice.month}
                        </span>
                      </div>
                      {/* Title ron_notice_title */}
                      <div className="flex-1 flex items-center px-4 py-2 ron_notice_title">
                        <Link
                          href={notice.link}
                          className="text-[14px] font-medium hover:text-gray-300 transition-colors line-clamp-2"
                        >
                          {notice.title}
                        </Link>
                      </div>
                      {/* Download ron_notice_download */}
                      <div className="flex items-center justify-center px-4 border-l border-gray-600/30 ron_notice_download">
                        <Link
                          href={notice.link}
                          className="text-white hover:text-[#6EC1E4] transition-colors eicon-file-download"
                        >
                          <Download className="w-4.5 h-4.5" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>

                {/* All Notices Button 498c564 */}
                <div className="flex justify-end mt-auto elementor-widget-button animated zoomIn">
                  <div className="elementor-button-wrapper">
                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 bg-[#1b2032] hover:bg-[#2c3452] text-white text-[12px] font-bold uppercase px-6 py-2.5 rounded-sm transition-colors elementor-button elementor-animation-hang"
                    >
                      <span className="elementor-button-icon">
                        <ArrowRight className="w-4 h-4" />
                      </span>
                      <span className="elementor-button-text">ALL NOTICES</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Custom Administration Footer */}
      <AdministrationFooter entityName={footerEntityName} />
    </div>
  );
}
