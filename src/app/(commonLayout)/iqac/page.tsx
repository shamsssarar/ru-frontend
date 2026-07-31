import InnerTemplate from "@/components/layout/InnerTemplate";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function IQACPage() {
  return (
    <InnerTemplate
      pageTitle="Institutional Quality Assurance Cell (IQAC)"
      breadcrumbs={[{ title: "Home", href: "/" }]}
    >
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>About IQAC</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              The Institutional Quality Assurance Cell (IQAC) is responsible for
              ensuring and enhancing the quality of education and administrative
              processes at the university. This section provides information
              about our mission, vision, and quality assurance mechanisms.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Reports and Publications</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Access to annual reports, self-assessment reports, and other
              publications from the IQAC.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Contact details for the IQAC office and its personnel.
            </p>
          </CardContent>
        </Card>
      </div>
    </InnerTemplate>
  );
}
