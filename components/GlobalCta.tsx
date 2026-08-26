import { site } from "@/lib/data";

export default function GlobalCta() {
  return (
    <section className="wc-contact-strip">
      <div className="container">
        <div className="row wc-contact-strip-row">
          <div className="col-md-7">
            <h2>Need help choosing the right hosting plan?</h2>
            <p>
              Our experienced support team can guide you on hosting, domains, business email, SSL
              certificates, VPS, dedicated servers and website solutions.
            </p>
          </div>
          <div className="col-md-5 wc-contact-strip-side">
            <h3>Reach out now!</h3>
            <p>
              <strong>{site.phone}</strong> <span>calls only</span>
            </p>
            <p>
              <strong>{site.whatsapp}</strong> <span>WhatsApp only</span>
            </p>
            <a href="/contact" className="wc-outline-btn">
              Contact us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
