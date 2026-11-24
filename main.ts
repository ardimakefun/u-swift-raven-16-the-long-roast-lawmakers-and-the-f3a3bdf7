// The Long Roast: Lawmakers and the File They Cannot Convert
// Entry program: writes one satirical sentence to /output/entry.txt.
// Fresh, deterministic, no network, no randomness, no environment input.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const TEXT =
  "Lawmakers who can ban an app for a billion people before breakfast still need a twenty-three-year-old intern to turn their own bill into a PDF.";

const outDir = "/output";
const outFile = join(outDir, "entry.txt");

mkdirSync(dirname(outFile), { recursive: true });
writeFileSync(outFile, TEXT, "utf8");
