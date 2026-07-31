import InnerTemplate from "@/components/layout/InnerTemplate";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const notices = [
  {
    id: 1,
    title: "Result of 1st year Honours Final Examination 2023",
    date: "2024-07-30",
    link: "/notices/1",
  },
  {
    id: 2,
    title: "Admission Circular for PhD Program 2024-25",
    date: "2024-07-28",
    link: "/notices/2",
  },
  {
    id: 3,
    title: "Class Schedule for Summer Semester 2024",
    date: "2024-07-25",
    link: "/notices/3",
  },
  {
    id: 4,
    title: "Scholarship Opportunity for Undergraduate Students",
    date: "2024-07-22",
    link: "/notices/4",
  },
];

export default function NoticesPage() {
  return (
    <InnerTemplate
      pageTitle="All Notices"
      breadcrumbs={[{ title: "Home", href: "/" }]}
    >
      <div className="space-y-4">
        {notices.map((notice) => (
          <Link href={notice.link} key={notice.id}>
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle>{notice.title}</CardTitle>
                <CardDescription>{notice.date}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </InnerTemplate>
  );
}
