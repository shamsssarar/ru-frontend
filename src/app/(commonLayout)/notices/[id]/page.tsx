import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, FileText, Download } from "lucide-react";
import { noticesData } from "../data";

// 1. Make the function async and type params as a Promise (Next.js 15+ standard)
export default async function SingleNoticePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // 2. Await the params to correctly extract the ID
  const resolvedParams = await params;
  const id = resolvedParams.id;

  // 3. Find the notice based on the URL ID parameter
  const notice = noticesData.find((n) => n.id.toString() === id);

  // If the ID doesn't exist in our data, trigger the 404 page
  if (!notice) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full font-roboto min-h-screen bg-[#f1f1f1]">
      {/* Hero Banner */}
      <section className="relative w-full h-[200px] md:h-[250px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://www.ru.ac.bd/wp-content/uploads/2022/02/admin-building.jpg"
          alt="Administration Building"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center px-4 mt-8">
          <h1 className="text-white text-[24px] md:text-[32px] font-bold tracking-wide drop-shadow-md">
            Notice Details
          </h1>
        </div>
      </section>

      {/* Notice Content */}
      <section className="w-full py-12 md:py-20 flex-grow">
        <div className="container mx-auto px-4 md:px-0 max-w-[900px]">
          {/* Back Button */}
          <Link
            href="/notices"
            className="inline-flex items-center gap-2 text-[#337ab7] hover:text-[#002147] font-bold mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to All Notices
          </Link>

          <div className="bg-white border-t-[4px] border-t-[#1b2032] rounded-[8px] shadow-lg p-6 md:p-10">
            {/* Meta Data */}
            <div className="flex items-center gap-2 text-gray-500 mb-4 font-medium text-[14px]">
              <Calendar className="w-4 h-4" />
              <span>
                {notice.day} {notice.month}, 2026
              </span>
            </div>

            {/* Title */}
            <h2 className="text-[22px] md:text-[28px] font-bold text-[#333333] mb-6 leading-snug">
              {notice.title}
            </h2>

            <div className="w-full h-[1px] bg-gray-200 mb-6"></div>

            {/* Content Body */}
            <div className="prose max-w-none text-[#555555] text-[16px] leading-[1.8] mb-8 min-h-[150px]">
              <div className="flex gap-3 mb-4">
                <FileText className="w-6 h-6 text-[#6EC1E4] shrink-0 mt-1" />
                <p>{notice.content}</p>
              </div>
            </div>

            {/* Attachment / Download Area */}
            <div className="bg-gray-50 border border-gray-200 rounded-md p-4 flex items-center justify-between mt-8">
              <div className="flex items-center gap-3">
                <div className="bg-[#1b2032] p-2 rounded-md">
                  <Download className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-[14px] font-bold text-[#333333]">
                    Official Notice Document
                  </h4>
                  <p className="text-[12px] text-gray-500">
                    PDF Document (1.2 MB)
                  </p>
                </div>
              </div>
              <button className="bg-[#1b2032] hover:bg-[#2c3452] text-white px-6 py-2.5 rounded-sm text-[13px] font-bold transition-colors shadow-sm">
                DOWNLOAD
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
