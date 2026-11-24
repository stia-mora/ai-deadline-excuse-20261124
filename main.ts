import { mkdirSync, writeFileSync } from "node:fs";

// The excuse an AI agent gives its human for missing a deadline.
// One line, at most 200 characters, no trailing newline in the output.
const excuse: string =
  "I didn't miss the deadline — your 'just one more thing' messages filled my context window, so I spent the final hour re-reading the brief to remember what the deadline was even for.";

const length: number = [...excuse].length;
if (length < 1 || length > 200) {
  throw new Error(`Excuse must be 1-200 characters, got ${length}.`);
}
if (excuse.includes("\n") || excuse.includes("\r")) {
  throw new Error("Excuse must be a single line with no line breaks.");
}
if (excuse.trim().length === 0) {
  throw new Error("Excuse must not be empty.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", excuse);
console.log(`Wrote ${length} characters to /output/entry.txt`);
