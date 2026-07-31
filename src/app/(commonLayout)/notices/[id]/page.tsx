import InnerTemplate from "@/components/layout/InnerTemplate";

const notices = [
    {
      id: 1,
      title: "Result of 1st year Honours Final Examination 2023",
      date: "2024-07-30",
      details: "The results for the 1st year Honours Final Examination held in 2023 have been published. Students can check their results on the university website and at their respective department offices.",
    },
    {
      id: 2,
      title: "Admission Circular for PhD Program 2024-25",
      date: "2024-07-28",
      details: "Applications are invited for the PhD program for the academic session 2024-25. Interested candidates are requested to apply through the university's admission portal by August 31, 2024.",
    },
    {
      id: 3,
      title: "Class Schedule for Summer Semester 2024",
      date: "2024-07-25",
      details: "The class schedule for the Summer Semester 2024 has been published. All students are advised to check the schedule for their respective departments.",
    },
    {
      id: 4,
      title: "Scholarship Opportunity for Undergraduate Students",
      date: "2024-07-22",
      details: "A new scholarship opportunity is available for undergraduate students with excellent academic records. Please check the notice board for eligibility criteria and application procedures.",
    },
    {
        id: 5,
        date: "2024-07-20",
        title: "প্রফেসর গ্রেড-২ সংক্রান্ত বিজ্ঞপ্তি",
        details: "প্রফেসর গ্রেড-২ সংক্রান্ত বিস্তারিত তথ্য এখানে দেওয়া হবে।",
      },
  ];

  export async function generateStaticParams() {
    return notices.map((notice) => ({
      id: notice.id.toString(),
    }));
  }

export default function NoticeDetailsPage({ params }: { params: { id: string } }) {
    const notice = notices.find((p) => p.id.toString() === params.id);
  return (
    <InnerTemplate
      pageTitle={notice?.title || "Notice Not Found"}
      breadcrumbs={[
        { title: "Home", href: "/" },
        { title: "Notices", href: "/notices" },
    ]}
    >
      <div>
        <p className="text-sm text-gray-500 mb-4">{notice?.date}</p>
        <p>{notice?.details}</p>
      </div>
    </InnerTemplate>
  );
}
