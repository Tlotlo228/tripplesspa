import { createFileRoute } from "@tanstack/react-router";
import { Stethoscope, HeartPulse, Sparkles, Leaf, ShieldCheck, Award } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Tripple S Spa" },
      { name: "description", content: "Discover the philosophy, medical oversight and personalised care behind Tripple S Spa in Gaborone." },
      { property: "og:title", content: "About Tripple S Spa" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

const PILLARS = [
  { icon: Stethoscope, title: "Medical Oversight", copy: "Every treatment is designed, performed or supervised by qualified medical professionals — never delegated to chance." },
  { icon: HeartPulse, title: "Personalised Care", copy: "Your consultation, skin assessment and goals shape a plan that is uniquely yours." },
  { icon: Sparkles, title: "Luxury Experience", copy: "A calm, discreet space where clinical rigor is wrapped in warmth and beauty." },
  { icon: Leaf, title: "Innovation", copy: "We invest in evidence-based technologies and medical-grade formulations from trusted global brands." },
  { icon: ShieldCheck, title: "Safety First", copy: "Sterile protocols, honest contraindications and transparent aftercare guide every appointment." },
  { icon: Award, title: "Confidence Through Wellness", copy: "Because feeling well and looking well should never be separated." },
];

function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 lg:px-12">
      <header className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--gold)]">Our Story</p>
        <h1 className="mt-2 font-display text-4xl text-[color:var(--emerald-deep)] sm:text-5xl">Where Beauty Meets Medical Excellence</h1>
        <p className="mt-5 text-[15px] leading-relaxed text-[color:var(--muted-foreground)]">
          Tripple S Spa exists at the intersection of clinical medicine and refined self-care. We built our clinic for clients who want more than a facial — clients who expect scientific rigor, discretion, and results.
        </p>
      </header>

      <section className="mt-14 grid gap-8 lg:grid-cols-2">
        <div className="glass rounded-2xl p-8">
          <h2 className="font-display text-2xl text-[color:var(--emerald-deep)]">Our Mission</h2>
          <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted-foreground)]">
            To elevate wellness and aesthetics in Botswana with international standards of medical safety, ethical guidance and elegant experience — helping every client feel confidently themselves.
          </p>
        </div>
        <div className="glass rounded-2xl p-8">
          <h2 className="font-display text-2xl text-[color:var(--emerald-deep)]">Why Choose Us</h2>
          <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted-foreground)]">
            From doctor-supervised IV therapy to precision skin protocols, we combine international training with warm, unrushed consultations. You leave informed, cared for and glowing.
          </p>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-3xl text-[color:var(--emerald-deep)]">Our Pillars</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((p) => (
            <article key={p.title} className="rounded-2xl border border-white/60 bg-white/75 p-6 backdrop-blur-md">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-[color:var(--emerald-deep)] text-white"><p.icon size={18} /></span>
              <h3 className="mt-4 font-display text-lg text-[color:var(--emerald-deep)]">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted-foreground)]">{p.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-3xl bg-[color:var(--emerald-deep)] px-8 py-12 text-center text-white">
        <h2 className="font-display text-3xl">Confidence, cultivated with care.</h2>
        <p className="mx-auto mt-3 max-w-xl text-white/80">Wellness is our first prescription — beauty follows.</p>
      </section>
    </div>
  );
}