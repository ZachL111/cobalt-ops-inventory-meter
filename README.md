# cobalt-ops-inventory-meter

`cobalt-ops-inventory-meter` is a JavaScript project in automation. Its focus is to develop a JavaScript command-oriented project for inventory scenarios with append-only fixtures, checkpoint recovery checks, and no production deployment claims.

## Use Case

The project exists to keep a narrow engineering decision visible and testable. For this repo, that decision is how dry-run spread and operator cost should influence a review result.

## Cobalt Ops Inventory Meter Review Notes

`stale` and `edge` are the cases worth reading first. They show the optimistic and cautious ends of the fixture.

## Highlights

- `fixtures/domain_review.csv` adds cases for dry-run spread and rename risk.
- `metadata/domain-review.json` records the same cases in structured form.
- `config/review-profile.json` captures the read order and the two review questions.
- `examples/cobalt-ops-inventory-walkthrough.md` walks through the case spread.
- The JavaScript code includes a review path for `dry-run spread` and `operator cost`.
- `docs/field-notes.md` explains the strongest and weakest cases.

## Code Layout

The implementation keeps the scoring rule plain: reward signal and confidence, preserve slack, penalize drag, then classify the result into a review lane.

The added JavaScript path is deliberately direct, with fixtures doing most of the explaining.

## Run The Check

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/verify.ps1
```

## Regression Path

That command is also the regression path. It verifies the domain cases and catches mismatches between the CSV, metadata, and code.

## Future Work

This remains a local project with deterministic fixtures. It does not depend on credentials, hosted services, or live data. Future work should add richer malformed inputs before widening the public API.
