import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer, Header } from "../../components/SiteChrome";
import { Markdown } from "../../components/Markdown";
import { formatDate, getFieldNote, getFieldNotes } from "../../../lib/field-notes";

export function generateStaticParams(){ return getFieldNotes().map(({slug})=>({slug})); }
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{ const note=getFieldNote((await params).slug); if(!note)return{}; return {title:`${note.title} | Good Move Field Notes`,description:note.excerpt,openGraph:{title:note.title,description:note.excerpt,images:[]},twitter:{title:note.title,description:note.excerpt,images:[]}}; }
export default async function NotePage({params}:{params:Promise<{slug:string}>}) { const note=getFieldNote((await params).slug); if(!note)notFound(); return <><Header/><main><article className="note"><header><Link href="/field-notes">← All Field Notes</Link><p className="eyebrow">Field Note {note.number}</p><h1>{note.title}</h1><p>{note.excerpt}</p><time>{formatDate(note.date)}</time></header><div className="prose"><Markdown source={note.body}/></div></article><section className="note-cta"><h2>What workarounds has your organization learned to live with?</h2><Link className="button" href="/contact">Start a conversation <span>↗</span></Link></section></main><Footer/></>; }
