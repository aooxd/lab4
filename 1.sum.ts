// src/sum.ts
"use strict";
export function totalSum(...values: number[]): number {
  if (values.length === 0) return 0;
  let acc = 0;
  for (const n of values) {
    acc += n;
  }
  return acc;
}
