// src/max.ts
"use strict";
export function findMax(matrix: number[][]): number {
  let best = Number.NEGATIVE_INFINITY;
  for (const row of matrix) {
    for (const cell of row) {
      if (cell > best) best = cell;
    }
  }
  return best;
}
