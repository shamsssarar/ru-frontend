import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { facultyMembersData } from "@/data/facultyMembers";
import { departmentsData } from "@/data/departmentsData";
import DepartmentNavbar from "@/components/layout/DepartmentNavbar";

export default async function DepartmentMembersPage({
  params,
}: {
  params: Promise<{ deptSlug: string }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.deptSlug;

  // Verify the department exists
  const deptInfo = departmentsData[slug];
  if (!deptInfo) notFound();

  // Filter the global faculty list for this department
  const departmentTeachers = facultyMembersData.filter(
    (teacher) => teacher.departmentSlug === slug,
  );

  return (
    <div className="w-full bg-white min-h-screen flex flex-col">
      {/* 1. Spacer to prevent Global Navbar overlap */}
      <div className="h-[70px] bg-[#002147] w-full shrink-0"></div>

      {/* 2. Department Secondary Navbar */}
      <DepartmentNavbar deptSlug={slug} />

      {/* 3. Main Content Container */}
      <div className="container mx-auto max-w-[1140px] px-4 md:px-0 pb-16 pt-8 flex-grow">
        {/* Light Blue Department Header */}
        <div className="bg-[#d9edf7] border border-[#bce8f1] text-[#31708f] p-[15px] mb-[20px] text-center">
          <h2 className="text-[24px] md:text-[30px] font-normal m-0">
            {deptInfo.name}
          </h2>
        </div>

        {/* Faculty List Container */}
        <div className="flex flex-col">
          {departmentTeachers.map((teacher) => (
            <div
              key={teacher.id}
              className="flex flex-col md:flex-row border-b border-[#dddddd] py-6 gap-4 md:gap-8"
            >
              {/* Image Column (col-xs-4 col-lg-2) */}
              <div className="w-[120px] md:w-[15%] shrink-0 flex justify-center md:justify-start">
                <div className="relative w-[120px] h-[150px] rounded-md overflow-hidden bg-gray-100">
                  <Image
                    src={teacher.image}
                    alt={teacher.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Details Column (col-xs-8 col-lg-10) */}
              <div className="flex-1 relative pb-[50px] md:pb-[40px]">
                <p className="mb-4 leading-[1.4]">
                  <strong className="text-[16px] text-[#333333] uppercase">
                    {teacher.name}
                  </strong>
                  <br />
                  <span className="text-[13px] text-[#333333] uppercase">
                    {teacher.designation}
                  </span>
                  <br />
                  <span className="text-[13px] text-[#333333] italic">
                    {teacher.education}
                  </span>
                </p>

                <p className="text-[14px] text-[#333333] leading-[1.6]">
                  <strong>Research Interest:</strong>{" "}
                  {teacher.researchInterest || "Not Provided"}
                  <br />
                  <strong>Email Address:</strong> {teacher.email || "na"}
                </p>

                {/* Details Button - Positioned at bottom left like the original */}
                <Link
                  href={`/academic/departments/${slug}/members/${teacher.id}`}
                  className="absolute bottom-2 left-0 inline-flex items-center gap-1.5 bg-[#337ab7] hover:bg-[#286090] border border-[#2e6da4] text-white px-3 py-1.5 rounded-[3px] text-[14px] transition-colors"
                >
                  Details <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}

          {/* Empty State */}
          {departmentTeachers.length === 0 && (
            <div className="text-center text-gray-500 py-12 border-b border-[#dddddd]">
              No faculty members found for this department yet.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
