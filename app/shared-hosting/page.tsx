import type { Metadata } from "next";
import SectionRenderer from "@/components/SectionRenderer";
import { pageSections } from "@/lib/data";

export const metadata: Metadata = { title: "Shared Hosting - Webcenter Host" };

export default function SharedHostingPage() {
  return <SectionRenderer sections={pageSections.shared} />;
}
