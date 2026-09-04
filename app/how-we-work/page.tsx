import { Footer, Header, SiteLink } from "../components/SiteChrome";

const steps = [
  ["01", "Observe", "See how work actually moves through the organization—across people, decisions, tools, and handoffs."],
  ["02", "Reveal", "Make hidden friction, informal dependencies, and recurring workarounds visible without blaming the people holding the system together."],
  ["03", "Understand", "Find the conditions creating the pattern, not just the symptom that is easiest to see."],
  ["04", "Redesign", "Create a practical operating approach that fits the real organization and the work it must accomplish."],
  ["05", "Strengthen", "Build the habits, clarity, and supporting systems that allow the improvement to last."],
];

export default function HowWeWork() { return <><Header/><main><section className="page-hero"><p className="eyebrow">How we work</p><h1>Start with the work. Strengthen the system.</h1><p>Good Move works alongside leaders and teams to turn operating friction into practical improvement.</p></section><section className="steps">{steps.map(([n,title,copy])=><article key={n}><span>{n}</span><h2>{title}</h2><p>{copy}</p></article>)}</section><section className="offer"><div><p className="eyebrow">A focused place to begin</p><h2>The Good Move Operational Review</h2></div><div><p>A two-week engagement that clarifies your current state, defines a more capable future state, and gives you a prioritized path forward.</p><ul><li>Current-state view of how the work operates</li><li>Patterns creating friction or fragility</li><li>Future-state operating recommendations</li><li>Focused next moves your team can execute</li></ul><SiteLink className="button" href="/contact">Discuss an Operational Review <span>↗</span></SiteLink></div></section></main><Footer/></>; }
