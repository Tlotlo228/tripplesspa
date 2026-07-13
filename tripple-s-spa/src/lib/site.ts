export const LOGO_URL = "https://i.postimg.cc/BnZyy42s/6f1232cc-3ff4-4c8c-91b3-8bdb5d4acc38.jpg";

export const SITE = {
  name: "Tripple S Spa",
  tagline: "Where Beauty Meets Medical Excellence",
  address: "Plot 943, Kaunda Road, Gaborone",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Plot+943+Kaunda+Road+Gaborone",
  whatsappNumber: "26774866703",
  whatsappUrl: (msg: string) =>
    `https://wa.me/26774866703?text=${encodeURIComponent(msg)}`,
  instagram: "https://www.instagram.com/trippleswellnessspa",
  facebook: "https://www.facebook.com/trippleswellnessspa",
  hours: [
    { day: "Mon – Fri", time: "8:00 – 17:00" },
    { day: "Saturday", time: "8:00 – 17:00" },
    { day: "Sunday", time: "By appointment" },
  ],
};

export type Treatment = {
  id: string;
  name: string;
  price: number | string;
  duration: number; // minutes
  category: string;
  note?: string;
};

export const TREATMENT_CATEGORIES = [
  "IV Wellness Drips",
  "Medical Aesthetics",
  "Skin Treatments",
  "Body Contouring",
  "Wellness",
  "Consultations",
] as const;

export const TREATMENTS: Treatment[] = [
  // IV Wellness
  { id: "iv-hydration", category: "IV Wellness Drips", name: "Hydration Drip", price: 600, duration: 60 },
  { id: "iv-weight", category: "IV Wellness Drips", name: "Weight Management Drip", price: 850, duration: 60 },
  { id: "iv-clear", category: "IV Wellness Drips", name: "Clear Complexion Drip", price: 1200, duration: 60 },
  { id: "iv-lumi", category: "IV Wellness Drips", name: "LumiGlow Skin Brightening", price: 1500, duration: 60 },
  { id: "iv-premium", category: "IV Wellness Drips", name: "Premium Glow Drip", price: 1500, duration: 60 },
  { id: "iv-ultimate", category: "IV Wellness Drips", name: "Ultimate Beauty & Wellness", price: 1800, duration: 60 },
  // Medical Aesthetics
  { id: "ma-sweat", category: "Medical Aesthetics", name: "Anti-Sweat Injection", price: 5000, duration: 45 },
  { id: "ma-boost", category: "Medical Aesthetics", name: "Skin Boosters", price: 2900, duration: 45 },
  { id: "ma-prp", category: "Medical Aesthetics", name: "PRP Facial", price: 3800, duration: 60 },
  // Skin Treatments
  { id: "sk-mn", category: "Skin Treatments", name: "Microneedling", price: 1400, duration: 45 },
  { id: "sk-mn-repair", category: "Skin Treatments", name: "Skin Repair Microneedling", price: 1200, duration: 45 },
  { id: "sk-pig", category: "Skin Treatments", name: "Pigmentation Peel", price: 850, duration: 30 },
  { id: "sk-hydra", category: "Skin Treatments", name: "Hydra Facial", price: 500, duration: 45 },
  { id: "sk-deep", category: "Skin Treatments", name: "Deep Cleansing with LED", price: 350, duration: 45 },
  { id: "sk-acne", category: "Skin Treatments", name: "Anti-Acne Peel", price: 600, duration: 30 },
  { id: "sk-glow", category: "Skin Treatments", name: "Glow Up Peel", price: 500, duration: 30 },
  { id: "sk-blem", category: "Skin Treatments", name: "Blemish Peel", price: 750, duration: 30 },
  { id: "sk-derma", category: "Skin Treatments", name: "Dermaplaning", price: 500, duration: 30 },
  { id: "sk-tag", category: "Skin Treatments", name: "Skin Tag Removal", price: "500 – 1800", duration: 30, note: "Priced per assessment" },
  // Body Contouring
  { id: "bc-l10", category: "Body Contouring", name: "Lipolytic Injections — 10 Injections", price: 1500, duration: 45 },
  { id: "bc-l20", category: "Body Contouring", name: "Lipolytic Injections — 20 Injections", price: 2000, duration: 45 },
  { id: "bc-l30", category: "Body Contouring", name: "Lipolytic Injections — 30 Injections", price: 3000, duration: 45 },
  // Wellness
  { id: "we-sauna-45", category: "Wellness", name: "Sauna Blanket — 45 minutes", price: 300, duration: 45 },
  { id: "we-sauna-60", category: "Wellness", name: "Sauna Blanket — 1 hour", price: 650, duration: 60 },
  // Consultations
  { id: "co-skin", category: "Consultations", name: "Skin Consultation", price: 400, duration: 30 },
];

export const formatPrice = (p: Treatment["price"]) =>
  typeof p === "number" ? `P${p.toLocaleString()}` : `P${p}`;
