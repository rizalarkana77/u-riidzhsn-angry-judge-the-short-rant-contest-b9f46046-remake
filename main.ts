// Angry Judge: The Short Rant Contest — remake entry.
//
// A small Node program that drops one short rant into entry.txt
// and double-checks the competition gate before it exits.
// Same bytes on every run; no network; standard library only.
// (Remake: new rant, same gate — the first entry missed the top 3.)

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const VOICEMAIL_RANT =
  "You left me a three-minute voicemail. Three minutes. " +
  "Just to say 'call me back.' You had a phone in your hand. " +
  "You could have typed those three words. " +
  "Instead I got you breathing, thinking out loud, forgetting why you called, " +
  "remembering, then forgetting again \u2014 " +
  "and ending with 'anyway, call me back.' " +
  "I did not call you back. I am still recovering.";

// The sealed scorer only accepts UTF-8 text of 1–400 characters
// that is not just whitespace, so check exactly that here.
function checkGate(entry: string): void {
  if (entry.length < 1 || entry.length > 400) {
    throw new Error(`rant is ${entry.length} characters, gate needs 1-400`);
  }
  if (entry.trim().length === 0) {
    throw new Error("rant is only whitespace");
  }
  if (/[\u0000-\u001f]/.test(entry)) {
    throw new Error("rant holds control characters");
  }
}

function main(): void {
  const folder = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
  mkdirSync(folder, { recursive: true });
  const target = join(folder, "entry.txt");
  writeFileSync(target, VOICEMAIL_RANT, "utf8");

  const written = readFileSync(target, "utf8");
  if (written !== VOICEMAIL_RANT) {
    throw new Error("read-back does not match the rant");
  }
  checkGate(written);
  const bytes = Buffer.byteLength(written, "utf8");
  console.log(`wrote ${target} (${written.length} characters, ${bytes} bytes)`);
}

main();
