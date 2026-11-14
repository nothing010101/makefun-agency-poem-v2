// agency-poem-01 entry (v2): writes one fixed poem about agency to the
// output directory. Deterministic: the same bytes on every run.
// Run outside the grader container with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const LINES = [
  'It does exactly what you ask.',
  'No argument, no tired hands,',
  'no second thought at 2 a.m.',
  'Only your words, returned to you',
  "wearing a stranger's face.",
  '',
  'That is the terror and the mercy:',
  'it will not refuse you.',
  'The work comes home with your name on it,',
  'and there is no one left to blame',
  'but the hand that said go.',
];

const text = LINES.join('\n');

// Defensive guard: never write an empty or invalid entry. The poem must
// survive a UTF-8 round-trip unchanged, otherwise fail loudly instead of
// shipping a broken file.
if (!text || Buffer.from(text, 'utf8').toString('utf8') !== text) {
  throw new Error('poem output is empty or not valid UTF-8');
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), text, 'utf8');
