import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Instagram, Facebook, Clock } from "lucide-react";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Tripple S Spa" },
      { name: "description", content: "Visit Tripple S Spa at Plot 943, Kaunda Road, Gaborone. Reach us on WhatsApp, Instagram or Facebook." },
      { property: "og:title", content: "Contact — Tripple S Spa" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 lg:px-12">
      <header className="mb-12 max-w-2xl">
        <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--gold)]">Contact</p>
        <h1 className="mt-2 font-display text-4xl text-[color:var(--emerald-deep)] sm:text-5xl">Visit our clinic</h1>
        <p className="mt-4 text-[15px] text-[color:var(--muted-foreground)]">Discreet, tranquil and centrally located in Gaborone.</p>
      </header>

      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <div className="glass rounded-2xl p-8">
          <div className="space-y-6 text-sm">
            <Row icon={MapPin} title="Address">
              <a href={SITE.mapsUrl} target="_blank" rel="noreferrer" className="hover:text-[color:var(--emerald-deep)]">{SITE.address}</a>
            </Row>
            <Row icon={Phone} title="WhatsApp">
              <a href={SITE.whatsappUrl("Hello Tripple S Spa, I'd like to enquire.")} target="_blank" rel="noreferrer" className="hover:text-[color:var(--emerald-deep)]">Message us on WhatsApp</a>
            </Row>
            <Row icon={Instagram} title="Instagram">
              <a href={SITE.instagram} target="_blank" rel="noreferrer" className="hover:text-[color:var(--emerald-deep)]">@tripplepa</a>
            </Row>
            <Row icon={Facebook} title="Facebook">
              <a href={SITE.facebook} target="_blank" rel="noreferrer" className="hover:text-[color:var(--emerald-deep)]">Tripple S Spa</a>
            </Row>
            <Row icon={Clock} title="Business Hours">
              <ul className="space-y-1">
                {SITE.hours.map((h) => <li key={h.day} className="flex justify-between gap-6"><span>{h.day}</span><span className="text-[color:var(--muted-foreground)]">{h.time}</span></li>)}
              </ul>
            </Row>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl border border-white/60 bg-white/70 shadow-sm">
          <iframe
            title="Tripple S Spa location"
            src="https://www.google.com/maps?q=Plot%20943%20Kaunda%20Road%20Gaborone&output=embed"
            className="h-[420px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}

function Row({ icon: Icon, title, children }: { icon: typeof MapPin; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[color:var(--emerald-deep)] text-white"><Icon size={16} /></span>
      <div className="min-w-0">
        <div className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--muted-foreground)]">{title}</div>
        <div className="mt-1 text-[color:var(--foreground)]">{children}</div>
      </div>
    </div>
  );
}