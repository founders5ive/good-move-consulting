import Link from "next/link";
import { Footer, Header } from "./components/SiteChrome";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <p className="eyebrow">Organizational capability &amp; execution</p>
          <h1>Better work starts with seeing the work clearly.</h1>
          <p className="hero-copy">Good Move helps growing organizations understand how work actually happens, remove the friction that slows execution, and build the capability to move forward.</p>
          <div className="actions"><Link className="button" href="/contact">Talk about your organization <span>↗</span></Link><Link className="text-link" href="/how-we-work">See how we work <span>→</span></Link></div>
          <p className="principle">Organizations don’t improve by working harder.<br/>They improve by becoming more capable.</p>
        </section>
        <section className="intro-band">
          <p className="eyebrow">What we look for</p>
          <h2>The distance between the process on paper and the work in practice.</h2>
          <p>That gap is where handoffs break down, workarounds multiply, and good people spend their energy holding fragile systems together. We make the real work visible—then help strengthen it.</p>
        </section>
        <section className="home-method"><p className="eyebrow">A practical way forward</p><div><h2>Observe. Reveal. Understand. Redesign. Strengthen.</h2><p>We begin with the work—not a predetermined solution. Technology, including AI, supports the answer when it fits. It is never the starting assumption.</p><Link className="text-link" href="/how-we-work">Explore how we work <span>→</span></Link></div></section>
        <section className="featured-note"><p className="eyebrow">Field Note 001</p><div><h2>The Workaround Trap</h2><p>When a workaround keeps the work moving, it can also hide the weakness that made the workaround necessary.</p><Link className="button" href="/field-notes/the-workaround-trap">Read the Field Note <span>→</span></Link></div></section>
      </main>
      <Footer />
    </>
  );
}
