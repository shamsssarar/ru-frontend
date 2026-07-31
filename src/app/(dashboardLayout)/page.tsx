import InnerTemplate from "@/components/layout/InnerTemplate";

export default function DashboardPage() {
  return (
    <InnerTemplate
      pageTitle="Dashboard"
      breadcrumbs={[{ title: "Home", href: "/" }]}
    >
      <div>
        <p>Welcome to your dashboard!</p>
      </div>
    </InnerTemplate>
  );
}
