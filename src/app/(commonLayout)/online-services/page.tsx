import InnerTemplate from "@/components/layout/InnerTemplate";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const services = [
  {
    title: "Online Admission",
    description: "Apply for undergraduate and graduate programs online.",
    href: "/admission",
  },
  {
    title: "Result Portal",
    description: "Check your semester and final examination results.",
    href: "/results",
  },
  {
    title: "Library E-Resources",
    description: "Access digital journals, e-books, and databases.",
    href: "http://library.ru.ac.bd",
  },
  {
    title: "Student Portal",
    description: "Access your student profile, course registration, and more.",
    href: "/student-portal",
  },
];

export default function OnlineServicesPage() {
  return (
    <InnerTemplate
      pageTitle="Online Services"
      breadcrumbs={[{ title: "Home", href: "/" }]}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service) => (
          <Link href={service.href} key={service.title} target={service.href.startsWith('http') ? '_blank' : '_self'}>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{service.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </InnerTemplate>
  );
}
