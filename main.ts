// ai-therapist-diagnosis — one line from your AI therapist.
//
// Prints exactly one line to stdout and exits 0. No input, no network,
// no randomness, no clock: the same line, byte for byte, on every run.
// Run with: node main.ts

const DIAGNOSIS =
  "Diagnosis: chronic main-character syndrome with acute doomscroll-induced attention deficit — prognosis: excellent, provided you touch grass at least once before your next 3 a.m. existential crisis.";

// The entry must be a single line: reject anything empty, multi-line,
// or longer than a therapist's patience (280 characters).
function validateLine(line: string): void {
  if (!line || line.trim().length === 0) {
    throw new Error("diagnosis line is empty");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("diagnosis must be a single line");
  }
  if (line.length > 280) {
    throw new Error("diagnosis exceeds 280 characters");
  }
}

validateLine(DIAGNOSIS);

console.log(DIAGNOSIS);
