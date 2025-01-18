import {
  array,
  description,
  literal,
  minLength,
  nonEmpty,
  pipe,
  strictObject,
  string,
} from "valibot";
import { athlete } from "./athlete";
import { ageGroup } from "./ageGroup";
import { evaluation } from "./evaluation";

export * from "./athlete";
export * from "./athleteResults";
export * from "./ageGroup";
export * from "./competition";
export * from "./evaluation";

export const root = strictObject({
  version: literal(1),
  externalId: pipe(
    string(),
    nonEmpty(),
    description(
      "ID within competition software; used to avoid accidentally overwriting data within Skate Results"
    )
  ),

  athletes: array(athlete),
  ageGroups: array(ageGroup),
  evaluations: pipe(
    array(evaluation),
    minLength(1),
    description('One evaluation must have id "0"')
  ),
});
