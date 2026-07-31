import InnerTemplate from "@/components/layout/InnerTemplate";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bed, Bus, Home, Utensils } from "lucide-react";

const facilities = [
  {
    title: "Residential Halls",
    description: "Information about student accommodation and halls of residence.",
    icon: <Bed className="w-8 h-8 text-ru-blue" />,
  },
  {
    title: "Transport",
    description: "Details on the university's bus routes and transport services.",
    icon: <Bus className="w-8 h-8 text-ru-blue" />,
  },
  {
    title: "Cafeteria & Dining",
    description: "Explore the campus dining options and cafeterias.",
    icon: <Utensils className="w-8 h-8 text-ru-blue" />,
  },
  {
    title: "Medical Center",
    description: "Information on the university's healthcare services and medical center.",
    icon: <Home className="w-8 h-8 text-ru-blue" />,
  },
];

export default function FacilitiesPage() {
  return (
    <InnerTemplate
      pageTitle="Campus Facilities"
      breadcrumbs={[{ title: "Home", href: "/" }]}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {facilities.map((facility) => (
          <Card key={facility.title}>
            <CardHeader className="flex flex-row items-center gap-4">
              {facility.icon}
              <CardTitle>{facility.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{facility.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </InnerTemplate>
  );
}
