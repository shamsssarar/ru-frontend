import Image from "next/image";
import { ShieldCheck } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300 font-roboto">
      {/* Spacer for Absolute Navbar */}
      <div className="h-[70px] bg-[#002147] w-full shrink-0"></div>

      {/* Hero Section */}
      <section className="relative w-full h-[200px] md:h-[250px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#002147] dark:bg-slate-950 transition-colors"></div>
        <div className="relative z-10 text-center flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-700">
          <ShieldCheck className="w-12 h-12 text-[#6EC1E4] mb-3" />
          <h1 className="text-white text-[28px] md:text-[36px] font-bold uppercase tracking-wide">
            Privacy Policy
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-[900px] bg-white dark:bg-slate-950 border border-[#dddddd] dark:border-slate-800 rounded-sm shadow-sm p-8 md:p-12 transition-colors duration-300 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150">
          <div className="prose max-w-none text-[#333333] dark:text-slate-300 leading-[1.8] space-y-6">
            <p>
              <strong>Last Updated: August 2026</strong>
            </p>
            <p>
              The University of Rajshahi ("we," "our," or "us") is committed to
              protecting your privacy. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you
              visit our website (www.ru.ac.bd) and use our related digital
              services.
            </p>

            <h3 className="text-[20px] font-bold text-[#002147] dark:text-[#6EC1E4] mt-8 mb-4 border-b border-gray-200 dark:border-slate-800 pb-2">
              1. Information We Collect
            </h3>
            <p>
              We may collect personal information that you voluntarily provide
              to us when expressing an interest in obtaining information about
              the University, registering for portals (such as admission or
              student portals), or otherwise contacting us. This may include
              your name, email address, phone number, and academic records.
            </p>

            <h3 className="text-[20px] font-bold text-[#002147] dark:text-[#6EC1E4] mt-8 mb-4 border-b border-gray-200 dark:border-slate-800 pb-2">
              2. How We Use Your Information
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                To facilitate account creation and logon processes for
                university systems.
              </li>
              <li>
                To send administrative information, such as academic updates,
                event notices, or policy changes.
              </li>
              <li>To protect our Services and ensure academic integrity.</li>
              <li>To respond to legal requests and prevent harm.</li>
            </ul>

            <h3 className="text-[20px] font-bold text-[#002147] dark:text-[#6EC1E4] mt-8 mb-4 border-b border-gray-200 dark:border-slate-800 pb-2">
              3. Cookies and Tracking Technologies
            </h3>
            <p>
              We may use cookies, web beacons, tracking pixels, and other
              tracking technologies on the Site to help customize the Site and
              improve your experience. You can easily remove or reject cookies
              via your browser settings.
            </p>

            <h3 className="text-[20px] font-bold text-[#002147] dark:text-[#6EC1E4] mt-8 mb-4 border-b border-gray-200 dark:border-slate-800 pb-2">
              4. Contact Us
            </h3>
            <p>
              If you have questions or comments about this Privacy Policy,
              please contact the ICT Center, University of Rajshahi.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
