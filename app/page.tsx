import type { Metadata } from "next";
import SectionRenderer from "@/components/SectionRenderer";
import { pageSections } from "@/lib/data";

export const metadata: Metadata = { title: "Webcenter Hosting" };

export default function HomePage() {
  return <SectionRenderer sections={pageSections.home} />;
}
