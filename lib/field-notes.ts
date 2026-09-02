import fs from "node:fs";
import path from "node:path";

export type FieldNote = { slug:string; title:string; number:string; date:string; excerpt:string; body:string };

export function getFieldNotes(): FieldNote[] {
  const directory = path.join(process.cwd(), "content", "field-notes");
  return fs.readdirSync(directory).filter((file)=>file.endsWith(".md")).map((file)=>{
    const raw = fs.readFileSync(path.join(directory,file),"utf8");
    const [,frontmatter,body] = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/) ?? [];
    const meta = Object.fromEntries(frontmatter.split("\n").map((line)=>{ const index=line.indexOf(":"); return [line.slice(0,index).trim(),line.slice(index+1).trim().replace(/^"|"$/g,"")]; }));
    return { slug:file.replace(/\.md$/, ""), title:meta.title, number:meta.number, date:meta.date, excerpt:meta.excerpt, body:body.trim() };
  }).sort((a,b)=>b.date.localeCompare(a.date));
}

export function getFieldNote(slug:string) { return getFieldNotes().find((note)=>note.slug===slug); }

export function formatDate(value:string) { return new Intl.DateTimeFormat("en-US",{month:"long",day:"numeric",year:"numeric",timeZone:"UTC"}).format(new Date(`${value}T00:00:00Z`)); }
