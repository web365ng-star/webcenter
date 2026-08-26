import { pricingPlans } from "@/lib/data";
import type { Section } from "@/lib/types";

export default function PricingSection({ section }: { section: Section }) {
  const planType = section.options?.plan_type || "shared";
  const plans = pricingPlans[planType] || [];
  const title = section.title || `${planType.toUpperCase()} HOSTING PLANS`;
  const subtitle = section.subtitle || "Choose a plan and order through the client area.";

  return (
    <section id="pricing" className="bg--lightgrey bd--bottom">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="section--title">
              <h2>{title}</h2>
              <p>{subtitle}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            {plans.length === 0 ? (
              <div className="alert alert-info">No {planType} plans found.</div>
            ) : (
              <div className={`wc-plan-grid wc-plan-grid-${plans.length}`}>
                {plans.map((p) => (
                  <div className={`wc-plan-card${p.popular ? " popular" : ""}`} key={p.id}>
                    <div>
                      {p.popular && <div className="wc-plan-badge">POPULAR</div>}
                      <h3>{p.name}</h3>
                      {p.tagline && <p>{p.tagline}</p>}
                      <div className="wc-price">
                        {p.currency}
                        {p.price}
                      </div>
                      <small>{p.billing_cycle || "monthly"}</small>
                      <ul>
                        {p.features.map((f) => (
                          <li key={f}>
                            <i className="fa fa-check"></i> {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <a href={p.order_url} className="wc-order">
                      ORDER NOW
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
