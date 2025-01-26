import {
  description,
  integer,
  length,
  literal,
  minValue,
  nonEmpty,
  nullable,
  number,
  optional,
  pipe,
  strictObject,
  string,
  tupleWithRest,
} from "valibot";
import { competitionResults } from "./competitionResults.js";
import { overallResults } from "./overallResults.js";

export const athlete = strictObject({
  id: pipe(string(), nonEmpty()),
  bib: nullable(pipe(number(), minValue(1), integer())),
  lastName: pipe(string(), nonEmpty()),
  firstName: pipe(string(), nonEmpty()),

  club: nullable(pipe(string(), nonEmpty())),
  nation: nullable(pipe(string(), length(3), description("IOC country code"))),
  ageGroupId: nullable(pipe(string(), nonEmpty())),

  evaluationIds: pipe(
    tupleWithRest([literal("0")], pipe(string(), nonEmpty())),
    description("Evaluations the athlete is ranked in")
  ),

  results: strictObject({
    overall: overallResults,
    competition: competitionResults,
  }),
});
