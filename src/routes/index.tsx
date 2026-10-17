import { createFileRoute } from "@tanstack/react-router";
import { motion, type Variants } from "framer-motion";
import { useState, type FormEvent, type ReactNode } from "react";
import {
  Droplets, Pickaxe, HardHat, Building2, ShieldCheck, Truck, Award, Wrench, Zap, Boxes,
  MapPin, Phone, Mail, Download, ArrowRight, FileText, Menu, X, Facebook, Linkedin, Instagram,
} from "lucide-react";
import hero from "@/assets/hero.jpg";
import bits from "@/assets/bits.jpg";
import pipes from "@/assets/pipes.jpg";
import adapters from "@/assets/adapters.jpeg";
import catalogue from "@/assets/Sage-Creek-Catalogue-2026.pdf";
import logo from "@/assets/sage-creek-no-bg.png";
import hoses from "@/assets/air-hose-and-fittings.jpeg";
import cavern from "@/assets/cavern-team.png";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sage Creek — Borehole Drilling Consumables in Zimbabwe" },
      { name: "description", content: "Heavy-duty DTH hammers, drill bits, pipes, adapters and hoses for water, mining and construction drilling across Zimbabwe." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Sage Creek — Drilling Consumables Zimbabwe" },
      { property: "og:description", content: "Reliable drilling consumables and accessories, stocked in Harare and delivered fast across Zimbabwe." },
    ],
  }),
  component: Index,
});

// Placeholder contact details — replace with real ones
const PHONE = "+263 71 818 6989";
const EMAIL = "sales@sagecreek.co.zw";

const fadeUp: Variants = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };
const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} className={className}>
      {children}
    </motion.div>
  );
}
const Item = ({ children, className }: { children: ReactNode; className?: string }) => (
  <motion.div variants={fadeUp} className={className}>{children}</motion.div>
);

const btn = "inline-flex min-h-12 h-auto items-center justify-center gap-2 whitespace-normal rounded px-5 py-3 text-center text-sm font-bold uppercase transition-transform hover:scale-[1.02] active:scale-[0.97]";
const btnLime = `${btn} bg-lime text-teal-deep`;
const btnGhost = `${btn} border-2 border-background/40 text-background hover:border-lime hover:text-lime`;
const btnTeal = `${btn} bg-teal text-secondary-foreground`;

const nav = [["Products", "products"], ["Sectors", "sectors"], ["About Us", "about"], ["Why Choose Us", "why"], ["Contact", "contact"]];

const sectors = [
  { icon: Droplets, t: "Commercial Water Wells", d: "Bits, hammers and pipes for reliable borehole yields, from domestic to municipal." },
  { icon: Pickaxe, t: "Mining & Exploration", d: "Tough consumables for blast-hole, RC and exploration drilling in hard rock." },
  { icon: HardHat, t: "Construction & Civil", d: "Foundation, anchoring and geotechnical drilling tools built for site conditions." },
  { icon: Building2, t: "Infrastructure Projects", d: "Dependable supply for roads, dams and public works across the region." },
];

const categories = [
  { id: "bits", name: "DTH Hammers & Drill Bits", img: bits, w: 1024, h: 1024, fit: "cover", items: ["Rock drill bits", "Tri-cone bits", "High-pressure DTH hammers", "Mission, DHD & Khaishan shanks"] },
  { id: "pipes", name: "Drill Pipes & Rods", img: pipes, w: 1024, h: 1024, fit: "cover", items: ["Heavy-duty drill pipes", "Drill Rods"] },
  { id: "adapters", name: "Adapters & Couplings", img: adapters, w: 1024, h: 1024, fit: "cover", items: ["Sub-adapters", "Female-to-female adapters", "Male-to-male adapters"] },
  { id: "hoses", name: "Air Hoses & Fittings", img: hoses, w: 511, h: 574, fit: "contain", items: ["High-pressure air hoses"] },
];

const why = [
  { icon: ShieldCheck, t: "High Durability Equipment", d: "Built for harsh Southern African geology — granite, basalt and banded ironstone." },
  { icon: Boxes, t: "Reliable Stock in Zimbabwe", d: "Local inventory means no waiting on imports when your rig is on the clock." },
  { icon: Wrench, t: "Technical Support & On-Site Expertise", d: "We help match the right bit, hammer and thread to your formation and rig." },
  { icon: Zap, t: "Rapid Order Fulfillment", d: "Quotes turned around fast and orders dispatched promptly across the country." },
];

function Index() {
  const [tab, setTab] = useState("bits");
  const [open, setOpen] = useState(false);
  const cat = categories.find((c) => c.id === tab) ?? categories[0];
  if (!cat) return null;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <div className="bg-teal-deep text-secondary-foreground">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-2 text-xs font-semibold sm:px-6">
          <span className="inline-flex min-w-0 items-center gap-1.5"><MapPin className="h-3.5 w-3.5 shrink-0 text-lime" /> Harare, Zimbabwe</span>
          <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="inline-flex min-h-9 shrink-0 items-center gap-1.5 rounded bg-lime px-2 py-1 text-teal-deep transition-transform hover:scale-[1.02] sm:px-3">
            <Phone className="h-4 w-4 shrink-0" /><span className="sm:hidden">Call Sales</span><span className="hidden sm:inline">Call Sales · {PHONE}</span>
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-1 sm:px-6 lg:flex lg:justify-between">
          <a href="#top" aria-label="Sage Creek home" className="min-w-0 w-fit shrink-0">
            <img src={logo} alt="Sage Creek" width={933} height={414} className="h-16 w-40 object-contain sm:h-20 sm:w-48" />
          </a>
          <nav className="hidden items-center gap-5 lg:flex">
            {nav.map(([l, id]) => (
              <a key={id} href={`#${id}`} className="text-sm font-semibold text-teal transition-colors hover:text-foreground">{l}</a>
            ))}
            <a href="#contact" className={`${btnLime} px-4 py-2.5`}>Get a Quote</a>
          </nav>
          <Button variant="ghost" size="icon" className="h-11 w-11 shrink-0 text-teal lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation">{open ? <X /> : <Menu />}</Button>
        </div>
        {open && (
          <nav id="mobile-navigation" className="flex max-h-[calc(100dvh-8rem)] flex-col gap-1 overflow-y-auto border-t border-border px-4 py-3 lg:hidden">
            {nav.map(([l, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="min-h-11 py-3 font-semibold text-teal">{l}</a>
            ))}
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden bg-teal-deep text-background">
        <img src={hero} alt="Borehole drilling rig at dusk in Zimbabwe" width={1600} height={1008} className="absolute inset-0 h-full w-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-deep via-teal-deep/80 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 py-9 sm:px-6 sm:py-16 lg:py-20">
          <Reveal className="max-w-3xl">
            <Item><span className="inline-block rounded bg-lime px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-teal-deep sm:px-3 sm:text-xs">Zimbabwe's Drilling Supply Partner</span></Item>
            <Item><h1 className="mt-4 max-w-[19ch] font-display text-[1.3rem] uppercase leading-[1.3] sm:mt-5 sm:max-w-none sm:text-4xl sm:leading-[1.15] lg:text-5xl">Heavy-Duty Drilling <span className="text-lime">Consumables</span> & Accessories Across Zimbabwe</h1></Item>
            <Item><p className="mt-3.5 max-w-lg text-[0.8rem] leading-relaxed text-background/80 sm:mt-5 sm:max-w-xl sm:text-lg">Reliable bits, hammers, pipes and fittings — matched to your formation by people who know drilling, and supplied fast from local stock.</p></Item>
            <Item className="mt-5 grid gap-3 sm:mt-7 sm:flex sm:flex-wrap sm:gap-4">
              <a href="#products" className={btnLime}>Explore Catalogue <ArrowRight className="h-4 w-4" /></a>
              <a href="#contact" className={btnGhost}>Request a Quote</a>
            </Item>
            <Item className="mt-6 grid gap-2.5 text-xs font-semibold sm:mt-8 sm:flex sm:flex-wrap sm:gap-x-6 sm:gap-y-3 sm:text-sm">
              {[[Truck, "Fast Zimbabwe Delivery"], [ShieldCheck, "Heavy-Duty Grade Materials"], [Award, "Mining & Water Industry Certified"]].map(([I, t]) => {
                const Icon = I as typeof Truck;
                return <span key={t as string} className="inline-flex min-w-0 items-center gap-2"><Icon className="h-4 w-4 shrink-0 text-lime sm:h-5 sm:w-5" />{t as string}</span>;
              })}
            </Item>
          </Reveal>
        </div>
        <div className="hazard relative h-3" />
      </section>

      {/* Sectors */}
      <section id="sectors" className="scroll-mt-24 bg-muted py-14 sm:py-18 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHead kicker="Sectors We Serve" title="Built for every borehole, pit and site" />
          <Reveal className="mt-8 grid sm:mt-10 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {sectors.map(({ icon: Icon, t, d }) => (
              <Item key={t}>
                <motion.div whileHover={{ y: -6 }} className="group h-full rounded border border-border bg-card p-5 sm:p-7 transition-shadow hover:shadow-xl">
                  <div className="grid h-12 w-12 place-items-center rounded bg-teal text-lime transition-colors group-hover:bg-lime group-hover:text-teal-deep"><Icon className="h-6 w-6" /></div>
                  <h3 className="mt-5 font-display text-lg uppercase text-teal">{t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{d}</p>
                </motion.div>
              </Item>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="scroll-mt-24 py-14 sm:py-18 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHead kicker="Product Range" title="Core inventory lines" />
          <div role="tablist" aria-label="Product categories" className="mt-8 flex gap-2 overflow-x-auto pb-2 md:flex-wrap">
            {categories.map((c) => (
              <Button variant="ghost" key={c.id} role="tab" id={`tab-${c.id}`} aria-selected={tab === c.id} aria-controls="product-panel" onClick={() => setTab(c.id)}
                className={`h-auto min-h-12 shrink-0 whitespace-normal rounded px-4 py-3 text-sm font-bold transition-all active:scale-[0.97] ${tab === c.id ? "bg-secondary text-lime hover:bg-secondary hover:text-lime" : "bg-muted text-teal hover:bg-border"}`}>
                {c.name}
              </Button>
            ))}
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <motion.div role="tabpanel" id="product-panel" aria-labelledby={`tab-${cat.id}`} key={cat.id} initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}
              className="grid overflow-hidden rounded border border-border bg-card md:grid-cols-2 lg:col-span-2">
              <img src={cat.img} alt={cat.name} loading="lazy" width={cat.w} height={cat.h} className={`aspect-[4/3] w-full md:aspect-auto md:h-full md:min-h-80 ${cat.fit === "contain" ? "bg-white object-contain p-3 sm:p-6" : "bg-muted object-cover"}`} />
              <div className="min-w-0 p-5 sm:p-8">
                <h3 className="font-display text-2xl uppercase text-teal">{cat.name}</h3>
                <motion.ul variants={stagger} initial="hidden" animate="show" className="mt-6 space-y-3">
                  {cat.items.map((i) => (
                    <motion.li variants={fadeUp} key={i} className="flex min-w-0 items-center gap-3 break-words border-b border-border pb-3 text-sm font-medium">
                      <span className="h-2 w-2 shrink-0 bg-lime" />{i}
                    </motion.li>
                  ))}
                </motion.ul>
                <a href="#contact" className={`${btnTeal} mt-8`}>Quote this range</a>
              </div>
            </motion.div>
            <div className="grid-lines relative flex flex-col justify-between overflow-hidden rounded bg-teal p-5 sm:p-8 text-secondary-foreground">
              <div>
                <FileText className="h-10 w-10 text-lime" />
                <h3 className="mt-5 font-display text-2xl uppercase">Full Product Catalogue 2026</h3>
                <p className="mt-3 text-sm text-secondary-foreground/75">Specs, sizes and spline options for every line we stock. PDF, ~9.6 MB.</p>
              </div>
              <a href={catalogue} download="Sage-Creek-Catalogue-2026.pdf" target="_blank" rel="noreferrer" className={`${btnLime} mt-8`}>
                <Download className="h-4 w-4" /> Download Catalogue PDF
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-24 bg-teal-deep py-14 sm:py-18 lg:py-24 text-secondary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-14">
            <Item className="min-w-0">
              <span className="text-xs font-bold uppercase text-lime">About Sage Creek</span>
              <h2 className="mt-3 font-display text-2xl uppercase sm:text-3xl lg:text-4xl">The right tools for every drilling requirement</h2>
              <p className="mt-5 text-base font-semibold leading-relaxed text-secondary-foreground sm:text-lg lg:text-xl">
                Sage Creek Pvt Ltd is a Zimbabwean-based supplier of borehole drilling consumables and accessories, serving the water, mining, construction and infrastructure sectors.
              </p>
            </Item>
            <Item className="min-w-0 space-y-4 text-sm leading-relaxed text-secondary-foreground/80 sm:text-base">
              <p>We specialize in providing high-quality, durable and cost-effective drilling solutions that meet the demands of challenging operating environments.</p>
              <p>With a strong focus on reliability, technical suitability and timely delivery, Sage Creek supports contractors, NGOs and drilling professionals in executing projects efficiently and sustainably.</p>
              <p>We combine industry knowledge with dependable supply chains to ensure our clients always have access to the right tools for every drilling requirement.</p>
            </Item>
          </Reveal>

          <Reveal className="mt-10 border-t border-secondary-foreground/15 pt-8">
            <Item><span className="text-xs font-bold uppercase text-lime">Our Product Portfolio</span></Item>
            <Item className="mt-4 flex flex-wrap gap-2">
              {["Rock Drill Bits", "DTH Hammers", "Drill Pipes", "Adapters", "Air Hoses", "Related Consumables"].map((p) => (
                <span key={p} className="rounded border border-lime/40 bg-teal/40 px-3 py-1.5 text-xs font-bold uppercase text-secondary-foreground sm:text-sm">{p}</span>
              ))}
            </Item>
          </Reveal>

          <Reveal className="mt-8 grid gap-4 sm:grid-cols-3">
            {["Quality Commitment", "Customer Reliability", "Integrity & Accountability"].map((v) => (
              <Item key={v} className="min-w-0 border-l-2 border-lime pl-3 text-sm font-bold text-secondary-foreground">{v}</Item>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Why */}
      <section id="why" className="scroll-mt-24 py-14 sm:py-18 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHead kicker="Why Choose Us" title="Less downtime. More metres drilled." />
          <Reveal className="mt-8 grid sm:mt-10 gap-px overflow-hidden rounded border border-border bg-border md:grid-cols-2">
            {why.map(({ icon: Icon, t, d }, i) => (
              <Item key={t} className="group bg-card p-5 sm:p-8 transition-colors hover:bg-muted">
                <div className="flex items-start gap-4">
                  <span className="shrink-0 font-display text-3xl text-lime sm:text-4xl [-webkit-text-stroke:1px_var(--teal)]">0{i + 1}</span>
                  <div>
                    <Icon className="h-6 w-6 text-teal" />
                    <h3 className="mt-3 font-display text-lg uppercase text-teal">{t}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{d}</p>
                  </div>
                </div>
              </Item>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Team CTA band */}
      <section className="relative overflow-hidden bg-teal-deep text-background">
        <img src={cavern} alt="" aria-hidden loading="lazy" width={1022} height={672} className="absolute inset-0 h-full w-full object-cover object-[70%_center] opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-deep via-teal-deep/80 to-teal-deep/25" />
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-18 lg:py-24">
          <Reveal className="max-w-xl">
            <Item><span className="inline-block rounded bg-lime px-3 py-1 text-xs font-bold uppercase text-teal-deep">Talk to the Team</span></Item>
            <Item><h2 className="mt-4 font-display text-2xl uppercase leading-[1.15] sm:text-3xl lg:text-4xl">Keep your rigs turning — talk to someone who knows drilling</h2></Item>
            <Item><p className="mt-4 text-sm text-background/85 sm:text-base">Tell us your formation, rig and hole size. We'll match the right consumables and get them moving fast, from stock in Harare.</p></Item>
            <Item className="mt-7 flex flex-wrap gap-3">
              <a href="#contact" className={btnLime}>Get a Quote <ArrowRight className="h-4 w-4" /></a>
              <a href={`tel:${PHONE.replace(/\s/g, "")}`} className={btnGhost}><Phone className="h-4 w-4" /> Call Sales</a>
            </Item>
          </Reveal>
        </div>
        <div className="hazard relative h-3" />
      </section>

      <Contact />

      {/* Footer */}
      <footer className="bg-teal-deep text-secondary-foreground">
        <div className="hazard h-2" />
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
          <div>
            <a href="#top" aria-label="Sage Creek home" className="inline-block rounded bg-background px-2 py-1">
              <img src={logo} alt="Sage Creek" width={933} height={414} loading="lazy" className="h-20 w-48 object-contain" />
            </a>
            <p className="mt-3 text-sm text-secondary-foreground/70">Borehole drilling consumables & accessories. Harare, Zimbabwe.</p>
            <span className="mt-5 inline-block rounded border border-lime/50 px-3 py-1 text-xs font-bold uppercase text-lime">Powered by Local Drilling Expertise</span>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            {nav.map(([l, id]) => <a key={id} href={`#${id}`} className="text-secondary-foreground/80 hover:text-lime">{l}</a>)}
          </div>
          <div className="flex gap-3 sm:col-span-2 lg:col-span-1 lg:justify-end">
            {[Facebook, Linkedin, Instagram].map((I, i) => (
              <a key={i} href="#" aria-label="Social link" className="grid h-10 w-10 place-items-center rounded bg-teal transition-colors hover:bg-lime hover:text-teal-deep"><I className="h-4 w-4" /></a>
            ))}
          </div>
        </div>
        <div className="border-t border-secondary-foreground/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-5 text-xs text-secondary-foreground/60">
            © {new Date().getFullYear()} Sage Creek Pvt Ltd. All rights reserved. Product specifications and availability are subject to change; please confirm details with our sales team before ordering.
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionHead({ kicker, title }: { kicker: string; title: string }) {
  return (
    <Reveal>
      <Item><span className="text-xs font-bold uppercase text-teal">— {kicker}</span></Item>
      <Item><h2 className="mt-3 max-w-2xl font-display text-2xl uppercase text-teal-deep sm:text-3xl lg:text-4xl">{title}</h2></Item>
    </Reveal>
  );
}

const field = "min-w-0 w-full rounded border border-input bg-background px-4 py-3 text-base outline-none focus:border-teal focus:ring-2 focus:ring-lime";

function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const msg = `Quote request\n\nName: ${f.get("name")}\nCompany: ${f.get("company")}\nSector: ${f.get("sector")}\nProducts: ${f.get("category")}\nPhone: ${f.get("phone")}\nNotes: ${f.get("notes")}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("Quote request — Sage Creek")}&body=${encodeURIComponent(msg)}`;
    setSent(true);
  };
  return (
    <section id="contact" className="scroll-mt-24 bg-muted py-14 sm:py-18 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead kicker="Request a Quote" title="Tell us what your rig needs" />
        <Reveal className="mt-8 grid sm:mt-10 gap-6 lg:grid-cols-3">
          <Item className="lg:col-span-2">
            <form onSubmit={submit} className="grid gap-4 rounded border border-border bg-card p-5 sm:grid-cols-2 sm:p-8">
              <input required name="name" placeholder="Full name" className={field} />
              <input name="company" placeholder="Company name" className={field} />
              <select required name="sector" defaultValue="" className={field}>
                <option value="" disabled>Select sector</option>
                {sectors.map((s) => <option key={s.t}>{s.t}</option>)}
              </select>
              <select required name="category" defaultValue="" className={field}>
                <option value="" disabled>Product category</option>
                {categories.map((c) => <option key={c.id}>{c.name}</option>)}
              </select>
              <input required name="phone" type="tel" placeholder="Phone number" className={`${field} sm:col-span-2`} />
              <textarea name="notes" rows={4} placeholder="Quantities, sizes, thread types, delivery location…" className={`${field} sm:col-span-2`} />
              <div className="grid gap-4 sm:col-span-2 sm:flex sm:flex-wrap sm:items-center">
                <Button type="submit" className={btnLime}>Send Quote Request <ArrowRight className="h-4 w-4" /></Button>
                {sent && <span className="text-sm font-semibold text-teal">Thanks — your email draft has opened. Hit send to reach our sales team.</span>}
              </div>
            </form>
          </Item>
          <Item>
            <aside className="flex h-full flex-col gap-5 rounded bg-teal p-5 sm:p-8 text-secondary-foreground">
              {[[Phone, PHONE, `tel:${PHONE.replace(/\s/g, "")}`], [Mail, EMAIL, `mailto:${EMAIL}`], [MapPin, "Harare, Zimbabwe", undefined]].map(([I, t, h]) => {
                const Icon = I as typeof Phone;
                return (
                  <a key={t as string} href={h as string | undefined} className="flex min-w-0 items-center gap-3 break-words border-b border-secondary-foreground/15 pb-4 text-sm font-semibold">
                    <Icon className="h-5 w-5 shrink-0 text-lime" /><span className="min-w-0 break-words">{t as string}</span>
                  </a>
                );
              })}
              <p className="mt-auto text-xs text-secondary-foreground/60">Mon–Fri 08:00–17:00 · Sat 08:00–13:00</p>
            </aside>
          </Item>
        </Reveal>
      </div>
    </section>
  );
}
