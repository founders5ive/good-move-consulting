import Link from "next/link";
import { Footer, Header } from "../components/SiteChrome";
import { formatDate, getFieldNotes } from "../../lib/field-notes";

export default function FieldNotes() { const notes=getFieldNotes(); return <><Header/><main><section className="page-hero"><p className="eyebrow">Field Notes</p><h1>Observations from the work.</h1><p>Short essays on organizational capability, operating friction, and the patterns that shape execution.</p></section><section className="note-list">{notes.map(note=><Link href={`/field-notes/${note.slug}`} key={note.slug}><span>Field Note {note.number}</span><div><h2>{note.title}</h2><p>{note.excerpt}</p></div><time>{formatDate(note.date)}</time><b>→</b></Link>)}</section></main><Footer/></>; }
