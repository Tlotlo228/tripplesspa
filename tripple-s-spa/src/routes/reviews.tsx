import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";

export const Route = createFileRoute("/reviews")({
  component: ReviewsPage,
  head: () => ({
    meta: [
      { title: "Client Reviews — Tripple S Spa" },
      { name: "description", content: "Read authentic experiences from clients of Tripple S Spa in Gaborone." },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
});

const REVIEWS = [
  { name: "Neo M.", role: "IV Wellness client", rating: 5, quote: "The most calming, professional aesthetics experience in Gaborone. My skin has never looked healthier." },
  { name: "Lorato K.", role: "LumiGlow Drip", rating: 5, quote: "Their IV drips are a game-changer. I feel restored and glowing after every visit." },
  { name: "Tebogo S.", role: "PRP Facial", rating: 5, quote: "Truly medical-grade. The consultation was thorough and honest — I felt safe throughout." },
  { name: "Kabo R.", role: "Skin Boosters", rating: 5, quote: "Elegant space, gentle team, real results. I recommend Tripple S to everyone." },
  { name: "Amogelang D.", role: "Hydra Facial", rating: 5, quote: "Attention to detail is unmatched. I feel completely looked after every appointment." },
  { name: "Mpho T.", role: "Body Contouring", rating: 5, quote: "Visible progress and honest guidance — no upselling, just genuine expertise." },
];

function ReviewsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 lg:px-12">
      <header className="mb-12 max-w-2xl">
        <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--gold)]">Reviews</p>
        <h1 className="mt-2 font-display text-4xl text-[color:var(--emerald-deep)] sm:text-5xl">Trusted by clients across Gaborone</h1>
        <p className="mt-4 text-[15px] text-[color:var(--muted-foreground)]">Real reflections from our community, shared with permission.</p>
      </header>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {REVIEWS.map((r) => (
          <article key={r.name} className="glass rounded-2xl p-6">
            <div className="flex text-[color:var(--gold)]">
              {Array.from({ length: r.rating }).map((_, i) => <Star key={i} size={14} fill="currentColor" strokeWidth={0} />)}
            </div>
            <p className="mt-3 font-display text-lg leading-snug text-[color:var(--emerald-deep)]">“{r.quote}”</p>
            <footer className="mt-4 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-[color:var(--emerald-deep)] text-sm font-semibold text-white">{r.name.charAt(0)}</span>
              <div className="text-xs">
                <div className="font-medium text-[color:var(--emerald-deep)]">{r.name}</div>
                <div className="text-[color:var(--muted-foreground)]">{r.role}</div>
              </div>
            </footer>
          </article>
        ))}
      </div>
    </div>
  );
}
