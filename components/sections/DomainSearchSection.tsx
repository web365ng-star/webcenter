"use client";

import { useState } from "react";
import { clientarea, domainPricing } from "@/lib/data";
import type { Section } from "@/lib/types";

type DomainResult = {
  domain: string;
  ext: string;
  available: "available" | "unavailable" | "unknown";
  price: string | null;
  renew: string | null;
  transfer: string | null;
  currencyPrefix: string;
  currencySuffix: string;
};

export default function DomainSearchSection({ section }: { section: Section }) {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [results, setResults] = useState<DomainResult[] | null>(null);

  const title = section.title || "Register Your Domain";
  const subtitle =
    section.subtitle || "Search, register, transfer, and manage your domains easily — all in one place.";

  async function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    setError("");
    setResults(null);
    try {
      const res = await fetch("/api/domain-search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
      } else {
        setResults(data.results);
      }
    } catch {
      setError("Could not reach the domain search service. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const transferUrl = `${clientarea("/cart.php")}?a=add&domain=transfer${
    query.trim() ? `&domainname=${encodeURIComponent(query.trim())}` : ""
  }`;

  return (
    <section className="wc-domain-search" id="domain-search">
      <div className="container">
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <form className="wc-domain-form" onSubmit={handleSearch}>
          <input
            name="query"
            placeholder="eg. example.com"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" disabled={loading}>
            <i className="fa fa-search"></i>
            <span>{loading ? "Searching…" : "Search"}</span>
          </button>
          <a href={transferUrl}>Transfer</a>
        </form>

        {error && <p className="wc-domain-error">{error}</p>}

        {results && (
          <div className="wc-domain-results">
            {results.map((r) => (
              <div className="wc-domain-result-row" key={r.domain}>
                <span className="wc-domain-result-name">{r.domain}</span>
                {r.available === "available" && <span className="wc-domain-badge available">Available</span>}
                {r.available === "unavailable" && <span className="wc-domain-badge taken">Taken</span>}
                {r.available === "unknown" && <span className="wc-domain-badge unknown">Unknown</span>}
                <span className="wc-domain-result-price">
                  {r.price ? `${r.currencyPrefix}${r.price}${r.currencySuffix}/yr` : "—"}
                </span>
                {r.available === "available" ? (
                  <a
                    className="wc-order"
                    href={`${clientarea("/cart.php")}?a=add&domain=register&domainname=${encodeURIComponent(r.domain)}`}
                  >
                    Register Now
                  </a>
                ) : r.available === "unavailable" ? (
                  <a
                    className="wc-order"
                    href={`${clientarea("/cart.php")}?a=add&domain=transfer&domainname=${encodeURIComponent(r.domain)}`}
                  >
                    Transfer
                  </a>
                ) : (
                  <a
                    className="wc-order"
                    href={`${clientarea("/cart.php")}?a=add&domain=register&domainname=${encodeURIComponent(r.domain)}`}
                  >
                    Check on site
                  </a>
                )}
              </div>
            ))}
          </div>
        )}

        <div className="wc-domain-strip">
          {domainPricing.slice(0, 7).map((d) => (
            <div className="wc-domain-chip" key={d.ext}>
              <span>{d.ext}</span> ₦{d.register}
            </div>
          ))}
          <a href={`${clientarea("/cart.php")}?a=add&domain=register`}>View All Pricing</a>
        </div>
      </div>
    </section>
  );
}
