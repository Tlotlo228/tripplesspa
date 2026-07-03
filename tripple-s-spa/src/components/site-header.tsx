import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { LOGO_URL, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/treatments", label: "Treatments" },
  { to: "/about", label: "About" },
  { to: "/reviews", label: "Reviews" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 glass border-b border-white/50">
      <div className="mx-auto grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:flex sm:justify-between sm:px-8 lg:px-12">
        <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <img src={LOGO_URL} alt={SITE.name} className="h-11 w-11 shrink-0 rounded-full object-cover ring-1 ring-[color:var(--gold)]/40" />
          <div className="min-w-0">
            <div className="font-display text-lg leading-tight text-[color:var(--emerald-deep)]">{SITE.name}</div>
            <div className="truncate text-[10px] uppercase tracking-[0.25em] text-[color:var(--muted-foreground)]">Medical Aesthetics · Wellness</div>
          </div>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="rounded-full px-3 py-2 text-sm text-[color:var(--foreground)]/80 transition-colors hover:text-[color:var(--emerald-deep)]"
              activeProps={{ className: "rounded-full px-3 py-2 text-sm text-[color:var(--emerald-deep)] bg-white/70" }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/book"
            className="ml-2 inline-flex items-center rounded-full bg-[color:var(--emerald-deep)] px-4 py-2 text-sm font-medium text-white shadow-luxe transition-transform hover:-translate-y-0.5"
          >
            Book Consultation
          </Link>
        </nav>
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/70 text-[color:var(--emerald-deep)] shadow-sm lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      <div className={cn("overflow-hidden border-t border-white/50 transition-[max-height] duration-300 lg:hidden", open ? "max-h-[500px]" : "max-h-0") }>
        <div className="flex flex-col gap-1 px-4 py-3">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: n.to === "/" }}
              className="rounded-lg px-3 py-2 text-[15px] text-[color:var(--foreground)]/85 hover:bg-white/70"
              activeProps={{ className: "rounded-lg px-3 py-2 text-[15px] text-[color:var(--emerald-deep)] bg-white/80" }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/book"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center rounded-full bg-[color:var(--emerald-deep)] px-4 py-2.5 text-sm font-medium text-white shadow-luxe"
          >
            Book Consultation
          </Link>
        </div>
      </div>
    </header>
  );
}