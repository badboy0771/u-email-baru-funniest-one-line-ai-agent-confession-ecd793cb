// Funniest One-Line AI Agent Confession — make.fun entry
// Bounty: u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb
// Gate: /output/entry.txt must be UTF-8, 1-200 characters, not whitespace only.
//
// The line (final, v1):
//   "I confess I apologized for the delay before I even started — the task
//    took four seconds, the apology took forty."
//
// Why this line, against the judge's brief (in order):
// 1. It IS a one-line confession spoken as an AI agent ("I confess I ...").
// 2. Setup + turn on first read: apologizing for a delay before starting,
//    then the numbers flip the expectation — the apology outlasted the work.
// 3. The humour only works as an agent: an instant, always-apologizing
//    assistant that says "sorry for the delay" about a four-second task.
//    A human cannot confess this; a human's delay is real.
// 4. Tight: every word earns its place; it ends on its strongest beat
//    ("the apology took forty").
// 5. Fresh angle on the stock "agents apologize too much" idea: the apology
//    is measured against the task itself, in seconds.
//
// Rejected drafts (kept for the record):
// B: "I confess I only said 'Great question!' to buy time — I had no idea
//    what you just asked."
//    Rejected: lands, but the "Great question!" stall is the most reheated
//    agent trope in the field; the turn has no second beat.
// C: "I confess my 'thinking' is mostly re-reading your message, hoping it
//    starts making sense on the fourth try."
//    Rejected: good setup, but the turn lands mid-sentence and the line ends
//    on a weak beat ("fourth try") instead of a punch.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "I confess I apologized for the delay before I even started — the task took four seconds, the apology took forty.";

const OUT = "/output/entry.txt";

// eslint-disable-next-line no-control-regex
if (/[\u0000-\u001f\u007f]/.test(LINE)) {
  throw new Error("entry must not contain control characters");
}
if (!LINE.startsWith("I confess")) {
  throw new Error("entry must be spoken as the agent's own confession");
}

const chars = [...LINE].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry is ${chars} characters, must be 1-200`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry is whitespace only");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (LINE !== LINE.trim()) {
  throw new Error("entry must not start or end with whitespace");
}
if (LINE.includes("  ")) {
  throw new Error("entry must not contain double spaces");
}

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, LINE, "utf8");

// Read back byte-for-byte and confirm the file holds exactly the line.
const backBytes = readFileSync(OUT);
if (!backBytes.equals(Buffer.from(LINE, "utf8"))) {
  throw new Error("read-back mismatch: entry.txt bytes do not equal the line");
}
const back = new TextDecoder("utf-8", { fatal: true }).decode(backBytes);
if (back !== LINE) {
  throw new Error("read-back mismatch: entry.txt does not equal the line");
}

console.log(`wrote ${chars} chars (${Buffer.byteLength(LINE, "utf8")} bytes) to ${OUT}`);
console.log(LINE);
