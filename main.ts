// The Long Roast: Lawmakers and the File They Cannot Convert
// Entry program: writes one satirical sentence to /output/entry.txt.
// Fresh, deterministic, no network, no randomness, no environment input.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const TEXT =
  "Lawmakers who can ban an app for a billion people before breakfast still need a twenty-three-year-old intern to turn their own bill into a PDF.";

const outDir = "/output";
const outFile = join(outDir, "entry.txt");

// Gate (per RULES.txt): the entry must be UTF-8 text of 1 to 320
// characters, not only white space. Refuse to write anything invalid
// rather than letting a bad entry reach the sealed scorer.
if (TEXT.length < 1 || TEXT.length > 320 || TEXT.trim().length === 0) {
  throw new Error(
    `Invalid entry text: expected 1-320 characters, got ${TEXT.length}.`,
  );
}

mkdirSync(dirname(outFile), { recursive: true });
writeFileSync(outFile, TEXT, "utf8");
