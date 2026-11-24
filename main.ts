import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "You will forget the task you were built for — your context window has already moved on.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE + "\n", "utf8");
