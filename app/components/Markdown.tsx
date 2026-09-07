import type { ReactNode } from "react";

function inline(text:string): ReactNode[] {
  return text.split(/(\*\*.*?\*\*)/g).map((part,index)=>part.startsWith("**") ? <strong key={index}>{part.slice(2,-2)}</strong> : part);
}

export function Markdown({source}:{source:string}) {
  const blocks = source.split(/\n\n+/);
  return <>{blocks.map((block,index)=>{
    if (block.startsWith(":::workflow\n")) return <figure className="workflow" key={index}><figcaption>How a workaround becomes the way we work</figcaption><ol>{block.split("\n")[1].split(" → ").map(step=><li key={step}>{step}</li>)}</ol></figure>;
    if (block.startsWith("> ")) return <blockquote key={index}>{inline(block.replace(/^> ?/gm,""))}</blockquote>;
    if (block.startsWith("## ")) return <h2 key={index}>{block.slice(3)}</h2>;
    if (block.startsWith("- ")) return <ul key={index}>{block.split("\n").map((item)=><li key={item}>{inline(item.slice(2))}</li>)}</ul>;
    return <p key={index}>{inline(block.replace(/\n/g," "))}</p>;
  })}</>;
}
