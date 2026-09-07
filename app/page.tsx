import { Footer, Header, SiteLink } from "./components/SiteChrome";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="hero">
          <p className="eyebrow">Organizational capability &amp; execution</p>
          <h1>Better work starts with seeing the work clearly.</h1>
          <p className="hero-copy">Good Move helps growing organizations understand how work actually happens, remove the friction that slows execution, and build the capability to move forward.</p>
          <div className="actions"><SiteLink className="button" href="/contact">Schedule a Capability Conversation <span>↗</span></SiteLink><SiteLink className="text-link" href="/how-we-work">See how we work <span>→</span></SiteLink></div>
          <p className="principle"><span>Organizations don’t improve by working harder.</span><span>They improve by becoming more capable.</span></p>
        </section>
        <section className="intro-band">
          <p className="eyebrow">What we look for</p>
          <h2>The distance between the process on paper and the work in practice.</h2>
          <p>That gap is where handoffs break down, workarounds multiply, and good people spend their energy holding fragile systems together. We make the real work visible—then help strengthen it.</p>
        </section>
        <section className="home-method"><p className="eyebrow">A practical way forward</p><div><h2>Observe. Reveal. Understand. Redesign. Strengthen.</h2><p>We begin with the work—not a predetermined solution. Technology, including AI, supports the answer when it fits. It is never the starting assumption.</p><SiteLink className="text-link" href="/how-we-work">Explore how we work <span>→</span></SiteLink></div></section>
        <section className="offer"><div><p className="eyebrow">Our primary engagement</p><h2>Operations Clarity Sprint</h2></div><div><p>One workflow. A clear picture of what is getting in the way. A practical plan to make the work more reliable.</p><p>We work with your team to understand the current process, identify bottlenecks, and define the changes that will strengthen execution.</p><SiteLink className="button" href="/operations-clarity-sprint">Explore the Sprint <span aria-hidden="true">→</span></SiteLink></div></section>
        <section className="featured-note"><p className="eyebrow">Field Note 001</p><div><h2>The Workaround Trap</h2><p>When a workaround keeps the work moving, it can also hide the weakness that made the workaround necessary.</p><SiteLink className="button" href="/field-notes/the-workaround-trap">Read the Field Note <span>→</span></SiteLink></div></section>
      </main>
      <Footer />
    </>
  );
}
