import assert from "node:assert/strict";
import { classify, score } from "../src/policy.js";

const cases = [
  {
    "name": "case_1",
    "demand": 87,
    "capacity": 82,
    "latency": 23,
    "risk": 11,
    "weight": 7,
    "score": 172,
    "decision": "accept"
  },
  {
    "name": "case_2",
    "demand": 83,
    "capacity": 74,
    "latency": 19,
    "risk": 19,
    "weight": 9,
    "score": 124,
    "decision": "review"
  },
  {
    "name": "case_3",
    "demand": 96,
    "capacity": 82,
    "latency": 13,
    "risk": 24,
    "weight": 6,
    "score": 128,
    "decision": "review"
  }
];

for (const item of cases) {
  const signal = {
    demand: item.demand,
    capacity: item.capacity,
    latency: item.latency,
    risk: item.risk,
    weight: item.weight
  };
  assert.equal(score(signal), item.score);
  assert.equal(classify(signal), item.decision);
}
