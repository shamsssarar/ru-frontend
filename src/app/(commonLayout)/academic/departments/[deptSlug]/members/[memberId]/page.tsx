import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Mail, Phone, BookOpen } from "lucide-react";
import { facultyMembersData } from "@/data/facultyMembers";
import DepartmentNavbar from "@/components/layout/DepartmentNavbar";

export default async function FacultyProfilePage({
  params,
}: {
  params: Promise<{ deptSlug: string; memberId: string }>;
}) {
  const resolvedParams = await params;
  const { deptSlug, memberId } = resolvedParams;

  // Find the exact teacher matching the ID
  const profile = facultyMembersData.find((teacher) => teacher.id === memberId);

  // If teacher doesn't exist, or they don't belong to this department URL, show 404
  if (!profile || profile.departmentSlug !== deptSlug) {
    notFound();
  }

  return (
    <div className="w-full bg-[#f9f9f9] min-h-screen flex flex-col transition-colors duration-300 dark:bg-slate-950">
      {/* 1. Spacer to prevent Global Navbar overlap */}
      <div className="h-[70px] bg-[#002147] w-full shrink-0"></div>

      {/* 2. Department Secondary Navbar */}
      <DepartmentNavbar deptSlug={deptSlug} />

      {/* 3. Main Content Container */}
      <div className="py-12 px-4 flex-grow">
        <div className="container mx-auto max-w-[900px]">
          <Link
            href={`/academic/departments/${deptSlug}/members`}
            className="inline-flex items-center gap-2 text-[#337ab7] hover:text-[#002147] font-bold mb-8 transition-colors duration-300 dark:text-blue-300 dark:hover:text-blue-300"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Faculty List
          </Link>

          <div className="bg-white dark:bg-slate-900 shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row transition-colors duration-300">
            {/* Left Sidebar - Image & Contact */}
            <div className="w-full md:w-1/3 bg-[#002147] text-white p-8 flex flex-col items-center text-center">
              <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white mb-6">
                <Image
                  src={profile.image}
                  alt={profile.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h1 className="text-xl font-bold mb-1 dark:text-slate-200">{profile.name}</h1>
              <p className="text-[#6EC1E4] mb-6">{profile.designation}</p>

              <div className="w-full h-[1px] bg-white/20 mb-6"></div>

              <div className="w-full flex flex-col gap-4 text-left text-sm">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#6EC1E4] shrink-0" />
                  <a
                    href={`mailto:${profile.email}`}
                    className="hover:underline break-all"
                  >
                    {profile.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#6EC1E4] shrink-0" />
                  <span>{profile.phone}</span>
                </div>
              </div>
            </div>

            {/* Right Content - Details */}
            <div className="w-full md:w-2/3 p-8 md:p-10">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#333333] border-b-2 border-[#d32f2f] pb-2 inline-block mb-4 dark:text-slate-200 dark:border-slate-700">
                  Biography
                </h2>
                <p className="text-gray-600 leading-relaxed dark:text-slate-400">{profile.bio}</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#333333] border-b-2 border-[#d32f2f] pb-2 inline-block mb-4 dark:text-slate-200 dark:border-slate-700">
                  Education
                </h2>
                <div className="flex items-start gap-3">
                  <BookOpen className="w-5 h-5 text-[#337ab7] shrink-0 mt-0.5 dark:text-blue-300" />
                  <p className="text-gray-600 leading-relaxed dark:text-slate-400">
                    {profile.education}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
