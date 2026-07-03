import { createFileRoute, Link } from "@tanstack/react-router";
import { TREATMENTS, TREATMENT_CATEGORIES, formatPrice } from "@/lib/site";
import { Clock, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/treatments")({
  component: TreatmentsPage,
  head: () => ({
    meta: [
      { title: "Treatments & Pricing — Tripple S Spa" },
      { name: "description", content: "Explore our full menu of IV drips, medical aesthetics, skin treatments, body contouring and wellness services with transparent pricing." },
    ],
    links: [{ rel: "canonical", href: "/treatments" }],
  }),
});

function TreatmentsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 lg:px-12">
      <header className="mb-12 max-w-2xl">
        <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--gold)]">Menu</p>
        <h1 className="mt-2 font-display text-4xl text-[color:var(--emerald-deep)] sm:text-5xl">Treatments & Pricing</h1>
        <p className="mt-4 text-[15px] leading-relaxed text-[color:var(--muted-foreground)]">
          Every treatment is delivered with medical precision and personalised guidance. Prices are in Botswana Pula (P) and may vary after clinical assessment.
        </p>
      </header>

      <div className="space-y-14">
        {TREATMENT_CATEGORIES.map((cat) => {
          const items = TREATMENTS.filter((t) => t.category === cat);
          return (
            <section key={cat}>
              <div className="mb-5 flex items-baseline justify-between">
                <h2 className="font-display text-2xl text-[color:var(--emerald-deep)] sm:text-3xl">{cat}</h2>
                <span className="text-xs uppercase tracking-[0.28em] text-[color:var(--muted-foreground)]">{items.length} treatments</span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((t) => (
                  <article key={t.id} className="group relative overflow-hidden rounded-2xl border border-white/60 bg-white/75 p-5 shadow-sm backdrop-blur-md transition-transform hover:-translate-y-1 hover:shadow-luxe">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-lg leading-tight text-[color:var(--emerald-deep)]">{t.name}</h3>
                      <span className="shrink-0 rounded-full bg-[color:var(--emerald-deep)] px-3 py-1 text-xs font-medium text-white">{formatPrice(t.price)}</span>
                    </div>
                    <div className="mt-3 flex items-center gap-1.5 text-xs text-[color:var(--muted-foreground)]">
                      <Clock size={12} /> {t.duration} min
                      {t.note ? <span className="ml-2 italic">· {t.note}</span> : null}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <div className="mt-14 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-[color:var(--gold)]/30 bg-white/70 p-6">
        <p className="text-sm text-[color:var(--emerald-deep)]">Ready to plan your visit? Select multiple treatments and confirm online.</p>
        <Link to="/book" className="inline-flex items-center gap-2 rounded-full bg-[color:var(--emerald-deep)] px-5 py-3 text-sm font-medium text-white shadow-luxe">Book now <ArrowRight size={14} /></Link>
      </div>
    </div>
  );
}
