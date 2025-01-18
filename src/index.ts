import { array, literal, strictObject } from "valibot";
import { athlete } from "./athlete";
import { ageGroup } from "./ageGroup";

export * from "./athlete";
export * from "./ageGroup";
export * from "./competition";

export const root = strictObject({
  version: literal(1),
  athletes: array(athlete),
  ageGroups: array(ageGroup),
});
