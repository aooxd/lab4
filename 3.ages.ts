// src/ages.ts
"use strict";
type PersonRecord = { born: number; died: number };
export function calculateAges(data: Record<string, PersonRecord>): Record<string, number> {
  const result: Record<string, number> = {};
  for (const [name, info] of Object.entries(data)) {
    const { born, died } = info;
    result[name] = died - born;
  }
  return result;
}
