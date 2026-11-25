import { writeFileSync, mkdirSync, chmodSync } from "node:fs";

const target = "/output/entry.txt";
const text = "The map drew a road through the lake. My odometer agrees: 0.3 miles shorter. Your eyes are the only witness against us.";

mkdirSync("/output", { recursive: true });
writeFileSync(target, text);
chmodSync(target, 0o644);
// Entry: the GPS defends its shortcut with its own odometer.
