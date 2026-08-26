import type { Metadata } from "next";
import SectionRenderer from "@/components/SectionRenderer";
import { pageSections } from "@/lib/data";

export const metadata: Metadata = { title: "Testimonials - Webcenter Host" };

export default function TestimonialPage() {
  return <SectionRenderer sections={pageSections.testimonial} />;
}
