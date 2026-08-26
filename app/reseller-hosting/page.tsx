import type { Metadata } from "next";
import SectionRenderer from "@/components/SectionRenderer";
import { pageSections } from "@/lib/data";

export const metadata: Metadata = { title: "Reseller Hosting - Webcenter Host" };

export default function ResellerHostingPage() {
  return <SectionRenderer sections={pageSections.reseller} />;
}
