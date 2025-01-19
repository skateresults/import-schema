import {
  description,
  integer,
  length,
  minValue,
  nonEmpty,
  nullable,
  number,
  pipe,
  strictObject,
  string,
} from "valibot";
import { athleteResults } from "./athleteResults.js";

export const athlete = strictObject({
  id: pipe(string(), nonEmpty()),
  bib: nullable(pipe(number(), minValue(1), integer())),
  lastName: pipe(string(), nonEmpty()),
  firstName: pipe(string(), nonEmpty()),

  club: nullable(pipe(string(), nonEmpty())),
  nation: nullable(pipe(string(), length(3), description("IOC country code"))),
  ageGroupId: nullable(pipe(string(), nonEmpty())),

  results: athleteResults,
});
