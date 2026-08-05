"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
  const [showLoader, setShowLoader] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Check if the user has already visited in this session
    const hasVisited = sessionStorage.getItem("ru_has_visited");

    if (hasVisited) {
      // If they have, immediately remove the loader
      setShowLoader(false);
    } else {
      // If it's their first time, play the aesthetic loading sequence

      // 1. Start fading out after 1.8 seconds
      const fadeTimer = setTimeout(() => {
        setIsFading(true);
      }, 1800);

      // 2. Completely remove from DOM and set session storage after 2.5 seconds
      const removeTimer = setTimeout(() => {
        setShowLoader(false);
        sessionStorage.setItem("ru_has_visited", "true");
      }, 2500);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(removeTimer);
      };
    }
  }, []);

  // Don't render anything if it's not the first visit
  if (!showLoader) return null;

  return (
    <>
      <div
        className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#f9f9f9] dark:bg-[#040919] transition-opacity duration-700 ease-in-out ${
          isFading ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="flex flex-col items-center animate-in fade-in zoom-in-95 duration-1000">
          {/* Logo with a gentle breathing/pulsing effect */}
          <div className="relative w-[120px] h-[120px] md:w-[150px] md:h-[150px] mb-8 animate-pulse">
            <Image
              src="/RU_Official_Logo.png"
              alt="University of Rajshahi"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Aesthetic Animated Loading Bar */}
          <div className="w-[180px] md:w-[220px] h-[3px] bg-gray-300 dark:bg-slate-800 rounded-full overflow-hidden relative shadow-inner">
            <div className="absolute top-0 left-0 h-full w-[40%] bg-[#002147] dark:bg-[#6EC1E4] rounded-full custom-slide-animation" />
          </div>

          <h2 className="mt-8 text-[14px] md:text-[16px] font-roboto font-semibold text-[#002147] dark:text-[#6EC1E4] tracking-[0.25em] uppercase opacity-80">
            University of Rajshahi
          </h2>
        </div>
      </div>

      {/* Custom Keyframe for the sleek sliding bar */}
      <style jsx>{`
        .custom-slide-animation {
          animation: slide 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        @keyframes slide {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(250%);
          }
        }
      `}</style>
    </>
  );
}
