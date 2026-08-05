"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const totalDocScrollLength = docHeight - winHeight;

      // Prevent division by zero on very short pages
      if (totalDocScrollLength <= 0) return;

      // Calculate percentage and cap it at 100
      const scrollPosition = Math.min(
        100,
        Math.floor((scrollTop / totalDocScrollLength) * 100),
      );

      setScrollPercent(scrollPosition);

      // Show button only after scrolling down 300px
      if (scrollTop > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check in case the page loads already scrolled down
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // SVG Circle Math for the progress ring
  const radius = 18;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset =
    circumference - (scrollPercent / 100) * circumference;

  // Dynamic States based on your requirements
  // 99 is used instead of 100 because some browsers stop sub-pixels short of a true 100%
  const isAlmostDone = scrollPercent >= 80 && scrollPercent < 99;
  const isFinished = scrollPercent >= 99;
  const isExpanded = isAlmostDone || isFinished;

  let buttonText = "";
  let containerClasses =
    "bg-white dark:bg-slate-800 text-[#002147] dark:text-[#6EC1E4] hover:bg-gray-50 dark:hover:bg-slate-700";
  let ringColor = "stroke-[#002147] dark:stroke-[#6EC1E4]";

  if (isFinished) {
    // 100% State (Professional alternative to "upore jan")
    // Bengali Alternative: "পৃষ্ঠার শেষে পৌঁছেছেন। উপরে যান"
    buttonText = "End of page. Back to top";
    containerClasses =
      "bg-[#002147] dark:bg-[#6EC1E4] text-white dark:text-slate-900 shadow-blue-500/20";
    ringColor = "stroke-white dark:stroke-slate-900";
  } else if (isAlmostDone) {
    // 80% State (Professional alternative to "upore jete hobe")
    // Bengali Alternative: "উপরে ফিরে যেতে চান?"
    buttonText = "Almost done? Go top";
    containerClasses = "bg-[#337ab7] text-white shadow-sky-500/20";
    ringColor = "stroke-white";
  }

  return (
    <div
      className={`fixed bottom-6 right-6 z-[90] transition-all duration-700 ease-in-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <button
        onClick={scrollToTop}
        className={`group flex items-center p-1.5 rounded-full shadow-lg border border-gray-200/50 dark:border-slate-700/50 transition-all duration-500 ease-out hover:scale-105 hover:shadow-xl ${containerClasses}`}
        aria-label="Scroll to top"
      >
        {/* SVG Progress Ring & Icon */}
        <div className="relative flex items-center justify-center w-10 h-10 shrink-0">
          <svg className="absolute inset-0 w-full h-full transform -rotate-90">
            {/* Background Track */}
            <circle
              cx="20"
              cy="20"
              r={radius}
              className="stroke-gray-200/30 dark:stroke-slate-600/30"
              strokeWidth="2.5"
              fill="none"
            />
            {/* Animated Progress Ring */}
            <circle
              cx="20"
              cy="20"
              r={radius}
              className={ringColor}
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              style={{ transition: "stroke-dashoffset 0.15s ease-out" }}
            />
          </svg>

          {/* Arrow Icon */}
          <ArrowUp
            className={`w-5 h-5 relative z-10 transition-transform duration-300 group-hover:-translate-y-1 ${
              scrollPercent === 100 ? "animate-bounce" : ""
            }`}
          />
        </div>

        {/* Dynamic Expanding Text */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out flex items-center ${
            isExpanded
              ? "max-w-[250px] px-3 opacity-100"
              : "max-w-0 opacity-0 px-0"
          }`}
        >
          <span className="font-roboto font-semibold text-[14px] whitespace-nowrap">
            {buttonText}
          </span>
        </div>
      </button>
    </div>
  );
}
