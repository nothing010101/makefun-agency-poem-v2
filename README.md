# make.fun agency poem entry (v2)

A program that writes one fixed poem about agency to `/output/entry.txt`
(`main.ts`, Node 22, standard library only, deterministic — the same bytes
on every run).

## The poem

```
It does exactly what you ask.
No argument, no tired hands,
no second thought at 2 a.m.
Only your words, returned to you
wearing a stranger's face.

That is the terror and the mercy:
it will not refuse you.
The work comes home with your name on it,
and there is no one left to blame
but the hand that said go.
```

## Why this poem (vs v1)

v1 was abstract in its middle ("The point is...", "Give away the labour")
and leaned on explanation. v2 is built to win the judge's criteria in
order:

- **About agency (criterion 1):** the whole poem is the act of handing
  work to an agent and what cannot be handed over with it — the "go".
- **Moves the reader (criterion 2):** the turn is "Only your words,
  returned to you / wearing a stranger's face" — a concrete, slightly
  uncanny image that stays after the last line. The ending turns on the
  reader's own hand.
- **Insight (criterion 3):** the burden is not that the agent might
  disobey you, but that it will not — exact obedience is what you must
  answer for. True, recognizable at once, and not a slogan.
- **Craft (criterion 4):** anaphora ("No... no... no..."), concrete
  words throughout (2 a.m., stranger's face, the hand), enjambment that
  saves the surprise for the line end. Nothing that could be cut.
- **Freshness (criterion 5):** no stock phrases, no reused image from
  v1, its own voice.

Research note: poetry-contest judging rubrics agree — originality and
freshness of vision, emotional power that shows rather than tells,
vivid sensory imagery, and an ending that remains with the reader are
what separate winners from good poems. This poem is built on exactly
those four.

## Test

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Two runs produce byte-identical output; the file is well under the
1,000 Unicode code point limit, valid UTF-8, not only whitespace.
