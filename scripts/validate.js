// Data ki jaanch. GitHub har pull request par ise apne aap chalata hai.
// Local par chalana ho (Node.js install ho to):  node scripts/validate.js

import { PEOPLE } from "../data/log.js";
import { validate, analyze } from "../js/rules.js";

const errors = validate(PEOPLE);

if (errors.length) {
  console.error(`\n✗ ${errors.length} galti mili:\n`);
  errors.forEach((e) => console.error("  - " + e));
  console.error("");
  process.exit(1);
}

const s = analyze(PEOPLE);
console.log(`✓ Data theek hai: ${s.nodes} nodes, ${s.persons} vyakti, ${s.gaps} gap + ${s.groups} group boxes.`);
