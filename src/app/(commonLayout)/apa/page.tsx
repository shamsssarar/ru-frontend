import Image from "next/image";
import Link from "next/link";
import { apaDetailsData } from "@/data/apaDetailsData";

export default function ApaIndexPage() {
  const entries = Object.entries(apaDetailsData);

  return (
    <div className="w-full min-h-screen bg-white text-slate-950 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-50 font-roboto">
      <section className="relative w-full h-[260px] md:h-[340px] overflow-hidden">
        <Image
          src="/slider/abg-2.jpg"
          alt="APA overview background"
          fill
          className="object-cover "
          priority
        />
        <div className="absolute inset-0 bg-black/40 dark:bg-slate-950/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center z-10">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white/80 leading-tight">
            APA Sections
          </h1>
          <p className="mt-4 max-w-3xl text-base text-white/80 leading-relaxed">
            রুপা বিশ্ববিদ্যালয়ের APA রিসোর্সগুলোর একটি সহজ নেভিগেশন লিস্ট।
            প্রতিটি সেকশনে ক্লিক করে বিস্তারিত দেখুন।
          </p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-[1140px] space-y-6">
          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-950">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-950 dark:text-white">
              APA রুট লিস্ট
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400">
              নিচের লিংকগুলো থেকে APA এর প্রতিটি বিভাগের বিস্তারিত পৃষ্ঠা খুলুন।
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {entries.map(([slug, item]) => (
              <Link
                key={slug}
                href={`/apa/${slug}`}
                className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-950"
              >
                <div className="mb-3 text-sm uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-300">
                  APA Section
                </div>
                <h3 className="text-xl font-bold text-slate-950 transition-colors group-hover:text-cyan-600 dark:text-slate-50 dark:group-hover:text-cyan-300">
                  {item.titleBn}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {item.titleEn}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 dark:text-cyan-300">
                  View details
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
