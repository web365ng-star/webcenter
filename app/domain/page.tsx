import type { Metadata } from "next";
import SectionRenderer from "@/components/SectionRenderer";
import { pageSections } from "@/lib/data";

export const metadata: Metadata = { title: "Domain Search - Webcenter Host" };

export default function DomainPage() {
  return <SectionRenderer sections={pageSections.domain} />;
}
