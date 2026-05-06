# Cobalt Ops Inventory Meter Walkthrough

This note is the quickest way to read the extra review model in `cobalt-ops-inventory-meter`.

| Case | Focus | Score | Lane |
| --- | --- | ---: | --- |
| baseline | dry-run spread | 181 | ship |
| stress | rename risk | 186 | ship |
| edge | operator cost | 161 | ship |
| recovery | idempotence | 187 | ship |
| stale | dry-run spread | 195 | ship |

Start with `stale` and `edge`. They create the widest contrast in this repository's fixture set, which makes them better review anchors than the middle cases.

`stale` is the optimistic case; use it to make sure the scoring path still rewards strong signal.
