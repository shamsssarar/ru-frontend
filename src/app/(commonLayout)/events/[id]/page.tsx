import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, FileText } from "lucide-react";
import { eventsData } from "../data";

export default async function SingleEventPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Await the params (Next.js 15+ standard)
  const resolvedParams = await params;
  const id = resolvedParams.id;

  // Find the event based on the URL ID parameter
  const event = eventsData.find((e) => e.id.toString() === id);

  // If the ID doesn't exist, trigger the 404 page
  if (!event) {
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
            Event Details
          </h1>
        </div>
      </section>

      {/* Event Content */}
      <section className="w-full py-12 md:py-20 flex-grow">
        <div className="container mx-auto px-4 md:px-0 max-w-[900px]">
          {/* Back Button */}
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-[#337ab7] hover:text-[#002147] font-bold mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to All Events
          </Link>

          <div className="bg-white border-t-[4px] border-t-[#d32f2f] rounded-[8px] shadow-lg overflow-hidden">
            {/* Event Feature Image */}
            <div className="relative w-full h-[300px] md:h-[450px]">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6 md:p-10">
              {/* Meta Data */}
              <div className="flex items-center gap-2 text-gray-500 mb-4 font-medium text-[14px]">
                <Calendar className="w-4 h-4" />
                <span>{event.date}</span>
              </div>

              {/* Title */}
              <h2 className="text-[24px] md:text-[32px] font-bold text-[#333333] mb-6 leading-snug">
                {event.title}
              </h2>

              <div className="w-full h-[1px] bg-gray-200 mb-6"></div>

              {/* Content Body */}
              <div className="prose max-w-none text-[#555555] text-[16px] md:text-[18px] leading-[1.8] mb-8 min-h-[150px]">
                <p>{event.content}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
