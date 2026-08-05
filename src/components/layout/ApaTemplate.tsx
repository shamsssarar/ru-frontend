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
    <div className="w-full min-h-screen bg-white text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-50">

      <section className="relative w-full h-70 md:h-90 overflow-hidden bg-slate-100 dark:bg-slate-950">
        <Image
          src="/slider/abg-2.jpg"
          alt="APA hero background"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/40 dark:bg-slate-950/90" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center z-10">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-white/80 drop-shadow-lg">
            {data.titleEn}
          </h1>
          <p className="mt-4 max-w-2xl text-sm md:text-base text-slate-200/90 leading-relaxed">
            {data.titleBn}
          </p>
        </div>

        <div className="absolute bottom-6 right-6 z-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:scale-[1.02] hover:bg-cyan-400 dark:bg-cyan-500 dark:text-slate-950"
          >
            <ArrowLeft className="w-4 h-4" /> Home
          </Link>
        </div>
      </section>

      <section className="py-12 px-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <div className="container mx-auto max-w-285">
          <div className="grid gap-8 xl:grid-cols-[1.35fr_0.85fr] items-start">
            <div className="space-y-6">
              <div className="rounded-[32px] border border-slate-200/80 bg-white/95 p-8 shadow-[0_24px_80px_-48px_rgba(15,23,42,0.12)] transition-all duration-300 dark:border-slate-800/80 dark:bg-slate-950/90 dark:shadow-[0_24px_80px_-48px_rgba(15,23,42,0.85)]">
                <div className="mb-6">
                  <span className="inline-flex rounded-full bg-emerald-500/15 px-3 py-1 text-[13px] font-semibold uppercase tracking-[0.25em] text-emerald-500 ring-1 ring-emerald-500/20 dark:text-emerald-300 dark:ring-emerald-300/20">
                    APA Document Details
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-slate-950 dark:text-white tracking-tight">
                  {data.titleBn}
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-700 dark:text-slate-300">
                  এই পৃষ্ঠাটি রুপা বিশ্ববিদ্যালয়ের বার্ষিক কর্মসম্পাদন চুক্তি
                  (APA) সংক্রান্ত তথ্য, নোটিশ ও ডকুমেন্ট প্রদর্শনের জন্য তৈরি
                  করা হয়েছে। প্রতিটি সেকশনের জন্য ইউজার-ফ্রেন্ডলি অ্যাকর্ডিয়ন
                  এবং ইনলাইন PDF ভিউয়ার সহ প্রদর্শিত হবে।
                </p>
              </div>

              <div className="space-y-4 rounded-[32px] border border-slate-200/80 bg-slate-50 p-6 shadow-xl shadow-slate-950/10 transition-all duration-300 dark:border-slate-800/80 dark:bg-slate-950/80 dark:shadow-slate-950/30">
                {data.accordions.map((item, index) => {
                  const isOpen = openIndex === index;

                  return (
                    <div
                      key={index}
                      className={`overflow-hidden rounded-[24px] border transition-all duration-300 ${
                        isOpen
                          ? "border-cyan-500/40 bg-cyan-50 shadow-[0_20px_50px_-30px_rgba(6,182,212,0.25)] dark:border-cyan-500/40 dark:bg-slate-900/90 dark:shadow-[0_20px_50px_-30px_rgba(6,182,212,0.55)]"
                          : "border-slate-200/80 bg-white/95 hover:border-cyan-500/40 hover:bg-slate-50 dark:border-slate-800/70 dark:bg-slate-950/80 dark:hover:border-cyan-500/30 dark:hover:bg-slate-900/80"
                      }`}
                    >
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => toggleAccordion(index)}
                        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-300"
                      >
                        <span
                          className={`text-base font-semibold ${isOpen ? "text-cyan-500 dark:text-cyan-300" : "text-slate-900 dark:text-slate-100"}`}
                        >
                          {item.title}
                        </span>
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800/80 text-cyan-300 transition-colors duration-300">
                          {isOpen ? (
                            <Minus className="w-4 h-4" />
                          ) : (
                            <Plus className="w-4 h-4" />
                          )}
                        </span>
                      </button>

                      <div
                        className={`${isOpen ? "max-h-225" : "max-h-0"} overflow-hidden transition-all duration-300`}
                      >
                        <div className="border-t border-slate-200/70 bg-white p-6 dark:border-slate-800/70 dark:bg-slate-950/95">
                          <div className="mb-4 rounded-3xl border border-slate-200/80 bg-slate-50 p-4 shadow-inner shadow-slate-950/05 dark:border-slate-800/80 dark:bg-slate-900/90 dark:shadow-slate-950/40">
                            <p className="text-sm text-slate-600 leading-relaxed dark:text-slate-300">
                              PDF ডকুমেন্টটি নিচে ভিউ করতে পারেন অথবা নতুন
                              ট্যাবে খুলতে পারেন।
                            </p>
                          </div>

                          <div className="h-115 overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-50 shadow-inner shadow-slate-950/05 dark:border-slate-800/80 dark:bg-slate-950 dark:shadow-slate-950/20">
                            <iframe
                              src={item.pdfUrl}
                              width="100%"
                              height="100%"
                              className="border-0"
                              title={item.title}
                            />
                          </div>

                          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <p className="text-sm text-slate-400">
                              ডকুমেন্ট লোড না হলে, নিচের বোতনে ক্লিক করে নতুন
                              ট্যাবে খুলুন।
                            </p>
                            <a
                              href={item.pdfUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:bg-cyan-400"
                            >
                              Open PDF
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <aside className="space-y-6 rounded-[32px] border border-slate-200/80 bg-white p-6 shadow-[0_24px_80px_-48px_rgba(15,23,42,0.12)] transition-all duration-300 dark:border-slate-800/80 dark:bg-slate-950/90 dark:shadow-[0_24px_80px_-48px_rgba(15,23,42,0.9)]">
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                  APA থেকে কি আশা করবেন
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
                  প্রতিটি সেকশনে গুরুত্বপূর্ণ নোটিশ ও ডকুমেন্টের সরাসরি
                  রেফারেন্স দেখানো হবে। ডার্ক মোডে সহজ পঠনযোগ্যতার জন্য
                  কন্ট্রাস্ট ও স্পেসিং উন্নত করা হয়েছে।
                </p>
              </div>

              <div className="rounded-3xl border border-cyan-500/20 bg-slate-50 p-5 dark:bg-slate-900/90">
                <p className="text-sm uppercase tracking-[0.25em] text-cyan-500 dark:text-cyan-300">
                  Quick notes
                </p>
                <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  <li>ইনলাইন PDF ভিউয়ার সহ দ্রুত ডকুমেন্ট এক্সেস।</li>
                  <li>রঙ-সমৃদ্ধ হেডিং ও ক্লিয়ার বোতন স্টাইল।</li>
                  <li>ডার্ক মোডে পাঠযোগ্যতা বজায় রাখা হয়েছে।</li>
                  <li>প্রস্তুতকৃত UI মডার্ন, কনসিস ও রেস্পন্সিভ।</li>
                </ul>
              </div>

              <div className="rounded-3xl border border-slate-200/80 bg-slate-50 p-5 dark:border-slate-800/80 dark:bg-slate-950/95">
                <h4 className="text-base font-semibold text-slate-950 dark:text-white">
                  প্রকল্প সম্পর্কে
                </h4>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  এই পেজটি রজার বিশ্ববিদ্যালয়ের APA সেকশনের জন্য ডিজাইন করা
                  হয়েছে। ডার্ক থিম, মসৃণ ট্রানজিশন, এবং অ্যাক্সেসযোগ্য
                  প্রেজেন্টেশন এখানে প্রাধান্য পেয়েছে।
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
