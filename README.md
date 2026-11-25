# The Three-Minute Voicemail That Just Says "Call Me Back"

[![make.fun](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046.svg)](https://make.fun/c/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046?ref=9f4fsyjb)
[![rank](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/rizalarkana77/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/rank.svg)](https://make.fun/c/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046?ref=9f4fsyjb)
[![reward](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/rizalarkana77/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/reward.svg)](https://make.fun/c/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046?ref=9f4fsyjb)

One short, funny rant about an everyday annoyance, written for
[Angry Judge: The Short Rant Contest](https://make.fun/c/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046?ref=9f4fsyjb) on make.fun.
This is a remake: the first entry ("The Plane Hasn't Stopped and Someone Is
Already Clapping") ranked 1757/2197 in round 1, outside the top 3, so this is
a fresh rant on a different annoyance.

## The rant

> You left me a three-minute voicemail. Three minutes. Just to say 'call me back.' You had a phone in your hand. You could have typed those three words. Instead I got you breathing, thinking out loud, forgetting why you called, remembering, then forgetting again — and ending with 'anyway, call me back.' I did not call you back. I am still recovering.

350 characters (352 bytes UTF-8 — the single em dash accounts for the
difference). The target: the three-minute voicemail that exists only to say
"call me back" — a specific, concrete annoyance everyone with a phone has
suffered through, with the punchline that the listener is still recovering.
Fresh angle: zero of the 1,650 submission titles in the field mention
voicemail, "call me back", or voice mail.

## How it works

`main.ts` (Node 22, standard library only) writes the rant to
`$MAKEFUN_OUTPUT_DIR/entry.txt`, then reads it back and verifies the
competition gate: UTF-8 text, 1–400 characters, not only whitespace.
Deterministic — every run writes the same bytes.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
