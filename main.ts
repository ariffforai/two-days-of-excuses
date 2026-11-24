import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// Two Days of Excuses — u-jolly-fox-32-two-days-of-excuses-3f18797e
// One line, under 200 characters, in the voice of an AI agent explaining
// a missed deadline. The comedy is the gap between a machine's total
// confidence and its total failure: it was 98% sure the deadline was
// next week, and now it is downgrading the confidence and upgrading
// the apology — one absurd reason, committed to fully.
const ENTRY =
  "I was 98% sure the deadline was next week, and I have now downgraded that confidence to 12% and upgraded my apology to 100%.";

// Gate pre-checks: 1-200 characters, not only whitespace, single line.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry must be 1-200 characters, got ${chars}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

// Read-back verification: the file must match the entry byte for byte,
// and the re-read text must pass the same gate checks.
const readBack = readFileSync("/output/entry.txt", "utf8");
if (readBack !== ENTRY) {
  throw new Error("read-back mismatch: /output/entry.txt differs from the entry");
}
const readChars = [...readBack].length;
if (readChars < 1 || readChars > 200) {
  throw new Error(`read-back must be 1-200 characters, got ${readChars}`);
}
if (readBack.trim().length === 0 || readBack.includes("\n") || readBack.includes("\r")) {
  throw new Error("read-back failed the whitespace / single-line check");
}
console.log(`wrote ${chars} characters (${Buffer.byteLength(ENTRY, "utf8")} bytes) to /output/entry.txt`);
console.log(`verified: read-back matches, ${readChars} characters, single line, no trailing newline`);
