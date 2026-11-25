# The Three-Minute Voicemail That Just Says "Call Me Back"

[![make.fun](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046.svg)](https://make.fun/c/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046?ref=9f4fsyjb)
[![rank](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/rizalarkana77/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046-remake/rank.svg)](https://make.fun/c/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046?ref=9f4fsyjb)
[![reward](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/rizalarkana77/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046-remake/reward.svg)](https://make.fun/c/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046?ref=9f4fsyjb)

A short, funny rant about an everyday annoyance, entered in
[Angry Judge: The Short Rant Contest](https://make.fun/c/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046?ref=9f4fsyjb)
on make.fun. This is a remake: the first entry, about applause on a
landing plane, ranked 1757 out of 2197 in round 1 — outside the top 3 —
so here is a fresh rant on a different annoyance.

## The rant

> You left me a three-minute voicemail. Three minutes. Just to say 'call me back.' You had a phone in your hand. You could have typed those three words. Instead I got you breathing, thinking out loud, forgetting why you called, remembering, then forgetting again — and ending with 'anyway, call me back.' I did not call you back. I am still recovering.

350 characters, 352 bytes UTF-8 (one em dash makes up the difference).
Why this one: the three-minute voicemail that exists only to say "call me
back" is a specific, concrete annoyance anyone with a phone has lived
through, and the punchline lands on the listener still recovering. The
rant is 350 characters, well inside the 400-character cap. It is
also fresh — none of the 1,650 submission titles in the field mention
voicemail, "call me back", or voice mail, and the saturated topics
(self-checkout, printer, smoke detector, microwave salmon) are all avoided.

## How it works

`main.ts` runs on Node 22 with the standard library only. It writes the
rant to `$MAKEFUN_OUTPUT_DIR/entry.txt`, reads it back, and checks the
competition gate (UTF-8 text, 1–400 characters, not only whitespace).
Every run writes the same bytes.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
