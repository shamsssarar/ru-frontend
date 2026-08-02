"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/layout/Footer";

export default function FooterWrapper() {
  const pathname = usePathname();

  // Hide the global footer if the path matches a sub-page of governance or administration
  // (e.g., /administration/vc hides the footer, but /administration keeps the global footer)
  const isCustomFooterRoute = pathname.match(
    /^\/(governance|administration|academic\/faculties)\/.+/,
  );

  if (isCustomFooterRoute) {
    return null; // The template itself handles its own Footer
  }

  return <Footer />;
}
