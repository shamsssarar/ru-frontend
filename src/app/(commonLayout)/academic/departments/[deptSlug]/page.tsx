import { notFound } from "next/navigation";
import DepartmentSubPageTemplate from "@/components/layout/DepartmentSubPageTemplate";
import { departmentsData } from "@/data/departmentsData";

// Next.js 15+ standard for dynamic params
export default async function DynamicDepartmentPage({
  params,
}: {
  params: Promise<{ deptSlug: string }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.deptSlug;

  // Look up the specific department from our generated data
  const deptInfo = departmentsData[slug];

  // If the user types a department URL that doesn't exist, show 404
  if (!deptInfo) {
    notFound();
  }

  // Fallback notices/events so the page doesn't look empty
  const defaultNotices = [
    {
      id: 1,
      day: "01",
      month: "SEP",
      title: `Welcome to ${deptInfo.name}`,
      link: "#",
    },
  ];

  const defaultEvents = [
    {
      id: 1,
      date: "15-09-2026",
      title: `Annual Seminar - ${deptInfo.faculty}`,
      image: "/slider/abg-2.jpg",
      link: "#",
    },
  ];

  return (
    <DepartmentSubPageTemplate
      deptSlug={slug}
      pageTitle={`Welcome to the ${deptInfo.name}`}
      officialName={deptInfo.chairmanName}
      officialTitle={deptInfo.chairmanTitle}
      officialSubtitle={deptInfo.faculty}
      officialImage={deptInfo.chairmanImage}
      profileLink={deptInfo.profileLink}
      notices={defaultNotices}
      events={defaultEvents}
      departmentName={deptInfo.name}
      footerColumns={[]} // Add your default footer columns here
      sliderImages={deptInfo.sliderImages}
      messageContent={
        <div className="flex flex-col gap-4">
          {deptInfo.message.map((paragraph: string, index: number) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      }
    />
  );
}
