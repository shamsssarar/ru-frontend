"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const apaData = [
  {
    id: 1,
    title: "জাতীয় শুদ্ধাচার কৌশল",
    image: "https://www.ru.ac.bd/wp-content/uploads/2022/10/nsi_logo.png",
    links: [
      {
        text: "শুদ্ধাচার কৌশল কর্মপরিকল্পনা",
        url: "apa/purification-strategy-action-plan/",
      },
      {
        text: "ফোকাল পয়েন্ট কর্মকর্তা ও বিকল্প কর্মকর্তা",
        url: "apa/focal-point-officer-and-substitute-officer/",
      },
      {
        text: "ত্রৈমাসিক/ষান্মাসিক মূল্যায়ন প্রতিবেদন",
        url: "apa/quarterly-six-monthly-monitoring-evaluation-reports/",
      },
      {
        text: "প্রজ্ঞাপন/পরিপত্র/নীতিমালা",
        url: "apa/notifications-circulars-policies/",
      },
      { text: "শুদ্ধাচার পুরস্কার", url: "apa/purity-award/" },
      { text: "নৈতিকতা কমিটি", url: "apa/ethics-committee/" },
    ],
  },
  {
    id: 2,
    title: "বার্ষিক কর্মসম্পাদন চুক্তি",
    image: "https://www.ru.ac.bd/wp-content/uploads/2022/10/apa-logo.png",
    links: [
      {
        text: "এপিএ নির্দেশিকা/পরিপত্র/এপিএ টিম",
        url: "apa/apa-guidelines-circulars-apa-team/",
      },
      {
        text: "বার্ষিক কর্মসম্পাদন চুক্তিসমূহ",
        url: "apa/annual-performance-contracts/",
      },
      {
        text: "অফিস আদেশ/পরিবীক্ষণ ও মূল্যায়ন প্রতিবেদন",
        url: "apa/office-order-inspection-and-evaluation-report/",
      },
      { text: "এপিএ এমএস সফটওয়্যার লিংক", url: "apa/apa-ms-software-links/" },
    ],
  },
  {
    id: 3,
    title: "উদ্ভাবনী কার্যক্রম",
    image:
      "https://www.ru.ac.bd/wp-content/uploads/2022/10/innovation_logo.png",
    links: [
      { text: "ইনোভেশন টীম", url: "apa/innovation-team/" },
      {
        text: "প্রজ্ঞাপন/নীতিমালা/অফিস আদেশ",
        url: "apa/notifications-policies-office-orders/",
      },
      {
        text: "বার্ষিক উদ্ভাবনী কর্মপরিকল্পনা/কার্যবিবরণী",
        url: "apa/annual-innovation-action-plan-action-statement/",
      },
      {
        text: "শ্রেষ্ঠ উদ্ভাবনী ধারণা/বাস্তবায়ন ও শোকেসিং",
        url: "apa/best-innovative-concept-implementation-and-showcase/",
      },
    ],
  },
  {
    id: 4,
    title: "অভিযোগ প্রতিকার ব্যবস্থাপনা",
    image: "https://www.ru.ac.bd/wp-content/uploads/2022/10/complain_logo.png",
    links: [
      {
        text: "অনিক ও আপিল কর্মকর্তা",
        url: "apa/grievance-redressal-officer-appeal-officer/",
      },
      {
        text: "মাসিক/ত্রৈমাসিক/বার্ষিক মূল্যায়ন প্রতিবেদন",
        url: "apa/monthly-quarterly-annual-evaluation-report/",
      },
      {
        text: "অভিযোগ দাখিল (অনলাইন/সরাসরি)",
        url: "apa/complaint-submission-online-direct/",
      },
      {
        text: "আইন/বিধি/পরি-পত্র/নীতিমালা/নির্দেশিকা",
        url: "apa/laws-rules-regulations-policies-guidelines/",
      },
    ],
  },
  {
    id: 5,
    title: "তথ্য অধিকার",
    image: "https://www.ru.ac.bd/wp-content/uploads/2022/10/rinfo_logo.png",
    links: [
      {
        text: "দায়িত্বপ্রাপ্ত কর্মকর্তা ও আপিল কর্তৃপক্ষ",
        url: "apa/responsible-officer-and-appellate-authority/",
      },
      { text: "আবেদন ও আপিল ফরম", url: "apa/application-and-appeal-form/" },
      {
        text: "স্বপ্রণোদিতভাবে প্রকাশযোগ্য তথ্যসমূহ",
        url: "apa/voluntarily-disclosable-information/",
      },
      {
        text: "আইন/বিধি/পরি-পত্র/নীতিমালা/নির্দেশিকা",
        url: "apa/laws-rules-regulations-policies-guidelines-2/",
      },
      {
        text: "তথ্যের ক্যাটাগরি ও ক্যাটালগ",
        url: "apa/categories-and-catalogs-of-information/",
      },
    ],
  },
  {
    id: 6,
    title: "সেবা প্রদান প্রতিশ্রুতি (সিটিজেনস চার্টার)",
    image: "https://www.ru.ac.bd/wp-content/uploads/2022/10/citizen_logo.png",
    links: [
      { text: "সিটিজেন চার্টার", url: "apa/citizen-charter/" },
      {
        text: "ফোকাল পয়েন্ট কর্মকর্তা/পরিবীক্ষণ কমিটি",
        url: "apa/focal-point-officer-monitoring-committee/",
      },
      {
        text: "ত্রৈমাসিক/বার্ষিক পরিবীক্ষণ/মূল্যায়ন প্রতিবেদন",
        url: "apa/quarterly-annual-monitoring-evaluation-reports/",
      },
      {
        text: "আইন/বিধি/নীতিমালা ও পরিপত্র",
        url: "apa/laws-rules-policies-and-circulars/",
      },
      { text: "সিটিজেন চার্টার কমিটি", url: "apa/citizen-charter-committee/" },
    ],
  },
];

export default function APASection() {
  return (
    <section className="w-full bg-gray-50 flex justify-center pb-16 animate-in slide-in-from-bottom-8 duration-[2000ms] transition-colors duration-300 dark:bg-slate-950">
      <div className="container mx-auto px-4 md:px-0 max-w-[1140px]">
        {/* Section Header */}
        <div className="mb-6 md:mb-8 pl-2 md:pl-4">
          <h2 className="text-[16px] md:text-[24px] font-roboto font-bold text-[#008000] uppercase tracking-wide leading-tight">
            বার্ষিক কর্মসম্পাদন চুক্তি - ANNUAL PERFORMANCE AGREEMENT (APA)
          </h2>
        </div>

        {/* CSS Grid for the 6 Cards */}
        {/* Changed to grid-cols-2 on mobile, adjusting gaps for tighter spaces */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-8 w-full">
          {apaData.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-slate-900 rounded-[20px] md:rounded-[25px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)] flex flex-col items-center p-3 sm:p-4 md:p-6 lg:p-8 h-full transition-transform hover:-translate-y-1 transition-colors duration-300"
            >
              {/* Image Header */}
              <div className="mb-3 md:mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={120}
                  height={120}
                  // Responsive image scaling: tiny on mobile, full size on desktop
                  className="w-[60px] sm:w-[80px] md:w-[100px] lg:w-[120px] h-auto object-contain"
                />
              </div>

              {/* Title (Green) */}
              <h3 className="text-[13px] sm:text-[15px] md:text-[18px] font-roboto font-bold text-[#008000] text-center mb-4 md:mb-6 w-full dark:text-blue-300 leading-snug">
                {item.title}
              </h3>

              {/* Links List */}
              <ul className="flex flex-col gap-2 md:gap-3 w-full">
                {item.links.map((link, index) => (
                  <li key={index} className="flex items-start gap-1.5 md:gap-2">
                    {/* Custom Green Arrow Bullet - scaled for mobile */}
                    <div className="mt-[2px] md:mt-[3px] text-[#008000] dark:text-[#6EC1E4] shrink-0">
                      <ChevronRight
                        className="w-3 h-3 md:w-4 md:h-4"
                        strokeWidth={3}
                      />
                    </div>

                    {/* Blue Link Text - scaled for mobile */}
                    <Link
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0000FF] hover:text-[#0000AA] font-roboto text-[12px] sm:text-[12px] md:text-[14px] leading-tight hover:underline underline-offset-2 transition-colors duration-300 dark:text-blue-300 dark:hover:text-[#6EC1E4]"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
