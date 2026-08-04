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
      className="shrink-0 flex items-center justify-center p-1.5 hover:bg-black/20 dark:hover:bg-white/20 rounded-md transition-colors text-white "
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