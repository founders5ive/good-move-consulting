import Link from "next/link";

export function Header() {
  return <header className="site-header"><Link className="brand" href="/">GOOD MOVE<span>CONSULTING</span></Link><nav aria-label="Primary navigation"><Link href="/how-we-work">How We Work</Link><Link href="/field-notes">Field Notes</Link><Link href="/about">About</Link><Link className="nav-cta" href="/contact">Start a conversation</Link></nav></header>;
}

export function Footer() {
  return <footer><Link className="brand" href="/">GOOD MOVE<span>CONSULTING</span></Link><p>Organizational capability &amp; execution.</p><div><Link href="/how-we-work">How We Work</Link><Link href="/field-notes">Field Notes</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></div><small>© {new Date().getFullYear()} Good Move Consulting</small></footer>;
}
