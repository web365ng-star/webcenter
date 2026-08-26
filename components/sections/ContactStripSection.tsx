import type { Section } from "@/lib/types";

export default function ContactStripSection({ section }: { section: Section }) {
  const title = section.title || "Need help choosing the right hosting plan?";
  const text =
    section.subtitle ||
    section.content ||
    "Our experienced support team can guide you on hosting, domains, business email, SSL certificates, VPS, dedicated servers and website solutions.";
  const btn = section.button_text || "Contact us";
  const link = section.button_link || "/contact";

  return (
    <section className="wc-contact-strip">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <div className="col-md-5 right">
            <h2>Reach out now!</h2>
            <span className="phone">
              (+234)-706-308-9511 <small>calls only</small>
            </span>
            <span className="phone">
              (+234)-706-308-9511 <small>WhatsApp only</small>
            </span>
            <a className="btn" href={link}>
              {btn}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
