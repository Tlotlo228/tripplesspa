import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, ShieldCheck, Stethoscope, HeartPulse, Droplets, Leaf, Star, ArrowRight } from "lucide-react";
import { LOGO_URL, SITE } from "@/lib/site";

export const Route = createFileRoute("/")({
  component: Index,
});

const TRUST = [
  { icon: Stethoscope, label: "Doctor Supervised" },
  { icon: ShieldCheck, label: "Medical Grade" },
  { icon: Sparkles, label: "Certified Professionals" },
  { icon: HeartPulse, label: "Personalised Care" },
];

const FEATURES = [
  { icon: Droplets, title: "IV Wellness", copy: "Vitamin drips for hydration, glow, immunity and vitality — administered by qualified clinicians." },
  { icon: Sparkles, title: "Skin Treatments", copy: "Peels, HydraFacials, microneedling and medical-grade facials tailored to your skin." },
  { icon: Leaf, title: "Body Contouring", copy: "Lipolytic injections and sauna therapy to sculpt, detoxify and restore." },
  { icon: HeartPulse, title: "Medical Aesthetics", copy: "PRP, skin boosters and anti-sweat injections performed to clinical standards." },
];

const TESTIMONIALS = [
  { name: "Neo M.", quote: "The most calming, professional aesthetics experience in Gaborone. My skin has never looked healthier.", rating: 5 },
  { name: "Lorato K.", quote: "Their IV drips are a game-changer. I feel restored and glowing after every visit.", rating: 5 },
  { name: "Tebogo S.", quote: "Truly medical-grade. The consultation was thorough and honest — I felt safe throughout.", rating: 5 },
];

function Index() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 pt-14 pb-20 sm:pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-12 lg:pt-24">
          <div className="flex flex-col justify-center">
            <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-[color:var(--gold)]/40 bg-white/60 px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-[color:var(--emerald-deep)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--gold)]" /> Medical Aesthetics · Gaborone
            </span>
            <h1 className="font-display text-4xl leading-[1.05] text-[color:var(--emerald-deep)] sm:text-5xl lg:text-6xl">
              Where beauty meets <em className="not-italic text-gold-gradient">medical excellence.</em>
            </h1>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-[color:var(--muted-foreground)] sm:text-base">
              Advanced medical aesthetics, IV wellness, skin health and body contouring — delivered with clinical precision in a serene, private setting.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/book" className="group inline-flex items-center gap-2 rounded-full bg-[color:var(--emerald-deep)] px-5 py-3 text-sm font-medium text-white shadow-luxe transition-transform hover:-translate-y-0.5">
                Book Consultation <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link to="/treatments" className="inline-flex items-center gap-2 rounded-full border border-[color:var(--emerald-deep)]/20 bg-white/70 px-5 py-3 text-sm font-medium text-[color:var(--emerald-deep)] hover:bg-white">
                View Treatments
              </Link>
            </div>
            <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-[color:var(--foreground)]/80 sm:max-w-md">
              {["Doctor supervised treatments","Personalised care plans","Medical-grade products","Discreet luxury environment"].map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[color:var(--gold)]" /> {f}
                </li>
              ))}
            </ul>
          </div>
          {/* Logo showcase card (no other imagery per brand request) */}
          <div className="relative">
            <div className="glass shadow-luxe relative mx-auto flex aspect-square w-full max-w-md flex-col items-center justify-center rounded-[2rem] p-10">
              <div className="absolute inset-6 rounded-[1.6rem] border border-[color:var(--gold)]/25" />
              <div className="absolute -top-6 -right-6 h-32 w-32 rounded-full bg-[color:var(--sage)]/50 blur-2xl" />
              <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-[color:var(--champagne)]/60 blur-2xl" />
              <img src={LOGO_URL} alt={SITE.name} className="relative z-10 h-40 w-40 rounded-full object-cover shadow-lg ring-2 ring-[color:var(--gold)]/40" />
              <p className="relative z-10 mt-6 text-center font-display text-2xl text-[color:var(--emerald-deep)]">Tripple S Spa</p>
              <p className="relative z-10 mt-1 text-center text-[11px] uppercase tracking-[0.3em] text-[color:var(--muted-foreground)]">Est. Gaborone · Medical Wellness</p>
            </div>
          </div>
        </div>

        {/* Trust bar */}
        <div className="mx-auto max-w-6xl px-6 pb-12 lg:px-12">
          <div className="glass grid grid-cols-2 gap-4 rounded-2xl px-6 py-5 sm:grid-cols-4">
            {TRUST.map((t) => (
              <div key={t.label} className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[color:var(--emerald-deep)]/8 text-[color:var(--emerald-deep)]"><t.icon size={18} /></span>
                <span className="text-[13px] font-medium text-[color:var(--emerald-deep)]">{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED SERVICES */}
      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-12">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--gold)]">Our Care</p>
            <h2 className="mt-2 font-display text-3xl text-[color:var(--emerald-deep)] sm:text-4xl">Featured Services</h2>
          </div>
          <Link to="/treatments" className="hidden text-sm text-[color:var(--emerald-deep)] underline-offset-4 hover:underline sm:inline">See all treatments →</Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => (
            <article key={f.title} className="group relative overflow-hidden rounded-2xl border border-white/60 bg-white/70 p-6 shadow-sm backdrop-blur-md transition-transform hover:-translate-y-1 hover:shadow-luxe">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-[color:var(--emerald-deep)] text-white"><f.icon size={18} /></span>
              <h3 className="mt-4 font-display text-xl text-[color:var(--emerald-deep)]">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted-foreground)]">{f.copy}</p>
              <div className="pointer-events-none absolute -right-8 -bottom-8 h-24 w-24 rounded-full bg-[color:var(--champagne)]/40 blur-2xl transition-opacity group-hover:opacity-100" />
            </article>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      </section>

{/* SKINCARE PRODUCTS */}
<section className="mx-auto max-w-6xl px-6 py-16 lg:px-12">
  <div className="mb-10">
    <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--gold)]">
      Skincare Products
    </p>
    <h2 className="mt-2 font-display text-3xl text-[color:var(--emerald-deep)]">
      Medical Grade Skincare
    </h2>
  </div>

  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
    {[
      { name: "Dark Spot Serum (30ml)", price: "P1,200" },
      { name: "Vitamin C Serum", price: "P950" },
      { name: "Complexion Corrector Cream (100ml)", price: "P2,000" },
      { name: "Anti-Acne Serum (30ml)", price: "P950" },
      { name: "Retinol Serum (30ml)", price: "P1,300" },
    ].map((product) => (
      <article
        key={product.name}
        className="rounded-2xl border border-white/60 bg-white/70 p-6 shadow-sm"
      >
        <h3 className="font-display text-xl text-[color:var(--emerald-deep)]">
          {product.name}
        </h3>
        <p className="mt-3 text-lg font-semibold text-[color:var(--gold)]">
          {product.price}
        </p>
      </article>
    ))}
  </div>
</section>
{/* TESTIMONIALS */}
      <section className="mx-auto max-w-6xl px-6 py-12 lg:px-12">
        <div className="mb-10 text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--gold)]">Client Voices</p>
          <h2 className="mt-2 font-display text-3xl text-[color:var(--emerald-deep)] sm:text-4xl">Trusted by our community</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <blockquote key={t.name} className="glass rounded-2xl p-6 text-[color:var(--foreground)]">
              <div className="mb-3 flex text-[color:var(--gold)]">
                {Array.from({ length: t.rating }).map((_, i) => <Star key={i} size={14} fill="currentColor" strokeWidth={0} />)}
              </div>
              <p className="font-display text-lg leading-snug text-[color:var(--emerald-deep)]">“{t.quote}”</p>
              <footer className="mt-4 text-xs uppercase tracking-[0.22em] text-[color:var(--muted-foreground)]">— {t.name}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* FAQ PREVIEW */}
      <section className="mx-auto max-w-4xl px-6 py-16 lg:px-12">
        <div className="glass rounded-3xl p-8 sm:p-10">
          <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--gold)]">Questions</p>
          <h2 className="mt-2 font-display text-3xl text-[color:var(--emerald-deep)]">Before your visit</h2>
          <dl className="mt-6 divide-y divide-[color:var(--border)]">
            {[
              ["Are treatments doctor supervised?", "Yes. All medical procedures are performed or overseen by qualified clinicians."],
              ["Do I need a consultation first?", "Some treatments require a professional consultation to ensure safety and best results."],
              ["How are payments handled?", "You may pay in-clinic or send proof of payment via WhatsApp after booking online."],
            ].map(([q, a]) => (
              <div key={q} className="py-4">
                <dt className="font-medium text-[color:var(--emerald-deep)]">{q}</dt>
                <dd className="mt-1 text-sm text-[color:var(--muted-foreground)]">{a}</dd>
              </div>
            ))}
          </dl>
          <Link to="/faq" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[color:var(--emerald-deep)] underline-offset-4 hover:underline">Read all FAQs <ArrowRight size={14} /></Link>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-24 lg:px-12">
        <div className="relative overflow-hidden rounded-3xl bg-[color:var(--emerald-deep)] px-8 py-14 text-center text-white sm:px-14">
          <div className="absolute -top-16 -left-16 h-48 w-48 rounded-full bg-[color:var(--gold)]/30 blur-3xl" />
          <div className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-[color:var(--sage)]/25 blur-3xl" />
          <h2 className="relative font-display text-3xl sm:text-4xl">Ready to feel your best?</h2>
          <p className="relative mx-auto mt-3 max-w-lg text-white/80">Schedule a private consultation with our clinical team and discover the treatments right for you.</p>
          <div className="relative mt-6 flex flex-wrap justify-center gap-3">
            <Link to="/book" className="inline-flex items-center gap-2 rounded-full bg-[color:var(--gold)] px-5 py-3 text-sm font-medium text-[color:var(--emerald-deep)] shadow-luxe hover:brightness-105">Book Consultation</Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm text-white hover:bg-white/10">Contact us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
