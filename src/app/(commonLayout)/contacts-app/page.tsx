import Image from "next/image";
import Link from "next/link";
import { Smartphone, Download, CheckCircle2 } from "lucide-react";

export default function RUContactsAppPage() {
  return (
    <div className="w-full min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300 font-roboto">
      <div className="h-[70px] bg-[#002147] w-full shrink-0"></div>

      <section className="py-16 md:py-24 px-4 overflow-hidden">
        <div className="container mx-auto max-w-[1140px] flex flex-col md:flex-row items-center gap-12">
          {/* Left: App Info */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left animate-in fade-in slide-in-from-left-8 duration-700">
            <div className="bg-[#e8f4f8] dark:bg-slate-800 p-3 rounded-full mb-6 inline-block">
              <Smartphone className="w-8 h-8 text-[#337ab7] dark:text-[#6EC1E4]" />
            </div>
            <h1 className="text-[32px] md:text-[42px] font-bold text-[#002147] dark:text-white leading-tight mb-4">
              RU Contacts App
            </h1>
            <p className="text-[16px] md:text-[18px] text-[#555555] dark:text-slate-300 mb-8 leading-relaxed">
              Stay connected with the University of Rajshahi. The official RU
              Contacts app gives you instant access to important phone numbers,
              emails, and office locations right from your mobile device.
            </p>

            <ul className="flex flex-col gap-3 mb-10 text-left w-full md:w-auto">
              {[
                "Offline access to directory",
                "One-tap calling & emailing",
                "Search by department or name",
                "Regularly updated database",
              ].map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 text-[#333333] dark:text-slate-200"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="font-medium text-[15px]">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Link
                href="#"
                className="flex items-center gap-2 bg-[#002147] hover:bg-[#001530] text-white px-6 py-3 rounded-md font-bold transition-colors shadow-md"
              >
                <Download className="w-5 h-5" /> Download for Android
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 text-[#333333] dark:text-white border border-gray-300 dark:border-slate-700 px-6 py-3 rounded-md font-bold transition-colors shadow-sm"
              >
                <Download className="w-5 h-5" /> Download for iOS
              </Link>
            </div>
          </div>

          {/* Right: App Mockup Placeholder */}
          <div className="w-full md:w-1/2 flex justify-center animate-in fade-in slide-in-from-right-8 duration-700 delay-150">
            <div className="relative w-[280px] h-[580px] bg-gray-100 dark:bg-slate-800 border-[8px] border-gray-800 dark:border-black rounded-[3rem] shadow-2xl overflow-hidden flex flex-col">
              <div className="w-full h-16 bg-[#002147] flex items-center justify-center text-white font-bold text-lg">
                RU Contacts
              </div>
              <div className="flex-1 p-4 flex flex-col gap-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-full h-16 bg-white dark:bg-slate-700 rounded-md shadow-sm border border-gray-200 dark:border-slate-600 flex items-center px-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-slate-500 mr-4"></div>
                    <div className="flex-1">
                      <div className="w-24 h-3 bg-gray-200 dark:bg-slate-500 rounded mb-2"></div>
                      <div className="w-16 h-2 bg-gray-100 dark:bg-slate-600 rounded"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
