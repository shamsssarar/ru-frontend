import InnerTemplate from "@/components/layout/InnerTemplate";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const academicSections = [
  {
    title: "Faculties & Departments",
    description: "Explore the various faculties and academic departments.",
    href: "/academic/departments",
  },
  {
    title: "Academic Calendar",
    description: "View the academic schedule, holidays, and important dates.",
    href: "/academic/calendar",
  },
  {
    title: "Admission",
    description: "Information for prospective undergraduate and graduate students.",
    href: "/academic/admission",
  },
  {
    title: "Results",
    description: "Check examination results for various courses.",
    href: "/academic/results",
  },
];

export default function AcademicPage() {
  return (
    <InnerTemplate
      pageTitle="Academic Information"
      breadcrumbs={[{ title: "Home", href: "/" }]}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {academicSections.map((section) => (
          <Link href={section.href} key={section.title}>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{section.description}</CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </InnerTemplate>
  );
}
