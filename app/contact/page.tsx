import type { Metadata } from "next";
import { Footer, Header } from "../components/SiteChrome";
import { EmailOptions, InquiryForm } from "./ContactOptions";
import { contactSettings } from "./contact-settings";

export const metadata: Metadata = {
  title: "Contact Joe | Good Move Consulting",
  description: "Contact Joe Martin about the work your organization needs to improve. Start with a 30-minute Capability Conversation.",
};

export default function Contact() {
  const { bookingUrl, formEndpoint, responseTime } = contactSettings;
  if (bookingUrl && !bookingUrl.startsWith("https://")) throw new Error("Booking URL must use HTTPS");
  if (formEndpoint && !/^https:\/\/formspree\.io\/f\/[a-zA-Z0-9]+$/.test(formEndpoint)) throw new Error("Use a verified Formspree endpoint");
  return <><Header/><main id="main-content">
    <section className="contact-intro">
      <p className="eyebrow">Contact Good Move</p>
      <h1>Let’s talk about the work.</h1>
      <p>Where does work feel harder than it should? Start with a 30-minute Capability Conversation with Joe Martin. We’ll explore what is getting in the way and whether an Operations Clarity Sprint is a useful next step.</p>
    </section>
    <section className="contact-grid" aria-label="Ways to contact Joe">
      <div className="contact-primary">
        {formEndpoint ? <><h2>Send a short inquiry.</h2><p>You don’t need a polished problem statement to begin.</p><InquiryForm endpoint={formEndpoint}/></> : <><h2>Start with an email.</h2><p>Tell Joe a little about your organization and what you would like to improve. If you would like a conversation, include a couple of times that work for you.</p></>}
        <EmailOptions/>
      </div>
      <aside className="contact-next">
        <p className="eyebrow">A clear next step</p>
        <h2>{bookingUrl ? "Choose a time to talk." : "What happens next?"}</h2>
        {bookingUrl ? <><p>Choose an available time for a 30-minute Capability Conversation.</p><a className="button" href={bookingUrl}>Book a Capability Conversation <span aria-hidden="true">↗</span></a></> : <p>Joe will reply by email. If a conversation would help, you’ll agree on a time together.</p>}
        <dl><dt>Who you’ll speak with</dt><dd>Joe Martin, founder of Good Move.</dd><dt>What you’ll discuss</dt><dd>Where work gets stuck, what you have tried, and what better execution would look like.</dd>{responseTime && <><dt>When to expect a reply</dt><dd>{responseTime}</dd></>}</dl>
        <p className="contact-location">Good Move Consulting · Las Vegas, Nevada</p>
      </aside>
    </section>
  </main><Footer/></>;
}
