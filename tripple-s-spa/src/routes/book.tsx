import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useRef, useState } from "react";
import { Check, ChevronLeft, ChevronRight, Phone, ShieldAlert } from "lucide-react";
import { TREATMENTS, TREATMENT_CATEGORIES, formatPrice, SITE, type Treatment } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/book")({
  component: BookPage,
  head: () => ({
    meta: [
      { title: "Book a Consultation — Tripple S Spa" },
      { name: "description", content: "Reserve your consultation at Tripple S Spa. Select treatments, choose a time, and confirm payment via WhatsApp." },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/book" }],
  }),
});

type Patient = {
  fullName: string;
  phone: string;
  email: string;
  age: string;
  concerns: string;
  goals: string;
  conditions: string;
  medications: string;
  pregnant: boolean;
  confirmedAppt: boolean;
  apptSummary: string;
};

const STEPS = ["Treatments", "Appointment", "Details", "Summary", "Confirm"] as const;
const CALENDAR_EMBED_URL = "https://calendar.google.com/calendar/appointments/schedules/AcZssZ251U8vmHJsxIodjmEVfeYqcBiJqM2VvGj5zfbU0rAlwjtUMxiHsoRr37g9xCEsG7qS_uw3-aX5?gv=true";

function BookPage() {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState<Record<string, boolean>>({});
  const [calendarActive, setCalendarActive] = useState(false);
  const wizardRef = useRef<HTMLDivElement | null>(null);
  const [patient, setPatient] = useState<Patient>({
    fullName: "", phone: "", email: "", age: "", concerns: "", goals: "",
    conditions: "", medications: "", pregnant: false, confirmedAppt: false, apptSummary: "",
  });
  const [error, setError] = useState<string | null>(null);

  const chosen: Treatment[] = useMemo(() => TREATMENTS.filter((t) => selected[t.id]), [selected]);
  const total = useMemo(() => chosen.reduce((s, t) => s + (typeof t.price === "number" ? t.price : 0), 0), [chosen]);
  const hasVariable = chosen.some((t) => typeof t.price !== "number");
  const duration = useMemo(() => chosen.reduce((s, t) => s + t.duration, 0), [chosen]);

  const canNext = () => {
    setError(null);
    if (step === 0 && chosen.length === 0) { setError("Please select at least one treatment."); return false; }
    if (step === 1 && !patient.confirmedAppt) { setError("Please choose an appointment before continuing."); return false; }
    if (step === 2) {
      if (!patient.fullName.trim() || !patient.phone.trim() || !patient.email.trim()) {
        setError("Please provide your name, phone and email."); return false;
      }
    }
    return true;
  };

  const go = (dir: 1 | -1) => {
    if (dir === 1 && !canNext()) return;
    setStep((s) => Math.min(STEPS.length - 1, Math.max(0, s + dir)));
    requestAnimationFrame(() => {
      const el = wizardRef.current;
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY - 88;
      window.scrollTo({ top, behavior: "smooth" });
    });
  };

  const waMessage = useMemo(() => {
    const lines = [
      "Hello Tripple S Spa.",
      "I would like to confirm my consultation.",
      "",
      `Name: ${patient.fullName}`,
      `Selected Treatments: ${chosen.map((t) => t.name).join(", ")}`,
      `Appointment: ${patient.apptSummary || "See calendar"}`,
      `Estimated Total: P${total.toLocaleString()}${hasVariable ? " (+ assessment-based items)" : ""}`,
      "",
      "I have booked my appointment through your website.",
      "I will attach my payment proof here.",
      "Thank you.",
    ];
    return lines.join("\n");
  }, [patient, chosen, total, hasVariable]);

  return (
    <div className="mx-auto max-w-4xl px-6 py-10 [overflow-anchor:none] lg:px-12">
      <header ref={wizardRef} className="mb-6 max-w-2xl scroll-mt-24">
        <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--gold)]">Booking</p>
        <h1 className="mt-2 font-display text-4xl text-[color:var(--emerald-deep)] sm:text-5xl">Reserve your consultation</h1>
      </header>

      {/* Progress */}
      <ol className="mb-8 flex items-center gap-2 overflow-x-auto pb-1">
        {STEPS.map((label, i) => (
          <li key={label} className={cn("flex items-center gap-2 whitespace-nowrap text-xs", i <= step ? "text-[color:var(--emerald-deep)]" : "text-[color:var(--muted-foreground)]")}>
            <span className={cn("grid h-6 w-6 place-items-center rounded-full text-[11px] font-semibold",
              i < step ? "bg-[color:var(--emerald-deep)] text-white" :
              i === step ? "bg-[color:var(--gold)] text-[color:var(--emerald-deep)]" :
              "bg-white/70 text-[color:var(--muted-foreground)]")}>
              {i < step ? <Check size={12} /> : i + 1}
            </span>
            <span className="hidden sm:inline">{label}</span>
            {i < STEPS.length - 1 && <span className="h-px w-6 bg-[color:var(--border)]" />}
          </li>
        ))}
      </ol>

      <div className="glass rounded-2xl p-5 [overflow-anchor:none] sm:p-8">
        <div className="grid items-start [overflow-anchor:none]">
        <StepPanel active={step === 0}>
          <Section title="Select your treatments" subtitle="You may choose one or several. Final recommendations may vary after your skin assessment.">
            <div className="space-y-8">
              {TREATMENT_CATEGORIES.map((cat) => (
                <div key={cat}>
                  <h3 className="mb-3 font-display text-lg text-[color:var(--emerald-deep)]">{cat}</h3>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {TREATMENTS.filter((t) => t.category === cat).map((t) => {
                      const active = !!selected[t.id];
                      return (
                        <label key={t.id} className={cn(
                          "flex cursor-pointer items-center justify-between gap-3 rounded-xl border p-3 transition-colors",
                          active ? "border-[color:var(--emerald-deep)] bg-[color:var(--emerald-deep)]/5" : "border-[color:var(--border)] bg-white/60 hover:bg-white",
                        )}>
                          <div className="min-w-0">
                            <div className="truncate text-sm font-medium text-[color:var(--emerald-deep)]">{t.name}</div>
                            <div className="text-xs text-[color:var(--muted-foreground)]">{t.duration} min · {formatPrice(t.price)}</div>
                          </div>
                          <input
                            type="checkbox"
                            className="h-5 w-5 shrink-0 accent-[color:var(--emerald-deep)]"
                            checked={active}
                            onChange={(e) => setSelected((s) => ({ ...s, [t.id]: e.target.checked }))}
                          />
                        </label>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </StepPanel>

        <StepPanel active={step === 1}>
          <Section title="Confirm your appointment time" subtitle="Please choose an available consultation time directly from the calendar below before continuing.">
            <div
              className="my-8 overflow-hidden rounded-2xl border border-[color:var(--border)] bg-white [overflow-anchor:none]"
              style={{ touchAction: calendarActive ? "auto" : "pan-y" }}
            >
              <div className="flex items-center justify-between gap-3 border-b border-[color:var(--border)] bg-[color:var(--ivory)] px-4 py-3">
                <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted-foreground)]">Google Calendar</span>
                <button
                  type="button"
                  onPointerDown={(event) => event.preventDefault()}
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={() => setCalendarActive((value) => !value)}
                  className="rounded-full border border-[color:var(--emerald-deep)]/20 bg-white px-3 py-1.5 text-xs font-medium text-[color:var(--emerald-deep)]"
                >
                  {calendarActive ? "Page scroll" : "Use calendar"}
                </button>
              </div>
              <div className="relative h-[480px] w-full sm:h-[620px]">
                <iframe
                  title="Appointment scheduling"
                  src={CALENDAR_EMBED_URL}
                  className={cn("absolute inset-0 block h-full w-full", calendarActive ? "pointer-events-auto" : "pointer-events-none")}
                  style={{ border: 0 }}
                  loading="lazy"
                />
                {!calendarActive && (
                  <button
                    type="button"
                    onPointerDown={(event) => event.preventDefault()}
                    onMouseDown={(event) => event.preventDefault()}
                    onClick={() => setCalendarActive(true)}
                    className="absolute inset-0 grid place-items-center bg-white/50 px-6 text-center text-sm font-medium text-[color:var(--emerald-deep)] backdrop-blur-[1px]"
                  >
                    Tap to use the calendar
                  </button>
                )}
              </div>
            </div>
            <div className="mt-4 rounded-xl border border-[color:var(--gold)]/30 bg-[color:var(--champagne)]/30 p-4 text-sm text-[color:var(--emerald-deep)]">
              <div className="flex items-start gap-2">
                <ShieldAlert size={16} className="mt-0.5 shrink-0" />
                <p>Once you have selected a time in the calendar above, tick below to confirm and continue.</p>
              </div>
              <label className="mt-3 flex items-start gap-2 text-sm">
                <input
                  type="checkbox"
                  className="mt-0.5 h-4 w-4 accent-[color:var(--emerald-deep)]"
                  checked={patient.confirmedAppt}
                  onChange={(e) => setPatient((p) => ({ ...p, confirmedAppt: e.target.checked }))}
                />
                <span>I have chosen my appointment time in the calendar.</span>
              </label>
              <input
                type="text"
                placeholder="Optional: type your chosen time (e.g. 14:30)"
                value={patient.apptSummary}
                onChange={(e) => setPatient((p) => ({ ...p, apptSummary: e.target.value }))}
                className="mt-3 block w-full rounded-lg border border-[color:var(--border)] bg-white px-3 py-2 text-sm"
              />
            </div>
          </Section>
        </StepPanel>

        <StepPanel active={step === 2}>
          <Section title="Your details" subtitle="Kept private and used only for your care.">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Full name" value={patient.fullName} onChange={(v) => setPatient((p) => ({ ...p, fullName: v }))} />
              <Field label="Phone" type="tel" value={patient.phone} onChange={(v) => setPatient((p) => ({ ...p, phone: v }))} />
              <Field label="Email" type="email" value={patient.email} onChange={(v) => setPatient((p) => ({ ...p, email: v }))} />
              <Field label="Age" type="number" value={patient.age} onChange={(v) => setPatient((p) => ({ ...p, age: v }))} />
              <Field label="Medical concerns (optional)" value={patient.concerns} onChange={(v) => setPatient((p) => ({ ...p, concerns: v }))} className="sm:col-span-2" textarea />
              <Field label="Treatment goals" value={patient.goals} onChange={(v) => setPatient((p) => ({ ...p, goals: v }))} className="sm:col-span-2" textarea />
              <Field label="Medical conditions (optional)" value={patient.conditions} onChange={(v) => setPatient((p) => ({ ...p, conditions: v }))} className="sm:col-span-2" />
              <Field label="Current medications (optional)" value={patient.medications} onChange={(v) => setPatient((p) => ({ ...p, medications: v }))} className="sm:col-span-2" />
              <label className="sm:col-span-2 flex items-center gap-3 rounded-xl border border-[color:var(--border)] bg-white/70 p-3 text-sm">
                <input type="checkbox" className="h-4 w-4 accent-[color:var(--emerald-deep)]"
                  checked={patient.pregnant}
                  onChange={(e) => setPatient((p) => ({ ...p, pregnant: e.target.checked }))} />
                I am currently pregnant or breastfeeding.
              </label>
            </div>
          </Section>
        </StepPanel>

        <StepPanel active={step === 3}>
          <Section title="Booking summary" subtitle="Please review before confirming.">
            <dl className="space-y-4 text-sm">
              <SumRow label="Treatments">
                <ul className="list-disc pl-5">{chosen.map((t) => <li key={t.id}>{t.name} — {formatPrice(t.price)}</li>)}</ul>
              </SumRow>
              <SumRow label="Estimated total">P{total.toLocaleString()}{hasVariable ? " + assessment-based items" : ""}</SumRow>
              <SumRow label="Estimated duration">{duration} minutes</SumRow>
              <SumRow label="Time">{patient.apptSummary || "As selected in calendar"}</SumRow>
              <SumRow label="Name">{patient.fullName}</SumRow>
              <SumRow label="Phone">{patient.phone}</SumRow>
              <SumRow label="Email">{patient.email}</SumRow>
            </dl>
            <p className="mt-6 text-xs text-[color:var(--muted-foreground)]">
              Some treatments require a professional consultation before treatment. Final recommendations may vary depending on your skin assessment.
            </p>
          </Section>
        </StepPanel>

        <StepPanel active={step === 4}>
          <Section title="Final step" subtitle="Please send your payment proof directly via WhatsApp after submitting your booking.">
            <div className="rounded-2xl border border-[color:var(--gold)]/40 bg-white p-6">
              <pre className="mb-5 whitespace-pre-wrap rounded-lg bg-[color:var(--muted)] p-4 text-xs text-[color:var(--foreground)]">{waMessage}</pre>
              <a
                href={SITE.whatsappUrl(waMessage)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[color:var(--emerald-deep)] px-5 py-3 text-sm font-medium text-white shadow-luxe"
              >
                <Phone size={16} /> Open WhatsApp to confirm
              </a>
            </div>
          </Section>
        </StepPanel>
        </div>

        <div className="mt-4 min-h-11" aria-live="polite">
          {error ? (
            <p role="alert" className="rounded-lg border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>
          ) : null}
        </div>

        {/* Nav */}
        <div className="mt-8 flex items-center justify-between gap-3">
          <button
            type="button"
            onPointerDown={(event) => event.preventDefault()}
            onMouseDown={(event) => event.preventDefault()}
            onClick={() => go(-1)}
            disabled={step === 0}
            className="inline-flex items-center gap-1 rounded-full border border-[color:var(--border)] bg-white px-4 py-2 text-sm text-[color:var(--emerald-deep)] disabled:opacity-40"
          >
            <ChevronLeft size={14} /> Back
          </button>
          <div className="text-xs text-[color:var(--muted-foreground)]">Step {step + 1} of {STEPS.length}</div>
          {step < STEPS.length - 1 ? (
            <button
              type="button"
              onPointerDown={(event) => event.preventDefault()}
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => go(1)}
              className="inline-flex items-center gap-1 rounded-full bg-[color:var(--emerald-deep)] px-4 py-2 text-sm font-medium text-white shadow-luxe"
            >
              Continue <ChevronRight size={14} />
            </button>
          ) : (
            <span className="text-xs text-[color:var(--emerald-deep)]">Send via WhatsApp to finalise ↑</span>
          )}
        </div>
      </div>

      {/* Sticky footer summary */}
      {chosen.length > 0 && step < 3 && (
        <div className="mt-6 rounded-2xl border border-[color:var(--gold)]/30 bg-white/80 p-4 text-sm">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="text-[color:var(--muted-foreground)]">{chosen.length} treatment{chosen.length > 1 ? "s" : ""} · {duration} min</div>
            <div className="font-medium text-[color:var(--emerald-deep)]">Estimated total: P{total.toLocaleString()}{hasVariable ? "+" : ""}</div>
          </div>
        </div>
      )}
    </div>
  );
}

function StepPanel({ active, children }: { active: boolean; children: React.ReactNode }) {
  if (!active) return null;
  return <div className="min-w-0 [overflow-anchor:none]">{children}</div>;
}

function Section({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-2xl text-[color:var(--emerald-deep)]">{title}</h2>
      {subtitle && <p className="mt-1 text-sm text-[color:var(--muted-foreground)]">{subtitle}</p>}
      <div className="mt-6">{children}</div>
    </div>
  );
}

function Field({ label, value, onChange, type = "text", className, textarea }: {
  label: string; value: string; onChange: (v: string) => void; type?: string; className?: string; textarea?: boolean;
}) {
  const base = "mt-2 block w-full rounded-xl border border-[color:var(--border)] bg-white px-4 py-3 text-[15px] outline-none focus:border-[color:var(--emerald-deep)]";
  return (
    <label className={cn("block text-sm text-[color:var(--emerald-deep)]", className)}>
      {label}
      {textarea
        ? <textarea value={value} onChange={(e) => onChange(e.target.value)} rows={3} className={base} />
        : <input type={type} value={value} onChange={(e) => onChange(e.target.value)} className={base} />}
    </label>
  );
}

function SumRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[minmax(0,1fr)_2fr] gap-3 border-b border-[color:var(--border)] pb-3 last:border-none">
      <dt className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted-foreground)]">{label}</dt>
      <dd className="text-[color:var(--foreground)]">{children}</dd>
    </div>
  );
}
