"use client";

import Image from "next/image";
import Link from "next/link";
import GovernanceFooter from "./GovernanceFooter";

interface GovernanceSubPageProps {
  entityName: string; // e.g., "Senate"
  buttonText: string; // e.g., "List Of Senate Members"
  buttonLink?: string;
  contentImage: string;
}

export default function GovernanceSubPageTemplate({
  entityName,
  buttonText,
  buttonLink = "#",
  contentImage,
}: GovernanceSubPageProps) {
  return (
    <div className="flex flex-col w-full font-roboto min-h-screen">
      {/* Hero Banner */}
      <section className="relative w-full h-[300px] md:h-[450px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://www.ru.ac.bd/senate/wp-content/uploads/sites/73/2022/02/Administration-Building.jpg"
          alt="Administration Building"
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

      {/* Main Content Area */}
      <section className="flex-grow w-full bg-white py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-0 max-w-[1140px]">
          <h2 className="text-[22px] md:text-[28px] font-bold text-[#337ab7] mb-8">
            Welcome to the {entityName}
          </h2>

          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-stretch">
            {/* Left Box (Title & Button) */}
            <div className="w-full md:w-1/2 border border-gray-200 rounded-sm shadow-sm flex flex-col justify-center p-8 min-h-[250px]">
              <h3 className="text-[20px] md:text-[24px] font-bold text-[#333333] mb-6">
                {entityName}
              </h3>
              <div>
                <Link
                  href={buttonLink}
                  className="inline-block bg-[#002147] hover:bg-[#001530] text-white px-8 py-3 text-[15px] font-medium rounded-sm transition-colors shadow-sm"
                >
                  {buttonText}
                </Link>
              </div>
            </div>

            {/* Right Box (Image) */}
            <div className="w-full md:w-1/2 border border-gray-200 rounded-sm shadow-sm overflow-hidden min-h-[250px] relative">
              <Image
                src={contentImage}
                alt={entityName}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Inject the Custom Footer specifically for this template */}
      <GovernanceFooter entityName={entityName} />
    </div>
  );
}
