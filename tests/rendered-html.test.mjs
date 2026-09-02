import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

test("exports the complete static site", async () => {
  const files = ["index.html","how-we-work.html","field-notes.html","field-notes/the-workaround-trap.html","about.html","contact.html"];
  await Promise.all(files.map((file)=>access(new URL(`../dist/client/${file}`,import.meta.url))));
  const home = await readFile(new URL("../dist/client/index.html",import.meta.url),"utf8");
  const note = await readFile(new URL("../dist/client/field-notes/the-workaround-trap.html",import.meta.url),"utf8");
  assert.match(home,/Better work starts with seeing the work clearly/);
  assert.match(home,/Organizational capability/);
  assert.match(note,/The Workaround Trap/);
  assert.doesNotMatch(home,/codex-preview|Starter Project/);
});
