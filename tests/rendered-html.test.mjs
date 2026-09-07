import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

test("exports the complete static site", async () => {
  const files = ["index.html","how-we-work.html","field-notes.html","field-notes/the-workaround-trap.html","about.html","contact.html","favicon.ico","favicon.svg","favicon-32x32.png","apple-touch-icon.png"];
  await Promise.all(files.map((file)=>access(new URL(`../dist/client/${file}`,import.meta.url))));
  const home = await readFile(new URL("../dist/client/index.html",import.meta.url),"utf8");
  const note = await readFile(new URL("../dist/client/field-notes/the-workaround-trap.html",import.meta.url),"utf8");
  assert.match(home,/Better work starts with seeing the work clearly/);
  assert.match(home,/Organizational capability/);
  assert.match(home,/favicon\.ico/);
  assert.match(home,/favicon\.svg\?v=2/);
  assert.match(home,/apple-touch-icon\.png/);
  assert.match(note,/The Workaround Trap/);
  assert.doesNotMatch(home,/codex-preview|Starter Project/);
});

test("keeps internal navigation independent of the client-side link runtime", async () => {
  const files = [
    "app/components/SiteChrome.tsx",
    "app/page.tsx",
    "app/about/page.tsx",
    "app/how-we-work/page.tsx",
    "app/field-notes/page.tsx",
    "app/field-notes/[slug]/page.tsx",
  ];
  const sources = await Promise.all(
    files.map((file) => readFile(new URL(`../${file}`, import.meta.url), "utf8")),
  );
  for (const source of sources) assert.doesNotMatch(source, /from ["']next\/link["']/);
});

test("launch pages link to existing routes and assets", async () => {
  const files = ["index.html", "about.html", "contact.html", "how-we-work.html", "operations-clarity-sprint.html", "field-notes.html", "field-notes/the-workaround-trap.html"];
  for (const file of files) {
    const html = await readFile(new URL(`../dist/client/${file}`, import.meta.url), "utf8");
    assert.match(html, /Capability Conversation/, file);
    assert.doesNotMatch(html, /Operational Review|Discuss an Operational Review|:::workflow/, file);
    for (const match of html.matchAll(/(?:href|src)="(\/[^"?#]*)(?:[?#][^"]*)?"/g)) {
      const path = match[1];
      const destination = path === "/" ? "index.html" : /\.[a-z0-9]+$/i.test(path) ? path.slice(1) : `${path.slice(1)}.html`;
      await access(new URL(`../dist/client/${destination}`, import.meta.url));
    }
  }
  const note = await readFile(new URL("../dist/client/field-notes/the-workaround-trap.html", import.meta.url), "utf8");
  assert.match(note, /Leadership Reflection/);
  assert.match(note, /<blockquote/);
  assert.match(note, /min read/);
  const sprint = await readFile(new URL("../dist/client/operations-clarity-sprint.html", import.meta.url), "utf8");
  assert.match(sprint, /prioritized implementation roadmap/);
  assert.match(sprint, /Any implementation support is scoped separately/);
});
