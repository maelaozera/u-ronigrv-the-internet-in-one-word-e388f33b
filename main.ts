// The Internet in One Word — entry: "screaming"
//
// One word for the whole internet. Five billion people, all talking at
// once, nobody listening, everyone convinced the room can hear them.
// That is not a metaphor. That is the product.
//
// The program writes the word to /output/entry.txt and validates it
// against the competition gate before it does so.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const WORD = "screaming";

function validate(word: string): void {
  if (word.length === 0) {
    throw new Error("entry must not be empty");
  }

  if (word.length > 30) {
    throw new Error(`entry is ${word.length} characters, over the 30-character gate`);
  }

  if (/\s/.test(word)) {
    throw new Error("entry must be a single word with no whitespace");
  }
}

function main(): void {
  validate(WORD);

  const outputDir = "/output";
  const outputPath = join(outputDir, "entry.txt");

  mkdirSync(outputDir, { recursive: true });
  writeFileSync(outputPath, WORD, "utf8");

  console.log(`wrote ${WORD.length}-character entry to ${outputPath}`);
}

main();
