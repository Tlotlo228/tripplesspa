import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export const Route = createFileRoute("/faq")({
  component: FAQPage,
  head: () => ({
    meta: [
      { title: "FAQ — Tripple S Spa" },
      { name: "description", content: "Answers to common questions about treatments, safety, IV drips, consultations, payments and aftercare." },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
  }),
});

const GROUPS: { title: string; items: [string, string][] }[] = [
  {
    title: "Treatments & Safety",
    items: [
      ["Are treatments doctor supervised?", "Yes — all medical procedures are performed or overseen by qualified clinicians."],
      ["Do I need a consultation first?", "Some treatments require a professional consultation to ensure safety and best results."],
      ["What are the contraindications?", "Pregnancy, active infections and some medications may affect eligibility. We review this with you at consultation."],
    ],
  },
  {
    title: "IV Wellness Drips",
    items: [
      ["How long does an IV drip take?", "Typically 45–75 minutes depending on the formulation."],
      ["Is it painful?", "You'll feel a small pinch on insertion; the drip itself is relaxing."],
      ["How often can I do drips?", "Frequency depends on your goals — we recommend a personalised plan."],
    ],
  },
  {
    title: "Body Contouring",
    items: [
      ["Is lipolytic injection safe?", "Yes, when administered by trained clinicians and after suitability screening."],
      ["How many sessions will I need?", "This varies by area and goals — packages of 10, 20 or 30 sessions are available."],
    ],
  },
  {
    title: "Appointments & Payments",
    items: [
      ["How do I book?", "Use our online booking or WhatsApp us directly."],
      ["How are payments handled?", "You may pay in-clinic or send payment proof via WhatsApp after booking online."],
      ["What is your aftercare?", "You'll receive written aftercare and our team is reachable via WhatsApp for follow-up questions."],
    ],
  },
];

function FAQPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 lg:px-12">
      <header className="mb-10">
        <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--gold)]">Frequently Asked</p>
        <h1 className="mt-2 font-display text-4xl text-[color:var(--emerald-deep)] sm:text-5xl">Questions & Answers</h1>
      </header>
      <div className="space-y-8">
        {GROUPS.map((g) => (
          <section key={g.title}>
            <h2 className="mb-3 font-display text-xl text-[color:var(--emerald-deep)]">{g.title}</h2>
            <div className="glass divide-y divide-[color:var(--border)] rounded-2xl">
              {g.items.map(([q, a]) => (
                <FaqItem key={q} q={q} a={a} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="font-medium text-[color:var(--emerald-deep)]">{q}</span>
        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[color:var(--emerald-deep)]/8 text-[color:var(--emerald-deep)]">
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>
      {open ? <div className="px-5 pb-5 text-sm text-[color:var(--muted-foreground)]">{a}</div> : null}
    </div>
  );
}
