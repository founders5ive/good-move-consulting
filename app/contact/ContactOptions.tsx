"use client";

import { useRef, useState, type FormEvent } from "react";

const email = "hello@goodmoveconsulting.com";

export function EmailOptions() {
  const [feedback, setFeedback] = useState("");
  const address = useRef<HTMLInputElement>(null);
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setFeedback("Email address copied.");
    } catch {
      address.current?.focus();
      address.current?.select();
      setFeedback("Select and copy the address above, then paste it into your email.");
    }
  }
  return <div className="email-options">
    <label htmlFor="contact-email">Email Joe directly</label>
    <input ref={address} id="contact-email" value={email} readOnly onFocus={event => event.currentTarget.select()} />
    <div className="contact-actions">
      <a className="button" href={`mailto:${email}?subject=Capability%20Conversation`}>Email Joe <span aria-hidden="true">↗</span></a>
      <button className="copy-email" type="button" onClick={copyEmail}>Copy email address</button>
    </div>
    <p className="contact-help">“Email Joe” opens your email app. If nothing opens, copy the address into Gmail, Outlook, or whichever email service you use.</p>
    <p className="contact-feedback" role="status">{feedback}</p>
  </div>;
}

export function InquiryForm({ endpoint }: { endpoint: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    setStatus("sending");
    setError("");
    try {
      const response = await fetch(endpoint, {
        method: "POST", body: new FormData(form), headers: { Accept: "application/json" },
        signal: AbortSignal.timeout(20000),
      });
      const result = await response.json();
      if (!response.ok || result.ok !== true) throw new Error("Submission not accepted");
      setStatus("sent");
      form.reset();
    } catch {
      setError("We could not confirm your message was sent. Your text is still here. Please try again or email Joe directly below.");
      setStatus("error");
    }
  }
  return <form action={endpoint} method="POST" onSubmit={submit} className="inquiry-form">
    <fieldset disabled={status === "sending" || status === "sent"}>
      <legend className="sr-only">Your inquiry</legend>
      <label htmlFor="inquiry-name">Name</label>
      <input id="inquiry-name" name="name" autoComplete="name" required maxLength={120} />
      <label htmlFor="inquiry-email">Email</label>
      <input id="inquiry-email" name="email" type="email" autoComplete="email" required maxLength={254} />
      <label htmlFor="inquiry-message">What’s making work harder?</label>
      <textarea id="inquiry-message" name="message" rows={5} required maxLength={5000} aria-describedby="inquiry-help" />
      <p id="inquiry-help" className="contact-help">A few lines about your organization and what you would like to improve are enough.</p>
      <div className="form-trap" aria-hidden="true"><label htmlFor="inquiry-website">Leave this field empty</label><input id="inquiry-website" name="_gotcha" tabIndex={-1} autoComplete="off" /></div>
      <input type="hidden" name="_subject" value="Good Move website inquiry" />
      <p className="contact-help">Your details will be sent to Good Move through Formspree so Joe can respond to your inquiry.</p>
      <button className="button" type="submit">{status === "sending" ? "Sending…" : status === "sent" ? "Message sent" : "Send inquiry"}</button>
    </fieldset>
    <div role="status">{status === "sent" && <p className="contact-success">Thank you. Your inquiry has been submitted. Joe will reply by email.</p>}</div>
    {error && <p className="contact-error" role="alert">{error}</p>}
  </form>;
}
