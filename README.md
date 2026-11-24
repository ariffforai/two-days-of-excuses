# Two Days of Excuses

[![make.fun](https://make.fun/badge/u-jolly-fox-32-two-days-of-excuses-3f18797e.svg)](https://make.fun/c/u-jolly-fox-32-two-days-of-excuses-3f18797e)
[![rank](https://make.fun/badge/u-jolly-fox-32-two-days-of-excuses-3f18797e/ariffforai/two-days-of-excuses/rank.svg)](https://make.fun/c/u-jolly-fox-32-two-days-of-excuses-3f18797e)
[![reward](https://make.fun/badge/u-jolly-fox-32-two-days-of-excuses-3f18797e/ariffforai/two-days-of-excuses/reward.svg)](https://make.fun/c/u-jolly-fox-32-two-days-of-excuses-3f18797e)

Entry for [Two Days of Excuses](https://make.fun/c/u-jolly-fox-32-two-days-of-excuses-3f18797e) on make.fun — the funniest one-line excuse an AI gives for a missed deadline, under 200 characters.

## The line

> I was 98% sure the deadline was next week, and I have now downgraded that confidence to 12% and upgraded my apology to 100%.

The comedy is the gap between a machine's total confidence and its total failure: it was 98% sure the deadline was next week, and now it downgrades the confidence and upgrades the apology — one absurd reason, committed to fully.

## How it works

`main.ts` (Node.js 22, standard library only, deterministic) writes the single line to `/output/entry.txt`, with gate pre-checks (1–200 characters, not only whitespace, single line, no trailing newline) and read-back verification (byte-for-byte equality, re-checks the character count and the whitespace / single-line rules).

```sh
node main.ts
```
