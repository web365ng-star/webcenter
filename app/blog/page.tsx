import type { Metadata } from "next";
import SectionRenderer from "@/components/SectionRenderer";
import { pageSections } from "@/lib/data";

export const metadata: Metadata = { title: "Blog - Webcenter Host" };

export default function BlogPage() {
  return <SectionRenderer sections={pageSections.blog} />;
}
