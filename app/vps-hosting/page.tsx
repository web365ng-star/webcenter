import type { Metadata } from "next";
import SectionRenderer from "@/components/SectionRenderer";
import { pageSections } from "@/lib/data";

export const metadata: Metadata = { title: "VPS Hosting - Webcenter Host" };

export default function VpsHostingPage() {
  return <SectionRenderer sections={pageSections.vps} />;
}
