const API_URL = process.env.WHMCS_API_URL || "";
const IDENTIFIER = process.env.WHMCS_API_IDENTIFIER || "";
const SECRET = process.env.WHMCS_API_SECRET || "";

async function callWhmcsApi(action: string, params: Record<string, string> = {}): Promise<any> {
  if (!API_URL || !IDENTIFIER || !SECRET) {
    throw new Error("WHMCS API is not configured");
  }

  const body = new URLSearchParams({
    identifier: IDENTIFIER,
    secret: SECRET,
    action,
    responsetype: "json",
    ...params,
  });

  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`WHMCS API request failed with status ${res.status}`);
  }

  const data = await res.json();
  if (data.result !== "success") {
    throw new Error(data.message || `WHMCS API action ${action} failed`);
  }
  return data;
}

export type DomainAvailability = "available" | "unavailable" | "unknown";

export async function checkDomainAvailability(domain: string): Promise<DomainAvailability> {
  try {
    const data = await callWhmcsApi("DomainWhois", { domain });
    const status = String(data.status || "").toLowerCase();
    if (status.includes("available") && !status.includes("unavailable")) return "available";
    if (status.includes("unavailable") || status.includes("taken") || status.includes("registered")) return "unavailable";
    return "unknown";
  } catch {
    return "unknown";
  }
}

export type TldPrice = {
  register?: string;
  renew?: string;
  transfer?: string;
  currencyPrefix: string;
  currencySuffix: string;
};

let pricingCache: { data: Record<string, TldPrice>; fetchedAt: number } | null = null;
const PRICING_CACHE_TTL_MS = 10 * 60 * 1000;

export async function getTldPricing(): Promise<Record<string, TldPrice>> {
  if (pricingCache && Date.now() - pricingCache.fetchedAt < PRICING_CACHE_TTL_MS) {
    return pricingCache.data;
  }

  const data = await callWhmcsApi("GetTLDPricing");
  const pricing: Record<string, TldPrice> = {};
  const rawPricing = data.pricing || {};

  for (const tld of Object.keys(rawPricing)) {
    const entry = rawPricing[tld];
    const currency = entry.currency || data.currency || {};
    pricing[tld.toLowerCase()] = {
      register: entry.register?.["1"],
      renew: entry.renew?.["1"],
      transfer: entry.transfer?.["1"],
      currencyPrefix: currency.prefix ?? "₦",
      currencySuffix: currency.suffix ?? "",
    };
  }

  pricingCache = { data: pricing, fetchedAt: Date.now() };
  return pricing;
}
