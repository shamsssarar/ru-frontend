import InnerTemplate from "@/components/layout/InnerTemplate";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const administrativePositions = [
  {
    name: "Dr. ABC",
    title: "Vice-Chancellor",
    avatar: "/placeholder.svg",
  },
  {
    name: "Dr. XYZ",
    title: "Pro-Vice-Chancellor",
    avatar: "/placeholder.svg",
  },
  {
    name: "Mr. PQR",
    title: "Registrar",
    avatar: "/placeholder.svg",
  },
];

export default function AdministrationPage() {
  return (
    <InnerTemplate
      pageTitle="Administration"
      breadcrumbs={[{ title: "Home", href: "/" }]}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {administrativePositions.map((person) => (
          <Card key={person.name} className="text-center">
            <CardHeader>
              <Avatar className="mx-auto w-24 h-24 mb-4">
                <AvatarImage src={person.avatar} />
                <AvatarFallback>
                  {person.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <CardTitle>{person.name}</CardTitle>
              <CardDescription>{person.title}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Contact details and a short bio for {person.name} would go here.
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </InnerTemplate>
  );
}
