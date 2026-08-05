import Image from "next/image";

export default function Loading() {
  return (
    <div className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-slate-50 flex items-center justify-center px-4">
      <div className="flex flex-col items-center gap-8 rounded-[32px] border border-slate-200 bg-white px-10 py-12 shadow-[0_24px_80px_-60px_rgba(15,23,42,0.18)] dark:border-slate-700 dark:bg-slate-900">
        <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-slate-50 shadow-inner shadow-slate-200/60 dark:bg-slate-800 dark:shadow-slate-950/20">
          <Image
            src="/RU_Official_Logo.png"
            alt="Rajshahi University Logo"
            width={120}
            height={120}
            className="object-contain"
            priority
          />
        </div>

        <div className="flex flex-col items-center gap-3 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
            Rajshahi University
          </p>
          <div className="flex items-center justify-center gap-3">
            <span
              className="h-3 w-3 rounded-full bg-cyan-500 animate-pulse"
              style={{ animationDelay: "0ms" }}
            />
            <span
              className="h-3 w-3 rounded-full bg-cyan-500 animate-pulse"
              style={{ animationDelay: "150ms" }}
            />
            <span
              className="h-3 w-3 rounded-full bg-cyan-500 animate-pulse"
              style={{ animationDelay: "300ms" }}
            />
          </div>
          <p className="text-base font-semibold text-slate-900 dark:text-slate-100">
            Loading…
          </p>
        </div>
      </div>
    </div>
  );
}
