import Link from "next/link";
import {
  Home,
  ArrowLeft,
  BookOpen,
  Building2,
  Phone,
  SearchX,
} from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f9f9f9] font-roboto">
      {/* 
        Dark Header Filler
        This block sits behind the absolute/transparent global Navbar 
        so the white text is clearly visible. 
      */}
      <div className="w-full h-[70px] bg-[#002147]"></div>

      {/* Main 404 Content */}
      <div className="flex-grow flex flex-col items-center justify-center px-4 py-16">
        <div className="max-w-3xl w-full text-center space-y-8">
          {/* 404 Visual Header */}
          <div className="relative flex justify-center items-center">
            <h1 className="text-[120px] md:text-[180px] font-black text-[#002147] leading-none drop-shadow-sm select-none">
              4<span className="text-[#d32f2f]">0</span>4
            </h1>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <SearchX className="w-16 h-16 md:w-24 md:h-24 text-white/20 drop-shadow-md" />
            </div>
          </div>

          {/* Main Text */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333]">
              Oops! Page Not Found
            </h2>
            <p className="text-gray-600 text-lg max-w-xl mx-auto">
              The page you are looking for might have been removed, had its name
              changed, or is temporarily unavailable.
            </p>
          </div>

          {/* Brand Divider */}
          <div className="w-24 h-1.5 bg-[#d32f2f] mx-auto rounded-full"></div>

          {/* Helpful Navigation Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 text-left max-w-2xl mx-auto">
            <Link
              href="/"
              className="flex items-center gap-4 p-5 bg-white border border-gray-200 rounded-sm hover:border-[#337ab7] hover:shadow-[0px_4px_15px_rgba(0,0,0,0.05)] transition-all group"
            >
              <div className="bg-[#002147]/5 p-3 rounded-full group-hover:bg-[#002147] group-hover:text-white transition-colors text-[#002147]">
                <Home className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <h3 className="font-bold text-[#333333] group-hover:text-[#337ab7] transition-colors">
                  Homepage
                </h3>
                <p className="text-sm text-gray-500">Return to the main site</p>
              </div>
            </Link>

            <Link
              href="/academic/faculties"
              className="flex items-center gap-4 p-5 bg-white border border-gray-200 rounded-sm hover:border-[#337ab7] hover:shadow-[0px_4px_15px_rgba(0,0,0,0.05)] transition-all group"
            >
              <div className="bg-[#002147]/5 p-3 rounded-full group-hover:bg-[#002147] group-hover:text-white transition-colors text-[#002147]">
                <BookOpen className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <h3 className="font-bold text-[#333333] group-hover:text-[#337ab7] transition-colors">
                  Academics
                </h3>
                <p className="text-sm text-gray-500">
                  View faculties and departments
                </p>
              </div>
            </Link>

            <Link
              href="/administration"
              className="flex items-center gap-4 p-5 bg-white border border-gray-200 rounded-sm hover:border-[#337ab7] hover:shadow-[0px_4px_15px_rgba(0,0,0,0.05)] transition-all group"
            >
              <div className="bg-[#002147]/5 p-3 rounded-full group-hover:bg-[#002147] group-hover:text-white transition-colors text-[#002147]">
                <Building2 className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <h3 className="font-bold text-[#333333] group-hover:text-[#337ab7] transition-colors">
                  Administration
                </h3>
                <p className="text-sm text-gray-500">
                  Find administrative offices
                </p>
              </div>
            </Link>

            <Link
              href="/contact"
              className="flex items-center gap-4 p-5 bg-white border border-gray-200 rounded-sm hover:border-[#337ab7] hover:shadow-[0px_4px_15px_rgba(0,0,0,0.05)] transition-all group"
            >
              <div className="bg-[#002147]/5 p-3 rounded-full group-hover:bg-[#002147] group-hover:text-white transition-colors text-[#002147]">
                <Phone className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <h3 className="font-bold text-[#333333] group-hover:text-[#337ab7] transition-colors">
                  Contact Us
                </h3>
                <p className="text-sm text-gray-500">Get in touch with RU</p>
              </div>
            </Link>
          </div>

          {/* Back Button */}
          <div className="pt-8 pb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-[#002147] hover:bg-[#001530] text-white px-8 py-3.5 rounded-sm font-bold transition-colors shadow-md uppercase text-sm tracking-wider"
            >
              <ArrowLeft className="w-4 h-4" /> Go Back Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
