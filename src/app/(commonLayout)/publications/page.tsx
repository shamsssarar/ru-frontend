import InnerTemplate from "@/components/layout/InnerTemplate";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

const publications = [
  {
    title: "The Rajshahi University Journal of Arts and Humanities",
    issue: "Vol. 50, 2023",
    link: "#",
  },
  {
    title: "Journal of Science and Technology",
    issue: "Vol. 25, 2023",
    link: "#",
  },
  {
    title: "Business Review",
    issue: "Vol. 15, 2023",
    link: "#",
  },
  {
    title: "Social Science Journal",
    issue: "Vol. 30, 2023",
    link: "#",
  },
];

export default function PublicationsPage() {
  return (
    <InnerTemplate
      pageTitle="Journals & Publications"
      breadcrumbs={[{ title: "Home", href: "/" }]}
    >
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Journal Title</TableHead>
            <TableHead>Latest Issue</TableHead>
            <TableHead className="text-right">Link</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {publications.map((pub) => (
            <TableRow key={pub.title}>
              <TableCell className="font-medium">{pub.title}</TableCell>
              <TableCell>{pub.issue}</TableCell>
              <TableCell className="text-right">
                <Link href={pub.link} className="text-ru-blue hover:underline">
                  View
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </InnerTemplate>
  );
}
