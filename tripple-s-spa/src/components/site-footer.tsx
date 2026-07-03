import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, MapPin, Phone } from "lucide-react";
import { LOGO_URL, SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-[color:var(--border)] bg-[color:var(--emerald-deep)] text-[color:var(--ivory)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-12">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <img src={LOGO_URL} alt="" className="h-12 w-12 rounded-full ring-1 ring-[color:var(--gold)]/50" />
            <div>
              <div className="font-display text-xl">{SITE.name}</div>
              <div className="text-[10px] uppercase tracking-[0.28em] text-[color:var(--champagne)]">Medical Aesthetics</div>
            </div>
          </div>
          <p className="text-sm text-white/70">
            Doctor-supervised aesthetics, wellness and skin health in a calm, luxurious setting.
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold tracking-wide text-[color:var(--champagne)]">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/treatments" className="hover:text-[color:var(--gold)]">Treatments</Link></li>
            <li><Link to="/about" className="hover:text-[color:var(--gold)]">About</Link></li>
            <li><Link to="/reviews" className="hover:text-[color:var(--gold)]">Reviews</Link></li>
            <li><Link to="/faq" className="hover:text-[color:var(--gold)]">FAQ</Link></li>
            <li><Link to="/book" className="hover:text-[color:var(--gold)]">Book</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold tracking-wide text-[color:var(--champagne)]">Visit</h4>
          <a href={SITE.mapsUrl} target="_blank" rel="noreferrer" className="flex items-start gap-2 text-sm text-white/80 hover:text-[color:var(--gold)]">
            <MapPin size={16} className="mt-0.5 shrink-0" />
            <span>{SITE.address}</span>
          </a>
          <ul className="mt-3 space-y-1 text-sm text-white/70">
            {SITE.hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-4"><span>{h.day}</span><span>{h.time}</span></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold tracking-wide text-[color:var(--champagne)]">Connect</h4>
          <div className="flex items-center gap-3">
            <a aria-label="Instagram" href={SITE.instagram} target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-white/20"><Instagram size={16} /></a>
            <a aria-label="Facebook" href={SITE.facebook} target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-white/20"><Facebook size={16} /></a>
            <a aria-label="WhatsApp" href={SITE.whatsappUrl("Hello Tripple S Spa, I'd like to enquire about your treatments.")} target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-white/20"><Phone size={16} /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © {new Date().getFullYear()} {SITE.name}. All rights reserved.
      </div>
    </footer>
  );
}