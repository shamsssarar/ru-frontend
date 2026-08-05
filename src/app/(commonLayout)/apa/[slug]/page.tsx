import { notFound } from "next/navigation";
import { apaDetailsData } from "@/data/apaDetailsData";
import ApaTemplate from "@/components/layout/ApaTemplate";

export default async function ApaDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  // Retrieve the data for this specific slug
  const pageData = apaDetailsData[slug];

  // If the slug doesn't exist in our data file, show the 404 page
  if (!pageData) {
    notFound();
  }

  return <ApaTemplate data={pageData} />;
}
