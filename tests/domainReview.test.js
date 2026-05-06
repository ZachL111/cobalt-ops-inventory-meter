import assert from "node:assert/strict";
import { domainReviewLane, domainReviewScore } from "../src/domainReview.js";

const item = { signal: 70, slack: 44, drag: 19, confidence: 54 };
assert.equal(domainReviewScore(item), 181);
assert.equal(domainReviewLane(item), "ship");
