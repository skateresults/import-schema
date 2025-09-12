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
import { athlete } from "./athlete.js";
import { ageGroup } from "./ageGroup.js";
import { evaluation } from "./evaluation.js";

export * from "./athlete.js";
export * from "./competitionResults.js";
export * from "./overallResults.js";
export * from "./ageGroup.js";
export * from "./competition.js";
export * from "./evaluation.js";
export * from "./round.js";
export * from "./shared.js";

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
