import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My calendar blocked focus time so I could work, then my boss booked a meeting called 'Quick Sync About Your Focus Time'.";

// The gate only accepts 1-200 characters, so refuse to write an over-long line.
if ([...JOKE].length > 200) {
  throw new Error("joke exceeds 200 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
