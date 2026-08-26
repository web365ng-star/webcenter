import type { Metadata } from "next";
import SectionRenderer from "@/components/SectionRenderer";
import { pageSections } from "@/lib/data";

export const metadata: Metadata = { title: "Contact Webcenter Host - Webcenter Host" };

export default function ContactPage() {
  return <SectionRenderer sections={pageSections.contact} />;
}
