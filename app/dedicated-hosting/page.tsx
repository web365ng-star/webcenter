import type { Metadata } from "next";
import SectionRenderer from "@/components/SectionRenderer";
import { pageSections } from "@/lib/data";

export const metadata: Metadata = { title: "Dedicated Hosting - Webcenter Host" };

export default function DedicatedHostingPage() {
  return <SectionRenderer sections={pageSections.dedicated} />;
}
