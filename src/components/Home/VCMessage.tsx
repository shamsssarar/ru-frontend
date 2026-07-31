"use client";

import Image from "next/image";
import Link from "next/link";

export default function VCMessage() {
  return (
    <section className="w-full bg-gray-50 flex justify-center pb-12 animate-in fade-in duration-[2000ms]">
      <div className="container pr-8 mx-auto px-4 md:px-0 max-w-[1140px] flex flex-col md:flex-row md:gap-[30px] items-stretch">
        {/* 
          LEFT BOX (Image & Name) 
          APPLIED COMPUTED STYLES:
          - Border Radius: rounded-[30px] (top & bottom)
          - Shadow: shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)]
          - Padding & Margin: p-[50px] m-[10px]
          - Height & Width: min-h-[482px] md:w-[356px]
          - Layout: flex flex-wrap items-center content-center justify-start
        */}
        <div className="w-full md:w-[356px] bg-white rounded-[30px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)] flex flex-wrap items-center content-center justify-start p-[50px] m-[10px] min-h-[482px]">
          <div className="w-full flex flex-col items-center">
            <Image
              src="https://www.ru.ac.bd/wp-content/uploads/2026/03/IMG-20260321-WA0003-225x300.jpg"
              alt="Dr. Md. Faridul Islam"
              width={225}
              height={300}
              className="object-cover mb-6 rounded-[20px] shadow-sm"
              priority
            />
            <div className="text-center font-roboto text-[#333333] w-full">
              <p className="font-bold text-[16px] leading-[24px] uppercase mb-1">
                DR. MD. FARIDUL ISLAM
              </p>
              <p className="text-[14px] text-[#7A7A7A] font-medium leading-[21px]">
                Vice-Chancellor
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:flex-1 bg-white border-t-[3px] border-t-[#575757] rounded-[33px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)] flex flex-wrap items-center content-center p-[20px] m-[10px] min-h-[482px]">
          <div className="w-full">
            <h2 className="text-[20px] md:text-[24px] font-roboto font-bold text-[#1b2032] uppercase mb-6 tracking-wide">
              MESSAGE FROM VICE-CHANCELLOR
            </h2>

            <div className="text-[14px] md:text-[15px] font-roboto font-medium text-[#7A7A7A] leading-relaxed md:leading-[1.8] text-justify mb-8 w-full">
              <p>
                I am delighted to welcome you all to the official website of
                University of Rajshahi, Bangladesh. I hope this website will
                provide you with the necessary information regarding your
                academic, research and official queries. It is indeed an honor
                and privilege for me to serve as the Vice Chancellor of this
                well known seat of learning. As the Vice Chancellor of this
                Institution, I am proud to serve alongside a team of dedicated
                academics, researchers, and professionals committed to advancing
                knowledge and to promote a culture of excellence.
              </p>
            </div>

            <div>
              <Link
                href="https://www.ru.ac.bd/vc/"
                className="inline-block bg-[#4B4F58] hover:bg-[#1b2032] text-white text-[14px] font-medium px-8 py-3 rounded-full transition-colors duration-300 shadow-sm"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
