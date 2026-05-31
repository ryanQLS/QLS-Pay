import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "QLS Pay — Lower Payment Processing Fees for Your Business" },
      {
        name: "description",
        content:
          "QLS Pay is an independent payment advisor. We audit your merchant statement, compare providers like Clover, Moneris and Nuvei, and help you switch to better rates and POS hardware.",
      },
      { property: "og:title", content: "QLS Pay — Independent Payment Processing Advisor" },
      {
        property: "og:description",
        content:
          "Compare merchant processors, lower your fees, and upgrade your POS — with honest, provider-agnostic advice.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap",
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Hero />
      <Partners />
      <Process />
      <Benefits />
      <CTA />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <nav className="relative z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="font-extrabold tracking-tighter text-xl">
            QLS<span className="text-primary">PAY</span>
          </span>
        </a>
        <div className="hidden md:flex gap-10 text-sm font-medium text-muted-foreground">
          <a href="#process" className="hover:text-foreground transition-colors">How it works</a>
          <a href="#benefits" className="hover:text-foreground transition-colors">Why us</a>
          <a href="#partners" className="hover:text-foreground transition-colors">Partners</a>
        </div>
        <a
          href="#contact"
          className="text-sm font-semibold border-b border-primary text-primary pb-0.5 hover:text-foreground hover:border-foreground transition-colors"
        >
          Compare Rates →
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-aurora">
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <Nav />
      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-40 md:pt-32 md:pb-56">
        <div className="max-w-4xl animate-reveal">
          <div className="font-mono text-[11px] font-medium uppercase tracking-[0.25em] text-primary mb-8">
            ◆ Independent Payment Advisory
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95] mb-10">
            Stop overpaying
            <br />
            for{" "}
            <span className="italic font-light text-primary">processing fees.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-[52ch] leading-relaxed mb-12">
            QLS Pay audits your merchant statement, compares the market, and
            connects you with the right payment provider for your business —
            at the lowest possible rate.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <a
              href="#contact"
              className="bg-primary text-primary-foreground px-8 py-4 font-bold text-base hover:bg-foreground hover:text-background transition-colors"
            >
              Get a Free Rate Audit
            </a>
            <a
              href="#process"
              className="font-medium text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              See how it works →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Partners() {
  const logos = ["CLOVER", "MONERIS", "NUVEI", "SQUARE", "GLOBAL", "STRIPE"];
  return (
    <section id="partners" className="border-y border-border">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row md:items-center gap-8">
          <p className="text-[11px] font-mono font-medium uppercase tracking-[0.25em] text-muted-foreground shrink-0">
            We compare
          </p>
          <div className="flex-1 grid grid-cols-3 md:grid-cols-6 gap-6 items-center justify-items-center opacity-60">
            {logos.map((l) => (
              <span key={l} className="font-extrabold text-lg md:text-xl tracking-tight">
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    {
      n: "01",
      title: "Audit your setup",
      body: "Share a recent merchant statement. We find hidden fees, non-qualified rates, and outdated hardware that quietly cost you thousands every year.",
    },
    {
      n: "02",
      title: "Compare the market",
      body: "We benchmark your volume across our network of ISOs and processors. No bias — we recommend the provider that genuinely fits your business.",
    },
    {
      n: "03",
      title: "Switch with zero downtime",
      body: "We handle setup, from plug-and-play terminals to full POS migration, so your team keeps taking payments without a missed sale.",
    },
  ];
  return (
    <section id="process" className="max-w-7xl mx-auto px-6 py-28">
      <div className="max-w-2xl mb-20">
        <div className="font-mono text-[11px] font-medium uppercase tracking-[0.25em] text-primary mb-6">
          How it works
        </div>
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.0]">
          A simple, honest path to lower payment costs.
        </h2>
      </div>
      <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border border-y border-border">
        {steps.map((s) => (
          <div key={s.n} className="p-8 md:p-10">
            <div className="font-mono text-primary text-sm font-semibold mb-8">{s.n}</div>
            <h3 className="text-2xl font-bold mb-4 tracking-tight">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Benefits() {
  const items = [
    { t: "Lower transaction fees", b: "We negotiate wholesale interchange rates typically reserved for high-volume retailers." },
    { t: "Better devices & POS", b: "Modern terminals, wireless devices, and POS software matched to how your business runs." },
    { t: "Honest, provider-agnostic advice", b: "We aren't tied to one ISO. We recommend whatever genuinely fits your industry and volume." },
    { t: "No hidden or junk fees", b: "We strip out PCI assessments, batch fees, and line items that quietly inflate your bill." },
    { t: "Faster checkout experience", b: "Newer hardware means fewer declines, quicker tap-to-pay, and happier customers." },
    { t: "One direct point of contact", b: "Stop chasing call centers. You get a dedicated advisor who knows your account." },
  ];
  return (
    <section id="benefits" className="border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-28">
        <div className="grid md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-4">
            <div className="font-mono text-[11px] font-medium uppercase tracking-[0.25em] text-primary mb-6">
              Why QLS Pay
            </div>
          </div>
          <h2 className="md:col-span-8 text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.0]">
            A partner who actually shops the market for you.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-border">
          {items.map((b) => (
            <div key={b.t} className="border-r border-b border-border p-8">
              <h3 className="text-lg font-bold mb-3 tracking-tight">{b.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-aurora border-t border-border">
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div className="relative max-w-5xl mx-auto px-6 py-32 text-center">
        <h2 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[0.95]">
          See what you could
          <br />
          be <span className="italic font-light text-primary">saving.</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed">
          Send us your most recent merchant statement. We'll run a free,
          confidential rate audit. Most businesses cut 15–30% off their
          processing fees.
        </p>
        <form
          className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            required
            placeholder="Business email address"
            className="flex-1 bg-background/40 border border-border px-4 py-4 text-foreground placeholder:text-muted-foreground focus:ring-2 ring-primary outline-none transition-all"
          />
          <button
            type="submit"
            className="bg-primary text-primary-foreground px-8 py-4 font-bold hover:bg-foreground hover:text-background transition-colors whitespace-nowrap"
          >
            Get Free Audit
          </button>
        </form>
        <p className="text-xs text-muted-foreground mt-6 font-mono uppercase tracking-widest">
          No obligation · No long contracts · Confidential
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="font-extrabold tracking-tighter">
          QLS<span className="text-primary">PAY</span>
        </span>
        <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
          © {new Date().getFullYear()} QLS Pay · Independent Payment Advisory
        </p>
        <div className="flex gap-6 text-xs font-mono uppercase tracking-widest text-muted-foreground">
          <a href="#" className="hover:text-foreground">Privacy</a>
          <a href="#" className="hover:text-foreground">Terms</a>
          <a href="#contact" className="hover:text-foreground">Contact</a>
        </div>
      </div>
    </footer>
  );
}
