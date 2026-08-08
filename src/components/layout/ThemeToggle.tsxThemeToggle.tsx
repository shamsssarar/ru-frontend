"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Next.js hydration safety trick: only render the icon after the component mounts on the client
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="shrink-0 flex items-center justify-center p-1.5 hover:bg-black/20 dark:hover:bg-slate-800 rounded-md transition-colors duration-300 text-white dark:text-slate-200 ml-3 -mr-3"
      aria-label="Toggle Dark Mode"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 md:h-6 md:w-6" />
      ) : (
        <Moon className="h-5 w-5 md:h-6 md:w-6" />
      )}
    </button>
  );
}
