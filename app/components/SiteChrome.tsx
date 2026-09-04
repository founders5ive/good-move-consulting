import type { AnchorHTMLAttributes } from "react";

type SiteLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

// Full-page navigation keeps this static export independent of vinext's RSC link runtime.
export function SiteLink({ children, ...props }: SiteLinkProps) {
  return <a {...props}>{children}</a>;
}

export function Header() {
  return <header className="site-header"><SiteLink className="brand" href="/">GOOD MOVE<span>CONSULTING</span></SiteLink><nav aria-label="Primary navigation"><SiteLink href="/how-we-work">How We Work</SiteLink><SiteLink href="/field-notes">Field Notes</SiteLink><SiteLink href="/about">About</SiteLink><SiteLink className="nav-cta" href="/contact">Start a conversation</SiteLink></nav></header>;
}

export function Footer() {
  return <footer><SiteLink className="brand" href="/">GOOD MOVE<span>CONSULTING</span></SiteLink><p>Organizational capability &amp; execution.</p><div><SiteLink href="/how-we-work">How We Work</SiteLink><SiteLink href="/field-notes">Field Notes</SiteLink><SiteLink href="/about">About</SiteLink><SiteLink href="/contact">Contact</SiteLink></div><small>© {new Date().getFullYear()} Good Move Consulting</small></footer>;
}
