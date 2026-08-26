import { NextResponse } from "next/server";
import { domainPricing } from "@/lib/data";
import { checkDomainAvailability, getTldPricing } from "@/lib/whmcs";

const SUPPORTED_TLDS = domainPricing.map((d) => d.ext); // e.g. [".com", ".net", ".org", ".com.ng", ".ng", ".info"]

function parseQuery(raw: string): { base: string; tlds: string[] } | null {
  const cleaned = raw.trim().toLowerCase().replace(/^https?:\/\//, "").replace(/\/.*$/, "");
  if (!cleaned) return null;

  const matchedTld = SUPPORTED_TLDS.find((tld) => cleaned.endsWith(tld));
  if (matchedTld) {
    const base = cleaned.slice(0, -matchedTld.length);
    if (!/^[a-z0-9-]+$/.test(base)) return null;
    return { base, tlds: [matchedTld] };
  }

  const base = cleaned.split(".")[0];
  if (!/^[a-z0-9-]+$/.test(base)) return null;
  return { base, tlds: SUPPORTED_TLDS };
}

export async function POST(request: Request) {
  let query = "";
  try {
    const body = await request.json();
    query = String(body?.query || "");
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const parsed = parseQuery(query);
  if (!parsed) {
    return NextResponse.json({ error: "Enter a valid domain name, e.g. example.com" }, { status: 400 });
  }
  const { base, tlds } = parsed;

  let pricing: Awaited<ReturnType<typeof getTldPricing>> = {};
  try {
    pricing = await getTldPricing();
  } catch {
    pricing = {};
  }

  const results = await Promise.all(
    tlds.map(async (ext) => {
      const domain = `${base}${ext}`;
      const availability = await checkDomainAvailability(domain);
      const priceInfo = pricing[ext.replace(/^\./, "")];
      return {
        domain,
        ext,
        available: availability,
        price: priceInfo?.register ?? null,
        renew: priceInfo?.renew ?? null,
        transfer: priceInfo?.transfer ?? null,
        currencyPrefix: priceInfo?.currencyPrefix ?? "₦",
        currencySuffix: priceInfo?.currencySuffix ?? "",
      };
    })
  );

  return NextResponse.json({ query: base, results });
}
