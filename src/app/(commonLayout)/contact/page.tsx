import { MapPin, Phone, Mail, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="w-full min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors duration-300 font-roboto pb-16">
      <div className="h-[70px] bg-[#002147] w-full shrink-0"></div>

      {/* Hero Banner */}
      <section className="relative w-full h-[200px] md:h-[250px] flex items-center justify-center overflow-hidden bg-[#002147] dark:bg-slate-950">
        <div className="relative z-10 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-white text-[28px] md:text-[36px] font-bold uppercase tracking-wide">
            Contact Us
          </h1>
        </div>
      </section>

      <section className="container mx-auto max-w-[1140px] px-4 md:px-0 mt-12">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left: Contact Info Box */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6 animate-in fade-in slide-in-from-left-8 duration-700">
            <div className="bg-white dark:bg-slate-950 border border-[#dddddd] dark:border-slate-800 p-8 rounded-sm shadow-sm h-full">
              <h3 className="text-[22px] font-bold text-[#002147] dark:text-[#6EC1E4] mb-6 border-b border-gray-200 dark:border-slate-800 pb-4">
                Get in Touch
              </h3>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#f0f7fa] dark:bg-slate-800 p-3 rounded-full shrink-0">
                    <MapPin className="w-6 h-6 text-[#337ab7] dark:text-[#6EC1E4]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#333333] dark:text-slate-200 mb-1">
                      Location
                    </h4>
                    <p className="text-[14px] text-gray-600 dark:text-slate-400">
                      University of Rajshahi
                      <br />
                      Rajshahi 6205, Bangladesh
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#f0f7fa] dark:bg-slate-800 p-3 rounded-full shrink-0">
                    <Phone className="w-6 h-6 text-[#337ab7] dark:text-[#6EC1E4]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#333333] dark:text-slate-200 mb-1">
                      Phone
                    </h4>
                    <p className="text-[14px] text-gray-600 dark:text-slate-400">
                      +880 721 750041-49
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#f0f7fa] dark:bg-slate-800 p-3 rounded-full shrink-0">
                    <Mail className="w-6 h-6 text-[#337ab7] dark:text-[#6EC1E4]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#333333] dark:text-slate-200 mb-1">
                      Email
                    </h4>
                    <p className="text-[14px] text-gray-600 dark:text-slate-400">
                      registrar@ru.ac.bd
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="w-full lg:w-2/3 animate-in fade-in slide-in-from-right-8 duration-700 delay-150">
            <div className="bg-white dark:bg-slate-950 border border-[#dddddd] dark:border-slate-800 p-8 rounded-sm shadow-sm">
              <h3 className="text-[22px] font-bold text-[#002147] dark:text-[#6EC1E4] mb-6">
                Send us a Message
              </h3>

              <form className="flex flex-col gap-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col">
                    <label className="text-[14px] font-medium text-[#333333] dark:text-slate-300 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-900 border border-gray-300 dark:border-slate-700 rounded-sm focus:outline-none focus:border-[#337ab7] dark:focus:border-[#6EC1E4] text-[#333333] dark:text-slate-200 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[14px] font-medium text-[#333333] dark:text-slate-300 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-900 border border-gray-300 dark:border-slate-700 rounded-sm focus:outline-none focus:border-[#337ab7] dark:focus:border-[#6EC1E4] text-[#333333] dark:text-slate-200 transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="text-[14px] font-medium text-[#333333] dark:text-slate-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="How can we help?"
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-900 border border-gray-300 dark:border-slate-700 rounded-sm focus:outline-none focus:border-[#337ab7] dark:focus:border-[#6EC1E4] text-[#333333] dark:text-slate-200 transition-colors"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-[14px] font-medium text-[#333333] dark:text-slate-300 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-900 border border-gray-300 dark:border-slate-700 rounded-sm focus:outline-none focus:border-[#337ab7] dark:focus:border-[#6EC1E4] text-[#333333] dark:text-slate-200 transition-colors resize-none"
                  ></textarea>
                </div>

                <div className="mt-2">
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 bg-[#337ab7] dark:bg-[#6EC1E4] hover:bg-[#286090] dark:hover:bg-sky-400 text-white dark:text-slate-900 px-8 py-3 rounded-sm font-bold transition-colors shadow-sm"
                  >
                    <Send className="w-4 h-4" /> Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
