import Image from "next/image";
import Link from "next/link";
import { Star, Download, ArrowRight, CalendarDays } from "lucide-react";

// Mock Data for Journals
const journals = [
  {
    title: "Rajshahi University Journal of Arts & Law",
    image: "/logo/ru-logo.png", // Replace with actual cover images
    link: "#",
    btnColor: "bg-[#f0ad4e] hover:bg-[#ec971f]",
  },
  {
    title: "Rajshahi University Journal of Science and Engineering",
    image: "/logo/ru-logo.png",
    link: "#",
    btnColor: "bg-[#5cb85c] hover:bg-[#449d44]",
  },
  {
    title: "Rajshahi University Journal of Social Science and Business Studies",
    image: "/logo/ru-logo.png",
    link: "#",
    btnColor: "bg-[#5bc0de] hover:bg-[#31b0d5]",
  },
  {
    title:
      "Rajshahi University Journal of Life & Earth and Agricultural Sciences",
    image: "/logo/ru-logo.png",
    link: "#",
    btnColor: "bg-[#5cb85c] hover:bg-[#449d44]",
  },
];

// Mock Data for Notices
const notices = [
  {
    day: "14",
    month: "OCT",
    title:
      "রাজশাহী বিশ্ববিদ্যালয় বার্ষিক প্রতিবেদন ২০২২-২০২৩ এর জন্য তথ্য আহ্বান এবং তথ্যছক",
    link: "#",
  },
  {
    day: "11",
    month: "APR",
    title:
      "’রাজশাহী ইউনিভারসিটি জার্নাল অব আর্টস এন্ড ল’ এর ভলিউম ৪৯, ২০২১ প্রকাশিত হয়েছে",
    link: "#",
  },
  {
    day: "26",
    month: "FEB",
    title:
      "Call For Papers: Rajshahi University Journal of Social Science and Business Studies",
    link: "#",
  },
];

// Mock Data for Events
const events = [
  {
    date: "10-08-2025",
    title: "CALL FOR PAPERS",
    image: "/logo/ru-logo.png", // Replace with actual event image
    link: "#",
  },
  {
    date: "26-11-2025",
    title:
      "রাজশাহী বিশ্ববিদ্যালয়ের বার্ষিক প্রতিবেদন ২০২৩-২০২৪ প্রকাশিত হয়েছে",
    image: "/logo/ru-logo.png",
    link: "#",
  },
];

export default function PublicationsOfficePage() {
  return (
    <div className="w-full min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      {/* 1. Spacer for Absolute Navbar */}
      <div className="h-[70px] bg-[#002147] w-full shrink-0"></div>

      {/* 2. Secondary Top Navbar */}
      <div className="w-full bg-[#002147] shadow-md">
        <div className="container mx-auto max-w-[1140px] px-4 md:px-0">
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 py-3 md:py-4">
            {[
              "HOME",
              "ANNUAL REPORT",
              "বার্ষিক প্রতিবেদনের তথ্যছক",
              "RU JOURNALS",
              "CALL FOR PAPERS",
              "GUIDELINES FOR AUTHORS",
            ].map((item, idx) => (
              <div key={idx} className="flex items-center">
                <Link
                  href="#"
                  className="text-[12px] md:text-[14px] font-roboto font-semibold text-white hover:text-[#6EC1E4] uppercase tracking-wider transition-colors"
                >
                  {item}
                </Link>
                {idx < 5 && (
                  <span className="text-white/50 ml-6 hidden md:inline-block">
                    |
                  </span>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>

      <main className="container mx-auto max-w-[1140px] px-4 md:px-0 py-12 flex flex-col gap-12">
        {/* 3. Welcome Section & Quick Links */}
        <section className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-[#dddddd] dark:border-slate-700 pb-8">
          <h1 className="text-2xl md:text-3xl text-[#002147] dark:text-[#6EC1E4] font-bold">
            Welcome to Publications Office
          </h1>
          <div className="flex gap-4">
            <Link
              href="#"
              className="bg-[#5cb85c] hover:bg-[#449d44] text-white px-6 py-2.5 rounded shadow-sm text-sm font-semibold transition-colors"
            >
              বার্ষিক কর্মপরিকল্পনা
            </Link>
            <Link
              href="#"
              className="bg-[#5cb85c] hover:bg-[#449d44] text-white px-6 py-2.5 rounded shadow-sm text-sm font-semibold transition-colors"
            >
              সিটিজেন চার্টার
            </Link>
          </div>
        </section>

        {/* 4. Teal Banner */}
        <section className="bg-[#1abc9c] dark:bg-teal-800 text-white p-10 text-center rounded-sm shadow-md transition-colors duration-300">
          <div className="flex justify-center mb-4">
            <Star className="w-10 h-10 fill-white" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            RAJSHAHI UNIVERSITY JOURNALS
          </h2>
          <p className="text-lg md:text-xl font-light">
            Rajshahi University Journals are ONLINE now! With dedicated DOI
            prefix [https://doi.org/10.64102]
          </p>
        </section>

        {/* 5. Journals Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {journals.map((journal, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center group"
            >
              <h3 className="font-bold text-[#333333] dark:text-slate-200 mb-6 h-[48px] line-clamp-2">
                {journal.title}
              </h3>
              <div className="relative w-full max-w-[210px] h-[300px] mb-6 overflow-hidden shadow-md group-hover:shadow-xl transition-shadow bg-gray-100 dark:bg-slate-800">
                <Image
                  src={journal.image}
                  alt={journal.title}
                  fill
                  className="object-contain p-2"
                />
              </div>
              <Link
                href={journal.link}
                className={`text-white px-6 py-2.5 rounded w-full max-w-[210px] shadow-sm text-sm font-semibold transition-colors ${journal.btnColor}`}
              >
                Submit Article Online
              </Link>
            </div>
          ))}
        </section>

        {/* 6. Message & Profile Section */}
        <section className="flex flex-col md:flex-row gap-10 bg-[#f9f9f9] dark:bg-slate-950 p-8 rounded-md border border-[#dddddd] dark:border-slate-800 transition-colors duration-300">
          <div className="w-full md:w-2/3">
            <h2 className="text-xl font-bold text-[#002147] dark:text-[#6EC1E4] mb-4">
              দপ্তর প্রধানের বার্তা
            </h2>
            <p className="text-[#333333] dark:text-slate-300 leading-relaxed mb-4">
              প্রকাশনা দপ্তর রাজশাহী ইউনিভার্সিটি জার্নাল অব আর্টস এন্ড ল,
              রাজশাহী ইউনিভার্সিটি জার্নাল অব সায়েন্স এন্ড ইঞ্জিনিয়ারিং,
              রাজশাহী ইউনিভার্সিটি জার্নাল অব সোস্যাল সায়েন্স এন্ড বিজনেজ
              স্টাডিজ, রাজশাহী ইউনিভার্সিটি জার্নাল অব লাইফ এন্ড আর্থ এন্ড
              এগ্রিকালচারাল সায়েন্সেস, পাঠ্য পুস্তক, সিনেট কার্যবিবরণী, বার্ষিক
              প্রতিবেদন ও অন্যান্য প্রকাশনার দায়িত্ব পালন করে।
            </p>
            <p className="text-[#333333] dark:text-slate-300 font-semibold mb-8">
              মো. সাদেকুল ইসলাম <br />
              ডেপুটি রেজিস্ট্রার <br />
              প্রকাশনা দপ্তর, রাজশাহী বিশ্ববিদ্যালয়।
            </p>

            <h3 className="text-lg font-bold text-[#002147] dark:text-[#6EC1E4] mb-2">
              ভিশন
            </h3>
            <p className="text-[#333333] dark:text-slate-300 leading-relaxed mb-6">
              একটি বিশিষ্ট বিদ্যায়তনিক প্রকাশনা প্রতিষ্ঠান হিসাবে আত্মপ্রকাশ
              করা, যা উৎকর্ষ, উদ্ভাবন এবং বৈশ্বিক সম্পৃক্ততার মাধ্যমে রাজশাহী
              বিশ্ববিদ্যালয়ের মিশনকে এগিয়ে নিয়ে যাবে।
            </p>

            <h3 className="text-lg font-bold text-[#002147] dark:text-[#6EC1E4] mb-2">
              মিশন
            </h3>
            <ul className="list-disc pl-6 text-[#333333] dark:text-slate-300 leading-relaxed space-y-2">
              <li>
                নৈতিক, স্বচ্ছ এবং সময়োপযোগী প্রকাশনা প্রক্রিয়া নিশ্চিতকরণের
                মধ্যদিয়ে অ্যাকাডেমিক স্বচ্ছতা বজায় রেখে গবেষণামূলক কাজ প্রকাশ
                ও প্রসারিত করা।
              </li>
              <li>
                জাতীয় ও আন্তর্জাতিক পর্যায়ে রাজশাহী বিশ্ববিদ্যালয়ের গবেষণা
                প্রকাশনাসমূহের দৃশ্যমানতা বৃদ্ধি করা।
              </li>
              <li>
                গবেষণার উৎকর্ষতা এবং প্রাজ্ঞ যোগাযোগের সংস্কৃতি গড়ে তোলা।
              </li>
              <li>
                ব্যাপক প্রচার এবং প্রভাবের জন্য ডিজিটাল উদ্ভাবনকে গ্রহণ করা।
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/3 flex justify-center md:justify-end items-start">
            <div className="bg-white dark:bg-slate-900 shadow-lg border border-[#dddddd] dark:border-slate-800 p-4 rounded-sm text-center max-w-[280px]">
              <div className="relative w-full h-[280px] mb-4 bg-gray-100 dark:bg-slate-800">
                <Image
                  src="/logo/ru-logo.png"
                  alt="Md. Sadequl Islam"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-[14px] text-gray-600 dark:text-slate-400">
                Md. Sadequl Islam, Deputy Registrar, Publications Office,
                University of Rajshahi
              </p>
            </div>
          </div>
        </section>

        {/* 7. Latest Events & Notices */}
        <section className="flex flex-col md:flex-row gap-10 mt-6">
          {/* Events Left */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold text-[#337ab7] dark:text-[#6EC1E4] mb-6">
              Latest Events
            </h2>
            <div className="flex flex-col gap-6">
              {events.map((event, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 border border-[#dddddd] dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative w-[120px] h-[150px] shrink-0 bg-gray-100 dark:bg-slate-800">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 flex flex-col justify-center">
                    <div className="flex items-center gap-2 text-gray-500 dark:text-slate-400 text-sm font-semibold mb-2">
                      <CalendarDays className="w-4 h-4" /> {event.date}
                    </div>
                    <Link
                      href={event.link}
                      className="text-lg font-bold text-[#333333] dark:text-slate-200 hover:text-[#337ab7] dark:hover:text-[#6EC1E4] line-clamp-2 transition-colors"
                    >
                      {event.title}
                    </Link>
                    <Link
                      href={event.link}
                      className="mt-3 text-[#337ab7] dark:text-[#6EC1E4] text-sm font-bold flex items-center gap-1 hover:underline"
                    >
                      READ MORE <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Notices Right */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold text-[#337ab7] dark:text-[#6EC1E4] mb-6">
              Latest Notices
            </h2>
            <div className="flex flex-col gap-4">
              {notices.map((notice, idx) => (
                <div
                  key={idx}
                  className="flex border border-[#002147] dark:border-slate-700 bg-[#002147] dark:bg-slate-800 text-white shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* Date Badge */}
                  <div className="w-[80px] shrink-0 border-r border-white/20 flex flex-col items-center justify-center p-3">
                    <span className="text-2xl font-bold leading-none">
                      {notice.day}
                    </span>
                    <span className="text-sm font-semibold uppercase">
                      {notice.month}
                    </span>
                  </div>
                  {/* Title */}
                  <div className="flex-1 p-4 flex items-center">
                    <Link
                      href={notice.link}
                      className="text-sm md:text-base font-semibold hover:text-[#6EC1E4] transition-colors line-clamp-2"
                    >
                      {notice.title}
                    </Link>
                  </div>
                  {/* Download Icon */}
                  <div className="w-[60px] shrink-0 border-l border-white/20 flex items-center justify-center">
                    <Link
                      href={notice.link}
                      className="hover:text-[#6EC1E4] transition-colors"
                    >
                      <Download className="w-6 h-6" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-end">
              <Link
                href="#"
                className="bg-[#002147] dark:bg-slate-800 hover:bg-[#337ab7] dark:hover:bg-slate-700 text-white px-6 py-2.5 rounded shadow-sm text-sm font-bold transition-colors inline-flex items-center gap-2"
              >
                <ArrowRight className="w-4 h-4" /> ALL NOTICES
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
