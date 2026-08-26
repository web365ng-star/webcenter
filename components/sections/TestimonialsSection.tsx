import { testimonials } from "@/lib/data";
import type { Section } from "@/lib/types";

export default function TestimonialsSection({ section }: { section: Section }) {
  const title = section.title || "Happy Client Reviews";
  const subtitle = section.subtitle || "";
  const items = testimonials.filter((t) => t.active);

  return (
    <section className="wc-testimonial-modern">
      <div className="container">
        <div className="section--title">
          <h2>{title}</h2>
          {subtitle && <p>{subtitle}</p>}
        </div>
        <div className="row">
          {items.map((t) => (
            <div className="col-md-4" key={t.id}>
              <div
                className="testimonial-card"
                style={{ background: "#fff", border: "1px solid #ddd", padding: 30, marginBottom: 20 }}
              >
                <h4>{t.name}</h4>
                <p>{t.role}</p>
                <p>&quot;{t.quote}&quot;</p>
                <div style={{ color: "#ffc107" }}>★★★★★</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
